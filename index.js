const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{cors: {origin: "*"}})
const PORT = 8080;

app.set('view engine','ejs');

app.get('/home',(req,res)=>{
    res.render('home')
})

app.listen(PORT, ()=>{
    console.log("Server is running");
})

io.on('connection',(socket)=>{
    
})