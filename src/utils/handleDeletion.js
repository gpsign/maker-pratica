import { deleteSelectedUsers, getUsersFromServer } from "./index.js";

export async function handleDeletion(ListData, setLoading) {
	const { selected, setSelected } = ListData;

	setLoading(true);
	await deleteSelectedUsers(selected);
	await getUsersFromServer(ListData, setLoading);
	setSelected([]);
}
