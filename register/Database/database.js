import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
//CREATING CONECTION TO THE LOCALL DATABASE
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}).promise();


//GETING ALL USER S
export async function getUsers() {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
}

// ADDING USER
export async function addUser(user) {
    const {name, surname, email, password} = user;
    
    await pool.execute(
        'INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)',
        [name, surname, email, password]
    );
    return "added user to the db";
}

// CHECKING DUPLICATE USERS BY EMAIL
export async function checkDuplicateUser(email) {
    // 
    const [rows] = await pool.query(
        'SELECT COUNT(*) AS count FROM users WHERE email = ?',
        [email]
    );

    // THE COUNT IS KEY OBJ OF WHAT SQL RETURNS CONTEINING 
    const count = rows[0].count;

    // RETURN BOOLIAN
    return count > 0;
}