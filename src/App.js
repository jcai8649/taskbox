import styles from './App.module.css';
import Navbar from './containers/Navbar/Navbar';
import Login from './containers/Login/Login';
import SignUp from './containers/Signup/Signup';
import UserPage from './containers/UserPage/UserPage'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error from './components/ErrorPage/Error';

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

          <Route component={Error} />
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
