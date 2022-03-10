const mongoose = require('mongoose');

const EModel = mongoose.model('products', {
    model: {
        type: String,
        required: [true, 'Model Number needed']
    },
    brand: {
        type: String,
        required:[true, 'required']
    },
    price:{
        type: Number
    },
    
    inStock:{
        type: Boolean
        
    },
    
    createdAt: Date,
    updatedAt: { type: Date, default: Date.now() }
});

module.exports = EModel;