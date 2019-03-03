import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  cardButton : {
    marginLeft : 'calc(50% - (width / 2))'
  }
};

const BlogCard = (props) => {
  const { classes, title, subtitle } = props;

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
      <CardActions>
        <Button size="small" className={classes.cardButton}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title : PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default withStyles(styles)(BlogCard);
