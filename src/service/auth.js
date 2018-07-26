import config from '../common/config';

const initClient = (resolve, reject) => {
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
					resolve(extractUser());
				} else {
					window.gapi.auth2
						.getAuthInstance()
						.signIn()
						.then(() => resolve(extractUser()))
						.catch(error => reject(error));
				}
			});
	});
}

export const authenticate = () => {
	return new Promise(initClient);
};

const extractUser = () => {
	var response = window.gapi.auth2.getAuthInstance().currentUser.Ab;
	return {
		name: response.w3.ig,
		email: response.w3.U3,
		image: response.w3.Paa
	};
};
