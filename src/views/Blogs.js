import React, { useState } from 'react';
import {Header,BlogCard} from '../components/index';
import {BlogsAPI} from '../api/index';

const GET_BLOGS = BlogsAPI.getBlogs;
const BLOG_CARDS = ( blogs ) =>  blogs.map( ( blog, index ) =>  <BlogCard title={blog.title} subtitle={blog.subtitle} />);

const Blogs = () => {
  // Declare a new state variable, which we'll call "count"
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);

  // so component will not keep mounting.
  if(count === 0){
    setCount(1);
    GET_BLOGS((bl) => {setBlogs(bl); console.log("BL: ",bl);} );
  }
  console.log(blogs);

  return (
    <div>
     <Header title="Blogs" />

     <div>
      {BLOG_CARDS(blogs)}
     </div>
    </div>
  );
}

export default Blogs
