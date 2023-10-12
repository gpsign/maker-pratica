import "../styles/UsersContainer.css";
import "../styles/CommonStyles.css";
import { BiSolidUser, BiCalendar } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

function nextOrder(order) {
	if (order === "ascending") return "descending";
	else return "ascending";
}

export function UsersContainer() {
	return (
		<div className='container'>
			<div className='searchContainer flex'>
				<label>
					Pesquisar: <input />
				</label>
			</div>
			<div className='labelsColumns flex'>
				<div className='column flex'>
					<div className='check' />
				</div>
				<div className='column flex' style={{ width: "450px" }}>
					<BiSolidUser style={{ marginRight: "5px" }} />
					Nome
					<SortArrows />
				</div>
				<div className='column flex'>
					<BiCalendar style={{ marginRight: "5px" }} />
					Data de Registro
					<SortArrows />
				</div>
			</div>
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
					<IoIosArrowDown className='arrow' style={{marginLeft: "1px", marginTop: "1px"}} />
				</div>
			);
	}
}
