const express = require('express')
const app = express()
const port = 9999;

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kals_main:453649as@boiler-plate.lpnw2.mongodb.net/boiler-plate?retryWrites=true&w=majority',
                {useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
                .then(()=>console.log('connect... mongoDB'))
                


app.get('/', (req,res) => res.send('Hello world!'))

app.listen(port, () => console.log('Example App listening on port ',port))

