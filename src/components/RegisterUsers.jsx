import { useContext, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import "../styles/RegisterUser.css";
import { postUser } from "../utils/postUser.js";
import { getUsersFromServer } from "../utils/getUsersFromServer.js";
import { UsersListContext } from "../context/UsersList.jsx";

export default function RegisterUser() {
	const [newUser, setNewUser] = useState({
		nome: "",
		avatar: "",
	});
	const [buttonLoading, setButtonLoading] = useState(false);
	const ListData = useContext(UsersListContext);

	return (
		<div className='create'>
			<h2 className='title'>Cadastro De Usuário</h2>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					setButtonLoading(true);
					await postUser(newUser, setButtonLoading);
					await getUsersFromServer(ListData, setButtonLoading);
				}}
			>
				<label>
					Nome:{" "}
					<input
						type='text'
						placeholder='Nome Completo'
						value={newUser.nome}
						onChange={(e) => {
							setNewUser({ ...newUser, nome: e.target.value });
						}}
						required
					/>
				</label>
				<label>
					Avatar:{" "}
					<input
						type='url'
						placeholder='URL Da Imagem'
						value={newUser.avatar}
						onChange={(e) => {
							setNewUser({ ...newUser, avatar: e.target.value });
						}}
						required
					/>
				</label>
				<button className=''>
					{buttonLoading ? <VscLoading /> : "CADASTRAR"}
				</button>
			</form>
		</div>
	);
}
