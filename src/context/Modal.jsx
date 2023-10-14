import { createContext, useState } from "react";
import { LuAlertTriangle } from "react-icons/lu";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
	const DefaultConfirmModal = {
		Icon: LuAlertTriangle,
		IconColor: "yellow",
		title: "Alerta",
		message: "",
		onConfirm: undefined,
	};

	const [ConfirmModal, setConfirmModal] = useState({ ...DefaultConfirmModal });
	const [displayModal, setDisplayModal] = useState(false);

	function showConfirmModal(params) {
		setDisplayModal(true);
		console.log({ ...DefaultConfirmModal, ...params });
		setConfirmModal({ ...DefaultConfirmModal, ...params });
	}

	function closeConfirmModal() {
		setConfirmModal({ ...DefaultConfirmModal });
		setDisplayModal(false);
	}

	return (
		<ModalContext.Provider
			value={{
				displayModal,
				ConfirmModal,
				showConfirmModal,
				closeConfirmModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}
