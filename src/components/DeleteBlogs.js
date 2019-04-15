import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
const DeleteBlogs = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [itemsToDelete, setItemsToDelete] = useState({});
  console.log("items to:  ",itemsToDelete)
  let _userBlogs = props.userBlogs || [];
  let _toggleParent = props.toggleParent;
  return (
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
  );
}

export default DeleteBlogs
