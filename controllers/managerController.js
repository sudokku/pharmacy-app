const Prescription = require('../models/prescription');
const asyncHandler = require('express-async-handler');

const getPrescriptionList = asyncHandler(async (req, res) => {
    const prescriptionList = await Prescription.find();
    

    res.status(200).json(prescriptionList);
});

module.exports = {
    getPrescriptionList
};