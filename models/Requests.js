const mongoose = require("mongoose");

const ReqSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    numofpeople:{
        type:Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    chapterName: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    userId: {
        type: String,
    }
},{
    collection: 'requests'
})

module.exports = Req = mongoose.model('requests', ReqSchema);