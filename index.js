const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/index');
const eDefaultRouter = require('./eRoutes/eDefaultRouter');
const eProductsRouter = require('./eRoutes/eProductsRouter');

const app= express();
const port=3000;

app.listen(port,() => {
    console.log(`server running on port number: ${port}`);
})

app.use(bodyParser.json());

mongoose.connect(config.dbConStr)
    .then(res => console.log('Connected to MongoDB'))
        .catch(err => console.log('failed to connect to MongoDB'));

app.use('/',eDefaultRouter);
app.use('/ecom',eProductsRouter);
