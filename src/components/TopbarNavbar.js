import React from 'react';
import '../assets/css/main.css';
import NavitemAlerts from './NavitemAlerts';
import NavitemMessages from './NavitemMessages';
import NavitemUserInfo from './NavitemUserInfo';

function TopbarNavbar() {
    return (
      <ul className="navbar-nav ml-auto">
        <NavitemAlerts/>
        <NavitemMessages/>
        <div className="topbar-divider d-none d-sm-block"></div>
        <NavitemUserInfo/>        
      </ul>
  );
}

export default TopbarNavbar;
