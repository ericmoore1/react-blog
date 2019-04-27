import 'whatwg-fetch'
const URL_V1_FILES = process.env.REACT_APP_API_FILES_v1;

export const deleteFiles = (ids) =>{
  let body = {
    batch : true,
    __keys : ["id"],
    data : ids
  };
  let formData = new FormData();
  formData.append("data", JSON.stringify(body));
  fetch(URL_V1_FILES + 'delete/json_files',{
    method : 'POST',
    credentials : 'include',
    mode : 'cors',
    body : formData
  })
  .then(res => res.json())
  .then(j => console.log(j))
  .catch( err => console.log("ERROR: ",err));
}
