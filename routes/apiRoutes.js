const fs = require("fs");
const path = require("path");

// LOAD DATA
const notesDb = require("../db/db.json");

// ROUTING

module.exports = function (app) {
    // API GET Requests
    // ----------------------------------------
    app.get("/api/notes", function (req, res) {
        res.json(notesDb);
    });

    // API POST Requests
    // ----------------------------------------
    // Post to api/db
    app.post("/api/notes", function (req, res) {
        // Create array to store notes from db + new note
        const db = "./db/db.json";

        const newNote = {
            "id": notesDb.length + 1,
            "title": req.body.title,
            "text": req.body.text
        }
        
        notesDb.push(newNote);
        fs.writeFile(db, JSON.stringify(notesDb), () => {
        console.log("There's a new note!");
        });
        res.json(newNote);
    });

    // Delete specific note - will need to check this.....
    // app.post("/api/notes/remove", function (req, res) {
    //     notesDb.splice(req, 1);
    //     res.json(true);
    //     res.json(notesDb);
    // });

    // Clear all posts
//     app.post("/api/clear", function (req, res) {
//         // Empty out the arrays of data
//         notesDb.length = 0;
//         res.json({ ok: true });
//         res.json(notesDb);
//     });
};
