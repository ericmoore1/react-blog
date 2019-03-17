import React , { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import {LoginAPI} from '../api/index';

const CHECK_LOGIN = LoginAPI.checkLogin
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textAlign : 'left'

  },
  button : {
    color : '#fff'

  },
  link :{
    textDecoration : 'none'
  }
};
const ButtonBar = (data) =>  data.bool ? <Link to={"/createblog"} className={data.classes.link}><Button className={data.classes.button}>Create Blog Entry</Button></Link> : null
function Header(props) {
  const { classes, title } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  CHECK_LOGIN( data => setIsLoggedIn("success" in data ));
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {title}
          </Typography>
            <ButtonBar bool={isLoggedIn} classes={classes} />
        </Toolbar>

      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title : PropTypes.string.isRequired
};

export default withStyles(styles)(Header);
