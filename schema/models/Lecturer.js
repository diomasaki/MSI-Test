// MONGODB PKG
const mongoose = require("mongoose")

// BUAT TABLE LECTURER DAN PROPERTYNYA
const LecturerSchema = new mongoose.Schema({
    // AUTO CREATE ID UNTUK TABLE LECTURER
    lecturer_name: {type: String, required: true},
    title: {type: String, required: true},
    department_id: {type: Number, required: true, unique: true},
    department_name: {type: String, required: true},
}, 
{timestamps: true}
)

module.exports = mongoose.model("Lecturer", LecturerSchema)