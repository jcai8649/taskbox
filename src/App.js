import styles from './App.module.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './containers/Navbar/Navbar';
import Login from './containers/Login/Login';
// import UserPage from './containers/UserPage/UserPage'
import {login} from './actions';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

function App() {

  return (
    <>
      <Navbar/>

      {/* <UserPage/> */}
      <Login/>
      {/* //signup
          //signup form      
      {/* <UserPage/>
                  {/* //User Page
        //profile pic
        //task list
        //add task
            //task */} 
    </>
  );
}

export default App;
