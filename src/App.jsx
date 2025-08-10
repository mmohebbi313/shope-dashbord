import logo from './logo.svg';
import './App.css';
import MainRout from './routers';
import { useRoutes } from 'react-router-dom';
import Header from './component/header/header';
import SideBar from './component/sidebar/sidebar';
import React  , { useState } from "react";


function App() {
  let [show , setShow] = useState(false)
  let importRoutes = useRoutes(MainRout)
  return (
   <div className='div'>
    <Header show={show} setShow={setShow}/>
    <div className='div-app'>
      { window.innerWidth <= 767 ? (
      <div className={ show ? "show" : "side"}> 
      <SideBar/>
      </div> 
      ) : (
      <SideBar/>
      )}

      {importRoutes}
    </div>
   </div>
  );
}

export default App;
