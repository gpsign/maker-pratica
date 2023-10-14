export async function getUsersFromServer(ListData) {
	const API_URL = process.env.REACT_APP_API_URL;

	if (ListData === undefined) return;
	const { setUsersDisplayed, setUsersArray, setLoadingList, editedUsers } =
		ListData;

	try {
		setLoadingList(true);
		const response = await fetch(`${API_URL}/users`);
		const users = await response.json();
		const checkEdited = users.map((user) => {
			if (editedUsers[user.id]) return editedUsers[user.id];
			else return user;
		});

		setUsersArray(checkEdited);
		setUsersDisplayed(checkEdited);
		setLoadingList(false);
	} catch (err) {
		console.log(err);
	}
}
