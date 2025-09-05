import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { getTodos } from "../models/todo.js";
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
dotenv.config();

const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
    res.send("running servvers good 👍")
});



app.get("/Dashboard", async(req, res) => {
    
    res.render("Dashboard.ejs" )
});

app.get("/Main", (req, res) => {
    res.render("Testing.ejs")
});

app.get("/todos" , async (req,res) => {
    const todos =await getTodos();
    res.render("todos.ejs", {todos})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});