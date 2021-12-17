import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

const  App=()=> {
  const [products,setProducts]=useState({})
  const fetchData=async()=>{
        const response=await axios.get('https://s3.amazonaws.com/open-to-cors/assignment.json')
        const {products}=response.data;
        setProducts(products);
       
  }
  useEffect(()=>{
       try {
            fetchData()
       } catch (error) {
         console.log(error)
       }
  },[])
  const arrayProduct=Object.keys(products).map(product=>products[product]);
  arrayProduct.sort((a,b)=>b.popularity-a.popularity)
  return (
    <div class="container">
    <ul class="responsive-table">
      <li class="table-header">
        <div class="col-1">Product Name</div>
        <div class=" col-2" >Subcategory</div>
        <div class="col-3">Price</div>
        <div class="col-4">Popularity</div>
      </li>
      {arrayProduct.map((product,index)=>{
        return(<li class="table-row">
        <div class="col-1" >{product.title}</div>
        <div class="col-2" >{product.subcategory}</div>
        <div class="col-3" >₹{product.price}</div>
        <div class="col-4" >{product.popularity}</div>
      </li>)

        
      })}
      
         </ul>
  </div>
  );
}

export default App;
