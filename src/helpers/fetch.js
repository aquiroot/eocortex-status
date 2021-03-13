import { ajax } from 'rxjs/ajax';

const password = process.env.REACT_APP_API_PASSWORD;

export const getConfig = async () => {
	return await fetch(
		`http://10.21.1.13:8080/configex?responsetype=json&login=root&password=${password}`
	)
		.then((res) => res.json())
		.then((res) => {
			return res;
		});
};

export const getEvents = async () => {
	return await fetch(
		`http://10.21.1.13:8080/event?login=root&password=${password}&responsetype=json`,
		{
			mode: 'no-cors',
		}
	).then((res) => {
		console.log(res.body);
		return res;
	});
};

export const getEvents$ = ajax.getJSON(
	`http://10.21.1.13:8080/configex?responsetype=json&login=root&password=${password}`
);
