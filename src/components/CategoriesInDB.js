import React from 'react';
import '../assets/css/main.css';
import CategoryCard from './CategoryCard';

let category1 = {titulo: 'Category 01'};
let category2 = {titulo: 'Category 02'};
let category3 = {titulo: 'Category 03'};
let category4 = {titulo: 'Category 04'};
let category5 = {titulo: 'Category 05'};
let category6 = {titulo: 'Category 06'};
let card = [category1, category2, category3, category4, category5, category6];

function CategoriesInDB() {
    return (
		// <!-- Categories in DB -->
        <div className="col-lg-6 mb-4">						
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
				</div>
				<div className="card-body">
					<div className="row">
						{card.map((elements,i) => {
							return <CategoryCard {...elements} key={i}/>
						})}
					</div>
				</div>
			</div>
		</div>
  	);
}

export default CategoriesInDB;
