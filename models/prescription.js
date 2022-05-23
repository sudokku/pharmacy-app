const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
    presDescription:{
        type: String,
        required: true
    }
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;