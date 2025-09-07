import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { addUser, checkDuplicateUser, getUsers } from '../Database/database.js';


const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();


const PORT = process.env.SERVER_PORT || 3000;



app.get('/', (req, res) => {
    res.send('it working');
});

//ENDPOINT  TO ALL USERS
app.get('/users', async (req, res) => {
    const users = await getUsers();
    res.send(users);
});


//  ENDPOINT TO SEARCH USER DUPLICATES  (by email)
app.post('/checkDuplicateUser', async (req, res) => {
    // THE  CLIENTS EMAIL  IS SEND IN THE REQ BODY 
    const email = req.body.email;

    try {
        const isDuplicate = await checkDuplicateUser(email);
        // SEND JSON RESPONSE
        res.json({ isDuplicate });
    } catch (error) {
        console.error("Error checking for duplicate user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ENDPOINT TO ADDING USER 
app.post('/addUser', async (req, res) => {
    try {
        //ADDING USER
        await addUser(req.body);
        res.status(201).json({ message: "User added successfully" }); 
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//WHAT PORT THE SERVER IS LISTINING ON
app.listen(PORT, () => {
    console.log(`Example app listening on ${port}`);
});

