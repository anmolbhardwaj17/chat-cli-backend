const http = require('http').createServer();
const io = require('socket.io')(http);


http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response
    res.end(); //end the response
  }).listen(process.env.PORT || 3000, () => console.log(`server listening on port: ${port}`))



io.on('connection', (socket) => {
    console.log('connected')
    socket.on('message', (evt) => {
        console.log(evt)
        socket.broadcast.emit('message', evt)
    })
})


io.on('disconnect', (evt) => {
    console.log('disconnected')
})




