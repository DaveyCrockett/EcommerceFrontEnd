import React from 'react';
import Rating from './Rating'
import Reviews from './Review'

  
function ProductDetail(props) {
    return (
         <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
            <td><Rating key={props.id} /></td>
            <td><Reviews key={props.id} /></td>
        </tr>
            );

}

export default ProductDetail;