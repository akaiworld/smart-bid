import React from 'react';

const Card = ({header, body}) => {
	return (
		<div className='card'>
			{header ? (
				<div className='card-header'>
					{header}
				</div>
			) : null}
			{body ? (
				<div className='card-body'>
					{body}
				</div>
			) : null}
		</div>
	)
}
export default Card;