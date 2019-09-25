import React from "react";

//React Context
import MyContext from './Context'

const Product = props => {
  return (
    <MyContext.Consumer>
      {({ addToCart }) => (
        <div data-type={props.productType} data-price={props.productPrice} className="col-md-4 sortclassName">
          {/* <!-- Card --> */}
          <div className="card">
            {/* <!-- Card image --> */}
            <div className="view overlay">
              <img className="card-img-top" src={props.productImage} alt={props.productImageAlt} />
              <a href="#!">
                <div className="mask rgba-white-slight" />
              </a>
            </div>

            {/* <!-- Card content --> */}
            <div className="card-body">
              {/* <!-- Title --> */}
              <h4 className="card-title">{props.productName}</h4>
              {/* <!-- Text --> */}
              <p className="card-text">${props.productPrice}</p>
              {/* <!-- Button --> */}
              <p className="card-text">{props.productDescription}</p>
              <a href="##" className="btn btn-primary" onClick={addToCart(props)}>
                Add to Cart
          </a>
            </div>
          </div>
          {/* <!-- Card --> */}
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Product;
