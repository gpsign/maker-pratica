import "../styles/UserCard.css";
import "../styles/CommonStyles.css";
import { BiPencil } from "react-icons/bi";

export default function UserCard({ i }) {
	const data = new Date();

	return (
		<li
			className='userLi flex'
			style={{ backgroundColor: i % 2 ? "#F3F3F3" : "#FFFFFF" }}
		>
			<div className='check container flex center'>
				<div className='checkButton' />
			</div>
			<div className='image container flex center'>
				<img
					className='profilePic'
					src='https://as1.ftcdn.net/v2/jpg/02/55/62/34/1000_F_255623447_W0WUBdUgHX9AsPOlBctKwUlT3tyv9awV.jpg'
					alt='foto'
				/>
			</div>
			<div className='name container flex'>
				<h2 className='name'>José Laurindo Da Silva</h2>
			</div>
			<div className='date container flex center'>
				<h3 className='date'>
					{data.getDate()}/{data.getMonth() + 1}/{data.getFullYear()}
				</h3>
			</div>
			<p className='edit'>Editar</p>
		</li>
	);
}
