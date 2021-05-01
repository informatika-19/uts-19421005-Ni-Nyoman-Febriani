const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kueSchema = new Schema({
    nomorkue:{
        type: String
        },
        namakue:{
            type: String
        },
        ukurankue:{
            type: String
        },
        hargakue:{
            type: String
        },
        jumlahpembelian:{
            type: String
        },
        totalharga:{
            type: String
        }
})
module.exports =mongoose.model('kue',kueSchema)