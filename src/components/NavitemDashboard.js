import React from 'react';
import '../assets/css/main.css';

function NavitemDashboard() {
    return (
        <li className="nav-item active">
			<a className="nav-link" href="/">
				<i className="fas fa-fw fa-tachometer-alt"></i>
				<span>Dashboard</span>
			</a>
		</li>
  );
}

export default NavitemDashboard;
