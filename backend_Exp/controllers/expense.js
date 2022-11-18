const expenseDb = require('../models/expense')
      mongoose = require('mongoose')


//create new expense
exports.addNewExpense = async (req, res) => {

    try{
        const newExpense = await Expense.create(req.body)
        res.status(200).json(newExpense)
    }
    catch{
        res.json({message:"Cannot create new record", error:err})
    }
}  


//display all expense records
exports.getAllExpenses = async (req, res) =>{

    const allExpenses = await Expense.find({})
                    .then((allExpenses) => {
                        res.status(200).json(allExpenses)
                    })
                    .catch((err) => {
                        res.json({message : 'oOPs... cannot retrieve expense list at the moment', errror: err})
                    })
}

//display a single expense record
exports.getSingleExpense = async (req, res) =>{
    // const { id } = req.params
    const singleExpense = await Expense.findById(req.params.id)
                    .then((singleExpense) => {
                        res.status(200).json(singleExpense)
                    })
                    .catch((err) => {
                        res.json({message : 'No such record', errror: err})
                    })
}

// update an expense record
exports.updateExpense = async (req , res) => {

    const updatedExpense = await Expense.findOneAndUpdate(req.params.id, req.body)
                .then ((updatedExpense) => {
                    res.status(200).json(updatedExpense)
                })
                .catch((err) => {
                    res.json({message : "Error updating expense record", error:err})
                })
}


// delete an expense record
exports.deleteExpense = async (req , res) =>{

    const deletedExpense = await Expense.findOneAndDelete(req.params.id)
                .then((deletedExpense) =>{
                    res.status(200).json(deletedExpense)
                })
                .catch((err) => {
                    res.json({message: "Error deleting expense", error:err})
                })
}

module.exports = exports