import styles from './App.module.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './containers/Login/Login';
import UserPage from './containers/UserPage/UserPage'


function App() {
  return (
    <>
      <div className={styles.header}>
        <h1 >TaskBox</h1>
      </div>
      <Login/>
      {/* //signup
          //signup form

    //User Page
      //profile pic
      //task list
      //add task
        //task */}

      
      {/* <UserPage/> */}

    </>
  );
}

export default App;
