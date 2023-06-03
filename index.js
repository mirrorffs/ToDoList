const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const db=require('./configs/mongoose');
const port = 8000

const app = express()


app.use(express.urlencoded())
app.use(express.static('./assets'))
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views','./views')
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)


app.use('/',require('./routes'))


app.listen(port,function(error){
    if(error){
        console.log(error)
        return
    }else{
        console.log('server is running at port '+port)
    }
})