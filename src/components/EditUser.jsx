import "../styles/EditUser.css";
import "../styles/CommonStyles.css";
import { useContext, useState } from "react";
import { ModalContext } from "../context/Modal.jsx";
import { handlePut } from "../utils/handlePut.js";
import { UsersListContext } from "../context/UsersList.jsx";
import { VscLoading } from "react-icons/vsc";

export default function EditUser() {
	const { EditUserModal, closeEditUserModal } = useContext(ModalContext);
	const ListData = useContext(UsersListContext);

	const BeforeChanges = {
		id: EditUserModal.id,
		nome: EditUserModal.nome,
		avatar: EditUserModal.avatar,
		dh_registro: EditUserModal.dh_registro,
	};

	const [newValues, setNewValues] = useState({ ...BeforeChanges });
	const [buttonLoading, setButtonLoading] = useState(false);

	return (
		EditUserModal.display && (
			<div className='edit modal'>
				<h1 className='title'>EDITAR</h1>
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						setButtonLoading(true);
						if (JSON.stringify(newValues) !== JSON.stringify(BeforeChanges))
							await handlePut(newValues, ListData);
						closeEditUserModal();
						setButtonLoading(false);
					}}
				>
					<div className='user data flex center space-between'>
						<img className='avatar' src={newValues.avatar} />
						<div className='flex dir-column'>
							<label>
								Nome:{" "}
								<input
									type='text'
									placeholder='Nome Completo'
									value={newValues.nome}
									onChange={(e) =>
										setNewValues({ ...newValues, nome: e.target.value })
									}
									required
								/>
							</label>
							<label>
								Avatar:{" "}
								<input
									type='url'
									placeholder='URL Da Imagem'
									value={newValues.avatar}
									onChange={(e) =>
										setNewValues({ ...newValues, avatar: e.target.value })
									}
									required
								/>
							</label>
						</div>
					</div>
					<div className='button container flex center'>
						<button className='confirm' disabled={buttonLoading}>
							{buttonLoading ? <VscLoading /> : "CONFIRMAR"}
						</button>
						<button
							className='cancel'
							onClick={closeEditUserModal}
							disabled={buttonLoading}
						>
							CANCELAR
						</button>
					</div>
				</form>
			</div>
		)
	);
}
