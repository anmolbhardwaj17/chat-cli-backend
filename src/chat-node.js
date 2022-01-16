const http = require('http').createServer();

const serverless = require('serverless-http');

const io = require('socket.io')(http);
const express = require('express');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    console.log('okayyy');
    res.send('connected')
})

app.use('/.netlify/functions/chat-node',router);

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

module.exports.handler = serverless(app);




