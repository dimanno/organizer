import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header';
import TodosPage from './pages/TodosPage';

const App: React.FC = () => {

 
  return (
    <div className="App">
      <Header/>
       <Routes>
         <Route path='/todo' element={<TodosPage/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
