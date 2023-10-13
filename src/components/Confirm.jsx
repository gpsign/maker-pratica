import "../styles/Confirm.css";
import "../styles/CommonStyles.css";
import { useContext } from "react";
import { ModalContext } from "../context/Modal.jsx";

export default function Confirm() {
	const { alert, setAlert } = useContext(ModalContext);

	return (
		alert.show && (
			<div className='darkscreen flex center'>
				<div className='alert'>
					<h1 className='title'>ALERTA</h1>
					<p className='message'>{alert.message}</p>
					<div className='button container flex space-between'>
						<button
							className='confirm'
							onClick={() => {
								alert.onConfirm && alert.onConfirm();
								setAlert({ show: false, message: "", onConfirm: "" });
							}}
						>
							SIM
						</button>
						<button
							className='cancel'
							onClick={() =>
								setAlert({ show: false, message: "", onConfirm: "" })
							}
						>
							NÃO
						</button>
					</div>
				</div>
			</div>
		)
	);
}
