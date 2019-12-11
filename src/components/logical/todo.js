import React from 'react';

const ToDo = ({}) => {
	
	return <div className='todo-list'>
		{entries.map(entry => (
			<div
				className={`todo-list-item ${entry.done ? 'done' : ''}`}
				key={entry.id}
			>
				{entry.done ? 
					<i className="fas fa-check-square"></i> :
					<i className="far fa-square"></i>
				}
				{entry.task}
				{entry.time ? (
					<div className='badge bg-green time'>
						<i className="far fa-clock"></i>
						{entry.time}
					</div>
				) : null}
			</div>
		))}
	</div>
}
export default ToDo;

const entries = [{
	id: 1,
	task: 'Buy a milk',
	done: true,
},{
	id: 2,
	task: 'Go to shop and find some products.',
	done: false,
},{
	id: 3,
	task: 'Send documents to Mike',
	done: false,
	time: '1 mins',
},{
	id: 4,
	task: 'Go to the doctor dr Smith',
	done: false,
},{
	id: 5,
	task: 'Plan vacation',
	done: true,
},{
	id: 6,
	task: 'Create new stuff',
	done: false,
},{
	id: 7,
	task: 'Call to Anna for dinner',
	done: false,
},];