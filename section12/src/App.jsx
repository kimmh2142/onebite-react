import './App.css'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'
import Button from './componeents/Button'
import Header from './componeents/Header'

import { getEmotionImage } from './util/get-emotion-image'

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Header title={"Header"} 
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button 
        text={123} 
        onClick={()=>{console.log("sss");}}
      />

      <Button 
        text={123} 
        type={"POSITIVE"}
        onClick={()=>{console.log("sss");}}
      />

      <Button 
        text={123} 
        type={"NEGATIVE"}
        onClick={()=>{console.log("sss");}}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
 