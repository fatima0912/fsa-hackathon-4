const express=require('express');
const bodyParser= require('body-parser');
const eDefaultRouter= require('./eRoutes/eDefaultRouter');
const eProductsRouter=require('./eRoutes/eProductsRouter');
const config=require('./config/index');
const mongoose= require('mongoose');
const port=3000;
const app= express();

app.listen(port,()=>{
    console.log(`connected to port number: ${port}`);
})
mongoose.connect(config.dbConStr)
    .then(res=>console.log('Connected to MongpDB'))
        .catch(res=>console.log('failed to connect to MongoDB'));
app.use(bodyParser.json());


app.use('/',eDefaultRouter);
app.use('/ecom',eProductsRouter);
