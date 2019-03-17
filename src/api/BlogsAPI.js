import 'whatwg-fetch'
const URL = process.env.REACT_APP_API_HOST;
export const getBlogs = () => {
  return fetch(URL + '/read/blogs',{
    method : 'GET',
    credentials : 'include',
    mode : 'cors',
  })
  .then(function(response) {
    return response.json()
  })
}

export const saveJson = (id,jsonFileData) =>{
  let formData = new FormData();
  let body = { "id" : id, "json" : jsonFileData};
  formData.append("data", JSON.stringify(body));
   fetch(URL + '/json',{
     method : 'POST',
     credentials : 'include',
     mode : 'cors',
     body : formData
   });
}

export const saveBlog = (blog) => {

  let body = {
    batch : false,
    __keys : [ "title", "subtitle","user_id"],
    data : [blog]
  };
 let formData = new FormData();
 formData.append("data", JSON.stringify(body));
  fetch(URL + '/create/blogs',{
    method : 'POST',
    credentials : 'include',
    mode : 'cors',
    body : formData
  })
  .then(function(response) {
    return response.json()
  }).then( json => {
     if('last_id' in json ){
       saveJson(json.last_id,blog.blog);
       window.location = '/blog/' + json.last_id
     }
  });
}

export const getBlog = ( blogId ) => (setBlog) => {
  fetch(URL + '/read/blogs/' + blogId,{
    method : 'GET',
    credentials : 'include',
    mode : 'cors'
  })
  .then(function(response) {
    return response.json()
  }).then( json => {
      if( "error" in json ){
        setBlog({ error : true });
        return;
      }
      setBlog(json.data[0]);
  });
}
