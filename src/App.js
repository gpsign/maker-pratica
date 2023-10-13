import "./styles/App.css";
import { Background } from "./components/Background.jsx";
import Header from "./components/Header.jsx";
import { UsersContainer } from "./components/UsersContainer.jsx";
import { UserListProvider } from "./context/UsersList.jsx";

function App() {
	return (
		<>
			<Header />
			<Background>
				<UserListProvider>
					<UsersContainer />
				</UserListProvider>
			</Background>
		</>
	);
}

export default App;
