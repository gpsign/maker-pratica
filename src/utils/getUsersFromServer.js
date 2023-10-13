export async function getUsersFromServer(ListData, setLoading) {
	const API_URL = process.env.REACT_APP_API_URL;

	if (ListData === undefined) return;
	const { setUsersDisplayed, setUsersArray } = ListData;

	try {
		setLoading(true);
		const response = await fetch(`${API_URL}/users`);
		const users = await response.json();

		setUsersArray(users);
		setUsersDisplayed(users);
		setLoading(false);
	} catch (err) {
		console.log(err);
	}
}
