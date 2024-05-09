import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import { auth } from './firebase.js';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice.js';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else{
        dispatch(logout());
      }
      return unsubscribe;
  })
  },[dispatch])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ): (
          <Routes>
            <Route path='/profile' element={<ProfileScreen />}/>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}        
      </Router>
    </div>
  );
}

export default App;
