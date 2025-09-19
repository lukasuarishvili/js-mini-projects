import dotenv from "dotenv";
import { pool } from './conection.js'
dotenv.config();



export async function getTodos() {
    const [rows] = await pool.query("SELECT * FROM  todos")

    return (rows)
}


export async function addTodo(info) {
    //this addes the todos to the database
    try {
        const { title, todo } = info
        pool.execute('INSERT INTO todos(TITLE, NOTE) Values (?,?) ',
            [title, todo ]
        )
        return true
    } catch (error) {
        return false
    }

}


export async function getTodosById(id) {
    try {
        const [rows] = await pool.execute(
            'SELECT * FROM todos WHERE id = ?',
            [id]
        );
        return rows[0];
    } catch (error) {
        console.error(error);
        return false;
    }
}
