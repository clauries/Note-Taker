# To-Do List
## Routes
* Create two routes folders
    * App routes
        * GET `/notes` - Should return the `notes.html` file.
        * GET `*` - Should return the `index.html` file
    * API routes
        * The application has a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.
        * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
        * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
        * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete.
            * Find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

* Add correct routes to the html docs
    * index to notes
    * save
    * add

# Saved Notes
* Add place for saved notes to be displayed on side of notes page

* Add code for when a saved note is clicked it opens to the side. Using the Get route AJAX

* Bonus 

# Saving Notes
* Need a post method to post to server using the post route - Ajax
* Save to journal.json
* Your code should work such that POST requests take in JSON objects, checks if there is any space left, then adds the JSON object to either the reservation array or the waitlist array. Your POST route should also respond to requests with a confirmation (true or false) of whether or not the requestor has a reservation (or is on the waiting list).
* You should be using Postman to do all your testing at this point.

# Other
* Create server.js

# Bonus Tasks
* Add an edit button where someone could edit the note

* Add a task list feature where someone could create a list and then "check off" tasks on that list.

* Add code to your server so that it "counts" every time a person visits any of the pages. Display a running count on the website.

* Add a button for sending emails of a note. You will need to use node-mailer or a similar npm package to make this work.

* Add a button for sending text messages with notes. You will need to use the Twilio library to make this work.



# Development Phases

## Initial Instructions

Spend the time necessary to map this application out. Consider the concepts we've covered in class so far:

* Servers
* Routing
* APIs
* AJAX (GET and POST Requests)

You should be referencing the code from the previous Star Wars & Hot Restaurant applications.

---------------------


## Phase I - For this first phase, aim to write out the pieces that will need to be programmed to create the functionality of your application. Try to break it into 6-7 pieces

## Create the front-end (visuals) for home page, reservation form, and reservation views.

* Create a basic server using Express.JS

* Create a few array variables that will hold the data

* Create a set of routes for getting and posting notes data

## Create a set of routes for displaying the HTML pages

* Use jQuery to run AJAX calls to GET and POST data from users to the Express server

---------------------


## Phase II - For this second phase, aim to complete the following

* Backend Team:

Create a basic Express server.

Your server at this point should do the BARE MINIMUM. (Effectively, it should just say: "Listening at PORT 3000" when the command node server.js is run.)

* Frontend Team:

Explore the provided html pages - what functionality is still needed? See above pseudocoding.

---------------------


## Phase III - For this third phase, aim to complete the following

* Backend Team:

Create a variables (hint: arrays of objects) for holding the notes data - look at the journal.json file.

Create a set of routes that then display this data as JSONs. Users should be given these JSONs if they visit the appropriate page (i.e. if a user visits localhost:3000/api/notes they should see a JSON of notes data).

* Frontend Team:

Temporarily join the backend team. Your task will be to create Express routes that display your HTML pages when a user visits the appropriate page. (i.e. if a user visits localhost:3000/notes... they should be shown the notes.html page.)

If you finish early begin creating the code necessary to convert your form data into JSON objects.

---------------------


## Phase IV - For this fourth phase, aim to complete the following

* Backend Team:

Create the logic that handles adding notes. Your code should work such that POST requests take in JSON objects from the form, checks if there is any space left, then adds the JSON object to the notes array. Your POST route should also respond to requests with a confirmation (true or false) of whether or not the notes were saved.

You should be using Postman to do all your testing at this point.

* Frontend Team:

Begin to do serious research on AJAX. Specifically, focus your attention on how AJAX can be used to do both GET and POST requests.

Then create the necessary code on your notes.html page such that it can retrieve data from the Backend Team's API. In essence you will be creating an AJAX GET request to retrieve the data.

Then create the necessary code on your notes.html page such that it can send data to the Backend Team's API. In essence you will be creating an AJAX POST request to send the data.


---------------------


## Phase V - For the fifth and final phase, aim to complete the following

All:
Complete any remaining functionality from the previous phase if you need more time.

Then, thoroughly test your application for bugs. Check if there are any obvious ways to crash the application.

