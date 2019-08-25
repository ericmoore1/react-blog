import React, { useState,useEffect, useReducer } from 'react';
import { useHttp } from '../custhooks';
import {Header, Error,BlogHeader, LinkBar} from '../components/index';
import {WisyEditor2} from '../components/wysiwyg/index';
import { EditorState, convertFromRaw } from 'draft-js';
import '../css/main.min.css';
//'/getjson'

// <BlogHeader title={"Title: " + props.blog.title + "  Subtitle: " + props.blog.subtitle} />
const ShowBlog = (props) => <div>

                              <div style={{width : '80%', marginLeft : '10%'}}>
                              <WisyEditor2
                                canEdit={props.canEdit}
                                editorState={props.editorState}
                                setEditorState={props.setEditorState}
                                setContent={props.setContent}/>
                              </div>
                              </div>

const URL = process.env.REACT_APP_API_HOST;
const initialBlog = { title : "None", id : 0 }
const reducer = (state,action) =>{
  switch(action.type){
    case 'CHANGE_BLOG':
       return {...state,...action.blog} ;
    break;
    default :
       return state;

  }
  return state;
}



const getObj = {
  method : 'GET',
  credentials : 'include',
  mode : 'cors',
}
const Test = () => {
  // Declare a new state variable, which we'll call "count"
  const [blog, dispatch] = useReducer(reducer,initialBlog);
  const [editorState , setEditorState] = useState("");
  const [content, setContent] = useState("");

  const [isLoading,fetchedData] = useHttp(URL + '/read/blogs',getObj,[]);
  let formData = new FormData();
  const postObj = {
    method : 'POST',
    credentials : 'include',
    mode : 'cors',
    body : formData
  };
  formData.append("data", JSON.stringify({ "id" : blog.id}));
  const [ isLoadingJson, blogJson ]= useHttp(URL + '/getjson', postObj, [blog.id]);


  const data = !fetchedData ?  [] : fetchedData.data;
  const myBlogStuff = !blogJson ? [] : blogJson;

  useEffect(()=>{
    if(blog.id === 0){return;}
    console.log("Blogin");
    setContent(myBlogStuff);
    setEditorState(EditorState.createWithContent(convertFromRaw(myBlogStuff)))
  },[myBlogStuff]);

  const canEdit = false;
  const _props = { blog, canEdit ,editorState,setEditorState, setContent : content};
  const errorProps = { title : "Error", message : "Error! The blog does not exist..."};
  const theComponent = blog === 0 ? null : <ShowBlog {..._props}/>

  return (
    <div>
    <Header title={blog.title} children={<LinkBar />}/>

    <div className="row">
      <div className="col-3">
      <BlogHeader title={"Blogs"} />
        <ul className={"user-blogs"}>
          {data.map( (obj, index ) =><li onClick={()=> dispatch({ type : 'CHANGE_BLOG', blog : { title : obj.title, id : obj.id} }) } key={obj.id}>{obj.title}</li>)}
        </ul>
      </div>
      <div className="col-9">
      <BlogHeader title={blog.title} />
        {theComponent}
      </div>
      </div>

    </div>
  );
}

export default Test
