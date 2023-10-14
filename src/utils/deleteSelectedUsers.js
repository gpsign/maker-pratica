export async function deleteSelectedUsers(selected, ModalData) {
	const API_URL = process.env.REACT_APP_API_URL;
	const { showAlertModal } = ModalData;

	try {
		for (const id of selected) {
			const response = await fetch(`${API_URL}/users/${id}`, {
				method: "DELETE",
			});
			if (response.status != 200) {
				showAlertModal({ title: "erro", message: "Erro ao deletar" });
			}
		}
	} catch (err) {
		console.log(err);
	}
}
