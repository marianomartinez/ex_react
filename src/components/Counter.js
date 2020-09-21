import React from 'react';
import '../assets/css/main.css';
import PropTypes from 'prop-types';

function Counter(props) {
    return (
        // <!-- Counter - Messages -->
		<span className="badge badge-danger badge-counter">{props.qty}</span>
    );
}
// Data type validation with PropTypes
Counter.propTypes = {
	qty: PropTypes.string.isRequired,
}

export default Counter;