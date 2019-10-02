//Dependencies
import React from 'react';

const CheckoutProduct = props => (
  <tr>
    <td>{props.product.productName.slice('')}</td>
    <td>{props.product.productPrice}</td>
    <td>{props.product.quantity}</td>
    <td>{parseInt(props.product.quantity) * parseInt(props.product.productPrice)}</td>
  </tr>
)

//Export CheckoutProduct
export default CheckoutProduct;