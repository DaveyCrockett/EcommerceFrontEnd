import axios from 'axios'
import React, { Component } from 'react';
import Rating from './Rating'


  
function ProductDetail(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
        </tr>
            )

}

export default ProductDetail;