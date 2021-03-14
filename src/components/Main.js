import React from 'react';
import { CameraState } from './common/CameraState';
import { Events } from './common/Events';
import { Table } from './common/Table';

export const Main = () => {
	return (
		<div className="container">
			<CameraState />
			<Events />
		</div>
	);
};
