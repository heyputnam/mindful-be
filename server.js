
//npm i morgan, express, dotenv, cors, nodemon, mongoose


const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const app = express();
require('dotenv').config();
require('./config/database')

//mount middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//mount routes with app.use

app.use('/api/meds', require('./routes/api/meds'))

//tell port where to listen 

const port = process.env.PORT || 3001;

app.listen(port, () =>{
    console.log(`ears on at port ${port}`)
})