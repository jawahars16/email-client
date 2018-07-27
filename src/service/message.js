export const getMessages = (label) => {
	return new Promise((resolve, reject) => {
		window.gapi.client.gmail.users.messages
			.list({
				userId: 'me',
                labelIds: label,
                maxResults: 50
			})
			.then(response => {
				console.log(response);
				resolve(response.result.messages);
			})
			.catch(error => reject(error));
	});
};

