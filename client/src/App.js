// Dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";


//Components
import ProductsPage from "./components/ProductsPage";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import ContactsAdmin from './components/ContactsAdmin'

// CSS Files
import "./css/bootstrap.min.css";
import "./css/mdb.min.css";
import "./css/style.css";
import "./css/slide.css";
import "./App.css";

//React Context for cart
import MyContext from './components/Context'



class App extends React.Component {
  state = {
    cart: []
  }
  //Function for adding items to cart. Avoids creating copies by adding to a quantity counter
  addToCart = (addedProduct) => () => {
    //Checking if the product already exists in the cart
    const productExistsInCart = this.state.cart.some(product => addedProduct.productName === product.productName)
    //If it does not exist..
    if (!productExistsInCart) {
      //Copy the cart array from state to avoid mutating state
      const addProduct = this.state.cart.splice()
      //Push the added product to the cart
      addProduct.push(addedProduct)
      //Add a key and qunatity value to the added product
      const updatedCart = addProduct.map((product, index) => {
        if (product.productName === addedProduct.productName) {
          return {
            ...product,
            quantity: 1,
            key: index
          }
        } return product
      })
      //Spread current state with updated cart information
      this.setState(prevState => ({
        cart: [...prevState.cart, ...updatedCart]
      }))
      //If the product does exist..
    } else {
      // Add 1 to the quantity key for the added product
      const updatedCart = this.state.cart.map((product) => {
        if (product.productName === addedProduct.productName) {
          if (product.quantity) {
            return {
              ...product,
              quantity: product.quantity + 1
            }
          } else {
            return {
              ...product,
              quantity: 1
            }
          }
        }
        return product;
      })
      //Setting state to updated cart
      this.setState({ cart: updatedCart });
    }

  }
  
  render() {
    //Calculate total of products for showing in the navBar
    let totalOfProducts = 0;
    this.state.cart.forEach(product => {
      
      totalOfProducts += product.quantity;
    })
    //
    return (
      //Add in MyContext to keep track of items in cart
      <MyContext.Provider value={{
        cart: this.state.cart,
        addToCart: this.addToCart
      }}>
        {/* React router for navigating through pages without server call */}
        <Router>
          {/* <!--Navbar--> */}
          <nav className="navbar navbar-expand-lg navbar-dark primary-color">
            {/* <!-- Navbar brand --> */}
            <Link className="navbar-brand" to="/">
              DB Electronics
            </Link>

            {/* <!-- Collapse button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampl eNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* <!-- Collapsible content --> */}
            <div className="collapse navbar-collapse" id="basicExampleNav">
              {/* <!-- Links --> */}
              <ul className="navbar-nav mr-auto">
                <NavLink
                  className="navBarLink nav-link"
                  exact={true}
                  activeClassName="active"
                  to="/"
                >
                  <li className="nav-item">Home</li>
                </NavLink>
                <NavLink
                  className="navBarLink nav-link"
                  activeClassName="active"
                  to="/Products/"
                >
                  <li className="nav-item">Products</li>
                </NavLink>
                <NavLink
                  className="navBarLink nav-link"
                  activeClassName="active"
                  to="/Contact"
                >
                  <li className="nav-item">Contact Us!</li>
                </NavLink>
                <NavLink
                  className='navBarLink nav-link'
                  activeClassName="active"
                  to="/Cart"
                >
                  <li className="nav-item">Cart ({totalOfProducts})</li>
                </NavLink>
                <NavLink
                  className='navBarLink nav-link'
                  activeClassName="active"
                  to="/login"
                >
                  <li className="nav-item">Login</li>
                </NavLink>
              </ul>
              {/* <!-- Links --> */}
            </div>
            {/* <!-- Collapsible content --> */}
          </nav>
          {/* <!--/.Navbar--> */}
          <Route path="/" exact component={Home} />
          <Route path="/Products" component={ProductsPage} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/Login" component={Login} />
          <Route path="/Admin/uwW7Vn3c6JMpVSsyNSfW3s5okVpup7k0IKbWmZ9mu6cMNuiZXi" component={ContactsAdmin} />
          <Footer />
        </Router>
      </MyContext.Provider>
    );
  }
}

//Export App
export default App;