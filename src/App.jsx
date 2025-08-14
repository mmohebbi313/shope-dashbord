import logo from './logo.svg';
import './App.css';
import MainRout from './routers';
import { useRoutes } from 'react-router-dom';
import Header from './component/header/header';
import SideBar from './component/sidebar/sidebar';
import React  , { useState } from "react";
import { useRef , useEffect } from 'react';


function App() {
  let [show , setShow] = useState(false)
  let importRoutes = useRoutes(MainRout)
  let sidebarRef = useRef(null)

useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

 
  return (

   <div className='div'>
    <Header show={show} setShow={setShow}/>
    <div className='div-app'>
      { window.innerWidth <= 767 ? (
      <div ref={sidebarRef} className={ show ? "show" : "side"}> 
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
