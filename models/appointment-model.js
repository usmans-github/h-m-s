const mongoose = require("mongoose")

const appointmentSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
    docId : {
        type: String,
        required: true
    },
    slotDate : {
        type: Object,
        required: true
    },
    slotTime : {
        type: Object,
        required: true
    },
    userData : {
        type: String,
        required: true
    },
    docData: {
        type: String,
        required: true
    },
    status : {
        type: String,
        required: true,
        default: "pending"
    },
    amount : {
        type: Number,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    cancelled: {
        type: Boolean,
        default: false
    },
    isCompleted: {
        type: Boolean,
        default: false  
    }

})

module.exports  = mongoose.model("appointments", appointmentSchema)