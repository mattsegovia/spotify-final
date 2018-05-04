const
    bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path')
    app = express()

//from routes inside router folder
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', '/../dist')))
app.use(require('../router/routes')())


console.log("the dir name: ", path.join(__dirname, '..', '/../dist/'));
console.log('Listening on 8080');
app.listen(8080,()=>{

});


