const http = require('http').createServer();
const io = require('socket.io')(http);
const app = require('express')();

app.get('/', (req, res) => {
    console.log('okayyy');
    res.send('connected')
})

app.listen(process.env.PORT || 3000, () => console.log('server listening on port: 3000'))



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




