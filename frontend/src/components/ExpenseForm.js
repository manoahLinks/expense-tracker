const ExpenseForm = () => {
    return ( 
        <div className="grid grid-cols-1 bg-gray-100 items-center">
            <div className="flex items-center p-2 justify-between">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-900">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                    <h4 className="mx-2 text-sm">New Expense</h4>
                </div>
                <h4 className="self-end text-purple-800">history</h4>
            </div>
            <form className="flex flex-col m-3 p-3 bg-white rounded-md">
                <label htmlFor="type">Expense Type</label>
                <select name="" id="type">
                    <option>select type</option>
                    <option>Electricity</option>
                    <option>maintenance</option>
                    <option>production</option>
                </select>
                <label htmlFor="description">Expense Description</label>
                <input type="text" id="description" placeholder="Expense description" />
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" placeholder="Amount" />
                <input type="button" value="Next" className="p-2 bg-purple-800 text-white font-semibold rounded-lg" />
            </form>
        </div>
     );
}
 
export default ExpenseForm;