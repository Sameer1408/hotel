import logo from './logo.svg';
import './App.css';
import DashBoard from './Components/DashBoard';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [id,setId] = useState(0);
  const [data,setData] = useState({});
  const [img,setImg] = useState("")

  return (
    <Router>  
    <div className="">
    <Routes>
      <Route path="/" exact element={<DashBoard  setId={setId}/>} ></Route>
      <Route path={`property/${id}`}></Route>
       </Routes>
         </div>
    </Router>
  );
}

export default App;