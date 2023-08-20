import React from 'react';
import axiosConfig from './axiosConfig';
import axios from 'axios';

function Home() {

  var homeURL = axiosConfig.defaults.baseURL;

  axios.get(homeURL
    ,{ withCredentials: true }
    ).then(response => {
      console.log(response);
    }).catch(e => {
      console.log(e);
  });

  return (
    <div>
        <h3>Hi There! Welcome to JIGIJIGI.com</h3>
        
    </div>
  )
}

export default Home