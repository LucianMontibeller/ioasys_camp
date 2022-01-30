
const utils = require('./utils.js');


const usuario = {
	nome: 'lucian',
	email:'luciandeborah@gmail.com',
	idade: 18,
	senha: 'hadouken',
	confsenha: 'hadouken',
}

const meuUsuario = new Map();

meuUsuario.set('nome', usuario.nome);
meuUsuario.set('email', usuario.email);
meuUsuario.set('idade', usuario.idade);
meuUsuario.set('senha', usuario.senha);
meuUsuario.set('cconfsenha', usuario.confsenha);


const formValido = () => {
	try{
		meuUsuario.forEach(utils.formValido)
	
	if(usuario.senha != usuario.confsenha){
		throw 'senha não corresponde'
	}
	console.log('usuario válido');
	}catch(e){
		console.error(e);
	}
}



formValido();
