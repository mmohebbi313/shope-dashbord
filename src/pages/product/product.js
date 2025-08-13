import react from "react";
import './product.css'
import { products } from "../../datas";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


export default function Product (){

    let [data , setData] = useState(products)
     
    const Delete = (id) => {
        setData( data.filter( user =>user.id != id ))
    }


 return(

<table className="table-div">
    <tr className="tr-class">
        <th className="th-class">ID</th>
        <th className="th-class">Name</th>
        <th className="th-class">Price</th>
        <th className="th-class-a">Action</th>
    </tr>
    {data.map(data => (
       <tr className="tr-user">
       <td className="td-class">{data.id}</td>
       <Link to='/' className="link">
       <td className="td-user-class">
           <img src={data.avatar} alt="my img" className="class-img"/>
           {data.title}</td>
           </Link>
       <td className="td-class">${data.price}</td>
       <td className="td-button-class">
        <Link to = {`/product/${data.id}`} >
           <button className="button-ed">
           <MdEdit style={{color:"green" , fontSize:"17px"}}/>
           </button>
           </Link>
           <button className="button-de" onClick={() => Delete(data.id)}>
           <MdDelete style={{color:"red" , fontSize:"17px"}}/>
           </button>
       </td>
   </tr> 
    ))}
</table>
 );
}