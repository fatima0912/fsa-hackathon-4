const res = require('express/lib/response');
const eProductsRepository = require('../eRpositiories/eProductsRepository');

const alreadyExists = (e) => e.message && e.message.indexOf('duplicate key') > -1

const hasErrors = (e) => e._message === 'user validation failed'

const handleErrors = (e, res) => {
    if (alreadyExists(e))
        res.status(409).send('User already exists');
        
    else if (hasErrors(e))
        res.status(400).json(e.errors);
    else
        res.status(500).send('Internal Server Error');
};

const addList = async(req, res)=>{
    try{
        const data=req.body;
        //console.log(data,'body'); 
        // add email and password thn go for hash function call here
        data.createdAt=Date.now();
        await eProductsRepository.add(data);
        res.status(201);
        res.send();
    }catch(e){
         handleErrors(e, res);
    }
};

const getProducts = async (req, res)=>{
     const model = req.params.model;
    try{ 
        const products= await eProductsRepository.getProducts();
        res.status(201);
        res.json(products);
}   catch(e){
    res.status(500);
    res.send('Internal Server Error');
}
};
const deleteProducts = async(req, res)=>{
    const model = req.params.model;
    // const products= await eProductsRepository.getProducts();
    // for (let i = 0; i < products.length; i++) 
    // {
    //      if (products[i].id === id) {  // strict equality
    //          products.splice(i, 1);
    //          break;
    //         }
    //     }
        await eProductsRepository.deleteProducts(model);
        res.status(204).send("cannot delete");
    };
 const updateProduct = async (req, res)=>{
    try{
        const model = req.params.model;
    await eProductsRepository.updateProduct(model, req.body);
    res.status(204).send();
    } catch(e){
        res.status(500).send("Internal Server Error");
    }

 }; 

module.exports = {addList, handleErrors, getProducts, deleteProducts, updateProduct};