import react from "react";
import { userRows } from "../../datas";
import { useState } from "react";
import { data, Link } from 'react-router-dom';
import './user.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";



export default function Users (){

    let [dataUser , setDataUser] = useState([])
    let [number , setNumber] = useState(1)

    fetch('https://api.escuelajs.co/api/v1/users')
    .then(all => all.json())
    .then(data => setDataUser(data))
     
    const userDelete = (id) => {
        setDataUser( dataUser.filter( user =>user.id != id ))
    }

    let pagesize = 5
    let end = pagesize * number
    let start = end - pagesize
    let showUser = Math.ceil(dataUser.length / pagesize)
    let pagecount = Array.from(Array(showUser).keys())
    let lastAction  = dataUser.slice(start , end)

    const whatUserNP = () =>{
      setNumber( prev => prev + 1)
    }

    const whatUserNR = () =>{
        setNumber( prev => prev - 1)
      }

    const whatUserNU = (number) => {
         setNumber(number)
    }

    let wind = window.innerWidth

 return(
  wind <= 767 ? (
<div className="table-div1">
    {lastAction.length ? (
        <table className="table-div">
        <tr className="tr-class">
            <th className="th-class">ID</th>
            <th className="th-class">User</th>
            <th className="th-class">Email</th>
            <th className="th-class">Role</th>
            <th className="th-class-a">Action</th>
        </tr>
        {lastAction.map(data => (
           <tr className="tr-user">
           <td className="td-class">{data.id}</td>
           <Link to='/' className="link">
           <td className="td-user-class">
               <img src={data.avatar} alt="my img" className="class-img"/>
               {data.username}</td>
               </Link>
           <td className="td-class">{data.email}</td>
           <td className="td-class">{data.role}</td>
           <td className="td-button-class">
            <Link to = {`/user/${data.id}`} >
               <button className="button-ed">
               <MdEdit style={{color:"green" , fontSize:"17px"}}/>
               </button>
               </Link>
               <button className="button-de" onClick={() => userDelete(data.id)}>
               <MdDelete style={{color:"red" , fontSize:"17px"}}/>
               </button>
           </td>
       </tr> 
        ))}
    
    </table>
    ) : (
        <h3 style={{color:"red", marginBottom:"10px"}}>Loading...</h3>
    )}

    <div className="div-pagein">
    <button className="buty" onClick={() => whatUserNR() }><MdNavigateBefore/></button>
    {pagecount.map(ff => (
    ff > 0 && ff + 1 > number - 1 && ff + 1 < number + 3 && (
        <button className={ ff == number ? "button-active"   : "buty" } onClick={() => whatUserNU(ff)}>{ff}</button> 

    ) 
    ))}
    <button className="buty" onClick={() => whatUserNP() }><MdNavigateNext/></button>
    </div>
</div>
 ) : (
<div className="table-div1">
    {lastAction.length ? (
        <table className="table-div">
        <tr className="tr-class">
            <th className="th-class">ID</th>
            <th className="th-class">User</th>
            <th className="th-class">Email</th>
            <th className="th-class">Role</th>
            <th className="th-class">Password</th>
            <th className="th-class-a">Action</th>
        </tr>
        {lastAction.map(data => (
           <tr className="tr-user">
           <td className="td-class">{data.id}</td>
           <Link to='/' className="link">
           <td className="td-user-class">
               <img src={data.avatar} alt="my img" className="class-img"/>
               {data.username}</td>
               </Link>
           <td className="td-class">{data.email}</td>
           <td className="td-class">{data.role}</td>
           <td className="td-class">{data.password}</td>
           <td className="td-button-class">
            <Link to = {`/user/${data.id}`} >
               <button className="button-ed">
               <MdEdit style={{color:"green" , fontSize:"17px"}}/>
               </button>
               </Link>
               <button className="button-de" onClick={() => userDelete(data.id)}>
               <MdDelete style={{color:"red" , fontSize:"17px"}}/>
               </button>
           </td>
       </tr> 
        ))}
    
    </table>
    ) : (
        <h3 style={{color:"red", marginBottom:"10px"}}>Loading...</h3>
    )}

    <div className="div-pagein">
    <button className="buty" onClick={() => whatUserNR() }><MdNavigateBefore/></button>
    {pagecount.map(ff => (
    ff > 0 && ff + 1 > number - 1 && ff + 1 < number + 3 && (
        <button className={ ff == number ? "button-active"   : "buty" } onClick={() => whatUserNU(ff)}>{ff}</button> 

    ) 
    ))}
    <button className="buty" onClick={() => whatUserNP() }><MdNavigateNext/></button>
    </div>
</div>
 )


 );
}