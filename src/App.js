import Feed from './features/Feed';
import React from 'react';
import './App.css';
import Header from './features/Header';
import Sidebar from './features/Sidebar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './features/Login.js'


function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header />

      {!user == null ? (
        <Login /> 
      ) : (
        <div className="app__body">
            <Sidebar />
            <Feed />
        </div>
      )}
      
    </div>
  );
}

export default App;