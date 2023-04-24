<<<<<<< HEAD
import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/flashDeals/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Shop from "./components/shops/Shop"
import Contact from "./components/contact/contact"
import ProductDetail from './components/ProductDetails/ProductDetail'

function App() {
  const { productItems } = Data
  const { shopItems } = Sdata
  const [CartItem, setCartItem] = useState([])
  
  const addToCart = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)

=======
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import SearchResult from "./components/SearchResult/SearchResult";
import Shop from "./components/shops/Shop";
import Contact from "./components/contact/contact";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
>>>>>>> 52011ae56f49ef2bd7df82d205035d67042c5b55
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
<<<<<<< HEAD

      setCartItem([...CartItem, { ...product, qty: 1 }])
=======
      setCartItem([...CartItem, { ...product, qty: 1 }]);
>>>>>>> 52011ae56f49ef2bd7df82d205035d67042c5b55
    }
  };

<<<<<<< HEAD

  const decreaseQty = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)


=======
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
>>>>>>> 52011ae56f49ef2bd7df82d205035d67042c5b55
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
<<<<<<< HEAD

      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
=======
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
>>>>>>> 52011ae56f49ef2bd7df82d205035d67042c5b55
    }
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          </Route>
          <Route path="/cart" exact>
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
          <Route path="/shop" exact>
            <Shop shopItems={shopItems} addToCart={addToCart} />
          </Route>
          <Route path="/contact" exact>
            <Contact shopItems={shopItems} addToCart={addToCart} />
          </Route>
<<<<<<< HEAD
          <Route path='/products/:id' exact>
            <ProductDetail shopItems={shopItems} addToCart={addToCart} />
=======
          <Route path="/search-result" exact>
            <SearchResult shopItems={shopItems} addToCart={addToCart} />
>>>>>>> 52011ae56f49ef2bd7df82d205035d67042c5b55
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
