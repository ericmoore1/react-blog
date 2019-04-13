import React, { useState } from 'react';
import {Header,BlogCard} from '../components/index';
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
    onClick={props.actionFunct}>{props.title}</Button>
  </div> : null }
const Blogs = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);
  const [isUserBlogs , setIsUserBlogs] = useState(false);
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
                    title : buttonTitle
  };
  let _blogButton = BlogButton(_theProps);
  let _deleteButton = <Button></Button>
  let _blogs = isUserBlogs ? blogs.filter( blog => blog.user_id === userId) : blogs;
  return (
    <div>
     <Header title="Blogs" />
     {_blogButton}
     <div>

      {BLOG_CARDS(isUserBlogs)(_blogs)}
     </div>
    </div>
  );
}

export default Blogs
