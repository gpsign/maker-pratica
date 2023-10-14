import "../styles/UserCard.css";
import "../styles/CommonStyles.css";
import { useContext, useEffect, useState } from "react";
import { UsersListContext } from "../context/UsersList.jsx";
import { BsCheck } from "react-icons/bs";
import { ModalContext } from "../context/Modal.jsx";

export default function UserCard({ dados }) {
	if (!dados) return;

	const { id, nome, dh_registro, avatar, i } = dados;
	const { selected, setSelected } = useContext(UsersListContext);
	const ModalData = useContext(ModalContext);
	const { showEditUserModal } = ModalData;
	const [isChecked, setIsChecked] = useState(
		selected.indexOf(id) != -1 ? true : false
	);
	const rawDate = new Date(dh_registro);

	const isEven = i % 2 === 0 ? "even" : "odd";

	const date = rawDate
		.toLocaleString("pt-BR", { hour12: false })
		.replace(",", "");

	useEffect(() => {
		setIsChecked(selected.indexOf(id) != -1 ? true : false);
	}, [selected]);

	return (
		<li className={`userLi flex ${isEven} ${isChecked && "selected"}`}>
			<div className='check container flex center'>
				<button
					className={`check flex center ${isChecked && "selected"}`}
					onClick={() => {
						const userIndex = selected.indexOf(id);
						if (userIndex != -1) {
							const after = selected.toSpliced(userIndex, 1);
							setSelected(after);
							setIsChecked(false);
						} else {
							setSelected([...selected, id]);
							setIsChecked(true);
						}
					}}
				>
					{isChecked && <BsCheck />}
				</button>
			</div>
			<div className='image container flex center'>
				<img className='profilePic' src={avatar} alt={nome} />
			</div>
			<div className='name container flex'>
				<h2 className='name'>{nome}</h2>
			</div>
			<div className='date container flex center'>
				<h3 className='date'>{date}</h3>
			</div>
			<button
				className='edit'
				onClick={() => {
					showEditUserModal({ nome, avatar, id, dh_registro });
				}}
				disabled={isChecked}
			>
				Editar
			</button>
		</li>
	);
}
