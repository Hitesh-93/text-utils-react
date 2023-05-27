// import logo from './logo.svg';
// import './App.css';

// import { useState } from "react";
import Navbar from "./Components/Navbar";
import Textform from './Components/Textform';

function App() {

// const [mode, setMode] = useState('')


  return (
    <>
      <Navbar />

      <div className="container">
        <Textform heading="Enter Your Text Here"/>
      </div>


    </>
  );
}

export default App;
