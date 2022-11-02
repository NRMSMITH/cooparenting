const express = require('express');
const { postUser } = require('./controllers/users.controller');
const app = express();
const supabase = require("./supabaseClient");

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({msg:'welcome to cooparenting'})
})

app.post('/api/user', postUser)

app.use((err, req, res, next) => {
    console.log(err)
    res.statusSend(500)
})



module.exports = app;