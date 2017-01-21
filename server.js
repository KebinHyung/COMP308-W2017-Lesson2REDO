//Server Lives here

//create a reference to the connect module and store a pointer to connect module in 
//connect variable
let connect  = require('connect');

//create an instance of the connect server
let app = connect();

//port address
const port = 3000;
//listen for request on specific port
app.listen(port);
console.log(`Server Listening at http://localhost/${port}`);

//Routing - Mount Different Routes
app.use('/hello', (req, res, next) => {
res.setHeader('Content-Type', "text/plain");
res.end("Hello World");
next();
});
//Wild card/Default Page
app.use('/', (req, res, next) => {
res.setHeader('Content-Type', "text/plain");
res.end("Welcome");
next();
});

//test commento