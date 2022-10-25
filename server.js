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
    res.send("New Pokemon")
})

// DELETE
app.delete("/pokemon/:id", (req, res) => {
    res.send("Destroy")
})

// UPDATE
app.put("/pokemon/:id", (req, res) => {
    res.send("Update")
})

// CREATE
app.post("/pokemon", (req, res) => {
    res.send("Create")
})

// EDIT
app.get("/:id/edit", (req, res) => {
    res.send("Edit Pokemon")
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