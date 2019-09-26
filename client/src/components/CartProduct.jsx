import React from 'react';

const CartProduct = props => {

  return (
    <tr>
      <th scope="row">
        <img src={props.product.productImage} alt={props.product.productImageAlt} className="img-fluid z-depth-0"></img>
      </th>
      <td>
        <h5 className="mt-3">
          <strong>{props.product.productName}</strong>
        </h5>
      </td>
      <th></th>
      <td>${props.product.productPrice}</td>
      <td>
        <input type="number" placeholder={props.product.quantity} aria-label="Search" className="form-control" style={{ width: "100px" }}></input>
      </td>
      <td className="font-weight-bold">
        <strong>{props.product.productTotal}</strong>
      </td>
      <td>
        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item">X
        </button>
      </td>
    </tr>

  )
}

export default CartProduct; 