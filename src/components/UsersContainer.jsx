import "../styles/UsersContainer.css";
import "../styles/CommonStyles.css";
import { BiSolidUser, BiCalendar } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import UserCard from "./UserCard.jsx";

function nextOrder(order) {
	if (order === "ascending") return "descending";
	else return "ascending";
}

export function UsersContainer() {
	return (
		<div className='containerBox'>
			<div className='searchContainer flex'>
				<label>
					Pesquisar: <input />
				</label>
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
				<UserCard i={1} />
				<UserCard i={2} />
				<UserCard i={3} />
				<UserCard i={4} />
				<UserCard i={5} />
				<UserCard i={6} />
				<UserCard i={7} />
				<UserCard i={8} />
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
						style={{ marginLeft: "1px", marginTop: "1px" }}
					/>
				</div>
			);
	}
}
