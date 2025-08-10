import react from "react";
import './header.css';
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";


export default function Header ({show , setShow}){

    return(
        <>
        <div className="first-div">
        <div className="main-div">
          <div className="left-div">
            <h1 className="mohebbi">Mohebbi Shope...</h1>
            <button onClick={ ()=> setShow(!show)} className="button">
              
              <p>Menu</p>

              <MdOutlineNavigateNext className={show ? "naviclick" : "navi"} />
            </button>
          </div>
          
          <div className="right-div">
          <div className="div-icons">
            <div className="notif">
            <IoMdNotificationsOutline className="icon"/>
            <span className="span">2</span>
            </div>
            <div>
            <CiGlobe className="icon"/>
            <span className="span">1</span>
            </div>
            <div>
            <IoSettingsOutline className="icon"/>
            <span className="span">11</span>
            </div>
            </div>
            <div>
                <img src="/img/myimg.jpg" alt="my img" className="img"/>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}