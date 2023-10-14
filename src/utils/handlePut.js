import { getUsersFromServer } from "./getUsersFromServer.js";
import { putUser } from "./putUser.js";

export async function handlePut(user, ListData, ModalData) {
	const { editedUsers } = ListData;
	try {
		const error = await putUser(user.id);
		if (!error) {
			editedUsers[user.id] = user;
			await getUsersFromServer(ListData, ModalData);
		}
		return error;
	} catch (err) {
		console.log(err);
	}
}
