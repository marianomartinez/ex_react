import React from 'react';
import '../assets/css/main.css';

function SidebarBrand() {
    return (
		// <!-- Sidebar - Brand -->
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
			<div className="sidebar-brand-icon">
				<i className="fas fa-chart-line"></i>
			</div>
			<div className="sidebar-brand-text mx-3">Admin</div>
		</a>
  );
}

export default SidebarBrand;
