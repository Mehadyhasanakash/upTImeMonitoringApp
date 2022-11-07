
/*
//title:uptime monitoring appliction
//desCription:A Resful api to monitor up and down time of user defind link
//Auother: Md Mehady Hasan Akash
//Date:7/11/2022
*/


//dependencies
const http = require("http");

//app object - module scaffolding

const app = {};

//configuration
app.config = {
    port: 3000
};

//create server
app.createServer = () =>{
    const server = http.createServer(app.hadalReqRes);
    server.listen(app.config.port, () =>{
        console.log(`this is run ${app.config.port}`)
    });
}

//hendal request respone

app.hadalReqRes = (req, res) =>{
    // respone heandel
    res.end("hell world")
}


//start the server

app.createServer();