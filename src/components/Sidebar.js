import React from 'react';
import '../assets/css/main.css';
import SidebarBrand from './SidebarBrand';
import NavitemDashboard from './NavitemDashboard';
import NavitemPages from './NavitemPages';
import NavitemCharts from './NavitemCharts';
import NavitemTables from './NavitemTables';


function Sidebar() {
    return (
        // <!-- Sidebar -->
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            
            {/* <!-- Sidebar - Brand --> */}
            <SidebarBrand/>

            {/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <NavitemDashboard/>

            {/* <!-- Divider --> */}
			<hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>

            {/* <!-- Nav Item - Pages --> */}
            <NavitemPages/>

            {/* <!-- Nav Item - Charts --> */}
            <NavitemCharts/>

            {/* <!-- Nav Item - Tables --> */}
            <NavitemTables/>

            {/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block"/>
        </ul>
        // <!-- End of Sidebar -->
    );
}

export default Sidebar;
