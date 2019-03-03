import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
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

const BlogHeader = (props) => {
  const { classes, title } = props;
  console.log("Here",process.env.REACT_APP_HOST);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {title}
          </Typography>
          <Link to={"/blogs"} className={classes.link}><Button className={classes.button}>Back To Blogs</Button></Link>
        </Toolbar>

      </AppBar>
    </div>
  );
}

BlogHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title : PropTypes.string.isRequired
};

export default withStyles(styles)(BlogHeader);
