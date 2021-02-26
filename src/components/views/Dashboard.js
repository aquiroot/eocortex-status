import React, { useEffect } from 'react';
import { getEvents } from '../../helpers/fetch';
import { Main } from '../Main';
import { NavBar } from '../NavBar';

export const Dashboard = () => {
	const n = 10;

	useEffect(() => {
		getEvents();
	}, [n]);

	return (
		<>
			<NavBar />
			<Main />
		</>
	);
};
