const TableGrid = () => {
    return ( 
        <div className="grid grid-cols-1">
            <div className="flex justify-between p-2 bg-white border-b border-silver-100 items-center">
                <div className="flex items-center">
                    <div className="p-2 rounded-full bg-green-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                    </div>
                
                    <div className="flex flex-col mx-2">
                        <h4 className="font-semibold">deposit-Paul Kunanzang</h4>
                        <h4 className="font-light">12:33, Apr 20, 2020</h4>
                    </div>
                </div>
                
                <h4 className="font-semibold text-sm">+1,100</h4>
            </div>

            <div className="flex justify-between p-2 bg-white items-center border-b border-silver-100 ">
                <div className="flex items-center">
                    <div className="p-2 rounded-full bg-red-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clipRule="evenodd" />
                        </svg>
                    </div>
                
                    <div className="flex flex-col mx-2">
                        <h4 className="font-semibold">Expenditure-Muabsa Integrated</h4>
                        <h4 className="font-light">12:33, Apr 20, 2020</h4>
                    </div>
                </div>
                
                <h4 className="font-semibold text-sm">-9,000</h4>
            </div>
        </div>
       
     );
}
 
export default TableGrid;