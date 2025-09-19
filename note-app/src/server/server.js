import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { getTodos, addTodo, getTodosById } from "../models/todo.js";
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
dotenv.config();

const port = process.env.SERVER_PORT;


app.get('/', (req, res) => {
    res.send("running servvers good 👍")
});

//endpoints to the pages
app.get("/index", async (req, res) => {
    const todos = await getTodos();
    res.render("index.ejs", { todos })
});


app.get("/addtodos", async (req, res) => {
    res.render("addtodos.ejs")
});




app.get("/getTodoById", async (req, res) => {
    const toDoId = req.query.id
    const toDo = await getTodosById(toDoId);
    try {
        const toDo = await getTodosById(toDoId);
        if (!toDo == []) {
            res.render("singleTodo.ejs", { toDo });
        } else {
            throw error
        }
    } catch (error) {
        const todos = await getTodos();
        res.render("index.ejs", { todos })
    }


});

//post request

app.post("/addtodo", async (req, res) => {
    const data = req.body;
    const anser = await addTodo(data)

    if (anser) {
        res.redirect("/index")
    } else {
        res.render("./components/addedfaild.ejs")
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});