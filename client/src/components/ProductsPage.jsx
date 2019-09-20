// Dependencies
import React from "react";

// Components
import Product from "./Product";

// JSON
import products from "../products.json";

// CSS Files
import "../css/bootstrap.min.css";
import "../css/mdb.min.css";
import "../css/style.css";
import "../App.css";

class ProductsPage extends React.Component {
  state = {
    productsMap: products.products
  };

  sortByPriceHandler = () => {
    function compareByPrice(a, b) {
      const priceA = a.productPrice;
      const priceB = b.productPrice;
      return priceA - priceB;
    }
    this.setState({
      productsMap: this.state.productsMap.slice().sort(compareByPrice)
    });
  };
  sortByTypeHandler = () => {
    function compareByType(a, b) {
      const typeA = a.productType;
      const typeB = b.productType;
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
      productsMap: this.state.productsMap.slice().sort(compareByType)
    });
  };
  unsortHandler = () => {
    this.setState({ productsMap: products.products });
  };

  render() {
    return (
      <div className="page-wrapper">
        <div className="container container-bg productsDiv">
          <div className="dropdown">
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

          <div className="row sortedProductsRow">
            {this.state.productsMap.map((value, i) => {
              return (
                <Product
                  key={i}
                  productName={value.productName}
                  productPrice={value.productPrice}
                  productType={value.productType}
                  productDescription={value.productDescription}
                  productImage={value.productImage}
                  productImageAlt={value.productImageAlt}
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
