// LOAD DATA
const journal = require("../journal.json");

// ROUTING

module.exports = function (app) {
    // API GET Requests
    // ----------------------------------------
    app.get("/api/notes", function (req, res) {
        res.json(journal);
    });

    // API POST Requests
    // ----------------------------------------
    // Post to api/db
    app.post("/api/notes", function (req, res) {
        journal.push(req.body);
        res.json(true);
    });

    // Delete specific note - will need to check this.....
    app.post("/api/notes", function (req, res) {
        journal.splice(req, 1);
        res.json(true);
    });

    // Clear all posts
    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        journal.length = 0;
        res.json({ ok: true });
    });
};
