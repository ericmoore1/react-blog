import React, { useState } from 'react';
import {Header,BlogCard,DeleteBlogs} from '../components/index';
import {BlogsAPI} from '../api/index';
import Button from '@material-ui/core/Button';

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
  let _blogs = isUserBlogs ? _myBlogs : blogs.filter( blog => blog.visible === "1" || blog.visible === 1 );

  let _props = {
      userBlogs : _myBlogs,
      toggleParent : () => setCount(0),
      isDelete :  isDelete,
      setIsDelete : () => setIsDelete(false)
  };
  return (
    <div>
     <Header title="Blogs" />
     {_blogButton}
      {BLOG_CARDS(isUserBlogs)(_blogs)}
       <DeleteBlogs {..._props}/>
    </div>
  );
}

export default Blogs
