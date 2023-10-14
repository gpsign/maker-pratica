import "../styles/SearchInput.css";
import { useContext, useState } from "react";
import { searchUserInArray, sortUsersArray } from "../utils/index.js";
import { UsersListContext } from "../context/UsersList.jsx";
import { getUserById } from "../utils/getUserById.js";

var searchTimeout = null;

export default function SearchInput({ setLoading }) {
	const {
		search,
		setSearch,
		setUsersDisplayed,
		usersArray,
		nameOrder,
		dateOrder,
	} = useContext(UsersListContext);
	const [inputValue, setInputValue] = useState("");

	return (
		<label>
			Pesquisar:{" "}
			<input
				className='search'
				placeholder='Nome, Sobrenome ou ID'
				value={inputValue}
				onChange={(e) => {
					const value = e.target.value.trim();
					setInputValue(e.target.value);
					clearTimeout(searchTimeout);
					setLoading(true);

					searchTimeout = setTimeout(async () => {
						if (value.length > 0) {
							if (!isNaN(Number(value))) {
								const user = await getUserById(Number(value));
								setUsersDisplayed(user);
							} else {
								setSearch({ ...search, status: true });
								const filtered = searchUserInArray(usersArray, value);

								const sorted = sortUsersArray(
									[...filtered],
									nameOrder,
									dateOrder
								);
								setUsersDisplayed([...sorted]);
								setSearch({ status: true, result: [...sorted] });
							}
						} else {
							const sorted = sortUsersArray(
								[...usersArray],
								nameOrder,
								dateOrder
							);
							setUsersDisplayed(sorted);
							setSearch({ status: false, result: [] });
						}
						setLoading(false);
					}, 300);
				}}
			/>
		</label>
	);
}
