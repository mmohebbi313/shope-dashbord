import React from "react";
import './sidebar.css'
import { RiHomeLine } from "react-icons/ri";
import { IoAnalyticsSharp } from "react-icons/io5";
import { RiCashLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { LuUserPlus } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { VscReport } from "react-icons/vsc";
import { GoMail } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";
import { FiMessageSquare } from "react-icons/fi";
import { MdManageHistory } from "react-icons/md";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export default function SideBar (){
    return(
        <div className="container">
            <div className="group-div">
                <h3 className="h3-div">Dashbord</h3>
                <ul className="ul-div">
                    <NavLink to='/' className="link">
                    <li className="li-div">
                        <RiHomeLine/>
                       Home
                    </li>
                    </NavLink>
                    <li className="li-div unActive">
                        <IoAnalyticsSharp/>
                        Analiytics
                        <p style={{fontSize:"10px"}}>Developing...</p>
                    </li>
                    <li className="li-div unActive">
                        <RiCashLine/>
                        Sales  <p style={{fontSize:"10px"}}>Developing...</p>

                    </li>
                </ul>
            </div>
            {/* //// */}
            <div className="group-div">
                <h3 className="h3-div">Quik Menu</h3>
                <ul className="ul-div">
                    <NavLink to='/users' className="link">
                    <li className="li-div">
                        <LuUser/>
                        Users
                    </li>
                    </NavLink>
                    <NavLink to='/newuser' className="link">
                    <li className="li-div unActive">
                        <LuUserPlus/>
                        New User  <p style={{fontSize:"10px"}}>Developing...</p>

                    </li>
                    </NavLink>
                    <NavLink to='/product' className="link">
                    <li className="li-div">
                        <AiOutlineProduct/>
                        Prouducts  

                    </li>
                    </NavLink>
                    <li className="li-div unActive">
                        <GrTransaction/>
                        Transaction   <p style={{fontSize:"10px"}}>Developing...</p>

                    </li>
                    <li className="li-div unActive">
                        <VscReport/>
                        Reports   <p style={{fontSize:"10px"}}>Developing...</p>

                    </li>
                </ul>
            </div>
            {/* //// */}
            <div className="group-div">
                <h3 className="h3-div">Notification</h3>
                <ul className="ul-div">
                    <li className="li-div unActive">
                        <GoMail/>
                        Mail  <p style={{fontSize:"10px"}}>Developing...</p>

                    </li>
                    <li className="li-div unActive">
                        <VscFeedback/>
                        Feedback <p style={{fontSize:"10px"}}>Developing...</p>
                    </li>
                    <li className="li-div unActive">
                        <FiMessageSquare/>
                        Meassage <p style={{fontSize:"10px"}}>Developing...</p>
                    </li>
                </ul>
            </div>
            {/* ///// */}
            <div className="group-div">
                <h3 className="h3-div">Staff</h3>
                <ul className="ul-div">
                    <li className="li-div unActive">
                        <MdManageHistory/>
                        Manage <p style={{fontSize:"10px"}}>Developing...</p>
                    </li>
                    <li className="li-div unActive">
                        <IoAnalyticsSharp/>
                        Analytics <p style={{fontSize:"10px"}}>Developing...</p>
                    </li>
                    <li className="li-div unActive">
                    <VscReport/>
                        Reports <p style={{fontSize:"10px"}}>Developing...</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}