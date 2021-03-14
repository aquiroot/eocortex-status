import React, { useEffect, useState } from 'react';
import { getCameraState } from '../../helpers/fetch';

export const CameraState = () => {
	const [cameraState, setCameraState] = useState();

	//useEffect(() => {
	//	getCameraState()
	//		.then((res) => console.log(res))
	//		.then((res) => setCameraState(res));
	//}, []);

	//getCameraState();

	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">ID</th>
					<th scope="col">Esta grabando?</th>
					<th scope="col">Steam primario</th>
					<th scope="col">Stream secundario</th>
				</tr>
			</thead>
			<tbody>
				{cameraState ? (
					cameraState.map((cs, i) => (
						<tr key={cs.Id}>
							<th scope="row">{i + 1}</th>
							<td>{cs.Id}</td>
							<td>{cs.IsRecordingOn}</td>
						</tr>
					))
				) : (
					<h6>cargando...</h6>
				)}
			</tbody>
		</table>
	);
};
