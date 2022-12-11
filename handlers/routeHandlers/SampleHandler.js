const routes={}

routes.SampleHandler=(requestedProperties,callback)=>{
    callback({
        message:"This is SampleHandler"
    },200)
}
module.exports=routes