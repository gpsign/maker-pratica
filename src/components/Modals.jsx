import { useContext } from "react";
import "../styles/Modals.css";
import Confirm from "./Confirm.jsx";
import { ModalContext } from "../context/Modal.jsx";
import EditUser from "./EditUser.jsx";
import Alert from "./Alert.jsx";

export default function Modals() {
	const { displayModals } = useContext(ModalContext);

	return (
		displayModals && (
			<div className='darkscreen flex center'>
				<EditUser />
				<Confirm />
				<Alert />
			</div>
		)
	);
}
