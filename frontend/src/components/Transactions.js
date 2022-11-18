import TableGrid from "./TableGrid";

const Transactions = () => {
    return ( 
        <div className="grid grid-cols-1 bg-gray-100 text-gray-700">
            <div className="flex items-center p-2 justify-between">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-900">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                    <h4 className="mx-2 text-sm">Transactions</h4>
                </div>
                <h4 className="self-end text-purple-800">history</h4>
            </div>

            <div className="flex justify-evenly p-2">
                <h4 className="px-2 p-0.5 bg-purple-200 rounded-lg">All</h4>
                <h4 className="px-2 p-0.5 bg-purple-200 rounded-lg">Re-imbursements</h4>
                <h4 className="px-2 p-0.5 bg-purple-200 rounded-lg">Expenses</h4>
            </div>

            <div className="flex justify-between p-2">
                <input type="month" name="" id="" className="h-4 p-2" />
                <div className="flex">
                   
                </div>
            </div>

            <div className="grid grid-cols-1">
                <TableGrid></TableGrid>
            </div>

        </div>
     );
}
 
export default Transactions;