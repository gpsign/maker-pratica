import "../styles/SortArrows.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function SortArrows({ order }) {
	let arrow;
	switch (order) {
		case "ascending":
			arrow = (
				<div className='arrow flex'>
					<IoIosArrowUp />
				</div>
			);
			break;
		case "descending":
			arrow = (
				<div className='arrow flex'>
					<IoIosArrowDown style={{ marginLeft: "0px", marginTop: "1px" }} />
				</div>
			);
			break;
		default:
			arrow = (
				<div className='arrow flex dir-column'>
					<IoIosArrowUp style={{ marginBottom: "-6px" }} />
					<IoIosArrowDown style={{ marginLeft: "0px" }} className='arrow' />
				</div>
			);
			break;
	}

	return <div>{arrow}</div>;
}
