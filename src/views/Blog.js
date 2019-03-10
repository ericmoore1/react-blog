import React, { useState } from 'react';
import {BlogHeader} from '../components/index';
import {BlogsAPI} from '../api/index';

const GET_BLOG = BlogsAPI.getBlog;

const ShowBlog = (props) => <div>
                              <BlogHeader title={props.title} />
                              <div>
                                {props.subtitle}
                              </div>
                            </div>
const Error = () => <h1>{'Error! The blog does not exist...'}</h1>


const Blog = (props) => {
  // Declare a new state variable, which we'll call "count"
  const { match } = props;
  const id = parseInt(match.params.id);
  const [blog, setBlog] = useState({});
  const [count, setCount] = useState(0);
  // so component will not keep mounting.
  if(count === 0){
    setCount(1);

    // using the js api to set blog
    GET_BLOG(id)(setBlog);
  }
  const theComponent = ( 'error' in blog ) ? <Error /> : <ShowBlog {...blog}/>
  return (
    <div>
     {theComponent}
    </div>
  );
}

export default Blog
