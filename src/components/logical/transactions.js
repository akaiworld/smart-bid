import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {VectorMap} from 'react-jvectormap';

const Transactions = ({transactions}) => {

	const aggregatedSums = {}
	transactions.forEach(({country, amount}) => {
		aggregatedSums[country] = aggregatedSums[country] || 0;
		aggregatedSums[country] += parseFloat(amount);
	});
	
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
					{transactions.map(entry => <tr key={entry.id}>
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
		<div className='col col-12 col-lg-6'
			style={{height: '300px'}}
		>
			<VectorMap
				map={'world_mill'}
				backgroundColor="#3b96ce"
				containerStyle={{
					width: '100%',
					height: '100%'
				}}
				series={{
				  regions: [
					{
					  values: aggregatedSums, //this is your data
					  scale: ["#146804", "#ff0000"], //your color game's here
					  normalizeFunction: "polynomial"
					}
				  ]
				}}
				containerClassName="map"
			/>
		</div>
	</div>
}

const mapStateToProps = ({transactions}) => {
	return {
		transactions,
	};
};

export default connect(
	mapStateToProps,
	{}
)(Transactions);