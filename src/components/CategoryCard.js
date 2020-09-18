import React from 'react';
import '../assets/css/main.css';

function CategoryCard(props,i) {
    return (
        <div class="col-lg-6 mb-4">
		    <div class="card bg-info text-white shadow">
		    	<div class="card-body">{props.titulo}</div>
		    </div>
		</div>
    );
}

export default CategoryCard;