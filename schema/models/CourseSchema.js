// MONGODB PKG
const mongoose = require("mongoose")

// BUAT TABLE KURSUS DAN PROPERTYNYA
const CourseSchema = new mongoose.Schema({
    // AUTO CREATE ID UNTUK TABLE KURSUS
    section_number: {type: Number, required: true},
    course_name: {type: String, required: true},
    units: {type: String, required: true},
    room_id: {type: Number, required: true},
    room_capacity: {type: Number, required: true}
}, 
{timestamps: true}
)

module.exports = mongoose.model("Course", CourseSchema)