const fs = require("fs");
const path = require("path");

// LOAD DATA
const notesDb = require("../db/db.json");
console.log("notesdb", notesDb);

// ROUTING

module.exports = function (app) {
    // API GET Requests
    // ----------------------------------------
    app.get("/api/notes", function (req, res) {
        res.json(notesDb);
       // console.log("Get:", notesDb);
    });

    // API POST Requests
    // ----------------------------------------
    // Post to api/db
    app.post("/api/notes", function (req, res) {
        // Create array to store notes from db + new note
        let notesArr = [];
        let newId = 0;
        const db = "./db/db.json";
        // Current notes
        let readDb = fs.readFileSync(db, "utf8", (err, data) => {
            if (err) {
                return console.log(err);
            }
            console.log("readDb", data);
        });
        readDb = JSON.parse(readDb);
        console.log("readDb", readDb);
        // If there are notes, add them to the arr
        if (readDb.length > 0) {
            notesArr = readDb;
        }
        console.log("NotesArr", notesArr);
        // Create new note
        const newNote = {
            "id": notesArr.length + 1,
            "title": req.body.title,
            "text": req.body.text
        }
        

        notesArr.push(newNote);
        fs.writeFile(db, JSON.stringify(notesArr), () => {
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
