import React from 'react';
// import avatarDummy from '../assets/images/dummy-avatar.jpg';
import '../assets/css/main.css';

let userName = 'Walter White';
let	userAvatar = require('../assets/images/dummy-avatar.jpg'); // !!! This line of code should be improved

function NavitemUserInfo() {
    return (
		// <!-- Nav Item - User Information -->
      	<li className="nav-item dropdown no-arrow">
			<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
				<span className="mr-2 d-none d-lg-inline text-gray-600 small">{userName}</span>
				<img className="img-profile rounded-circle" src={userAvatar} width="60" alt="dummy avatar"/>
			</a>
		</li>
 	);
}

export default NavitemUserInfo;
