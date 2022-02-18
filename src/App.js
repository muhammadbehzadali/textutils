import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message,type)=>{
setalert({
  msg : message,
  type : type
})
setTimeout(() => {
  setalert(null);
}, 2000);
  };
  const togglemode=()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color= "white";
      showalert("Dark Mode Enabled","success")
      document.title = "Dark Mode Enabled";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color= "Black";
      showalert("Light Mode Enabled","primary")
    }
  }
  return (
    <>
<Navbar title = "Blog" link= "Connect" mode = {mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Textform showalert={showalert} heading="Enter Your Text Here" mode = {mode} />
</div>
</>
//     {/* <Router> */}

// {/* <Switch> */}
//           {/* <Route path="/about">
//             <About /> */}
//           {/* </Route> */}
//           {/* <Route path="/"> */}
//           {/* </Route> */}
//         {/* </Switch> */}

// {/* </Router> */}
// // 
// {/* <>

// <Router>
// <Navbar title = "Blog" link= "Connect" mode = {mode} togglemode={togglemode}/>
// <Alert alert={alert}/>
// <div className="container my-3">
//         <Routes>
//           <Route exact path="/" element={  <Textform showalert={showalert} heading="Enter Your Text Here" mode = {mode} />}/>
//           {/* <Route exact path="/about" element={<About/>}/> */}
//         {/* </Routes>
//       </div>
//     </Router> */} */

  );
}

export default App;
