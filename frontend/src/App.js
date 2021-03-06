import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";
import Products from "./components/products/Products";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/add" component={AddProduct} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
          <Route exact path="/products/:id" component={Products} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
