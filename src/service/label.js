// const getLabelsFromServer = () => {
// 	return new Promise((resolve, reject) => {
// 		window.gapi.client.gmail.users.labels
// 			.list({
// 				userId: 'me'
// 			})
// 			.then(response => {
// 				const result = response.result.labels.filter(
// 					label => label.labelListVisibility !== 'labelHide'
// 				);
// 				resolve(result);
// 			})
// 			.catch(error => reject(error));
// 	});
// };

import axios from 'axios';

const getLabels = async () => {
	let response = await window.gapi.client.gmail.users.labels.list({
		userId: 'me'
	});
	const result = response.result.labels.filter(
		label => label.labelListVisibility !== 'labelHide'
	);
	return result;
}

const resetLabels = async () => {
	let response = await window.gapi.client.gmail.users.labels.list({
		userId: 'me'
	});
	const result = response.result.labels.filter(
		label => label.labelListVisibility !== 'labelHide'
	);
	const labels = result.map(label => ({ id: label.id, title: label.title }));
	await axios.post('http://localhost:5000/labels/reset', labels);
};

export {
	resetLabels,
	getLabels
};
