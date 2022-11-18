const mongoose = require('mongoose')


//setting up database schema
const expenseSchema = new mongoose.Schema({
    title : {type:String, required:true},
    amount : {type: Number, required: true},
    disburse: {type : Boolean, default:false}
},{timestamps:true})


// creating a model
Expense = mongoose.model('Expense', expenseSchema)

//exporting my model
module.exports = Expense