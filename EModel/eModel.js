const mongoose = require('mongoose');

const EModel = mongoose.model('products', {
    model: {
        type: String,
        //required: [true, 'Model Number needed']
    },
    brand: {
        type: String,
        //required:[true, 'required']
    },
    email:{
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        validate: {
            validator: v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v),
            message: () => 'Invalid Email'
        }
    },
    password:{
        type: String,
        required: [true, 'Password is required']
    },
    image:String,
    price: Number,
    inStock: Boolean,
    createdAt: Date,
    updatedAt: { type: Date, default: Date.now() }
});

module.exports = EModel;