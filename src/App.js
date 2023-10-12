import"./styles/App.css"
import { Background } from "./components/Background.jsx";
import Header from "./components/Header.jsx";
import { UsersContainer } from "./components/UsersContainer.jsx";

function App() {
	return (
		<>
			<Header />
			<Background>
				<UsersContainer />
			</Background>
		</>
	);
}

export default App;
