const express = require('express')
const app = express()
const bodyParser = require('body-parser')
 const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/uts5', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
    console.log('koneksi berhasil')
}).catch((e) => {
    console.log(e)
    console.log('koneksi gagal')
})
app.use(bodyParser.json({
    extends: true, 
    limit: '20mb'
}))
app.use(bodyParser.urlencoded({
    extends: true, 
    limit: '20mb'
}))



app.use('/kue/',require('./router/kue'))

app.listen(4000,() => {
    console.log('Server Started')
})