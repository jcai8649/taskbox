import styles from './App.module.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './containers/Navbar/Navbar';
import Login from './containers/Login/Login';
import SignUp from './containers/Signup/Signup';
// import UserPage from './containers/UserPage/UserPage'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar/>

      {/* <UserPage/> */}
      {/* <Login/> */}
      <SignUp/>
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
