import 'whatwg-fetch'
const URL = "";

export const login = () => {
  return fetch(URL,{})
  .then(function(response) {
    return response.json()
  })
}
