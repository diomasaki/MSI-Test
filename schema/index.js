// PACKAGE
const express = require("express")
const mongoose = require("mongoose")
const app = express()


//KONEKSI DB
mongoose.connect(process.env.MONGO).then(()=> console.log("Database Terhubung!")).catch((err) => {console.log(err)})



// START EVENT-DRIVEN
app.listen(8800, () => {console.log("Server Backend Berhasil Berjalan!")})