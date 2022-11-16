const mongoose = require('mongoose')


// database schema

const expenseSchema = new mongoose.Schema({
    title : {type:String, required:true},
    amount : {type: Number, required: true}
    // created_at: {type: Date, default: Date.now()}
},{timestamps:true})

// creating a model
Expense = mongoose.model('Expense', expenseSchema)

//exporting my model
module.exports = Expense