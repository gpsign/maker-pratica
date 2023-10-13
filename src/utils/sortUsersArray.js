export function sortUsersArray(array, nameOrder, dateOrder) {
	if (nameOrder != "any") {
		const sortedByName = array.sort((userA, userB) => {
			if (userA.nome < userB.nome) return -1;
			if (userA.nome > userB.nome) return 1;
		});
		if (nameOrder === "ascending") return sortedByName;
		else return sortedByName.reverse();
	} else if (dateOrder != "any") {
		const sortedByDate = array.sort(
			(userA, userB) =>
				new Date(userB.dh_registro) - new Date(userA.dh_registro)
		);
		if (dateOrder === "ascending") return sortedByDate;
		else return sortedByDate.reverse();
	} else return array;
}
