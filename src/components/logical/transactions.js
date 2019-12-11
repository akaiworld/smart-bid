import React from 'react';

import Img from '@/components/ui/img';
import imageMap from '@/images/map.png';

const Transactions = ({}) => {
	
	return <div className='row'>
		<div className='col col-12 col-lg-6'>
			<table>
				<thead>
					<tr>
						<th>
							No.
						</th>
						<th>
							Transaction
						</th>
						<th>
							Date
						</th>
						<th>
							Amount
						</th>
					</tr>
				</thead>
				<tbody>
					{entries.map(entry => <tr key={entry.id}>
						<td>
							{entry.id}
						</td>
						<td>
							{entry.name}
						</td>
						<td>
							{entry.date}
						</td>
						<td>
							<div className={`badge bg-${entry.status == 1 ? 'green' : 'orange'}`}>
								${entry.amount}
							</div>
						</td>
					</tr>)}
				</tbody>
			</table>
		</div>
		<div className='col col-12 col-lg-6'>
			<Img
				src={imageMap}
			/>
		</div>
	</div>
}
export default Transactions;

const entries = [{
	id: 1,
	name: 'Security doors',
	date: '16 Jun 2014',
	amount: '483.00',
	status: 1,
},{
	id: 2,
	name: '	Wardrobes',
	date: '10 Jun 2014',
	amount: '327.00',
	status: 1,
},{
	id: 3,
	name: '	Set of tools',
	date: '12 Jun 2014',
	amount: '125.00',
	status: 2,
},{
	id: 4,
	name: 'Panoramic pictures',
	date: '22 Jun 2013',
	amount: '344.00',
	status: 1,
},{
	id: 5,
	name: 'Phones',
	date: '24 Jun 2013',
	amount: '235.00',
	status: 1,
},{
	id: 6,
	name: 'Monitors',
	date: '26 Jun 2013',
	amount: '100.00',
	status: 1,
},];