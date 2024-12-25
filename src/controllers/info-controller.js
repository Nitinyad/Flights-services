const { StatusCode}  = require('http-status-codes')

const info = (req,res)=>{
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
        success : true , 
        message : "API is live",
        error : {},
        data : {}
    })
}


module.exports = 
{
    info
}