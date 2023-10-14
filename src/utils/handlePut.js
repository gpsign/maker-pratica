import { getUsersFromServer } from "./getUsersFromServer.js";
import { putUser } from "./putUser.js";

export async function handlePut(user, ListData) {
	const { editedUsers } = ListData;

	await putUser(user.id);
	editedUsers[user.id] = user;
	await getUsersFromServer(ListData);
}
