import Feed from './features/Feed';
import React, { useEffect } from 'react';
import './App.css';
import Header from './features/Header';
import Sidebar from './features/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './features/Login.js'
import { auth, onAuthStateChanged } from './features/firebase';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  console.log(user)

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        //user is logged out
        dispatch(logout())
      }
    })
  }, [])
  
  return (
    <div className="app">
      <Header />
      
      {!user ? (
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