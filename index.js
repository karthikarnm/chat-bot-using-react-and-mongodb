const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Chat = require('./models/MessageSchema')
const Que = require('./models/Que')
const User = require('./models/registerUsers')
const jwt = require('jsonwebtoken')
// jwt can allow the token which tells that user is legal



mongoose.connect('mongodb+srv://karthi_dotglasses:karthi5@cluster0.gbfw8p1.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log("DATABASE CONNECTED")
})


app.use(cors())
app.use(express.json())




app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Number: req.body.Number,
            Password: req.body.Password,
            ConfirmPassword: req.body.ConfirmPassword
        })
        res.json({ status: 'ok' })
        console.log("DATA INSERTED")
    }
    catch (err) {
        console.log(err)
        console.log("DATA NOT INSERTED")
        res.json({ status: 'err', error: 'Duplicate Data' })
    }
})
app.get('/api/register', (req, res) => {

    Chat.find({}).then(
        items => res.json(items)
    ).catch(err => console.log(err))

});


app.post('/api/login', async (req, res) => {


    const user = await User.findOne({

        Email: req.body.Email,
        Password: req.body.Password

    })

    if (user) {
        const token = jwt.sign(
            {
                Password:user.Email,
                Email: user.Email,
            }, 'secret123'
        )
        return res.json({ status: 'ok', user: token })
    }
    else {
        return res.json({ status: 'error', user: false })
    }
});

app.get('/api/login', (req, res) => {

    Chat.find({}).then(
        items => res.json(items)
    ).catch(err => console.log(err))

})
app.post('/api/chat', async (req, res) => {
    console.log(req.body)
    try {
        const user = await Chat.create({
            Msg: req.body.Msg
        })
        res.json({ status: 'ok' })
        console.log("MESSAGE SENT")
    }
    catch (err) {
        console.log("MESSAGE NOT SENT")
        res.json({ status: 'err', error: 'Duplicate Data' })
    }
})


app.get('/api/chat', (req, res) => {

    Chat.find({}).then(
        items => res.json(items)
    ).catch(err => console.log(err))

});


app.post('/api/Que', async (req, res) => {
    console.log(req.body)
    try {
        const user = await Que.create({
            Que: req.body.Que
        })

        res.json({ status: 'ok' })


    }
    catch (err) {

        res.json({ status: 'err', error: 'Duplicate Data' })
    }
})

app.get('/api/Que', (req, res) => {

    Que.find({}).then(
        items => res.json(items)
    ).catch(err => console.log(err))

});



app.listen(8000, () => {
    console.log("SERVER STARTED")
})
