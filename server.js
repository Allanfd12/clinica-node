const http = require('http');
const port = 3000;


const rotas = {
    '/':'index',
    '/contato':'contato',
    '/sobre':'sobre'
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n'+ rotas[req.url]);

});

server.listen(port,() =>{
    console.log("Server is running on port 3000")
});