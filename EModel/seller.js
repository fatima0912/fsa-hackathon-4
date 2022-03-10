const mongoose = require('mongoose');
const seller= mongoose.model('seller',{

    id:{
        type: Number,
        unique: true,
        required:true
    },
    brand: {
        type: String,
        required: true
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
    discount:{
        type: Number
    },
    createdAt: Date,
    updatedAt: { type: Date, default: Date.now() }
});

module. exports = seller;