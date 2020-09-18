import React from 'react';
import '../assets/css/main.css';
import PropTypes from 'prop-types';

function TopRowSmallCard(props) {
    return (
        // Card component for:
        // <!-- Amount of Products in DB -->
        // <!-- $$$ of all products in DB -->
        // <!-- Amount of users in DB -->
        <div className="col-md-4 mb-4">
			<div className={`card border-left-${props.color} shadow h-100 py-2`}>
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
                        <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>{props.title}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.value}</div>
						</div>
						<div className="col-auto">
                        <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
						</div>
					</div>
				</div>
			</div>
		</div>
  	);
}

// Data type validation with PropTypes
TopRowSmallCard.defaultProps = {
	title: 'untitled'
}
TopRowSmallCard.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
}

export default TopRowSmallCard;