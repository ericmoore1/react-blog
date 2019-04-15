import React, { useState } from 'react';
import {Header,BlogCard,DeleteBlogs} from '../components/index';
import {BlogsAPI} from '../api/index';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const GET_BLOGS = BlogsAPI.getBlogs;
const BLOG_CARDS = (canedit) => ( blogs ) =>  blogs.map( ( blog, index ) =>  <BlogCard canedit={canedit} key={blog.id} {...blog} />);
const BlogButton = ( props) => { return props.bool ? <div  style={{margin : '1% 4%', textAlign : 'left'}}>
              <Button
                variant="contained"
                color="primary"
                onClick={props.actionFunct}>{props.title}</Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.deleteFunct}>{props.deleteTitle}</Button>
                </div> : null }

  const Transition = (props) => {
    return <Slide direction="up" {...props} />;
  }
const Blogs = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);
  const [isUserBlogs , setIsUserBlogs] = useState(false);
  const [isDelete,setIsDelete] = useState(false);


  // Only re-run the effect if count changes
  // so component will not keep mounting.
  if(count === 0){
    setCount(1);
    GET_BLOGS().then( json => {
      setBlogs(json.data)
      if( "user_id" in json ){
        setUserId(json.user_id);
      }
    });
  }
  let buttonTitle = !isUserBlogs ? 'Show My Blogs' : 'Show All Blogs';
  let _theProps = {
                    bool : userId > 0,
                    actionFunct : () => setIsUserBlogs(!isUserBlogs),
                    title : buttonTitle,
                    deleteTitle : "delete blogs",
                    deleteFunct : () => setIsDelete(!isDelete)
                  };


  let _blogButton = BlogButton(_theProps);
  let _myBlogs = blogs.filter( blog => blog.user_id === userId);
  let _blogs = isUserBlogs ? _myBlogs : blogs;
  let _setIsDelete = () => setIsDelete(false);
  let _setCount = () => setCount(0);
  return (
    <div>
     <Header title="Blogs" />
     {_blogButton}
     <div>
      {BLOG_CARDS(isUserBlogs)(_blogs)}
     </div>

     <Dialog
          open={isDelete}
          TransitionComponent={Transition}

          onClose={_setIsDelete}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >

        <DialogTitle id="alert-dialog-slide-title">
            {"Select items for deletion"}
        </DialogTitle>
        <DialogContent>
                   <DeleteBlogs userBlogs={_myBlogs} toggleParent={_setCount}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={_setIsDelete} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>{}} color="primary">
              Delete Selected Items
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Blogs
