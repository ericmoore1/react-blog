import 'whatwg-fetch'
const URL = process.env.REACT_APP_API_HOST;
const URL_V1 = process.env.REACT_APP_API_HOST_v1;
export const login = (data) => {
   let body = {
     batch : false,
     __keys : '*',
     data : [data]
   };
  let formData = new FormData();
  formData.append("data", JSON.stringify(body));
  return fetch(URL + '/login',{
    method : 'POST',
    credentials : 'include',
    mode : 'cors',
    body : formData
  })
  .then(function(response) {
    return response.json()
  })
}

export const checkLogin = (checkLoginFunct) =>{
  fetch(URL + '/checklogin',{
    method : 'POST',
    credentials : 'include',
    mode : 'cors'
  })
  .then(function(response) {
    return response.json()
  })
  .then( data => checkLoginFunct(data));
}

export const logout = () =>{
  fetch(URL_V1 + 'logout/logout',{
    method : 'POST',
    credentials : 'include',
    mode : 'cors'
  })
  .then( res => res.json())
  .then( j => console.log(j))
  .catch(err => console.log("ERROR: LoginAPI->Logout"));
}
