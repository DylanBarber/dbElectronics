// Dependencies
import React from "react";

// Components
import Product from "./Product";

// CSS Files
import "../css/bootstrap.min.css";
import "../css/mdb.min.css";
import "../css/style.css";
import "../App.css";


class ProductsPage extends React.Component {
  state = {
    products: []
  };
  componentDidMount = () => {
    this.fetchAllProducts()();
  }
  fetchAllProducts = (product_type) => async () => {
    const port = process.env.PORT || 25565;
    // Fetch all products
    if (product_type){
      console.log(product_type);
      const fetchData = await fetch(`http://localhost:${port}/api/products/?type=${product_type}`);
      const data = await fetchData.json();
      this.setState({products: data})
      return;
    }
    const fetchData = await fetch(`http://localhost:${port}/api/products`);
    const data = await fetchData.json();
    this.setState({products: data})
  }
  sortByPriceHandler = () => {
    function compareByPrice(a, b) {
      const priceA = a.product_price;
      const priceB = b.product_price;
      return priceA - priceB;
    }
    this.setState({
      products: this.state.products.slice().sort(compareByPrice)
    });
  };
  sortByTypeHandler = () => {
    function compareByType(a, b) {
      const typeA = a.product_type;
      const typeB = b.product_type;
      if (typeA < typeB) {
        return -1;
      }
      if (typeA > typeB) {
        return 1;
      } else {
        return 0;
      }
    }
    this.setState({
      products: this.state.products.slice().sort(compareByType)
    });
  };
  unsortHandler = () => {
    this.fetchAllProducts()();
  };
  unfilterHandler = () => {
    this.fetchAllProducts()();
  };

  render() {
    return (
      <div className="page-wrapper">
        <div className="container container-bg productsContainer-bg productsDiv">
          <div className="dropdown sortAndFilter">
            <a
              className="dropdownButton btn dropdown-toggle"
              href="###"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="###" onClick={this.sortByTypeHandler}>
                Sort by type
              </a>
              <a className="dropdown-item" href="###" onClick={this.sortByPriceHandler}>
                Sort by price
              </a>
              <a className="dropdown-item" href="###" onClick={this.unsortHandler}>
                Unsort
              </a>
            </div>
          </div>
          <div className="dropdown sortAndFilter">
            <a
              className="dropdownButton btn dropdown-toggle"
              href="###"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filter
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="###" onClick={this.fetchAllProducts('computer')}>
                Computers
              </a>
              <a className="dropdown-item" href="###" onClick={this.fetchAllProducts('camera')}>
                Cameras
              </a>
              <a className="dropdown-item" href="###" onClick={this.fetchAllProducts('printer')}>
                Printers
              </a>
              <a className="dropdown-item" href="###" onClick={this.unsortHandler}>
                Unfilter
              </a>
            </div>
          </div>

          <div className="row sortedProductsRow">
            {this.state.products.map((value, i) => {
              return (
                <Product
                  key={i}
                  productName={value.product_name}
                  productPrice={value.product_price}
                  productType={value.product_type}
                  productDescription={value.product_description}
                  productImage={value.product_image}
                  productImageAlt={value.product_name}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsPage;
