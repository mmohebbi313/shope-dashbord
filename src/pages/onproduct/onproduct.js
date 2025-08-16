import React from "react";
import { Link, useParams } from 'react-router-dom'
import { productsData } from '../../datas'
import Chart from "../../component/chart/chart";
import './onproduct.css'
import { MdFileUpload } from "react-icons/md";
import { products } from "../../datas";
export default function OnProduct (){

         let  idProduct  = useParams()        
       
         let productId = idProduct

         let sizePage = window.innerWidth

         const show = products.find( dada => dada.id == productId.productId)         
         
    return (

        <div className='product'>
    
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Product</h1>
                <Link to="/newProduct">
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>
     
            <div className="productTop">
    
               <div className={sizePage <= 767 ? "" : "productTopLeft"}>
                <Chart title="Sale In Month" data={show.analiz} datakey="sales" />
              </div> 

               
              
                 <div className="productTopRight">
                <div className="productInfoTop">
                 <img  src={show.avatar}  alt="Dell LapTop" className='productInfoImg' /> 
                  <span className='productName'>{show.title}</span>
                </div> 
    
    
                <div className="productInfoBottom">
                  <div className="productInfoItem">
                    <div className="productInfoKey">ID: </div>
                    <div className="productInfoValue">{show.id}</div>
                  </div>
                  <div className="productInfoItem">
                    <div className="productInfoKey">Name: </div>
                    <div className="productInfoValue">{show.title}</div>
                  </div>
                  <div className="productInfoItem">
                    <div className="productInfoKey">Sales: </div>
                    <div className="productInfoValue">{show.sales}</div>
                  </div>
                  <div className="productInfoItem">
                    <div className="productInfoKey">Active: </div>
                    <div className="productInfoValue">{show.active}</div>
                  </div>
                  <div className="productInfoItem">
                    <div className="productInfoKey">In Stock: </div>
                    <div className="productInfoValue">{show.stock}</div>
                  </div>
                </div>
    
               
              </div>
     



            </div>
             
             <div className="productBottom">
          <form className="productForm">

            <div className='productFormLeft'>
              <label>Product Name</label>
              <input type="text" placeholder={show.title} />

              <label>In Stock</label>
              <select id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label>Active</label>
              <select id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

            </div>

            <div className='productFormRight'>

              <div className='productUploader'>
                <img src={show.avatar} alt="profile photo" className='productUploaderImg' />
                <label>
                  < MdFileUpload />
                </label>
                <input type="file" style={{display: "none"}} />
              </div>

              <button className='productButton'>Upload (Edit)</button>

            </div>

          </form>
        </div> 

        </div>
      )

      
}

