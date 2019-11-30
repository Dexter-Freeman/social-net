import React from 'react';

const ContactItem = ({contactName, contactValue}) => {
	return <div>
		<span><b>{contactName} - </b></span>
		<span>{contactValue ? contactValue : `none`}</span>
	</div>
};

export default ContactItem;