const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');


// New files
const userModel = require("./models/user");
const db = require('./config/mongooseConnection');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use("/owner", ownersRouter);
app.use("/user", usersRouter);
app.use("/product", productsRouter);


app.listen(3000, () => {
    console.log("Server listening on 3000");
});