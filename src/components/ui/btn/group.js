import React from 'react';

const BtnGroup = ({children}) => {
	return (
		<div className='btn-group'>
			{children || null}
		</div>
	)
}
export default BtnGroup;