const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const connectDB = require('./config/db')
const User = require('./model/userSchema')
const PORT = process.env.PORT || 5000

//middleware
connectDB()
app.use(express.json())
app.use(cors())

app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ name: user.name, email: user.email })
    } catch (error) {
        console.log(error);
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (user) {
        const token = jwt.sign({
            name: user.name,
            email: user.email
        }, process.env.SECRET)

        return res.json({ status: 'ok', user: token })

    }
    else return res.json({ status: 'error', user: false })

})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})