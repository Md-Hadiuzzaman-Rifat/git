const url=require('url')
const {StringDecoder}=require('string_decoder')
const {route}=require('../routes')
const {NotFoundHandler}=require('../handlers/routeHandlers/NotFoundHandlres')

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
    
    const chosenHandler=route[trimmedPath]?route[trimmedPath]:NotFoundHandler

    chosenHandler(requestedProperties,(payload,statusCode)=>{
        statusCode = typeof statusCode==='number'? statusCode:300
        payload= typeof payload==='object'? payload:{}

        const payloadString=JSON.stringify(payload) 

        res.writeHead(statusCode)
        res.end(payloadString)
    })
    
    req.on('data',(buffer)=>{
        realData+=decoder.write(buffer)
    })

    req.on('end',()=>{
        realData+=decoder.end()
        res.end("Hello Rifat")
    })
};

module.exports=handleReqRes