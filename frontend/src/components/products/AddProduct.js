import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  let history = useHistory();
  const [product, setProduct] = useState({
    productId: "",
    name: "",
    price: "",  
    offerprice: "",
    imagUrl: "",
    category : "",
    description : ""
  });
  const {productId,name,price,offerprice,imagUrl,category,description} = product;
  
  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/admin/addProducts", product)
    .then((posRes)=>{
      alert(posRes.data.message);
      history.push("/");
  },(errRes)=>{
   console.log(errRes);
    });
   
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Product ID"
              name="productId"
              value={productId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Imageurl"
              name="imagUrl"
              value={imagUrl}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Product Offer Price"
              name="offerprice"
              value={offerprice}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product category"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
