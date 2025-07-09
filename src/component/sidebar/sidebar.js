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
                    <li className="li-div">
                        <IoAnalyticsSharp/>
                        Analiytics
                    </li>
                    <li className="li-div">
                        <RiCashLine/>
                        Sales
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
                    <li className="li-div">
                        <LuUserPlus/>
                        New User
                    </li>
                    </NavLink>
                    <NavLink to='/product' className="link">
                    <li className="li-div">
                        <AiOutlineProduct/>
                        Prouducts
                    </li>
                    </NavLink>
                    <li className="li-div">
                        <GrTransaction/>
                        Transaction
                    </li>
                    <li className="li-div">
                        <VscReport/>
                        Reports
                    </li>
                </ul>
            </div>
            {/* //// */}
            <div className="group-div">
                <h3 className="h3-div">Notification</h3>
                <ul className="ul-div">
                    <li className="li-div">
                        <GoMail/>
                        Mail
                    </li>
                    <li className="li-div">
                        <VscFeedback/>
                        Feedback
                    </li>
                    <li className="li-div">
                        <FiMessageSquare/>
                        Meassage
                    </li>
                </ul>
            </div>
            {/* ///// */}
            <div className="group-div">
                <h3 className="h3-div">Staff</h3>
                <ul className="ul-div">
                    <li className="li-div">
                        <MdManageHistory/>
                        Manage
                    </li>
                    <li className="li-div">
                        <IoAnalyticsSharp/>
                        Analytics
                    </li>
                    <li className="li-div">
                    <VscReport/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    )
}