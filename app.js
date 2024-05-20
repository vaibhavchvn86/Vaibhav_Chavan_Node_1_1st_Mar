const express = require('express');
const app = express();
const {dbConnection} = require('./config/db');
const port = 5000;

app.use(express.json());

app.get('/', (req,res) => {
    res.send("<h1>Hello From CRUD App<h1>");
    res.end();
})

app.use('/api/auth', require('./routes/userRoutes.js'));
app.use('/api/blog', require('./routes/postRoutes.js'));

app.listen(port, () => {
    dbConnection();
    console.log(`Server is running on ${port} number...`)
})

