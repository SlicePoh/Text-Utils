import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor=('black');
      showAlert("Dark Mode is enabled.","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor=('white');
      showAlert("Light Mode is enabled.","success")
    }  
  }
  return (
    <>
    <Navbar Title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
      <TextForm showAlert={showAlert} heading="Enter your text to analyze below :-" mode={mode} toggleMode={toggleMode}/>
    </div>
    </>
  );
}
export default App;
