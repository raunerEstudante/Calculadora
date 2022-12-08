
/*
	Métodos Nativos

 Number() – para converter valores em números;
 Prompt() – para registrar entradas de usuário;
 Alert() – para mostrar mensagem ao usuário;
 Template Strings – para usar strings junto com expressões;
*/

function calc() {
	 const operacao = Number(prompt("Escolha o número da operação:\n 1 - Soma (+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)"));

	if(!operacao || operacao >= 7){
		alert("Valor invalido!")
		calc()
	} else{
		 let n1 = Number(prompt("Insira o primeiro valor:"));
		 let n2 = Number(prompt("Insira o segundo valor:"));
		 let resultado;

		 if (!n1 || !n2) {
		 	alert("Favor insira números!")
		 	calc();
		 } else{
			function soma(){
				resultado = n1 + n2;
				alert(`${n1} + ${n2} = ${resultado}`);
			};
			function subtracao(){
				resultado = n1 - n2;
				alert(`${n1} - ${n2} = ${resultado}`);
			};
			function multiplicacao(){
				resultado = n1 * n2;
				alert(`${n1} * ${n2} = ${resultado}`);
			};
			function divisaoReal(){
				resultado = n1 / n2;
				alert(`${n1} / ${n2} = ${resultado}`);
			};
			function divisaoInteira(){
				resultado = n1 % n2;
				alert(`O resto da divisão de: ${n1} e ${n2} = ${resultado}`);
			};
			function potenciacao(){
				resultado = n1 ** n2;
				alert(`${n1} ^ ${n2} = ${resultado}`);
			};
			function novaOpcao(){
				let opcao = Number(prompt("Repetir operação?\n 1 - SIM\n 2 - NÃO"))
				if (opcao == 1) {
					calc()
				} else if(opcao == 2){
					alert("Volte sempre")
				} else{
					alert("Insira 1 ou 2!")
				};
			};

			if (operacao == "1") {
				soma();
			} else if (operacao == "2") {
				subtracao();
			} else if (operacao == "3") {
				multiplicacao();
			} else if (operacao == "4") {
				divisaoReal();
			} else if (operacao == "5") {
				divisaoInteira();
			} else if (operacao == "6") {
				potenciacao();
			};
		 };

		novaOpcao();
	};
};

calc();

