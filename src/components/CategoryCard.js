import React from 'react';
import '../assets/css/main.css';

function CategoryCard(props,i) {
    return (
        <div className="col-lg-6 mb-4">
		    <div className="card bg-info text-white shadow">
		    	<div className="card-body">{props.titulo}</div>
		    </div>
		</div>
    );
}

export default CategoryCard;