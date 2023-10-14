import { createContext, useState } from "react";
import { LuAlertTriangle } from "react-icons/lu";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
	const DefaultAlertModal = {
		display: false,
		Icon: MdOutlineReportGmailerrorred,
		IconColor: "red",
		title: "Alerta",
		message: "",
		onConfirm: undefined,
	};

	const DefaultConfirmModal = {
		display: false,
		Icon: LuAlertTriangle,
		IconColor: "yellow",
		title: "Atenção",
		message: "",
		onConfirm: undefined,
		onCancel: undefined,
	};

	const DefaultEditUserModal = {
		display: false,
		id: -1,
		nome: "",
		avatar: "",
		dh_registro: new Date(),
	};

	const [displayModals, setDisplayModals] = useState(false);
	const [AlertModal, setAlertModal] = useState({ ...DefaultAlertModal });
	const [ConfirmModal, setConfirmModal] = useState({ ...DefaultConfirmModal });
	const [EditUserModal, setEditUserModal] = useState({
		...DefaultEditUserModal,
	});

	function showAlertModal(params) {
		setAlertModal({ ...DefaultAlertModal, ...params, display: true });
		setDisplayModals(true);
	}

	function closeAlertModal() {
		setAlertModal({ ...DefaultAlertModal, display: false });
		setDisplayModals(false);
	}

	function showConfirmModal(params) {
		setConfirmModal({ ...DefaultConfirmModal, ...params, display: true });
		setDisplayModals(true);
	}

	function closeConfirmModal() {
		setConfirmModal({ ...DefaultConfirmModal, display: false });
		setDisplayModals(false);
	}

	function showEditUserModal(params) {
		setEditUserModal({ ...DefaultEditUserModal, ...params, display: true });
		setDisplayModals(true);
	}

	function closeEditUserModal() {
		setEditUserModal({ ...DefaultEditUserModal, display: false });
		setDisplayModals(false);
	}

	return (
		<ModalContext.Provider
			value={{
				AlertModal,
				showAlertModal,
				closeAlertModal,
				ConfirmModal,
				showConfirmModal,
				closeConfirmModal,
				EditUserModal,
				showEditUserModal,
				closeEditUserModal,
				displayModals,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}
