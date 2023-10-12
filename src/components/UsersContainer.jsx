import "../styles/UsersContainer.css";
import "../styles/CommonStyles.css";
import { BiSolidUser, BiCalendar } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import UserCard from "./UserCard.jsx";

function nextOrder(order) {
	if (order === "ascending") return "descending";
	else return "ascending";
}

var searchTimeout = null;

export function UsersContainer() {
	const usersArray = [
		{
			dh_registro: "2023-10-11T11:43:50.273Z",
			nome: "Laurence Franecki",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/758.jpg",
			id: "1",
		},
		{
			dh_registro: "2023-10-10T22:27:36.302Z",
			nome: "Rodolfo Tromp",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/505.jpg",
			id: "2",
		},
		{
			dh_registro: "2023-10-10T19:16:29.169Z",
			nome: "Domingo Watsica",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/997.jpg",
			id: "3",
		},
		{
			dh_registro: "2023-10-11T12:34:06.538Z",
			nome: "Tim Kassulke Sr.",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/446.jpg",
			id: "4",
		},
		{
			dh_registro: "2023-10-10T16:08:43.919Z",
			nome: "Miguel Rodriguez",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/516.jpg",
			id: "5",
		},
		{
			dh_registro: "2023-10-10T15:41:40.370Z",
			nome: "Lewis Ebert",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/867.jpg",
			id: "6",
		},
		{
			dh_registro: "2023-10-10T19:41:34.498Z",
			nome: "Jeff O'Hara",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/479.jpg",
			id: "7",
		},
		{
			dh_registro: "2023-10-10T16:44:48.488Z",
			nome: "Melanie Sanford",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/143.jpg",
			id: "8",
		},
		{
			dh_registro: "2023-10-11T02:18:48.505Z",
			nome: "Leonard Kautzer",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/958.jpg",
			id: "9",
		},
		{
			dh_registro: "2023-10-11T02:15:49.919Z",
			nome: "Adrienne Hodkiewicz",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/710.jpg",
			id: "10",
		},
		{
			dh_registro: "2023-10-10T13:04:52.190Z",
			nome: "Miss Noel Schowalter Sr.",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/816.jpg",
			id: "11",
		},
		{
			dh_registro: "2023-10-10T20:29:37.588Z",
			nome: "Dr. Angelo Fahey",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/307.jpg",
			id: "12",
		},
		{
			dh_registro: "2023-10-11T10:02:14.473Z",
			nome: "Sarah Lockman",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1198.jpg",
			id: "13",
		},
		{
			dh_registro: "2023-10-11T01:21:34.218Z",
			nome: "Enrique Borer I",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/440.jpg",
			id: "14",
		},
		{
			dh_registro: "2023-10-11T12:51:37.144Z",
			nome: "Naomi Jenkins",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/107.jpg",
			id: "15",
		},
		{
			dh_registro: "2023-10-10T16:58:09.148Z",
			nome: "Brittany Rau",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/903.jpg",
			id: "16",
		},
		{
			dh_registro: "2023-10-10T19:01:48.392Z",
			nome: "Janet Rogahn",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/523.jpg",
			id: "17",
		},
		{
			dh_registro: "2023-10-10T14:05:22.094Z",
			nome: "Carmen Adams",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/848.jpg",
			id: "18",
		},
		{
			dh_registro: "2023-10-10T21:41:21.845Z",
			nome: "Carolyn Lueilwitz",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/929.jpg",
			id: "19",
		},
		{
			dh_registro: "2023-10-10T16:50:01.345Z",
			nome: "Lynda Koss",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/447.jpg",
			id: "20",
		},
		{
			dh_registro: "2023-10-11T03:06:00.771Z",
			nome: "Ray Blick",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/965.jpg",
			id: "21",
		},
		{
			dh_registro: "2023-10-10T17:49:00.200Z",
			nome: "Charlotte Harber",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
			id: "22",
		},
		{
			dh_registro: "2023-10-11T11:08:48.356Z",
			nome: "Emanuel Heaney",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/17.jpg",
			id: "23",
		},
		{
			dh_registro: "2023-10-10T23:15:50.560Z",
			nome: "Natasha Balistreri",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/383.jpg",
			id: "24",
		},
		{
			dh_registro: "2023-10-11T04:57:26.173Z",
			nome: "Dr. Stanley Rohan",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
			id: "25",
		},
		{
			dh_registro: "2023-10-11T06:05:45.349Z",
			nome: "Miss Guadalupe Cummerata",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/250.jpg",
			id: "26",
		},
		{
			dh_registro: "2023-10-10T18:09:03.284Z",
			nome: "Bethany Boehm",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/787.jpg",
			id: "27",
		},
		{
			dh_registro: "2023-10-11T00:30:59.655Z",
			nome: "Victoria Marquardt",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/395.jpg",
			id: "28",
		},
		{
			dh_registro: "2023-10-10T23:21:15.501Z",
			nome: "Mitchell Strosin III",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg",
			id: "29",
		},
		{
			dh_registro: "2023-10-10T15:41:00.987Z",
			nome: "Miss Gary Bauch",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/190.jpg",
			id: "30",
		},
		{
			dh_registro: "2023-10-11T08:56:59.115Z",
			nome: "Timothy Schroeder PhD",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/580.jpg",
			id: "31",
		},
		{
			dh_registro: "2023-10-10T14:07:07.132Z",
			nome: "Kristina Veum",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1036.jpg",
			id: "32",
		},
		{
			dh_registro: "2023-10-11T07:39:03.234Z",
			nome: "Alonzo Kunze",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/167.jpg",
			id: "33",
		},
		{
			dh_registro: "2023-10-10T23:41:05.596Z",
			nome: "Gertrude Breitenberg",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/409.jpg",
			id: "34",
		},
		{
			dh_registro: "2023-10-11T05:04:11.585Z",
			nome: "Jared Schimmel",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/828.jpg",
			id: "35",
		},
		{
			dh_registro: "2023-10-11T10:26:56.797Z",
			nome: "Victoria Hirthe",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/925.jpg",
			id: "36",
		},
		{
			dh_registro: "2023-10-11T00:20:00.250Z",
			nome: "Pete Crist III",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg",
			id: "37",
		},
		{
			dh_registro: "2023-10-10T21:55:20.747Z",
			nome: "Alexis Gislason",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/691.jpg",
			id: "38",
		},
		{
			dh_registro: "2023-10-10T17:40:00.170Z",
			nome: "Leonard Orn",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1098.jpg",
			id: "39",
		},
		{
			dh_registro: "2023-10-10T16:45:59.542Z",
			nome: "Josephine Jacobi",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/995.jpg",
			id: "40",
		},
		{
			dh_registro: "2023-10-10T13:57:54.675Z",
			nome: "Lynda Leannon V",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/275.jpg",
			id: "41",
		},
		{
			dh_registro: "2023-10-11T06:11:54.478Z",
			nome: "Christopher Hegmann",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/399.jpg",
			id: "42",
		},
		{
			dh_registro: "2023-10-10T15:27:44.651Z",
			nome: "Jake Spencer",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/237.jpg",
			id: "43",
		},
		{
			dh_registro: "2023-10-10T17:30:53.169Z",
			nome: "Naomi Crona",
			avatar:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/800.jpg",
			id: "44",
		},
	];

	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [searching, setSearching] = useState(false);

	return (
		<div className='containerBox'>
			<div className='searchContainer flex space-between'>
				<label>
					Pesquisar:{" "}
					<input
					placeholder="Nome"
						onChange={(e) => {
							const { value } = e.target;
							clearTimeout(searchTimeout);
							setSearchValue(value);

							searchTimeout = setTimeout(() => {
								if (value.length > 0) {
									setSearching(true);
									const filtered = usersArray.filter((user) => {
										const aux = user.nome.split(" ");
										const nome = aux[0];
										const sobrenome = aux[1];

										return (
											nome.startsWith(value) || sobrenome.startsWith(value)
										);
									});
									setSearchResult(filtered);
								} else setSearching(false);
							}, 300);
						}}
					/>
				</label>
				<p>
					{`Mostrando ${
						searching ? searchResult.length : usersArray.length
					} usuários`}
				</p>
			</div>
			<div className='labelsColumns flex'>
				<div className='check column flex center'>
					<div className='checkButton' />
				</div>
				<div className='name column flex start'>
					<BiSolidUser style={{ marginRight: "5px" }} />
					Nome
					<SortArrows />
				</div>
				<div className='date column flex center'>
					<BiCalendar style={{ marginRight: "5px" }} />
					Data de Registro
					<SortArrows />
				</div>
			</div>

			<ul>
				{searching
					? searchResult.map((user, i) => (
							<UserCard key={user.id} dados={{ ...user, i }} />
					  ))
					: usersArray.map((user, i) => (
							<UserCard key={user.id} dados={{ ...user, i }} />
					  ))}
			</ul>
		</div>
	);
}

function SortArrows() {
	const [order, setOrder] = useState("ascending");

	switch (order) {
		case "ascending":
			return (
				<div
					className='arrow flex'
					onClick={() => {
						setOrder(nextOrder(order));
					}}
				>
					<IoIosArrowUp />
				</div>
			);
		case "descending":
			return (
				<div
					className='arrow flex'
					onClick={() => {
						setOrder(nextOrder(order));
					}}
				>
					<IoIosArrowDown
						className='arrow'
						style={{ marginLeft: "0px", marginTop: "1px" }}
					/>
				</div>
			);
	}
}
