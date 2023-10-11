import MakerLogo from "../assets/logotopo.png";
import "../styles/Logo.css";

export default function Logo() {
	return <img src={MakerLogo} alt='maker' onClick={() => location.reload()} />;
}
