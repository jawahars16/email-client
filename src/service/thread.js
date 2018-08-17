import axios from 'axios';

const loadThreads = async from => {
	try {
		const today = new Date();
		let nextPageToken = undefined;
		let threads = [];

		do {
			const { result } = await fetchThreads(
				toFormatedString(from),
				toFormatedString(today),
				100,
				nextPageToken
			);
			nextPageToken = result.nextPageToken;
			threads = [...threads, ...result.threads];
		} while (nextPageToken);

		//FIXME : Remove this later
		threads = [threads[0], threads[1]];
		const response = await Promise.all(
			threads.map(thread => thread.id).map(loadThread)
		);

		const threadDetails = response
			.map(thread => thread.result)
			.map(extractThreadDetail);

		return axios.post('http://localhost:5000/threads', threadDetails);
	} catch (error) {
		console.log(error);
	}
};

const extractThreadDetail = threadResponse => {
	const recentMessage = threadResponse.messages[0];
	return {
		id: threadResponse.id,
		from: recentMessage.payload.headers.find(h => h.name === 'From').value,
		subject: recentMessage.payload.headers.find(h => h.name === 'Subject').value,
		snippet: recentMessage.snippet,
		date: recentMessage.payload.headers.find(h => h.name === 'Date').value
	};
};

const loadThread = threadId =>
	window.gapi.client.gmail.users.threads.get({
		userId: 'me',
		id: threadId,
		format: 'metadata',
		metadataHeaders: ['To', 'Date', 'From', 'Reply-To', 'Subject']
	});

const fetchThreads = (from, to, maxResults, pageToken) =>
	window.gapi.client.gmail.users.threads.list({
		userId: 'me',
		q: `after:${from} before:${to}`,
		includeSpamTrash: true,
		maxResults: maxResults,
		pageToken: pageToken
	});

const toFormatedString = today => {
	var month = today.getMonth() + 1;
	var day = today.getDate();
	var year = today.getFullYear();
	return year + '/' + month + '/' + day;
};

export { loadThreads };
