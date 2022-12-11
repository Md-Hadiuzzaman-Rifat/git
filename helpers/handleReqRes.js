const url=require('url')
const {StringDecoder}=require('string_decoder')

const handleReqRes={}

const decoder=new StringDecoder('utf-8')
let realData=""

handleReqRes.handler=(req, res) => {
    const parsedURL=url.parse(req.url,true)
    const path=parsedURL.pathname 
    const trimmedPath=path.replace(/^\/+|\/+$/g,"")
    const query=parsedURL.query 
    const headerObject=req.headers

    const requestedProperties={
        path,
        trimmedPath,
        query,
        headerObject
    }

    
    

    req.on('data',(buffer)=>{
        realData+=decoder.write(buffer)
    })

    req.on('end',()=>{
        realData+=decoder.end()
        res.end("Hello Rifat")
    })
};

module.exports=handleReqRes