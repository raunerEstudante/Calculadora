
function limpar(idP,idS){
	document.getElementById(idP).value="";
	document.getElementById(idS).value="";
}
	

function calc(numero1, numero2,operacao) {
	var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
	var n1 = document.getElementById(numero1).value;
	var n2 = document.getElementById(numero2).value;
	function responder(){
		document.getElementById('titulo').innerHTML="Sua Resposta";
		document.getElementById('saida').innerHTML=resposta;};
	var exprecao = n1+operador+n2;
	if (operador == "+") {
		//document.getElementById('saida').innerHTML = `A soma de ${n1} e ${n2} resulta em ${eval(exprecao)}`;
		resposta = `A soma de <strong>${n1}</strong> e <strong>${n2}</strong> resulta em <strong>${eval(exprecao)}</strong>`;
		responder();
	} else if (operador == "-") {
		resposta = `A diferença entre <strong>${n1}</strong> e <strong>${n2}</strong> resulta em <strong>${eval(exprecao)}</strong>`;
		responder();
	} else if (operador == "*") {
		resposta = `O produto de <strong>${n1}</strong> por <strong>${n2}</strong> resulta em <strong>${eval(exprecao)}</strong>`;
		responder();
	} else if (operador == "/") {
		resposta = `O quociente de <strong>${n1}</strong> dividido por <strong>${n2}</strong> resulta em <strong>${eval(exprecao)}</strong>`;
		responder();
	} else if (operador == "%") {
		resposta = `O resto de <strong>${n1}</strong> por <strong>${n2}</strong> resulta em <strong>${eval(exprecao)}</strong>`;
		responder();
	} else if (operador == "**") {
		resposta = `A exponenciação de <strong>${n1}</strong> a <strong>${n2}</strong> resulta em <strong>${eval(exprecao)}</strong>`;
		responder();
	};
};




