import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import TaskBar from './components/TaskBar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Transactions from './components/Transactions';
import ExpenseForm from './components/ExpenseForm';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="grid grid-cols-1 w-full relative text-gray-700 text-xs md:text-sm">
          <NavBar />
          <div className='flex flex-col md:flex-row w-full'>
            <Routes>
              <Route exact path={`/`} element={<HomePage></HomePage>}></Route>
              <Route path={`/profile`} element={<ProfilePage></ProfilePage>}></Route>
              <Route path={`/transactions`} element={<Transactions></Transactions>}></Route>
              <Route path={`/new`} element={<ExpenseForm></ExpenseForm>}></Route>
            </Routes>
            <TaskBar />
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
