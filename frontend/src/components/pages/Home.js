import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:3001/admin/listProducts")
    .then((posRes)=>{
      setProducts(posRes.data);
  },(errRes)=>{
   console.log(errRes);
    });
   
  };

  const deleteProduct = async id => {
    await axios.delete(`http://localhost:3001/admin/deleteProduct/${id}`)
    .then((posRes)=>{
      alert(posRes.data.message);
      loadProducts();
  },(errRes)=>{
  console.log(errRes);
});
    
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Offer Price</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prods, index) => (
              <tr>
                <th scope="row">{prods.productId}</th>
                <td><img src={prods.imagUrl} width="150" height="100" alt={prods.name}/></td>
                <td>{prods.name}</td>
                <td>{prods.price}</td>
                <td>{prods.offerprice}</td>
                <td>{prods.description}</td>
                <td>{prods.category}</td>
                
                <td>
                  <Link class="btn btn-primary mr-2" to={`/products/${prods.productId}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/products/edit/${prods.productId}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                     onClick={() => deleteProduct(prods.productId)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
