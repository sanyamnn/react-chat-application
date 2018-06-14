const express=require('express');
const app=express();
const http = require('http').Server(app);
const io=require('socket.io')(http);
io.on('connection',function(socket){
    console.log("we have a connection");
    socket.on("new-message",function(msg){
        console.log(msg);
        io.emit("recieve message",msg);
    })
});
http.listen('3000',function(){
    console.log("We are connected");
});