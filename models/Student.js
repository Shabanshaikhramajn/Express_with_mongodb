import mongoose from "mongoose";


//defining schema
const studentSchema = new mongoose.Schema({
    name:{type:String,required:true, trim:true},
    age:{type:Number,required:true},
    fees:{type:mongoose.Decimal128, required:true, validate:(value)=>value>=5000.50},


})


//model

const StudentModel = mongoose.model("student",studentSchema)


export default StudentModel;