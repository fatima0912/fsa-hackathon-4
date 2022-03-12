const Role= {
    Buyer:0,
    Seller:1
};

const authorizeSeller = (req,res,next)=>
{
    if(req.role === Role.Seller) next();
    else res.status(403).send('Forbidden');

};

const authorizeBuyer = (req,res,next)=>{
    if(req.role === Role.Buyer) next();
    else res.status(403).send('Forbidden');
};

module.exports ={authorizeSeller, authorizeBuyer};