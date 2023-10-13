import "../styles/SearchInput.css";
import { useContext } from "react";
import { searchUserInArray, sortUsersArray } from "../utils/index.js";
import { UsersListContext } from "../context/UsersList.jsx";

var searchTimeout = null;

export default function SearchInput() {
	const {
		search,
		setSearch,
		setUsersDisplayed,
		usersArray,
		nameOrder,
		dateOrder,
	} = useContext(UsersListContext);

	return (
		<label>
			Pesquisar:{" "}
			<input
				className='search'
				placeholder='Nome ou Sobrenome'
				onChange={(e) => {
					const value = e.target.value.trim();
					clearTimeout(searchTimeout);

					searchTimeout = setTimeout(() => {
						if (value.length > 0) {
							setSearch({ ...search, status: true });
							const filtered = searchUserInArray(usersArray, value);

							const sorted = sortUsersArray(
								[...filtered],
								nameOrder,
								dateOrder
							);
							setUsersDisplayed([...sorted]);
							setSearch({ status: true, result: [...sorted] });
						} else {
							const sorted = sortUsersArray(
								[...usersArray],
								nameOrder,
								dateOrder
							);
							setUsersDisplayed(sorted);
							setSearch({ status: false, result: [] });
						}
					}, 300);
				}}
			/>
		</label>
	);
}
