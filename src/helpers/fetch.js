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

export const getCameraState = async () => {
	return await fetch(
		`http://10.21.1.13:8080/command?type=getchannelsstates&login=root&password=${password}&responsetype=json`
	)
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			return res;
		});
};

export const getEvents = async () => {
	return await fetch(
		`http://10.21.1.13:8080/event?login=root&password=${password}&filter=e37ac864-824f-4848-bc25-7dc87fb145c7&responsetype=json&mode=demo`
	)
		.then((res) => res.body)
		.then((rb) => {
			const reader = rb.getReader();
			return new ReadableStream({
				start(controller) {
					function push() {
						reader.read().then(({ done, value }) => {
							if (done) {
								console.log('done', done);
								controller.close();
								return;
							}
							controller.enqueue(value);
							const text = String.fromCharCode.apply(null, value);
							console.log(text);
							push();
						});
					}

					push();
				},
			});
		})
		.then((stream) => {
			console.log(stream);
			return new Response(stream, { 'Content-Type': 'text/html' }).text();
		})
		.then((res) => {
			console.log(res);
			return res;
		});
};
