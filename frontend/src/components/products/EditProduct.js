import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
  let history = useHistory();
  const { id } = useParams();
  const [product, setProducts] = useState({
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
    setProducts({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/admin/updateProduct/${id}`, product)
    .then((posRes)=>{
      alert(posRes.data);
      history.push("/");
  },(errRes)=>{
   console.log(errRes);
    });
   
  };

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:3001/admin/listProductById/${id}`)
    .then((posRes)=>{
      setProducts(posRes.data);
  },(errRes)=>{
   console.log(errRes);
    });
    
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Product</h2>
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
          <button className="btn btn-warning btn-block">Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
