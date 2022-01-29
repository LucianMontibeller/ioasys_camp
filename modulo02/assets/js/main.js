const form = document.querySelector('.form');


form.addEventListener('submit', function(e){
	e.preventDefault();

	const input1 = e.target.querySelector('#primeiro_input');
	const input2 = e.target.querySelector('#segundo_input');

	const n1 = Number(input1.value);
	const n2 = Number(input2.value);
	calcular(n1, n2)
});

function media(n1, n2){
	return  media = (n1 + n2) / 2
}

function resultado(msg){
	const result = document.querySelector('#result');
	result.innerHTML = msg
}


function calcular(n1 , n2){
	const ope = document.querySelector('#operacao');
	const op = ope.value
	if (op === "/"){
		const calc = n1 / n2
		resultado(calc)
		return calc
	}
	if (op === "*"){
		const calc = n1 * n2
		resultado(calc)
		return calc
	}
	if (op === "+"){
		const calc = n1 + n2
		resultado(calc)
		return calc
	}
	if (op === "-"){
		const calc = n1 - n2
		resultado(calc)
		return calc
	}
}

