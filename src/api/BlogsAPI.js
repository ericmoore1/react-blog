import 'whatwg-fetch'
const URL = "";
const BLOGS = [{
  id : 1,
  title : 'Blog 1',
  subtitle : 'blog 1 subtitle'
},
{
  id : 2,
  title : 'Blog 2',
  subtitle : 'blog 2 subtitle'
},
{
  id : 3,
  title : 'Blog 3',
  subtitle : 'blog 3 subtitle'
},
{
  id : 4,
  title : 'Blog 4',
  subtitle : 'blog 4 subtitle'
},
{
  id : 5,
  title : 'Blog 5',
  subtitle : 'blog 5 subtitle'
},
{
  id : 6,
  title : 'Blog 6',
  subtitle : 'blog 6 subtitle'
}
];

export const login = () => {
  return fetch(URL,{})
  .then(function(response) {
    return response.json()
  })
}

export const getBlogs = (setBlogs) => {
    setTimeout(function(){
      setBlogs(BLOGS);
    }, 1000);
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
