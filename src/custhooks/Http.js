import React, {useState,useEffect} from 'react';

export const useHttp = (url, dependencies)=>{
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(()=>{
    setIsLoading(true);
    console.log("Sending HTTP request to: ", url);
    fetch(url,{
      method : 'GET',
      credentials : 'include',
      mode : 'cors',
    })
    .then( res => res.json() )
    .then( data =>{
      setIsLoading(false);
      setFetchedData(data);
    }).catch(err =>{
      console.log("Error: ",err);
      setIsLoading(false);
    });
  },dependencies);
  return [isLoading,fetchedData];
}