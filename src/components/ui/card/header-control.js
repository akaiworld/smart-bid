import React from 'react';

const CardHeaderControl = ({onClick, children}) => {
	return (
		<div 
			className='card-header-control'
			onClick={onClick}
		>
			{children}
		</div>
	)
}
export default CardHeaderControl;