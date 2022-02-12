const eProductsRepository = require('../eRpositiories/eProductsRepository');

const addList=async(req,res)=>{
    try{
        const data=req.body;
        //console.log(data,'body');
        data.createdAt=Date.now();
        await eProductsRepository.add(data);
        res.status(201);
        res.send();
    }catch(e){
         console.log(e);
        res.status(500);
        res.send(e);
    }

    
}
const getProducts= async (req,res)=>{
    try{
        const products= await eProductsRepository.getProducts();
        res.status(201);
        res.json(products);
}   catch(e){
    res.status(500);
    res.send('Internal Server Error');
}
}
module.exports={addList, getProducts};