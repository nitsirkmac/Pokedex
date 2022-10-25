// DEPENDENCIES
const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');

//Pulls environment variables into server.js from .env
require('dotenv').config();
const PORT = process.env.PORT

// DATABASE CONNECTION


// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// I N D U C E S

// INDEX
app.get('/', (req, res) => {
    // res.send("This route is stupid")
    res.render('index.ejs', { 
        data: Pokemon 
    });
})

// NEW
app.get("/new", (req, res) => {
    res.render("new.ejs")
})

// DELETE
app.delete("/:id", (req, res) => {
    res.send("Destroy")
})

// UPDATE
app.put("/:id", (req, res) => {
    res.send("Update")
})

// CREATE
app.post("/", (req, res) => {
    Pokemon.push(req.body)
    res.redirect("/")
})

// EDIT
app.get("/:id/edit", (req, res) => {
    res.render("edit.ejs")
})

// SHOW
app.get('/:id', (req, res) => {
    // res.send("Show Page")
    res.render('show.ejs', {
        data: Pokemon[req.params.id] })
    })


// LISTENER
app.listen(PORT, (req, res) => {
    console.log("Gotta catch 'em all!!!")
})