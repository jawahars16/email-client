export const getLabels = () => {
	return new Promise((resolve, reject) => {
		window.gapi.client.gmail.users.labels
			.list({
				userId: 'me'
			})
			.then(response => resolve(response.result.labels))
			.catch(error => reject(error));
	});
};
