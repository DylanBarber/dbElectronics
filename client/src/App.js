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

// CSS Files
import "./css/bootstrap.min.css";
import "./css/mdb.min.css";
import "./css/style.css";
import "./css/slide.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
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
              </ul>
              {/* <!-- Links --> */}
            </div>
            {/* <!-- Collapsible content --> */}
          </nav>
          {/* <!--/.Navbar--> */}
          <Route path="/" exact component={Home} />
          <Route path="/Products" component={ProductsPage} />
          <Route path="/Contact" component={Contact} />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
