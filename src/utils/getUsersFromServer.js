export async function getUsersFromServer(ListData, ModalData) {
	const API_URL = process.env.REACT_APP_API_URL;
	if (ListData === undefined) return;
	const { setUsersDisplayed, setUsersArray, setLoadingList, editedUsers } =
		ListData;
	const { showAlertModal } = ModalData;

	try {
		setLoadingList(true);
		const response = await fetch(`${API_URL}/users`);
		if (response.status != 200) {
			showAlertModal({
				title: "erro",
				message: "Ocorreu algum problema na hora de listar usuários",
			});
		}
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
