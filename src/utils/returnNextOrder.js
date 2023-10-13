export function returnNextOrder(order) {
	switch (order) {
		case "any":
			return "ascending";
		case "ascending":
			return "descending";
		default:
			return "any";
	}
}
