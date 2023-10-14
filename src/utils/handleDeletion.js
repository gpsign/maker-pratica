import { deleteSelectedUsers, getUsersFromServer } from "./index.js";

export async function handleDeletion(ListData, ModalData) {
	const { selected, setSelected, setLoadingList } = ListData;
	try {
		setLoadingList(true);
		await deleteSelectedUsers(selected, ModalData);
		await getUsersFromServer(ListData, ModalData);
		setSelected([]);
	} catch (err) {
		console.log(err);
	}
}
