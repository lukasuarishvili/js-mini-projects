
import dotenv from "dotenv";
import { pool } from './conection.js'
dotenv.config();



export async function getTodos() {
    const [rows] = await pool.query("SELECT * FROM  todos")
    console.log(rows)
    return (rows)
}


export async function addTodo(info) {
    
}

export async function getTodosById(id) {
    
}