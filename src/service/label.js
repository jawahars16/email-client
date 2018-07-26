export const getLabels = () => {
	return new Promise((resolve, reject) => {
		window.gapi.client.gmail.users.labels
			.list({
				userId: 'me'
			})
			.then(response => {
				const result = response.result.labels.filter(
					label => label.labelListVisibility !== 'labelHide'
				);
				resolve(result);
			})
			.catch(error => reject(error));
	});
};
