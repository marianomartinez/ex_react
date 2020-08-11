import React from 'react';
import avatarDummy from '../assets/images/dummy-avatar.jpg';
import '../assets/css/main.css';

function NavitemUserInfo() {
    return (
      <li className="nav-item dropdown no-arrow">
				<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
					<span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
					<img className="img-profile rounded-circle" src={avatarDummy} width="60" alt="dummy avatar"/>
				</a>
			</li>
  );
}

export default NavitemUserInfo;
