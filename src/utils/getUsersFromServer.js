export async function getUsersFromServer() {
	const API_URL = process.env.REACT_APP_API_URL;

	try {
		const response = await fetch(`${API_URL}/users`);

		return response.json();;
	} catch (err) {
		console.log(err);
	}
}
