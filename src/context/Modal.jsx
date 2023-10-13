import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
	const [alert, setAlert] = useState({
		show: false,
		message: "",
		onConfirm: undefined,
	});
	return (
		<ModalContext.Provider value={{ alert, setAlert }}>
			{children}
		</ModalContext.Provider>
	);
}
