import "./styles/App.css";
import { Background } from "./components/Background.jsx";
import Header from "./components/Header.jsx";
import { UsersContainer } from "./components/UsersContainer.jsx";
import { UserListProvider } from "./context/UsersList.jsx";
import { ModalProvider } from "./context/Modal.jsx";
import Modals from "./components/Modals.jsx";

function App() {
	return (
		<ModalProvider>
			<Header />
			<Background>
				<UserListProvider>
					<UsersContainer />
				</UserListProvider>
			</Background>
			<Modals />
		</ModalProvider>
	);
}

export default App;
