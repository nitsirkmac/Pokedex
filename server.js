// DEPENDENCIES
const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');
const methodOverride = require("method-override");

//Pulls environment variables into server.js from .env
require('dotenv').config();
const PORT = process.env.PORT

// DATABASE CONNECTION


// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(express.static('public'))

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
    Pokemon.splice(req.params.id, 1);
    res.redirect("/")
})

// UPDATE
app.put("/:id", (req, res) => {
    Pokemon[req.params.id] = req.body
    res.redirect("/")
})

// CREATE
app.post("/", (req, res) => {
    let stats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed,
    }
    let createdPokemon = {
        name: req.body.name,
        type: req.body.type,
        img: req.body.img,
        stats: stats,
    }
    Pokemon.push(createdPokemon)
    res.redirect("/")
})

// EDIT
app.get("/:id/edit", (req, res) => {
    let stats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed,
    }
    let updatedPokemon = {
        name: req.body.name,
        type: req.body.type,
        img: req.body.img,
        stats: stats,
    }
    res.render("edit.ejs", {
        updatedPokemon: Pokemon[req.params.id],
        index: req.params.id
    })
})

// SHOW
app.get('/:id', (req, res) => {
    // res.send("Show Page")
    res.render('show.ejs', {
        data: Pokemon[req.params.id],
        index: req.params.id
    })
})



// LISTENER
app.listen(PORT, (req, res) => {
    console.log("Gotta catch 'em all!!!")
})