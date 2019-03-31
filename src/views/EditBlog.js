import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import {Header} from '../components/index';
import {WisyEditor2} from '../components/wysiwyg/index';
import {BlogsAPI} from '../api/index';

import { EditorState, convertFromRaw } from 'draft-js';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }

});
const SAVE_BLOG = (blog,blogContent) => BlogsAPI.updateBlog(blog,blogContent);
const GET_BLOG = BlogsAPI.getBlog;
const GET_JSON = BlogsAPI.getJson
// const CONTENT = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
const SAVE = (blog,content) => (dialogFunct) => () => {
  console.log(blog);
  if(blog.title === "" || blog.subtitle === ""){
    dialogFunct(true);
    return;
  }
  SAVE_BLOG(blog,content);
}

const HocBtn = Component => props => <Component
                                        onClick={() => props.onClick()}
                                        variant={props.variant}
                                        color={props.color}
                                        className={props.classes.button}>
                                        {props.msg}
                                      </Component>
const EditBlog = (props) => {
  const { classes,match } = props;
  const id = parseInt(match.params.id);
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [titleDialog, setTitleDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editorState , setEditorState] = useState("");

  // so component will not keep mounting.
  if(count === 0){
    setCount(1);
    GET_BLOG(id)((json) => {
      if(!('user_id' in json )){
        window.location = '/blogs'
      }
      setTitle(json.title);
      setSubtitle(json.subtitle);

    } );

    GET_JSON(id)((json) => {
      setContent(json);
      setEditorState(EditorState.createWithContent(convertFromRaw(json)))
    });
  }

  const blogObject = {"id" : props.match.params.id ,"title" : title , "subtitle" : subtitle};
  const _content = content;
  let _title = title === "" ? "" : "Title: " + title;
  let _stitle = subtitle === "" ? "" : "    Subtitle: " + subtitle;
  _title += _stitle;
  let _editMsgBtn = isEditing ? "View Blog" : "Edit Blog";
  let HocButton = HocBtn(Button);
  return (
    <div>

    <Header title={_title} />
    <div style={{ width : '80%', height : '51vh',marginLeft : '10%', marginTop : '1%'}}>
    <WisyEditor2
      canEdit={isEditing}
      editorState={editorState}
      setEditorState={setEditorState}
      setContent={setContent}/>
    </div>

    <HocButton onClick={() => setIsEditing(!isEditing)} variant={"contained"} color={"secondary"} classes={classes} msg={_editMsgBtn}/>
    <HocButton onClick={() => setTitleDialog(true)} variant={"contained"} color={"secondary"} classes={classes} msg={'Set Title'}/>
    {isEditing ? <HocButton onClick={SAVE(blogObject,_content)(setSaveDialogOpen)} variant={"contained"} color={"primary"} classes={classes} msg={'Edit'}/> : null}

    <Dialog
    open={titleDialog}
    onClose={() => setTitleDialog(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">{"Add a Title and Subtitle"}</DialogTitle>
    <DialogContent>
    <TextField
    id="title"
    label="Title"
    className={classes.textField}
    value={title}
    onChange={(e) => setTitle( e.target.value )}
    margin="normal"
    variant="outlined"
    />

    <TextField
    id="subtitle"
    label="Subtitle"
    value={subtitle}
    className={classes.textField}
    onChange={(e) => setSubtitle( e.target.value )}
    margin="normal"
    variant="outlined"
    />

    </DialogContent>
    <DialogActions>
    <Button onClick={() => setTitleDialog(false)} color="primary" autoFocus>
    Done
    </Button>
    </DialogActions>
    </Dialog>

    <Dialog
    open={saveDialogOpen}
    onClose={() => setSaveDialogOpen(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">{"You must have a title and subtitle"}</DialogTitle>

    <DialogActions>
    <Button onClick={() => {
      setSaveDialogOpen(false);
      setTitleDialog(true);
    }}
    color="primary" autoFocus>
    Got It
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}

export default withStyles(styles)(EditBlog)
