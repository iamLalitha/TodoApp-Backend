
const express= require('express');
const mongoose= require('mongoose');
require('dotenv').config();
const cors= require("cors");

const routes = require('./routes/ToDoRoute');


const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(cors());

//connect to mongodb
mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log(`connected to mongodb...`))
.catch((err)=> console.log(err))

//routes
app.use(routes)

app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`))