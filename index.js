const express = require('express')

const app = express()

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, name: 'lohith', email: 'viperlohith121@gmail.com'},
        {id: 2, name: 'virat', email: 'lohith121@gmail.com'},
        {id: 3, name: 'sanjay', email: 'viper@gmail.com'},
    ]
    res.json(customers)
}) 


app.listen(5000, () => {
    console.log('app running on 5000 port')
})