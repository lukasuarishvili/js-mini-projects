import dotenv from "dotenv";
import { pool } from './conection.js'
dotenv.config();



export async function getTodos() {
    const [rows] = await pool.query("SELECT * FROM  todos")
    console.log(rows)
    return (rows)
}


export async function addTodo(info) {
    //this addes the to do tj the database
    pool.query('INSERT INTO todos(TITLE, NOTE) ?  ')

}

export async function getTodosById(id) {

}