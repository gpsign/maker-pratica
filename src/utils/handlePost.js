import { postUser } from "./postUser.js";

export async function handlePost(user, setLoading, ListData, ModalData) {
	const { editedUsers } = ListData;

	try {
		const newUser = await postUser(user, ModalData);
		editedUsers[newUser.id] = { ...newUser, ...user };
		setLoading(false);
	} catch (err) {
		console.log(err);
	}
}
