import "../styles/Alert.css";
import "../styles/CommonStyles.css";
import { useContext } from "react";
import { ModalContext } from "../context/Modal.jsx";

export default function Alert() {
	const { closeAlertModal, AlertModal } = useContext(ModalContext);

	let IconColor;
	switch (AlertModal.IconColor) {
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
		AlertModal.display && (
			<div className='alert modal'>
				<div className='icon container flex center'>
					<div className='icon color' style={IconColor}>
						<AlertModal.Icon />
					</div>
				</div>
				<h1 className='title'>{AlertModal.title.toUpperCase()}</h1>
				<p className='message'>{AlertModal.message}</p>
				<div className='button container flex space-between'>
					<button
						className='confirm'
						onClick={() => {
							AlertModal.onConfirm && AlertModal.onConfirm();
							closeAlertModal();
						}}
					>
						OK
					</button>
				</div>
			</div>
		)
	);
}
