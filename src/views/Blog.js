import React, { useState } from 'react';
import {BlogHeader} from '../components/index';
import {BlogsAPI} from '../api/index';
import {WisyEditor2} from '../components/wysiwyg/index';
import { EditorState, convertFromRaw } from 'draft-js';

const GET_BLOG = BlogsAPI.getBlog;
const GET_JSON = BlogsAPI.getJson
const ShowBlog = (props) => <div>
                              <BlogHeader title={"Title: " + props.blog.title + "  Subtitle: " + props.blog.subtitle} />
                              <div style={{width : '80%', marginLeft : '10%'}}>
                              <WisyEditor2
                                canEdit={props.canEdit}
                                editorState={props.editorState}
                                setEditorState={props.setEditorState}
                                setContent={props.setContent}/>
                              </div>
                              </div>


const Error = () => <div>
                      <BlogHeader title={"Error"} />
                      <h1>{'Error! The blog does not exist...'}</h1>
                    </div>

const Blog = (props) => {
  // Declare a new state variable, which we'll call "count"
  const { match } = props;
  const id = parseInt(match.params.id);
  const [blog, setBlog] = useState({});
  const [count, setCount] = useState(0);
  const [editorState , setEditorState] = useState("");
  const [content, setContent] = useState("");
  // so component will not keep mounting.
  if(count === 0){
    setCount(1);
    // using the js api to set blog
    GET_BLOG(id)(setBlog);
    GET_JSON(id)((json) => {
      setContent(json);
      setEditorState(EditorState.createWithContent(convertFromRaw(json)))
    });
  }

  const canEdit = false;
  const _props = { blog, canEdit ,editorState,setEditorState, setContent : content};

  const theComponent = ( 'error' in blog ) ? <Error /> : <ShowBlog {..._props}/>
  return (
    <div>
     {theComponent}
    </div>
  );
}
export default Blog
