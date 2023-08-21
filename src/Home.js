import React, {useState, useEffect} from 'react';
import axiosConfig from './axiosConfig';
import axios from 'axios';

function Home({values}) {

  //var homeURL = axiosConfig.defaults.baseURL;
  
  //var fillName = 'There'\\

  //console.log("fullName 1 : "+fullName);

  const [fullName, setValue] = useState('There');
  //setValue('There');
  console.log("fullName 1 : "+fullName);

  useEffect(() => {
    console.log("Use effect : "+values);
    var homeURL = axiosConfig.defaults.baseURL;
    axios.get(homeURL
      ,{ withCredentials: true }
      ).then(response => {
        console.log(response);
        if (response.data.name) {
          setValue(response.data.name);
          values.state({
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
        <h3>Hi {values.fullName}! Welcome to JIGIJIGI.com</h3>
    </div>
  )
}

export default Home