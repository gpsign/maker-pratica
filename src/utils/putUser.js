export async function putUser(id) {
	const API_URL = process.env.REACT_APP_API_URL;

	try {
		const response = await fetch(`${API_URL}/users/${id}`, { method: "PUT" });
		if (response.status != 200) {
			return true;
		}
		return false;
	} catch (err) {
		console.log(err);
	}
}
