// third party
const http = require("http");

const {handler}=require('./helpers/handleReqRes')


// module or scaffolding
const app = {};

// config file
app.config = {
  port: 2020
};

// server
app.createServer = () => {
  const server=http.createServer(handler)
  server.listen(app.config.port,()=>{
    console.log("listening on port "+app.config.port)
    
  });
};



app.createServer()