const bcrypt = require (bcrypt);


const getHash =(pwd) =>{
    return bcrypt.hash(pwd, 2);
}

module.exports = {getHash};