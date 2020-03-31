var app = require("express")();
var http = require("http").Server(app);
var io = require('socket.io')(http);
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });
io.on('connection', client => {
    console.log('user connected')

    // เมื่อ Client ตัดการเชื่อมต่อ
    client.on('disconnect', () => {
        console.log('user disconnected')
    })

    // ส่งข้อมูลไปยัง Client ทุกตัวที่เขื่อมต่อแบบ Realtime
    client.on('sent-message', function (message) {
        io.sockets.emit('new-message', message)
    })
 })
http.listen(9000, function() {
  console.log("Listening on *:9000");
});
// import express from 'express'
// import bodyParser from 'body-parser'
// import http from 'http'
// import socketIO from 'socket.io'

// const server = express()
// const port = 9000;

// server.use(bodyParser.json())
// server.use(bodyParser.urlencoded({
//     extended: true
// }))

// const app = server.listen(port, function (err, result) {
//     console.log('running in port http://localhost:' + port)
// })

// const io = socketIO.listen(app);
// // รอการ connect จาก client



