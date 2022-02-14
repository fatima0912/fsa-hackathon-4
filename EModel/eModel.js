const mongoose= require('mongoose');
const eModel= mongoose.model('products',{

    id:{
        type: Number,
        unique: true,
        required:true
    },
    brand: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required:  [true,'price is required']
    },
    inStock:{
        type: Boolean,
        active: true,
        required: true
    },
    createdAt: Date,
    updatedAt: { type: Date, default: Date.now() }
});

module.exports=eModel;