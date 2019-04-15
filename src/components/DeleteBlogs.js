import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
}

const DELETE_BLOGS = ( blogs ) => {
    const blogsArray = Object.keys(blogs);
    if( blogsArray.length === 0 ){return;}
    console.log(blogsArray);
}

const DeleteBlogs = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [itemsToDelete, setItemsToDelete] = useState({});
  let _userBlogs = props.userBlogs || [];
  let _toggleParent = props.toggleParent;
  let _isDelete = props.isDelete;
  let _setIsDelete = props.setIsDelete;
  let _setItemsToDelete = setItemsToDelete;
  return (

    <Dialog
         open={_isDelete}
         TransitionComponent={Transition}
         onClose={_setIsDelete}
         aria-labelledby="alert-dialog-slide-title"
         aria-describedby="alert-dialog-slide-description"
       >
       <DialogTitle id="alert-dialog-slide-title">
           {"Select items for deletion"}
       </DialogTitle>
       <DialogContent>
    <div style={{ width: "80%",height : 250, overFlow : "hidden"}}>
       { _userBlogs.map( (o,i) => {
         let style = (o.id in itemsToDelete) ? {color : "red"} : { color : "black"};
         return <div style={style} key={o.id}>
         <Checkbox
          checked={(o.id in itemsToDelete)}
          onChange={() => {
              let _itemsToDelete = itemsToDelete;
              if((o.id in _itemsToDelete)){
                delete _itemsToDelete[o.id];
              }else{
                _itemsToDelete[o.id] = "";
              }
              setItemsToDelete(_itemsToDelete);
              _toggleParent();
          }}
          value={o.id}
        />
         { o.title}</div>
       })}
    </div>
    </DialogContent>
    <DialogActions>
        <Button onClick={() => {_setItemsToDelete({}); _setIsDelete();}} color="primary">
          Cancel
        </Button>
        <Button onClick={()=>{DELETE_BLOGS(itemsToDelete);_setItemsToDelete({}); _setIsDelete();}} color="primary">
          Delete Selected Items
        </Button>
    </DialogActions>
  </Dialog>
  );
}

export default DeleteBlogs
