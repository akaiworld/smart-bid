import React from 'react';

const CardSubInfo = ({title, value}) => {
	return (
		<div className="card-sub-info">
			<div className="card-sub-info-title">
				{title || null}
			</div>
			<div className="card-sub-info-figure">
				{value || null}
			</div>
		</div>
	)
}
export default CardSubInfo;