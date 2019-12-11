import React from 'react';

const Progress = ({pc}) => {
	return (
		<div className='progress'>
			<div 
				className='fill'
				style={{
					width: `${pc}%`,
				}}
			></div>
		</div>
	)
}
export default Progress;