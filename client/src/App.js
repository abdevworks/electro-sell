import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";
import Account from "./Views/Account";
import Basket from "./Views/Basket";
import ProductCategory from "./Views/ProductCategory";




function App() {
  return (
    <div className="relative pb-10 min-h-screen ">

      <Router>
        <Header />

        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/basket">
              <Basket />
            </Route>
            <Route exact path="/contact">
              <About />
            </Route>
          </Switch>
            
          <Switch>
            <Route exact path="/product-category">
              <ProductCategory />
            </Route>
            <Route exact path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>


    </div>
  );
}

export default App;
