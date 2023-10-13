import "./styles/App.css";
import { Background } from "./components/Background.jsx";
import Header from "./components/Header.jsx";
import { UsersContainer } from "./components/UsersContainer.jsx";
import { UserListProvider } from "./context/UsersList.jsx";
import Confirm from "./components/Confirm.jsx";
import { ModalProvider } from "./context/Modal.jsx";

function App() {
	return (
		<ModalProvider>
			<Header />
			<Background>
				<UserListProvider>
					<UsersContainer />
				</UserListProvider>
			</Background>
			<Confirm />
		</ModalProvider>
	);
}

export default App;
