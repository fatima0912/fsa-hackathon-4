const EModel = require('../EModel/eModel');

const add =(data)=>{
    const products= new EModel(data);
    return products.save();
}

const getProducts = () => {
      const projection = { __v: 0, __id: 0};
      const filter = {};
      return EModel.find(filter, projection);
}

const deleteProducts = (id) =>{

 try{
     //console.log
    return EModel.deleteOne({id : id});
 }catch(e){
     console.log("cannot delete",e);
 }   
    
}

const updateProduct= (model, data) =>{
    const { brand, 
            price, 
            inStock} = data;
    return eModel.updateOne({model}, {
        $set: {
            brand,
            price,
            inStock,
            updatedAt: Date.now()
        }
    });
};   
module.exports = { add, 
                   getProducts,
                   deleteProducts, 
                   updateProduct
                };
