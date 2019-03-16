import 'whatwg-fetch'
const URL = process.env.REACT_APP_API_HOST;
const BLOGS = [
];
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

export const saveBlog = (blog) => {

  let body = {
    batch : false,
    table : 'blogs',
    data : [blog]
  };
 let formData = new FormData();
 formData.append("data", JSON.stringify(body));
  fetch(URL + '/create',{
    method : 'POST',
    credentials : 'include',
    mode : 'cors',
    body : formData
  })
  .then(function(response) {
    return response.json()
  }).then( json => console.log("saveBlog: ",json));
}
export const getBlog = ( blogId ) => (setBlog) => {
    let blog = undefined;
    for( let i = 0; i < BLOGS.length; i++ ){
      let _blog = BLOGS[i];
      if( _blog.id === blogId ){
        blog = _blog;
      }
    }

    if(!blog){
      blog = { error : true }
    }
    setTimeout(function(){
      setBlog(blog);
    }, 1000);
}
