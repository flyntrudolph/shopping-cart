import React, { Component } from 'react'


const CartItem = (props) => {
  return (
    <div class="list-group-item">
      <div class="row">
        <div class="col-md-8">{props.product}</div>
        <div class="col-md-2">{props.price}</div>
        <div class="col-md-2">{props.quantity}</div>
      </div>
    </div>

  )
}

export default CartItem
