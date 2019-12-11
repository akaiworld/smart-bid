import React from 'react';

import MailHeader from '@/components/logical/mail/header';
import MailMessage from '@/components/logical/mail/message';

const Mail = ({}) => {
	
	return (
		<div className='mail'>
			<MailHeader 
				newNum={22}
				draftNum={16}
			/>
			{messages.map(message => (
				<MailMessage
					message={message}
					key={message.id}
				/>
			))}
		</div>
	);
}
export default Mail;

const messages = [{
	id: 1,
	from: 'Monica Smith',
	text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
	when: 'Today 5:60 pm - 12.06.2014',
	since: '1m ago',
	isNew: true,
},{
	id: 2,
	from: 'Jogn Angel',
	text: 'There are many variations of passages of Lorem Ipsum available',
	when: 'Today 2:23 pm - 11.06.2014',
	since: '2m ago',
},{
	id: 3,
	from: 'Jesica Ocean',
	text: 'Contrary to popular belief, Lorem Ipsum',
	when: 'Today 1:00 pm - 08.06.2014',
	since: '5m ago',
},{
	id: 4,
	from: 'Monica Jackson',
	text: 'The generated Lorem Ipsum is therefore',
	when: 'Yesterday 8:48 pm - 10.06.2014',
	since: '5m ago',
},{
	id: 5,
	from: 'Anna Legend',
	text: 'All the Lorem Ipsum generators on the Internet tend to repeat',
	when: 'Yesterday 8:48 pm - 10.06.2014',
	since: '5m ago',
},{
	id: 6,
	from: 'Damian Nowak',
	text: 'The standard chunk of Lorem Ipsum used',
	when: 'Yesterday 8:48 pm - 10.06.2014',
	since: '5m ago',
},{
	id: 7,
	from: 'Gary Smith',
	text: '200 Latin words, combined with a handful',
	when: 'Yesterday 8:48 pm - 10.06.2014',
	since: '5m ago',
},];