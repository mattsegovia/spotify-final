const
    bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path'),
    app = express(),
    server = require('http').Server(app)

//from routes inside router folder
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', '/../dist')))
app.use(require('../router/routes')())
const io = require('./sockets')(server)

// console.log("the dir name: ", path.join(__dirname, '..', '/../dist/'));
// console.log('Listening on 8080');
// app.listen(8080,()=>{

// });

server.listen(8080, () => {
    console.log('Listening on port 8080...')
})

//Export io instance
// module.exports = {
//     io
// }

