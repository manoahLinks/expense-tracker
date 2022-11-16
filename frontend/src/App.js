import React, {Component} from 'react';
import NavBar from './components/NavBar';
import TaskBar from './components/TaskBar';
import Transactions from './components/Transactions';

class App extends Component {
  render() {
    return (
      <div className="grid grid-cols-1 w-full relative text-gray-700 text-xs md:text-sm">
          <NavBar />
          <div className='flex flex-col md:flex-row w-full'>
            <Transactions />
            <TaskBar />
          </div>
      </div>
    );
  }
}

export default App;
