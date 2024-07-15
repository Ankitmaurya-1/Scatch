const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');


// New files
const userModel = require("./models/user");


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Welcome to the new Project!");
});


app.listen(3000, () => {
    console.log("Server listening on 3000");
});