const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

const USERS_FILE = path.join(
    __dirname,
    "data",
    "users.json"
);

function getUsers() {

    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, "[]");
    }

    const data = fs.readFileSync(
        USERS_FILE,
        "utf8"
    );

    return JSON.parse(data);
}

function saveUsers(users) {

    fs.writeFileSync(
        USERS_FILE,
        JSON.stringify(users, null, 2)
    );
}

app.post("/register", (req, res) => {

    const {
        name,
        email,
        password
    } = req.body;

    if (!name || !email || !password) {

        return res.status(400).json({
            message: "Fill all fields"
        });
    }

    if (password.length < 8) {

        return res.status(400).json({
            message:
                "Password must be at least 8 characters"
        });
    }

    const users = getUsers();

    const existingUser = users.find(
        user => user.email === email
    );

    if (existingUser) {

        return res.status(400).json({
            message: "User already exists"
        });
    }

    const newUser = {

        id: Date.now(),

        name,

        email,

        password
    };

    users.push(newUser);

    saveUsers(users);

    res.json({
        success: true
    });
});

app.post("/login", (req, res) => {

    const {
        email,
        password
    } = req.body;

    const users = getUsers();

    const user = users.find(
        user =>
            user.email === email &&
            user.password === password
    );

    if (!user) {

        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    res.json(user);
});

app.listen(3000, () => {

    console.log(
        "Server running on http://localhost:3000"
    );
});