import React from 'react';

const MailMessage = ({message}) => {
	return (
		<div className='mail-message'>
			<div className='flex-row justify-space-between'>
				<div className='mail-message-from'>
					{message.from}
				</div>
				<div className={`mail-message-since ${message.isNew ? 'color-green' : ''}`}>
					{message.since}
				</div>
			</div>
			<div className='mail-message-text'>
				{message.text}
			</div>
			<div className='mail-message-when'>
				{message.when}
			</div>
		</div>
	)
}
export default MailMessage;