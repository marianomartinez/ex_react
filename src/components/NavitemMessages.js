import React from 'react';
import '../assets/css/main.css';
import Counter from './Counter';

let messages = {
	qty: 7
};

function NavitemMessages() {
    return (
		// <!-- Nav Item - Messages -->
     	<li className="nav-item dropdown no-arrow mx-1">
			<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
				<i className="fas fa-envelope fa-fw"></i>
        		{/* <!-- Counter - Messages --> */}
				<Counter {...messages} />
			</a>
		</li>
  	);
}

export default NavitemMessages;
