import React, {useState, useEffect} from 'react';
import axiosConfig from './axiosConfig';
import axios from 'axios';

function Home({setLoginState}) {

  //var homeURL = axiosConfig.defaults.baseURL;
  
  //var fillName = 'There'

  const [fullName, setValue] = useState('There');

  useEffect(() => {
    var homeURL = axiosConfig.defaults.baseURL;
    axios.get(homeURL
      ,{ withCredentials: true }
      ).then(response => {
        console.log(response);
        if (response.data.name) {
          setValue(response.data.name);
          setLoginState({
            name : response.data.name,
            loginStatus : true
          });
        }
      }).catch(e => {
        console.log(e);
    })
  }, [])

  return (
    <div>
        <h3>Hi {fullName}! Welcome to JIGIJIGI.com</h3>
    </div>
  )
}

export default Home