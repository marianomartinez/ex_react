import React from 'react';
import '../assets/css/main.css';

function ProductList(props) {
    return(
        <tr>
            <td>{props.id}</td>
        	<td>{props.name}</td>
        	<td>{props.description}</td>
        	<td>${props.price}</td>
        </tr>
    )
}

export default ProductList;