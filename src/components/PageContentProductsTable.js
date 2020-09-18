import React from 'react';
import '../assets/css/main.css';
import ProductsTableRow from './ProductsTableRow';

// // ||-- In case of reading external data from an API ...
// // Use:
// // import React from 'react';
// // class Product extends React.Component { // must add
// // or:
// import React, {Component} from 'react'; // replaces line 7
// class Product extends Component { // replaces line 8
// 	// Create the contructor
// 	constructor() {
// 		super() // "super" method has every property from Component object
// 		this.state = {
// 			productos: []
// 		}
// 	}
// 	// Create loading component
// 	// This component communicates with another application through an URL
// 	componentDidMount() {
// 		// fetch('http://localhost:5000/api/productos') // to use this URL format a proxy setup is needed in package.json (must restart server)
// 		fetch('/api/productos') // or whatever API's route
// 		.then(response => {return response.json()})
// 		.then(tableRows => {this.setState({tableRows: productos.data}) // this info is taken from the remote data source's API's controller
// 		// console.log(tableRows) // should get us a data array
// 		})
// 		.catch(err => {console.log(err)})
// 	}
// 	// ... then render the data --||
// }

// While not using remote data from an API, some data is created below for a quick example
let prod01 = {
    id: 1,
    name: 'Tiger Nixon',
    description: 'System Architect',
    price: 270000
};
let prod02 = {
    id: 2,
    name: 'Jane Doe',
    description: 'Fullstack developer',
    price: 320800
}
let tableRows = [prod01, prod02];

// And the data is sent through render
// render() { // !!! I SHOULD CHECK ON THIS FUNCTION FROM DANI'S EXAMPLE, replacing next line's function !!!
function PageContentProductsTable() {
    return (
        <React.Fragment>
    {/* <!-- PRODUCTS LIST --> */}
		<h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
		{/* <!-- DataTables Example --> */}
		<div className="card shadow mb-4">
			<div className="card-body">
				<div className="table-responsive">
					<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
						<thead>
							<tr>
                                <th>ID</th>
								<th>Name</th>
								<th>Description</th>
								<th>Price</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
                                <th>ID</th>
								<th>Name</th>
								<th>Description</th>
								<th>Price</th>
							</tr>
						</tfoot>
						<tbody>
							{tableRows.map((elements,i) => {
                                return <ProductsTableRow {...elements} key={i}/>
                            })}
						</tbody>
					</table>
				</div>
			</div>
		</div>
    </React.Fragment>
    );
}

export default PageContentProductsTable;