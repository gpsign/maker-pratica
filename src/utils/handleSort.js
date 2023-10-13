import { sortUsersArray } from "./sortUsersArray.js";
import { returnNextOrder } from "./returnNextOrder.js";

export function handleSort(context, setColumn, column) {
	const {
		nameOrder,
		setNameOrder,
		dateOrder,
		setDateOrder,
		usersDisplayed,
		setUsersDisplayed,
		search,
		usersArray,
	} = context;

	if (column === "name") {
		//Descobre a próxima organização e reseta a outra
		const next = returnNextOrder(nameOrder);

		setNameOrder(next);
		setDateOrder("any");

		//Deixa a coluna selecionada, se não, desseleciona ela
		if (next != "any") {
			setColumn("name");

			//Se estiver pesquisando, organiza o resultado da pesquisa
			if (search.status)
				setUsersDisplayed(sortUsersArray([...search.result], next, "any"));
			else setUsersDisplayed(sortUsersArray([...usersDisplayed], next, "any"));
		} else {
			setColumn("");
			if (search.status) setUsersDisplayed([...search.result]);
			else setUsersDisplayed([...usersArray]);
		}
	} else if (column === "date") {
		const next = returnNextOrder(dateOrder);
		setDateOrder(next);
		setNameOrder("any");

		if (next != "any") {
			setColumn("date");

			if (search.status)
				setUsersDisplayed(sortUsersArray([...search.result], "any", next));
			else setUsersDisplayed(sortUsersArray([...usersDisplayed], "any", next));
		} else {
			setColumn("");
			if (search.status) setUsersDisplayed([...search.result]);
			else setUsersDisplayed([...usersArray]);
		}
	} else return;
}
