import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState({
    name : "",
    price: "",
    offerprice: "",
    imagUrl: "",
    category:"",
    description: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/admin/listProductById/${id}`)
    .then((posRes)=>{
      setProduct(posRes.data);
  },(errRes)=>{
   console.log(errRes);
    });
   
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Product Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">product name: {product.name}</li>
        <li className="list-group-item">image url: {product.imagUrl}</li>
        <li className="list-group-item">product price: {product.price}</li>
        <li className="list-group-item">product offer price: {product.offerprice}</li>
        <li className="list-group-item">product description: {product.description}</li>
        <li className="list-group-item">product category: {product.category}</li>
      </ul>
    </div>
  );
};

export default Product;
