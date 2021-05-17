// import picture from './assets/img/pexels-mike-c-s-6112813.jpg'
import './App.css';
import {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';

function App() {

  return (

    <Router>
      <Routes/>
    </Router>

    
  );
  // const [num,setNum]= useState(0);

  // const handleIncrement=()=>{
  //   setNum(num+1);

  // }
  // const handleDecrement=()=>{
  //   setNum(num-1)
  //   console.log( num);

  // }
  // return (
  //   <div className="App">
  //     {/* <p>Output: {num} </p>
  //     <button onClick = {handleIncrement}>Increment</button>
  //     <button onClick = {handleDecrement}>Decrement</button>
  //     <header className="App-header">
  //       <img src={picture} className="App-logo" alt="logo" />
  //       <p>
  //         Conso <code>wake up and </code> enjoy all stories.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header> */}
  //   </div>
  // );
}

export default App;
