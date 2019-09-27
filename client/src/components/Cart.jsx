//Dependencies
import React from 'react';
import { NavLink } from "react-router-dom";

//Components
import CartProduct from './CartProduct';

//React Context for cart information
import MyContext from './Context';

const Cart = () => {
  return (
    <MyContext.Consumer>
      {(context) => {
        //Mapping over cart products array to display a CartProduct component for each 
        const cartProducts = context.cart.map((product, index) => (
          <CartProduct
            product = {product}
            key = {index}
          />
        ))
        let subtotal = 0;
        context.cart.forEach(product => {
            subtotal += product.quantity * product.productPrice;
          })
        return (
          <div className="container container-bg cartContainer" >
            <div className="table-responsive">

              <table className="table product-table">

                {/* <!-- Table head --> */}
                <thead className="mdb-color lighten-5">
                  <tr>
                    <th></th>
                    <th className="font-weight-bold">
                      <strong>Product</strong>
                    </th>
                    <th></th>
                    <th className="font-weight-bold">
                      <strong>Price</strong>
                    </th>
                    <th className="font-weight-bold">
                      <strong>QTY</strong>
                    </th>
                    <th className="font-weight-bold">
                      <strong>Amount</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                {/* <!-- /.Table head --> */}

                {/* <!-- Table body --> */}
                <tbody>
                  {cartProducts}
                  {/* <!-- /.Third row --> */}

                  {/* <!-- Fourth row --> */}
                  <tr>
                    <td colSpan="3"></td>
                    <td>
                      <h4 className="mt-2">
                        <strong>Total</strong>
                      </h4>
                    </td>
                    <td className="text-right">
                      <h4 className="mt-2">
                        <strong>${subtotal}</strong>
                      </h4>
                    </td>
                    <td colSpan="3" className="text-right">
                      <NavLink to="/Checkout">
                        <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light">Checkout
                  <i className="fas fa-angle-right right"></i>
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                  {/* <!-- Fourth row --> */}

                </tbody>
                {/* <!-- /.Table body --> */}

              </table>

            </div>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
}

export default Cart;