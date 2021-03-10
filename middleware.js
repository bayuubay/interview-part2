const jwt=require("jsonwebtoken")

module.exports= async function middleware(req, res, next) {

    try {
        //take token from header
        const token = req.headers.authorization.split(' ')[1];
        
        const decToken = await jwt.verify(token, "b4yU999");
        if(!token){
            throw new Error('error')
        }
        res.locals.user = decToken;
        next()
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: error.message
        });
    }
   
}