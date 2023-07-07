import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes ,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light')
  const [alert, setAlert] = useState(null) // here alert is an object

  const showAlert=(message, type)=>{
    setAlert({
      message: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  document.title="change title here" // the title can be changed by the document property like this
  const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743'
        showAlert("DarkMode is ON!","success")
        // document.title="dark moded third app" // title can be changed here as well
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white'
        showAlert("LightkMode is ON!","success")
        // document.title="light moded third app"
      }
  }
  


  return (
    <>
    
    {/* <Router> */}
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>  mode is property passed from the useState
      <Alert alert={alert}/>
      <div className="container"> {/* just type div.container */}
         <TextForm></TextForm>
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} />  */}
        {/*the exact keyword is necessary. without that react will do partial matching */}
        {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>} /> */}
        {/* </Routes> */}
        
      </div>
    {/* </Router> */}
    
    
  </>
  );
}
Navbar.proptypes={
  title: PropTypes.string,
  about: PropTypes.string
}

export default App;
