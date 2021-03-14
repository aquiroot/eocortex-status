import React, { useEffect, useState } from 'react';
import { getEvents } from '../../helpers/fetch';

export const Events = () => {
	const [events, setEvents] = useState();

	useEffect(() => {}, []);

	getEvents().then();

	return (
		<div>
			<h6>events</h6>
		</div>
	);
};
