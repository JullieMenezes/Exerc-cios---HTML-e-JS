/*
   1 - Elaborar um programa para uma revenda de veículos. O programa deve ler o modelo e o preço do veículo.
   Deve, então, apresentar como resposta o valor da entrada (50%) e restante em 12x.

*/
function converter(){
    // captura os campos
var txtModelo = document.getElementById('txtModelo');
var txtPreço = document.getElementById('txtPreço');
var outModelo = document.getElementById('outModelo');
var outResposta = document.getElementById('outResposta');

// captura os valores
var Modelo = txtModelo.value
var txtPreço = Number(txtPreço.value);
 
// converter resultado
var preço1 = preço / 2;
var preço2 = Math.ceil (preço1 / 12);

// Resposta

outModelo.textContent = Modelo
outResposta.textContent = `Entrada de R$ ${preço1} + 12x de R$ ${preço2}`;
}

/*
   2 - Elaborar um programa para um restaurante que leia o preço por kg e o consumo em gramas de um cliente.
   Exiba o valor a ser pago.
   
*/
    // captura os campos
function converter(){
var PreçoKg = document.getElementById('txtPreçoKg');
var ConsumoGramas = document.getElementById('txtConsumoGramas');

    //captura os valores
var PreçoKg = Number (txtPreço.value);
var ConsumoGramas = Number (txtConsumoGramas.value);

    //converter resultado
var preçodoprato = (PreçoKg * ConsumoGramas) / 1000

    // Resposta
outResposta.textContent = `Valor à pagar: R$ ${preçodoprato}`;
}

/*
   3 - Elaborar um programa para uma lan house de um aeroporto. 
   O programa deve ler o valor de cada 15 min de uso de um computador e o tempo de uso por um cliente em minutos.
   Informe o valor a ser pago pelo cliente, sabendo que as frações de 15 minutos devem ser cobradas de forma integral.

*/
    //captura os campos
function converter(){
var txtValor15min = document.getElementById('txtValor15min');
var txtTempopormin = document.getElementById("txtTempo por um  min");

    //captura os valores
var txtValor15min = Number (txtValor15min.value);
var txtTempopormin = Number (txtTempopormin.value);

    //converter resultado
var preçototal = totaltempo / 15;
var preçototal2 = Math.ceil(preçototal);
var resultafinal = preçototal2 * txtTempopormin;
    
    //resposta
outResposta.textContent = `Valor total a pagar: R$ ${resultafinal}`
}