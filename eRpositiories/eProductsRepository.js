const EModel=require('../EModel/eModel');

const add =(data)=>{

    const products= new EModel(data);
    return products.save();
}
const getProducts = () => {
      const projection = { __v: 0, __id: 0};
      const filter = {};
      return EModel.find(filter, projection);
}

module.exports={add, getProducts};
