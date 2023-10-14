export function searchUserInArray(array, value) {
	if (array === undefined) return;

	//Filtra por nome, ou sobrenome, ou o nome completo case insensitive
	return array.filter((user) => {
		const aux = user.nome.split(" ");
		let nome;
		let sobrenome;
		let nomeCompleto;
		if (aux[0]) nome = aux[0].toLowerCase();
		if (aux[1]) sobrenome = aux[1].toLowerCase();
		if (nome && sobrenome) nomeCompleto = nome + " " + sobrenome;

		return (
			nome.startsWith(value.toLowerCase()) ||
			sobrenome.startsWith(value.toLowerCase()) ||
			nomeCompleto.startsWith(value.toLowerCase())
		);
	});
}
