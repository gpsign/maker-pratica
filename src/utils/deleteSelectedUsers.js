export async function deleteSelectedUsers(selected) {
	const API_URL = process.env.REACT_APP_API_URL;

	console.log(selected);

	try {
		for (const id of selected) {
			await fetch(`${API_URL}/users/${id}`, { method: "DELETE" });
		}
	} catch (err) {
		console.log(err);
	}
}
