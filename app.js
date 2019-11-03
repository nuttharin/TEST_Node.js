const express = require('express')

const app  = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')
const scgService = require('./api/routers/scgService.Router')


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended : false})); 
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Orgin, X-Requested-With, Content-Type, Accept,Authorization,authorization,content-type');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next(); 
})



app.get('/',(req , res , next) =>{  // path /
    console.log('zzzzz')
    res.status(200).json({
        message : 'Get rootdd /'
    })

})


app.use('/scgService',scgService);

module.exports = app
