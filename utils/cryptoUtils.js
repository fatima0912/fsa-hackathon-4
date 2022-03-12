const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../confid/index');

const getHash =(pwd) =>{
    return bcrypt.hash(pwd, 2);
}

const compare = (pwd, hash) =>{
    return bcrypt.compare(pwd, hash);
}

const getToken = (user) => {
    const { email, role } = user;
    return jwt.sign({email,role},
        config.jwtSecret,
        {expiresIn: '20m'});
}

module.exports = {getHash, compare, getToken};