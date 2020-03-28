const moment=require('moment');

const logger=(req,res,next)=>
{
    console.log(`${req.protocol}:${moment().format()}`);
    next();
}

module.exports=logger; 