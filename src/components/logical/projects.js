import React from 'react';

const Projects = ({}) => {
	
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>
							Status
						</th>
						<th>
							Date
						</th>
						<th>
							User
						</th>
						<th>
							Value
						</th>
					</tr>
				</thead>
				<tbody>
					{entries.map(entry => <tr key={entry.id}>
						<td>
							<div 
								className={
									entry.status == 'canceled' ? 'badge bg-orange' : 
									entry.status == 'completed' ? 'badge bg-green' : 
									''
								}
							>
								{statusLabels[entry.status]}
							</div>
						</td>
						<td>
							<i className="far fa-clock"></i>
							{entry.date}
						</td>
						<td>
							{entry.user}
						</td>
						<td className={`color-${entry.value > 0 ? 'green' : entry.value < 0 ? 'red' : 'grey'}`}>
							{
								entry.value > 0 ? <i className="fas fa-level-up-alt" style={{marginRight: '4px'}}></i> : 
								entry.value < 0 ? <i class="fas fa-level-down-alt" style={{marginRight: '4px'}}></i> : 
								null	
							}
							{entry.value}%
						</td>
					</tr>)}
				</tbody>
			</table>
		</div>
	);
}
export default Projects;

const statusLabels = {
	pending: 'Pending...',
	canceled: 'Canceled',
	completed: 'Completed',
}

const entries = [{
	id: 1,
	status: 'pending',
	date: '11:20pm',
	user: 'Samantha',
	value: 24,
},{
	id: 2,
	status: 'canceled',
	date: '11:20pm',
	user: 'Monica',
	value: 66,
},{
	id: 3,
	status: 'pending',
	date: '11:20pm',
	user: 'John',
	value: 54,
},{
	id: 4,
	status: 'pending',
	date: '11:20pm',
	user: 'Agnes',
	value: 12,
},{
	id: 5,
	status: 'pending',
	date: '11:20pm',
	user: 'Janet',
	value: 22,
},{
	id: 6,
	status: 'completed',
	date: '11:20pm',
	user: 'Amelia',
	value: 66,
},{
	id: 7,
	status: 'pending',
	date: '11:20pm',
	user: 'Damian',
	value: 23,
},];