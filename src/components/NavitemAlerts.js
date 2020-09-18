import React from 'react';
import '../assets/css/main.css';
import Counter from './Counter';

let alerts = {
	qty: '3+'
};

function NavitemAlerts() {
    return (
		// <!-- Nav Item - Alerts -->
      	<li className="nav-item dropdown no-arrow mx-1">
			<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
				<i className="fas fa-bell fa-fw"></i>
				{/* <!-- Counter - Alerts --> */}
				<Counter {...alerts} />
			</a>
		</li>
  	);
}

export default NavitemAlerts;
