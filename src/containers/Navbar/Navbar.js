import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/favicon-32x32.png';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../../store/actions/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginLeft: theme.spacing(1),
    height: 25,
    width: 25
  },
  title: {
    flexGrow: 1,
  },
  link: {
      textDecoration: 'none',
      color: 'white'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}><NavLink to='/' className={classes.link}>
            Taskbox
            <img className={classes.logo} src={Logo} alt="Taskbox Logo"/>
            </NavLink>
          </Typography>
          <Button color="inherit" onClick = {() => dispatch(logout())}><NavLink to={state.isLogin ? '/' : '/signup'} className={classes.link}>{state.isLogin ? "Logout" : "Sign Up"}</NavLink></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}