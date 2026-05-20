const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

const USERS_FILE = path.join(
    __dirname,
    "data",
    "users.json"
);

function getUsers() {

    if (!fs.existsSync(USERS_FILE)) {

        fs.writeFileSync(
            USERS_FILE,
            "[]"
        );
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



app.get("/users", (req, res) => {

    const users = getUsers();

    res.json(users);
});



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

        password,

        orders: []
    };

    users.push(newUser);

    saveUsers(users);

    res.json({

        success: true,

        user: newUser
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



app.post("/checkout", (req, res) => {

    const {
        userId,
        cart
    } = req.body;

    if (!userId || !cart || cart.length === 0) {

        return res.status(400).json({
            message: "Cart is empty"
        });
    }

    const users = getUsers();

    const user = users.find(
        user => user.id === userId
    );

    if (!user) {

        return res.status(404).json({
            message: "User not found"
        });
    }

    const subtotal = cart.reduce((sum, item) => {

        const price = parseFloat(
            item.price.replace(/[^\d.]/g, "")
        );

        return sum + price;

    }, 0);

    const shipping =
        subtotal >= 250 ? 0 : 25;

    const total = subtotal + shipping;

    const newOrder = {

        id: Date.now(),

        items: cart,

        subtotal,

        shipping,

        total,

        createdAt: new Date().toISOString()
    };

    if (!user.orders) {
        user.orders = [];
    }

    user.orders.push(newOrder);

    saveUsers(users);

    res.json({

        success: true,

        order: newOrder
    });
});



app.use(express.static(__dirname));



app.listen(3000, () => {

    console.log(
        "Server running on http://localhost:3000"
    );
});