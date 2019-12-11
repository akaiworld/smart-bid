import React from 'react';

import CardHighlight from '@/components/ui/card/highlight';
import CardSubInfo from '@/components/ui/card/sub-info';
import Progress from '@/components/ui/progress';
import Img from '@/components/ui/img';

import imgChart from '@/images/chart.png';

const Orders = ({}) => {
	
	return (
		<div className='row'>
			<div className='col col-12 col-md-8'>
				<Img 
					src={imgChart}
				/>
			</div>
			<div className='col col-12 col-md-4'>
				<div style={{marginBottom: '16px'}}>
					<CardHighlight>
						2,346
					</CardHighlight>
					<CardSubInfo
						title='Total orders in period'
						value={<>
							48% <i className="fas fa-level-up-alt color-green"></i>
						</>}
					/>
					<Progress 
						pc={48}
					/>
				</div>
				<div style={{marginBottom: '16px'}}>
					<CardHighlight>
						4,422
					</CardHighlight>
					<CardSubInfo
						title='Orders in last month'
						value={<>
							60% <i className="fas fa-level-up-alt color-green"></i>
						</>}
					/>
					<Progress 
						pc={60}
					/>
				</div>
				<div style={{marginBottom: '16px'}}>
					<CardHighlight>
						9,180
					</CardHighlight>
					<CardSubInfo
						title='Monthly income from orders'
						value={<>
							22% <i className='fas fa-bolt color-green'></i>
						</>}
					/>
					<Progress 
						pc={22}
					/>
				</div>
			</div>
		</div>
	);
}
export default Orders;