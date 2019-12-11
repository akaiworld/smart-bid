import React, {useState} from 'react';

import Card from '@/components/ui/card';
import CardHeaderControl from '@/components/ui/card/header-control';

const CollapsibleCard = ({title, body}) => {

	const [collapsed, setCollapsed] = useState(false);
	const [removed, setRemoved] = useState(false);

	if(removed){
		return null;
	}
	return (
		<Card
			header={<>
				<div className="card-header-title">{title}</div>
				<div className="card-header-controls">
					<CardHeaderControl
						onClick={() => setCollapsed(!collapsed)}
					>
						{collapsed ? 
							<i className="fas fa-chevron-down"></i> :
							<i className="fas fa-chevron-up"></i>
						}
					</CardHeaderControl>
					<CardHeaderControl>
						<i className="fas fa-wrench"></i>
					</CardHeaderControl>
					<CardHeaderControl
						onClick={() => setRemoved(true)}
					>
						<i className="fas fa-times"></i>
					</CardHeaderControl>
				</div>
			</>}
			body={collapsed ? null : body}
		/>
	)
}
export default CollapsibleCard;