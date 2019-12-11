import React from 'react';

const Btn = ({pressed, children}) => {
	return (
		<div className={`btn ${pressed ? 'pressed' : ''}`}>
			{children || null}
		</div>
	)
}
export default Btn;