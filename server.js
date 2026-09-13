import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// ==========================================
// CHECK ENVIRONMENT VARIABLES
// ==========================================

if (!process.env.GITHUB_CLIENT_ID) {
    console.error("Missing GITHUB_CLIENT_ID in .env");
    process.exit(1);
}

if (!process.env.GITHUB_CLIENT_SECRET) {
    console.error("Missing GITHUB_CLIENT_SECRET in .env");
    process.exit(1);
}

if (!process.env.SESSION_SECRET) {
    console.error("Missing SESSION_SECRET in .env");
    process.exit(1);
}


// ==========================================
// EXPRESS
// ==========================================

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


// ==========================================
// SESSION
// ==========================================

app.use(
    session({
        secret: process.env.SESSION_SECRET,

        resave: false,

        saveUninitialized: false,

        cookie: {
            httpOnly: true,

            // Use "lax" so the OAuth redirect
            // can return to our site normally.
            sameSite: "lax",

            secure:
                process.env.NODE_ENV === "production",

            maxAge:
                1000 *
                60 *
                60 *
                24 *
                7
        }
    })
);


// ==========================================
// STATIC WEBSITE
// ==========================================

// This assumes your index.html, style.css,
// script.js, etc. are in the same folder
// as server.js.

app.use(
    express.static(path.join(__dirname, ".."))
);


// ==========================================
// GITHUB LOGIN
// ==========================================

app.get(
    "/auth/github",
    (req, res) => {

        // Create a random state value.
        // This helps prevent forged OAuth requests.

        const state =
            crypto.randomBytes(32)
                .toString("hex");


        req.session.githubOAuthState =
            state;


        const params =
            new URLSearchParams({

                client_id:
                    process.env.GITHUB_CLIENT_ID,

                redirect_uri:
                    process.env.GITHUB_CALLBACK_URL,

                state,

                scope: "read:user"
            });


        const githubURL =
            `https://github.com/login/oauth/authorize?${params.toString()}`;


        res.redirect(
            githubURL
        );
    }
);


// ==========================================
// GITHUB CALLBACK
// ==========================================

app.get(
    "/auth/github/callback",
    async (req, res) => {

        try {

            const {
                code,
                state,
                error
            } = req.query;


            // User cancelled authorization.

            if (error) {

                return res.redirect(
                    "/?login=cancelled"
                );
            }


            // Make sure we received everything.

            if (
                !code ||
                !state
            ) {

                return res.status(400).send(
                    "Missing GitHub OAuth information."
                );
            }


            // Check OAuth state.

            if (
                state !==
                req.session.githubOAuthState
            ) {

                return res.status(403).send(
                    "Invalid OAuth state."
                );
            }


            // State is single-use.

            delete req.session.githubOAuthState;


            // ==================================
            // EXCHANGE CODE FOR ACCESS TOKEN
            // ==================================

            const tokenResponse =
                await fetch(
                    "https://github.com/login/oauth/access_token",
                    {
                        method: "POST",

                        headers: {
                            "Accept":
                                "application/json",

                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({

                            client_id:
                                process.env.GITHUB_CLIENT_ID,

                            client_secret:
                                process.env.GITHUB_CLIENT_SECRET,

                            code,

                            redirect_uri:
                                process.env.GITHUB_CALLBACK_URL
                        })
                    }
                );


            const tokenData =
                await tokenResponse.json();


            if (
                !tokenData.access_token
            ) {

                console.error(
                    "GitHub token error:",
                    tokenData
                );


                return res.status(500).send(
                    "GitHub login failed while getting an access token."
                );
            }


            // ==================================
            // GET GITHUB USER
            // ==================================

            const userResponse =
                await fetch(
                    "https://api.github.com/user",
                    {
                        headers: {

                            "Accept":
                                "application/vnd.github+json",

                            "Authorization":
                                `Bearer ${tokenData.access_token}`,

                            "X-GitHub-Api-Version":
                                "2026-03-10"
                        }
                    }
                );


            if (
                !userResponse.ok
            ) {

                console.error(
                    "GitHub user request failed:",
                    userResponse.status
                );


                return res.status(500).send(
                    "Could not retrieve your GitHub account."
                );
            }


            const githubUser =
                await userResponse.json();


            // ==================================
            // SAVE USER IN SESSION
            // ==================================

            req.session.githubUser = {

                id:
                    githubUser.id,

                login:
                    githubUser.login,

                name:
                    githubUser.name,

                avatar_url:
                    githubUser.avatar_url
            };


            // IMPORTANT:
            //
            // We do NOT need to store the GitHub
            // access token in the browser.
            //
            // The session only stores the identity
            // information needed by RNGana.


            res.redirect(
                "/?login=success"
            );

        } catch (error) {

            console.error(
                "GitHub OAuth error:",
                error
            );


            res.status(500).send(
                "Something went wrong during GitHub login."
            );
        }
    }
);


// ==========================================
// CURRENT USER
// ==========================================

app.get(
    "/api/me",
    (req, res) => {

        if (
            !req.session.githubUser
        ) {

            return res.json({

                loggedIn: false
            });
        }


        const user =
            req.session.githubUser;


        res.json({

            loggedIn: true,

            user: {

                id:
                    user.id,

                login:
                    user.login,

                name:
                    user.name,

                avatar_url:
                    user.avatar_url
            }
        });
    }
);


// ==========================================
// LOGOUT
// ==========================================

app.get(
    "/auth/logout",
    (req, res) => {

        req.session.destroy(
            error => {

                if (error) {

                    console.error(
                        "Logout error:",
                        error
                    );

                    return res.status(500).send(
                        "Could not log out."
                    );
                }


                res.clearCookie(
                    "connect.sid"
                );


                res.redirect(
                    "/"
                );
            }
        );
    }
);


// ==========================================
// START SERVER
// ==========================================

app.get("/test", (req, res) => {
    res.send("RNGana Express server is working!");
});

app.get("/test", (req, res) => {
    res.send("EXPRESS IS WORKING");
});

app.get("/", (req, res) => {
    res.sendFile(
        "/workspaces/japanese-characters-rng/index.html"
    );
});

app.listen(
    PORT,
    () => {

        console.log(
            `RNGana server running at http://localhost:${PORT}`
        );
    }
);