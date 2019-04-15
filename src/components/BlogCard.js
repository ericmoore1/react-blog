import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Edit from '@material-ui/icons/Edit';
import Pageview from '@material-ui/icons/Pageview';
//import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
const HocButton = WrappeComponent => props => {
  return props.canedit ? <Link to={props.url} className={props.classes.link}>
    <Tooltip title={props.tooltip}>
      <IconButton>
        <WrappeComponent />
      </IconButton>
    </Tooltip>
  </Link> : null;
}

const BlogCard = (props) => {
  const { classes, id, title, subtitle, canedit } = props;
  let HocView = HocButton(Pageview);
  let HocEdit = HocButton(Edit);
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
        <HocEdit
          canedit={canedit}
          url={'editblog/' + id}
          classes={classes}
          tooltip={'edit blog'}/>

          <HocView
            canedit={true}
            url={'blog/' + id}
            classes={classes}
            tooltip={'view blog'}/>
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
