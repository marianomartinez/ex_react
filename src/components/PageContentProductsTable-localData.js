// ||-- In case of reading locally defined data ...
import React from 'react';
import '../assets/css/main.css';
import ProductsTableRow from './ProductsTableRow';

// While not using remote data from an API, some data is defined below for a quick example
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

// And the data is sent through render (API) or function (local data example)
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