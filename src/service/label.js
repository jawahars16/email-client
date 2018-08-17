import axios from 'axios';

const getLabels = () => {
	return axios.get('http://localhost:5000/labels');
}

const resetLabels = async () => {
	let response = await window.gapi.client.gmail.users.labels.list({
		userId: 'me'
	});

	const result = response.result.labels.filter(
		label => label.labelListVisibility !== 'labelHide'
	);

	const labels = result.map(label => ({ id: label.id, title: label.name }));
	return axios.post('http://localhost:5000/labels', labels);
};

export {
	resetLabels,
	getLabels
};
