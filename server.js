import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 10000;

const COMMUNITY =
  "https://byulent-s-community-6ny0g9ig.bettermode.io";

const SECRET = process.env.JWT_SECRET;

app.get("/", (req, res) => {

    res.send(`
        <h2>Bettermode JWT Iframe Test</h2>

        <p>
            <a href="/iframe">
                Open BetterMode inside iframe
            </a>
        </p>

        <p>
            <a href="/login">
                Open BetterMode directly
            </a>
        </p>
    `);

});

function createJwtUrl() {

    const payload = {

        sub: "jwt-test-user",

        email: "test@example.com",

        name: "JWT Test User"

    };

    const token = jwt.sign(payload, SECRET, {

        algorithm: "HS256",

        expiresIn: "5m"

    });

   const redirect =
"/post-type-test-tdbucnje?layout=basic";

    return `${COMMUNITY}/api/auth/sso?jwt=${encodeURIComponent(token)}&redirect_uri=${encodeURIComponent(redirect)}`;

}

app.get("/login", (req, res) => {

    res.redirect(createJwtUrl());

});

app.get("/iframe", (req, res) => {

    const url = createJwtUrl();

    res.send(`
<!doctype html>
<html>

<head>

<meta charset="utf-8">

<title>JWT iframe test</title>

<style>

html,body{

margin:0;

height:100%;

}

iframe{

width:100%;

height:100%;

border:0;

}

</style>

</head>

<body>

<iframe

src="${url}"

allow="clipboard-read; clipboard-write"

></iframe>

</body>

</html>
`);

});

app.listen(PORT, () => {

    console.log("Running on port " + PORT);

});
