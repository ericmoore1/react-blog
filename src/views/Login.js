import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    // ...theme.mixins.gutters(),
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2,
    width : '40%',
    marginLeft : '30%',
    marginTop : '3%',
    minWidth : '500px',
    paddingTop : '2%',
    paddingBottom : '2%'
  },

  textField: {
   marginLeft: theme.spacing.unit,
   marginRight: theme.spacing.unit,
 }
});

const Login = (props) => {
  const { classes } = props;
  // Declare a new state variable, which we'll call "count"
  const [login, setLogin] = useState({ name : "", password : ""});

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Login
        </Typography>
        <TextField
          id="email"
          label="Email"
          className={classes.textField}
          type="email"
          margin="normal"
          variant="outlined"
          value={login.email}
          onChange={ e => setLogin({ email  : e.target.value , password : login.password })}
        /><br />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          margin="normal"
          variant="outlined"
          value={login.password}
          onChange={ e => setLogin({ email : login.email , password : e.target.value})}
        /><br/>


        <Button variant="outlined" size="large" color="primary" onClick={() => console.log(login)}>
          Login
        </Button>
      </Paper>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
