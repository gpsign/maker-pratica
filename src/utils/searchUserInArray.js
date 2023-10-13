export function searchUserInArray(array, value) {
	if (array === undefined) return;

	//Filtra por nome, ou sobrenome, ou o nome completo case insensitive
	return array.filter((user) => {
		const aux = user.nome.split(" ");
		const nome = aux[0].toLowerCase();
		const sobrenome = aux[1].toLowerCase();
		const nomeCompleto = nome + " " + sobrenome;

		return (
			nome.startsWith(value.toLowerCase()) ||
			sobrenome.startsWith(value.toLowerCase()) ||
			nomeCompleto.startsWith(value.toLowerCase())
		);
	});
}
