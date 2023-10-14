export async function postUser(user, setLoading) {
	const API_URL = process.env.REACT_APP_API_URL;

	try {
		await fetch(`${API_URL}/users`, { method: "POST", body: user });
		setLoading(false);
	} catch (err) {
		console.log(err);
	}
}
