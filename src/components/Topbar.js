import React from 'react';
import '../assets/css/main.css';
import SidebarToggle from './SidebarToggle';
import TopbarNavbar from './TopbarNavbar';

function Topbar() {
    return (
      // <!-- Topbar -->
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <SidebarToggle/>
        <TopbarNavbar/>

      </nav>
      // <!-- End of Topbar -->
  );
}

export default Topbar;
