import "../styles/UsersContainer.css";
import "../styles/CommonStyles.css";
import { BiSolidUser, BiCalendar, BiSolidTrash } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { UsersListContext } from "../context/UsersList.jsx";
import { getUsersFromServer, handleSort } from "../utils/index.js";
import UserCard from "./UserCard.jsx";
import SearchInput from "./SearchInput.jsx";
import SortArrows from "./SortArrows.jsx";

export function UsersContainer() {
	const [selectedColumn, setSelectedColumn] = useState("");
	const [loading, setLoading] = useState(false);
	const [allSelected, setAllSelected] = useState(false);

	const ListData = useContext(UsersListContext);
	const {
		search,
		dateOrder,
		nameOrder,
		usersDisplayed,
		selected,
		setSelected,
	} = ListData;

	useEffect(() => {
		async function getAndSet() {
			const { setUsersDisplayed, setUsersArray } = ListData;
			const users = await getUsersFromServer();
			setUsersArray(users);
			setUsersDisplayed(users);
			setLoading(false);
		}
		setLoading(true);
		getAndSet();
	}, []);

	useEffect(() => {
		console.log(selected);
		if (search.status) {
			let aux = true;

			search.result.forEach((user) => {
				if (selected.indexOf(user.id) === -1) aux = false;
			});

			setAllSelected(aux);
		} else
			setAllSelected(
				selected.length >= usersDisplayed.length && usersDisplayed.length > 0
					? true
					: false
			);
	}, [selected, usersDisplayed]);

	return (
		<div className='container box'>
			<div className='flex'>
				<div className='delete container flex center'>
					<button
						title={
							selected.length > 0
								? "Deletar usuários selecionados"
								: "Selecione usuários para poder deletar"
						}
						className='delete flex center'
						disabled={selected.length > 0 ? false : true}
					>
						<BiSolidTrash />
					</button>
				</div>
				<div className='search container flex space-between'>
					<SearchInput />
					<p>
						{`Mostrando ${
							search.status ? search.result.length : usersDisplayed.length
						} usuários`}
					</p>
				</div>
			</div>

			<div className='labelsColumns flex'>
				<div className='check column flex center'>
					<button
						className={`check flex center ${allSelected && "selected"}`}
						onClick={() => {
							let after = [...selected];

							if (allSelected) {
								usersDisplayed.forEach((user) => {
									const userIndex = after.indexOf(user.id);

									console.log(userIndex);

									after.splice(userIndex, 1);
								});

								setSelected(after);
							} else {
								let idsArray = usersDisplayed.map((user) => user.id);

								after = idsArray.filter((id) => {
									if (selected.indexOf(id) != -1) return false;
									else return true;
								});

								setSelected([...selected, ...after]);
							}
						}}
					>
						{allSelected && <BsCheck />}
					</button>
				</div>
				<button
					className='name column flex start'
					style={{
						backgroundColor: selectedColumn === "name" ? "#f3f3f3" : "white",
					}}
					onClick={() => handleSort(ListData, setSelectedColumn, "name")}
				>
					<BiSolidUser style={{ marginRight: "5px" }} />
					Nome
					<SortArrows order={nameOrder} />
				</button>
				<button
					className='date column flex center'
					style={{
						backgroundColor: selectedColumn === "date" ? "#f3f3f3" : "white",
					}}
					onClick={() => handleSort(ListData, setSelectedColumn, "date")}
				>
					<BiCalendar style={{ marginRight: "5px" }} />
					Data de Registro
					<SortArrows order={dateOrder} />
				</button>
			</div>

			<ul>
				{loading ? (
					<div className='loading flex center'>
						<h4>Carregando</h4>
					</div>
				) : (
					usersDisplayed.map((user, i) => (
						<UserCard key={user.id} dados={{ ...user, i }} />
					))
				)}
			</ul>
		</div>
	);
}
