import React, { Component } from 'react';
import CartItem from './CartItem';




const CartItems = (props) => {
  console.log(props)
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {props.list.map(list =>
            <CartItem
              key={list.id}
              product={list.product.name}
              price={list.product.priceInCents}
              quantity={list.quantity}
            />
          )}

        </div>
      </div>
)
}

export default CartItems
