import React, { useEffect, useState } from 'react';
import { getConfig } from '../../helpers/fetch';

export const Table = () => {
	const [data, setData] = useState();

	useEffect(() => {
		getConfig().then((res) => setData(res.Servers));
	}, []);

	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Nombre</th>
					<th scope="col">Direccion</th>
				</tr>
			</thead>
			<tbody>
				{data ? (
					data.map((serv, i) => (
						<tr key={serv.Id}>
							<th scope="row">{i + 1}</th>
							<td>{serv.Name}</td>
							<td>{serv.Url}</td>
						</tr>
					))
				) : (
					<h6>cargando...</h6>
				)}
			</tbody>
		</table>
	);
};
