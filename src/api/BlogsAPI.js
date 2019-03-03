import 'whatwg-fetch'
const URL = "";

export const login = () => {
  return fetch(URL,{})
  .then(function(response) {
    return response.json()
  })
}

export const getBlogs = (setBlogs) => {
  const blogs = [{
    id : 1,
    title : 'Blog 1',
    subtitle : 'blog 1 subtitle'
  },
  {
    id : 2,
    title : 'Blog 2',
    subtitle : 'blog 2 subtitle'
  }
];
    setTimeout(function(){
      setBlogs(blogs);
     }, 3000);
}
