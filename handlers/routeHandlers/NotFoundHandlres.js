const routes={}

routes.NotFoundHandler=(requestedProperties,callback)=>{
    callback({
        message:"This is NotFoundHandler"
    },200)
    
}
module.exports=routes