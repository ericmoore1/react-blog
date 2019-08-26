import React, { useState,useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {LoginAPI} from '../api/index';
import {LoginContext} from '../contexts';
const styles = theme => ({
  root: {
    // width : '40%',
    // marginLeft : '30%',
    // marginTop : '3%',
    // minWidth : '500px',
    // paddingTop : '2%',
    paddingBottom : '2%'
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

const LoginDialog = (props) => {
  const { loginDialogOpen , setLoginDialog, title, message} = props;
  return(
    <Dialog open={loginDialogOpen} onClose={() => setLoginDialog(false)} aria-labelledby="simple-dialog-title" >
    <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
    <DialogContent>
    <DialogContentText id="alert-dialog-description">
    {message}
    </DialogContentText>
    </DialogContent>
    </Dialog>)

  }

  const Login = (props) => {
    const { classes } = props;
    const [login, setLogin] = useState({ email : "", password : ""});
    const [loginDialogOpen, setLoginDialog] = useState(false);
    const [count,setCount] = useState(0);
    const loginContext = useContext(LoginContext);
    console.log(loginContext)
    if(count === 0){
      setCount(1);
      LoginAPI.logout();
    }

    const attemptLogin = ( object ) => {
      let isValid = object.email === "" || object.password === "";
      if(isValid){
        setLoginDialog(true);
        return;
      }else{
        LoginAPI.login(object)
        .then( json => {
          console.log("login: ",json);
          if("success" in json){
            loginContext.setUserLogin(true);
            props.history.push('/blogs');
          }
        })
        .catch( err => console.log( "ERROR: ", err ));
      }
    }

    return (

      <div className="row">

      <div className="col-12">
      <LoginDialog
      loginDialogOpen={loginDialogOpen}
      setLoginDialog={setLoginDialog}
      title={"Login"}
      message={"You must provide an email, and a password."}
      />
      <Paper className={classes.root} elevation={1}>
      <Typography variant="h5" component="h3">
      Login
      </Typography>
      <TextField
      required
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
      required
      id="password"
      label="Password"
      className={classes.textField}
      type="password"
      margin="normal"
      variant="outlined"
      value={login.password}
      onChange={ e => setLogin({ email : login.email , password : e.target.value})}
      /><br/><br/>

      <Button variant="outlined" size="large" color="primary" onClick={() => attemptLogin(login)}>
      Login
      </Button>

      </Paper>
      </div>
      </div>
    );
  }

  Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Login);
