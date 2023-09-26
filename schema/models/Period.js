// MONGODB PKG
const mongoose = require("mongoose")

// BUAT TABLE PERIOD DAN PROPERTYNYA
const PeriodSchema = new mongoose.Schema({
    // AUTO CREATE ID UNTUK TABLE PERIOD
    year: {type: Date, required: true}
}, 
{timestamps: true}
)

module.exports = mongoose.model("Period", PeriodSchema)