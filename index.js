const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

let db =[
    {'1':{Name:'Cliente 1', Idade:'20'}},
    {'2':{Name:'Cliente 2', Idade:'20'}},
    {'3':{Name:'Cliente 3', Idade:'20'}},
    {'4':{Name:'Cliente 4', Idade:'20'}},
]

app.listen(21262, () => {
    console.log('Express started at http://localhost:21262')
})