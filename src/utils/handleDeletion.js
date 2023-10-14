import { deleteSelectedUsers, getUsersFromServer } from "./index.js";

export async function handleDeletion(ListData) {
	const { selected, setSelected, setLoadingList } = ListData;

	setLoadingList(true);
	await deleteSelectedUsers(selected);
	await getUsersFromServer(ListData);
	setSelected([]);
}
