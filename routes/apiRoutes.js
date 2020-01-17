// LOAD DATA
const notesDB = require("../db/db.json");

// ROUTING

module.exports = function (app) {
    // API GET Requests
    // ----------------------------------------
    app.get("/api/notes", function (req, res) {
        res.json(notesDB);
    });

    // API POST Requests
    // ----------------------------------------
    // Post to api/db
    app.post("/api/notes", function (req, res) {
        notesDB.push(req.body);
        res.json(true);
    });

    // Delete specific note - will need to check this.....
    app.post("/api/notes", function (req, res) {
        notesDB.splice(req, 1);
        res.json(true);
    });

    // Clear all posts
    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        notesDB.length = 0;
        res.json({ ok: true });
    });
};
