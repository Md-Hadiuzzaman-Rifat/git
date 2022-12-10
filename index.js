// third party
const http = require("http");
const url=require('url')
const {StringDecoder}=require('string_decoder')


// module or scaffolding
const app = {};

// config file
app.config = {
  port: 2020
};

// server
app.createServer = () => {
  const server=http.createServer(app.handleReqRes)
  server.listen(app.config.port,()=>{
    console.log("listening on port "+app.config.port)
    
  });
};

const decoder=new StringDecoder('utf-8')
let realData=""

app.handleReqRes =  (req, res) => {
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
    console.log(requestedProperties)

    req.on('data',(buffer)=>{
        realData+=decoder.write(buffer)
    })

    req.on('end',()=>{
        realData+=decoder.end()
        res.end("hello hadi")
    })
};

app.createServer()