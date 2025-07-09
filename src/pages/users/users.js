import react from "react";
import { userRows } from "../../datas";
import { useState } from "react";
import { Link } from 'react-router-dom';
import './user.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


export default function Users (){

    let [dataUser , setDataUser] = useState(userRows)
     
    const userDelete = (id) => {
        setDataUser( dataUser.filter( user =>user.id != id ))
    }


 return(

<table className="table-div">
    <tr className="tr-class">
        <th className="th-class">ID</th>
        <th className="th-class">User</th>
        <th className="th-class">Email</th>
        <th className="th-class">Status</th>
        <th className="th-class">Transaction</th>
        <th className="th-class-a">Action</th>
    </tr>
    {dataUser.map(data => (
       <tr className="tr-user">
       <td className="td-class">{data.id}</td>
       <Link to='/' className="link">
       <td className="td-user-class">
           <img src={data.avatar} alt="my img" className="class-img"/>
           {data.username}</td>
           </Link>
       <td className="td-class">{data.email}</td>
       <td className="td-class">{data.status}</td>
       <td className="td-class">{data.transaction}</td>
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
 );
}