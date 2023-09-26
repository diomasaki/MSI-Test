// MONGODB PKG
const mongoose = require("mongoose")

// BUAT TABLE STUDENT DAN PROPERTYNYA
const StudentSchema = new mongoose.Schema({
    // AUTO CREATE ID UNTUK TABLE STUDENT
    student_name: {type: String, required: true, unique: true},
    major: {type: String, required: true, default: enums["Sistem Informasi", "Teknik Informatika", "Psikologi"]},
}, 
{timestamps: true}
)

module.exports = mongoose.model("Student", StudentSchema)