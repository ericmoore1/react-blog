import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {Header} from '../components/index';
import {WisyEditor2} from '../components/wysiwyg/index';
import {LoginAPI} from '../api/index';
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    float : "right",
    marginRight : "12%"
  },
  input: {
    display: 'none',
  },
});

const CONTENT = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
const SAVE = (blob) => () => {
  console.log(blob);
}
const CreateBlog = (props) => {
  const { classes } = props;
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [content, setContent] = useState(CONTENT);

  // so component will not keep mounting.
  if(count === 0){
    setCount(1);
    LoginAPI.login({ email : "", password : ""})
    .then( json => {
      if(!("success" in json)){window.location = '/blogs'}
    })
    .catch( err => console.log( "ERROR: ", err ));
  }

  return (
    <div>
    <Header title="Create Blog" />

    <div style={{ width : '80%', marginLeft : '10%', marginTop : '1%'}}>
    <WisyEditor2 setContent={setContent}/>
    </div>

    <Button
    onClick={SAVE(content)}
    variant="contained"
    color="primary"
    className={classes.button}>
    Save
    </Button>
    </div>
  );
}

export default withStyles(styles)(CreateBlog)
