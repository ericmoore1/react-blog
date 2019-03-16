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

export const createblog = (blog) => {

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
