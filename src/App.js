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
          <Route exact path='/' component={Login} />

          <Route path='/user' component={UserPage} />

          <Route path='/signup' component={SignUp} />

          <Route component={Error} />
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
