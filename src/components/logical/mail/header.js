import React from 'react';

const MailHeader = ({newNum, draftNum}) => {
	return (
		<div className='mail-header'>
			<div className='mail-header-title'>
				<i className="far fa-envelope"></i>
				New messages
			</div>
			<div className='mail-header-subtitle'>
				You have {newNum} new messages and {draftNum} waiting in draft folder.
			</div>
		</div>
	)
}
export default MailHeader;