const EModel=require('../EModel/eModel');

const add =(data)=>{

    const products= new EModel(data);
    return products.save();
}
const getProducts=()=>{
      const projections = {__v: 0, __id: 0};
      const filter={};
      return EModel.find(filter, projections);
}

module.exports={add, getProducts};
