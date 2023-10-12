import "../styles/UserCard.css";
import "../styles/CommonStyles.css";

export default function UserCard({ dados }) {
	if (!dados) return;

	const { nome, dh_registro, avatar, i } = dados;
	const rawDate = new Date(dh_registro);

	const date = rawDate.toLocaleString("pt-BR", { hour12: false }).replace(",", "");

	return (
		<li
			className='userLi flex'
			style={{ backgroundColor: i % 2 ? "#F3F3F3" : "#FFFFFF" }}
		>
			<div className='check container flex center'>
				<div className='checkButton' />
			</div>
			<div className='image container flex center'>
				<img className='profilePic' src={avatar} alt={nome} />
			</div>
			<div className='name container flex'>
				<h2 className='name'>{nome}</h2>
			</div>
			<div className='date container flex center'>
				<h3 className='date'>{date}</h3>
			</div>
			<p className='edit'>Editar</p>
		</li>
	);
}
