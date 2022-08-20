import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null)

  const callBackendApi = async() => {
    const response = await fetch('/express_backend')
    const body = await response.json()
    if(response.status !== 200)
      throw Error(response.message)

    return body
  }

  useEffect(() => {
    callBackendApi()
    .then(res => setData(res.express))
    .catch(err => console.log(err,'err'))
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
