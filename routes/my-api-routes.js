// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    // GET route for getting spending per category
    app.get("/api/spending/currentMonth", function (req, res) {
        // findAll returns all entries for a table when used with no options
        //db.Todo.findAll({}).then(function(dbTodo) {
        // We have access to the todos as an argument inside of the callback function
        res.json([{ cat: "Travel", amt: 2478 }, { cat: "Merchandise", amt: 5267 }, { cat: "Entertainment", amt: 9734 }, { cat: "Utilities", amt: 1500 }, { cat: "Other", amt: 1784 }]);
    });

    // GET route for getting income vs expenditure
    app.get("/api/incmExp/currentMonth", function (req, res) {
        res.json([{ income: 3000, expense: 1478, month: "Jun" }]);
    });

    app.get("/api/spending/last", function (req, res) {
        // findAll returns all entries for a table when used with no options
        //db.Todo.findAll({}).then(function(dbTodo) {
        // We have access to the todos as an argument inside of the callback function
        res.json([{ cat: "Travel", amt: 2478 }, { cat: "Merchandise", amt: 5267 }, { cat: "Entertainment", amt: 9734 }, { cat: "Utilities", amt: 1500 }, { cat: "Other", amt: 1784 }]);
    });

    // GET route for getting income vs expenditure
    app.get("/api/incmExp/last", function (req, res) {
        res.json([{ income: 6000, expense: 1784, month: "May" }]);
    });

    app.get("/api/spending/lastThree", function (req, res) {
        // findAll returns all entries for a table when used with no options
        //db.Todo.findAll({}).then(function(dbTodo) {
        // We have access to the todos as an argument inside of the callback function
        res.json([{ cat: "Travel", amt: 2478 }, { cat: "Merchandise", amt: 5267 }, { cat: "Entertainment", amt: 9734 }, { cat: "Utilities", amt: 1500 }, { cat: "Other", amt: 1784 }]);
    });

    // GET route for getting income vs expenditure
    app.get("/api/incmExp/lastThree", function (req, res) {
        res.json([{ income: 3000, expense: 6734, month: "Mar" }, { income: 8000, expense: 5500, month: "Apr" }, { income: 6000, expense: 1784, month: "May" }]);
    });

    app.get("/api/spending/ytd", function (req, res) {
        // findAll returns all entries for a table when used with no options
        //db.Todo.findAll({}).then(function(dbTodo) {
        // We have access to the todos as an argument inside of the callback function
        res.json([{ cat: "Travel", amt: 2478 }, { cat: "Merchandise", amt: 5267 }, { cat: "Entertainment", amt: 9734 }, { cat: "Utilities", amt: 1500 }, { cat: "Other", amt: 1784 }]);
    });

    // GET route for getting income vs expenditure
    app.get("/api/incmExp/ytd", function (req, res) {
        res.json([{ income: 5000, expense: 2478, month: "Jan" }, { income: 7000, expense: 5267, month: "Feb" }, { income: 3000, expense: 6734, month: "Mar" }, { income: 8000, expense: 5500, month: "Apr" }, { income: 6000, expense: 1784, month: "May" }]);
    });
};









