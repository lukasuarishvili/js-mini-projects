const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
app.set("view engine", "ejs")


app.get('/', (req, res) => {
    res.send("running servvers good 👍")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

let users=[
    {
        id:1,
        name:"data",
        surname:"tutashxia"
    },
    {
        id:2,
        name:"arzen",
        surname:"muskia"
    }
]

app.get("/Main", (req, res)=> {
    res.render("index.ejs",{
        users
    })
})