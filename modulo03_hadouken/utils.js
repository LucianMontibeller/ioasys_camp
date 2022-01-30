
const estaVazio = (valor) => {
	if(typeof valor === 'string'){
		return !valor;
	} 

	if (typeof valor === 'number'){
		return false;
	}
	
	if(typeof valor === 'boolean'){
		return false;
	}
	return true;
};

const eEmail = (valor) =>
	valor.match(
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

			
const formValido = (valor, chave) => {
	if (estaVazio(valor)){
		throw `${chave} está vazio`
	}

	if (chave === 'email' && !eEmail(valor)){
		throw `${valor} não é Email`
	}
};

module.exports = {estaVazio, formValido};
