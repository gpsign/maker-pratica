import { createContext, useState } from "react";
import { LuAlertTriangle } from "react-icons/lu";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
	const DefaultConfirmModal = {
		display: false,
		Icon: LuAlertTriangle,
		IconColor: "yellow",
		title: "Alerta",
		message: "",
		onConfirm: undefined,
		onCancel: undefined,
	};

	const [ConfirmModal, setConfirmModal] = useState({ ...DefaultConfirmModal });

	function showConfirmModal(params) {
		setConfirmModal({ ...DefaultConfirmModal, ...params, display: true });
	}

	function closeConfirmModal() {
		setConfirmModal({ ...DefaultConfirmModal, display: false });
	}

	return (
		<ModalContext.Provider
			value={{
				ConfirmModal,
				showConfirmModal,
				closeConfirmModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}
