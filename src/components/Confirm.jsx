import "../styles/Confirm.css";
import "../styles/CommonStyles.css";
import React, { useContext } from "react";
import { ModalContext } from "../context/Modal.jsx";

export default function Confirm() {
	const { closeConfirmModal, ConfirmModal } = useContext(ModalContext);

	let IconColor;
	switch (ConfirmModal.IconColor) {
		case "red":
			IconColor = { color: "#ff0000", backgroundColor: "#ffc6c6" };
			break;
		case "yellow":
			IconColor = { color: "#4f4300", backgroundColor: "#ffee90" };
			break;
		default:
			IconColor = { color: "#000000", backgroundColor: "#e1e1e1" };
			break;
	}

	return (
		ConfirmModal.display && (
			<div className='darkscreen flex center'>
				<div className='confirm modal'>
					<div className='icon container flex center'>
						<div className='icon color' style={IconColor}>
							<ConfirmModal.Icon />
						</div>
					</div>
					<h1 className='title'>{ConfirmModal.title.toUpperCase()}</h1>
					<p className='message'>{ConfirmModal.message}</p>
					<div className='button container flex space-between'>
						<button
							className='confirm'
							onClick={() => {
								ConfirmModal.onConfirm && ConfirmModal.onConfirm();
								closeConfirmModal();
							}}
						>
							SIM
						</button>
						<button
							className='cancel'
							onClick={() => {
								ConfirmModal.onCancel && ConfirmModal.onCancel();
								closeConfirmModal();
							}}
						>
							NÃO
						</button>
					</div>
				</div>
			</div>
		)
	);
}
