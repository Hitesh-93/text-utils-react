// import logo from './logo.svg';
// import './App.css';

import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Textform name="Add your Text here" />
      </div>


    </>
  );
}

export default App;
