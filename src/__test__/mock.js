export const mockResolve = data =>
	new Promise((resolve, reject) => resolve(data));
export const mockReject = () => new Promise((resolve, reject) => reject());
