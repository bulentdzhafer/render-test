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
        <h2>Bettermode JWT Test</h2>

        <a href="/login">
            Login with JWT
        </a>
    `);

});

app.get("/login", (req, res) => {

    const payload = {

        sub: "test-user",

        email: "test@example.com",

        name: "JWT Test User"

    };

    const token = jwt.sign(payload, SECRET, {

        algorithm: "HS256",

        expiresIn: "5m"

    });

    const redirect =
        "/post-type-test-tdbucnje?layout=basic";

    const url =
        `${COMMUNITY}/api/auth/sso` +
        `?jwt=${encodeURIComponent(token)}` +
        `&redirect_uri=${encodeURIComponent(redirect)}`;

    console.log(url);

    res.redirect(url);

});

app.listen(PORT, () => {

    console.log("Running on port " + PORT);

});
