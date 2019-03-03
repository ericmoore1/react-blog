import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 300,
    marginTop : '2%',
    marginLeft : '2%',
    float : 'left'
  },
  title: {
    fontSize: 14,
  },
  link : {
    textDecoration : 'none',
  },

  buttonHolder : {
    float : 'right'
  }
};

const BlogCard = (props) => {
  const { classes, id, title, subtitle } = props;

  return (
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
            {title}
        </Typography>

        <Typography component="p">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonHolder}>
        <Link to={"/blog/" + id } className={classes.link}><Button variant="outlined" color="primary">See More</Button></Link>
      </CardActions>
    </Card>
  );
}

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title : PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  id : PropTypes.string.isRequired
};

export default withStyles(styles)(BlogCard);
