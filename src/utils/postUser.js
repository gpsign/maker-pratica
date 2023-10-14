export async function postUser(newUser, ModalData) {
	const API_URL = process.env.REACT_APP_API_URL;
	const { showAlertModal } = ModalData;

	try {
		const response = await fetch(`${API_URL}/users`, {
			method: "POST",
			body: newUser,
		});
		if (response.status != 201) {
			showAlertModal({ title: "erro", message: "Ocorreu algum problema" });
		}
		const user = await response.json();
		return user;
	} catch (err) {
		console.log(err);
	}
}
