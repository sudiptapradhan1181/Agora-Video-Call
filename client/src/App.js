import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import VideoCall from './components/VideoCall'

function App() {

  const callBackendApi = async() => {
    const response = await fetch('/express_backend')
    const body = await response.json()
    if(response.status !== 200)
      throw Error(response.message)

    return body
  }

  useEffect(() => {
    callBackendApi()
    .then(res => console.log('hello'))
    .catch(err => console.log(err,'err'))
  },[])




  return (
    <VideoCall />
  );
}

export default App;
