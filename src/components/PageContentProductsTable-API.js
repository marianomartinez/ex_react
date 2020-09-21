// ||-- In case of reading external data from an API ...
import React, {Component} from 'react';
import '../assets/css/main.css';
import ProductsTableRow from './ProductsTableRow';

class PageContentProductsTable extends Component {
	// Create the contructor
	constructor() {
		super() // "super" method has every property from Component object
		this.state = {
			tableRows: []
		}
	}
	// Create loading component
	// This component communicates with another application through an URL
	componentDidMount(){
		fetch('/api/productos') // or whatever API's route. ! Proxy setup is needed in package.json (must restart server) !
		.then(response => {return response.json()})
		.then(remoteData => {this.setState({tableRows: remoteData.data}) // this info is taken from the remote data source's API's controller
		// console.log(tableRows) // should get us a data array
		})
		.catch(err => {console.log(err)})
	}
	// And the data is sent through render (API) or function (local data example)
	render() { // !!! I SHOULD CHECK ON THIS FUNCTION FROM DANI'S EXAMPLE, replacing next line's function !!!
	// function PageContentProductsTable() {
	    return (
	        <React.Fragment>
	    {/* <!-- PRODUCTS LIST --> */}
			<h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
			{/* <!-- DataTables Example --> */}
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
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
								{this.state.tableRows.map((elements,i) => {
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
}

export default PageContentProductsTable;