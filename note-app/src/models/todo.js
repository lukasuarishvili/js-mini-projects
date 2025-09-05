import mysql from "mysql2";
import dotenv from "dotenv";
import { pool } from './conection.js'
dotenv.config();



export async function getTodos() {
    const [rows] = await pool.query("SELECT * FROM  todos")
    console.log(rows)
    return (rows)
}

getTodos()