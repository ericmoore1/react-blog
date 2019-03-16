import 'whatwg-fetch'
const URL = process.env.REACT_APP_API_HOST;
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
