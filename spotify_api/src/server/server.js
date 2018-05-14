const
    bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path'),
    app = express(),
    server = require('http').Server(app)

//from routes inside router folder
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', '/../dist')))
app.use(require('../router/routes')()) //routes.js for wrapping spotify-module methods
const io = require('./sockets')(server)


server.listen(8080, () => {
    console.log('Listening on port 8080...')
})
