export async function putUser(id) {
	const API_URL = process.env.REACT_APP_API_URL;

	try {
		await fetch(`${API_URL}/users/${id}`, { method: "PUT" });
	} catch (err) {
		console.log(err);
	}
}
