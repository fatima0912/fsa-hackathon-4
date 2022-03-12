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

/*const getSellerByEmail = (email) => {
    const filter = { email };
    const projection = { __v: 0, _id: 0, password: 0 };
    return EModel.findOne(filter, projection);
} */

const deleteProducts = (model) =>{

    return EModel.deleteOne(model);
    //return products.save();   
}

const updateProduct= (model, data) =>{
    const { brand, 
            price, 
            inStock} = data;
    return EModel.updateOne({model}, {
        $set: {
            brand,
            price,
            inStock,
            updatedAt: Date.now()
        }
    });
};   
module.exports = {add, 
                  getProducts,
                  deleteProducts, 
                  updateProduct
                };
