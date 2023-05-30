// import logo from './logo.svg';
// import './App.css';

// import { useState } from "react";
// import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Textform from './Components/Textform';

function App() {

  // const [mode, setMode] = useState('')


  return (
    <>
      <Navbar />

      <Alert />

      <div className="container">
        <Textform heading="Enter Your Text Here" />

        {/* <About /> */}
      </div>


    </>
  );
}

export default App;
