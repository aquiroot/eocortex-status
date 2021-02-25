import React, { useEffect } from 'react';
import { getEvents } from '../../helpers/fetch';

export const Dashboard = () => {
	const n = 10;

	useEffect(() => {
		getEvents();
	}, [n]);
	return (
		<div>
			<h2>dashboard</h2>
		</div>
	);
};
