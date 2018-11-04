const express = require('express')
const bodyParser = require('body-parser')

const port = 3000
const api = require('./routes/api')
const app = express()

app.use(bodyParser.json())

app.use('/api', api)
app.get('/', function(req, res){
    res.send('hello server')
})

app.listen(port,function(){
    console.log('server runing on local' + port)
})