const http = require('http').createServer();
const io = require('socket.io')(http);


http.listen(process.env.PORT || 3000, () => console.log('server listening on port: 3000'))



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




