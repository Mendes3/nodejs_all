const authorize = ((req, res,next)=>{
    const {user} = req.query
    if(user==='Manita')
    {
        req.user = {name:'Manita',id:2}
        next()
    }
    else {
        res.status(401).send("Unauthorized")
    }

})
module.exports = authorize