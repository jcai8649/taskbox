import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/favicon-32x32.png';
import {NavLink} from 'react-router-dom';

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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}><NavLink to='/' className={classes.link}>
            Taskbox
            <img className={classes.logo} src={Logo} alt="Taskbox Logo"/>
            </NavLink>
          </Typography>
          <Button color="inherit"><NavLink to='/signup' className={classes.link}>Sign Up</NavLink></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}