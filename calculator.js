const express = require("express");
const res = require("express/lib/response");
const { parse } = require("path");
const app = express();

// Addition 
const add = (num1, num2) => {
    return num1 + num2;
}

app.get("/addition", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if (isNaN(num1)) {
            throw new Error("num1 is incorrectly defined");
        }

        if (isNaN(num2)) {
            throw new Error("num2 is incorrectly defined");
        }

        const result = add(num1, num2);
        res.send(num1 + " + " + num2 + " = " + result);
    } catch (error) {
        console.error(error);
        res.status(501).json({statuscode: 500, msg: error.toString()});
    }
})

// Subtraction 
const subtract = (num1, num2) => {
    return num1 - num2;
}

app.get("/subtraction", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if (isNaN(num1)) {
            throw new Error("num1 is incorrectly defined");
        }

        if (isNaN(num2)) {
            throw new Error("num2 is incorrectly defined");
        }

        const result = subtract(num1, num2);
        res.send(num1 + " - " + num2 + " = " + result);
    } catch (error) {
        console.log(error);
        res.status(501).json({statuscode: 500, msg: error.toString()});
    }
})

// Multiplication 
const multiply = (num1, num2) => {
    return num1 * num2;
}

app.get("/multiplication", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if (isNaN(num1)) {
            throw new Error("num1 is incorrectly defined");
        }

        if (isNaN(num2)) {
            throw new Error("num2 is incorrectly defined");
        }

        const result = multiply(num1, num2);
        res.send(num1 + " * " + num2 + " = " + result);
    } catch (error) {
        console.log(error);
        res.status(501).json({statuscode: 500, msg: error.toString()});
    }
})

// Division
const divide = (num1, num2) => {
    return num1 / num2;
}

app.get("/division", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if (isNaN(num1)) {
            throw new Error("num1 is incorrectly defined");
        }

        if (isNaN(num2)) {
            throw new Error("num2 is incorrectly defined");
        }

        const result = divide(num1, num2);
        res.send(num1 + " / " + num2 + " = " + result);
    } catch (error) {
        console.log(error);
        res.status(501).json({statuscode: 500, msg: error.toString()});
    }
})

const port = 3030;

app.listen(port, () => {
    console.log("Server is listening on port " + port);
})
