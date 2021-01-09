import styles from './App.module.css';
import Navbar from './containers/Navbar/Navbar';
import Login from './containers/Login/Login';
import SignUp from './containers/Signup/Signup';
import UserPage from './containers/UserPage/UserPage'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>

          <Route path='/user'>
            <UserPage/>
          </Route>

          <Route path='/signup'>
            <SignUp/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
