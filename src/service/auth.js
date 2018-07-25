import config from '../common/config';

function initClient(resolve, reject) {
	window.gapi.load('client:auth2', () => {
		window.gapi.client
			.init({
				apiKey: config.apiKey,
				clientId: config.clientID,
				discoveryDocs: config.discoveryDocs,
				scope: config.scopes
			})
			.then(() => {
				if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
					resolve(window.gapi.auth2.getAuthInstance().currentUser.Ab);
				} else {
					window.gapi.auth2
						.getAuthInstance()
						.signIn()
						.then(response => resolve(response))
						.catch(error => reject(error));
				}
			});
	});
}

export const authenticate = () => {
	return new Promise(initClient);
};
