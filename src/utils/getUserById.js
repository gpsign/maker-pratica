export async function getUserById(id) {
	const API_URL = process.env.REACT_APP_API_URL;

	try {
		const response = await fetch(`${API_URL}/users/${id}`);
		if (response.status === 500) return [];
		const user = await response.json();
		return [user];
	} catch (err) {
		if (err.status != 500) console.log(err);
	}
}
