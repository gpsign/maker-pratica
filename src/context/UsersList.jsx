import { createContext, useState } from "react";

export const UsersListContext = createContext();

export function UserListProvider({ children }) {
	const [usersArray, setUsersArray] = useState([]);
	const [selected, setSelected] = useState([]);
	const [search, setSearch] = useState({
		status: false,
		result: [],
	});
	const [dateOrder, setDateOrder] = useState("any");
	const [nameOrder, setNameOrder] = useState("any");
	const [usersDisplayed, setUsersDisplayed] = useState([...usersArray]);

	return (
		<UsersListContext.Provider
			value={{
				usersArray,
				setUsersArray,
				selected,
				setSelected,
				search,
				setSearch,
				dateOrder,
				setDateOrder,
				nameOrder,
				setNameOrder,
				usersDisplayed,
				setUsersDisplayed,
			}}
		>
			{children}
		</UsersListContext.Provider>
	);
}
