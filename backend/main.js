const express = require('express');
require('./connection/db')
const Cors = require('cors')
const Product = require('./model/products_model')
const User = require('./model/user_model')
const app = express();

app.use(express.json())
app.use(Cors())
const port = process.env.PORT || 3000;




app.get('/data', async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.send(products)
})

app.get('/keyboards', async (req, res) => {
    try {
        const keyboards = await Product.find({
            type: 'keyboard'
        })
        if (keyboards.length !== 0) {
            res.send(keyboards)
        }
    } catch (e) {
        res.send(e)
    }
})

//USERS ROUTES-------------------------------------------------------

app.post('/users', async (req, res) => {
    const user = new User({
        email: req.query.email,
        password: req.query.password
    });
    try {
        await user.save()
        console.log(user)

    } catch (e) {
        console.log(e)
    }


})


app.listen(port, () => {
    console.log('Listening for requests...')
})

//hello
//fdsfsdfsdf