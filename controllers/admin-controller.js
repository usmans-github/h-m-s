const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const adminModel = require("../models/admin-model")
const doctorModel = require("../models/doctor-model")




//Admin login controller
const login = async (req, res) => {
    try {
        
        const { email, password } = req.body
        const admin = await adminModel.findOne({email: email})
        bcrypt.compare(password, admin.password, (err, result) => {
            if(err) return res.status(201).send({success: false, message: "Access denied, Admins Only!"})
            
            res.status(200).send({success: true, message: "Admin login successfuly", })
        })
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .send({ message: `Error in Admin controller ${error.message}` });
        
    }
 
 }

 //Admin add doctor controller
 const addDoctor = async (req, res) => {
    try {
        const { name, email, password, phone, specialization, experience, fee   }  = req.body

        const exists  = await doctorModel.findOne({email:email, password:password})
            if(exists) return res.status(201).send({success: false, message: "Doctor already exists"})

            const doctor =  await doctorModel.create({name, email, password, phone, specialization, experience, fee})
            await doctor.save()
            res.status(200).send({success: true, message: "Doctor added successfully!", })
       
    } catch (error) {
        console.log("admin controller addDoctor Error: ",error);
        
    }
 }

module.exports = {
    login,
    addDoctor
}