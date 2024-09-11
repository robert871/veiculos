
let total1 = 0
let tota2 = 0
let tota3 = 0
let tota4 = 0
let total = 0
let caixa = [0]
let i = 0
let soma_final = 0
// cada function é referente a um botão diferente 
function adicionar() {
  let total = 0
  var valor2 = 0
  var valor = window.document.getElementById('valor').value // lê o valor de uma input
  valor2= parseFloat(valor)
  total = valor*(4/100)
  window.document.getElementById('total').innerHTML += "carro de passeio <br>"
  caixa.push(total) // faz o push do valor em um array 
  somar()
}

function adicionar1() {

  var valor = window.document.getElementById('valor').value // lê o valor de uma input
  var valor2 = 0
  valor2= parseFloat(valor)
  total1 = valor2*(5/100)
  window.document.getElementById('total').innerHTML += "ultilitario <br>"

  caixa.push(total1) // faz o push do valor em um array 
  somar()


}
function adicionar2() {
  let total2 = 0
  var valor2 = 0
  var valor = window.document.getElementById('valor').value // lê o valor de uma input 
  valor2= parseFloat(valor)
  total2 += valor2*(3/100)
  window.document.getElementById('total').innerHTML += "van ou onibus <br>"

  caixa.push(total2) // faz o push do valor em um array 
  somar()

  
}function adicionar3() {
  var total3 = 0
  var valor2 = 0
  var valor = window.document.getElementById('valor').value // lê o valor de uma input 
  valor2= parseFloat(valor)
  total3 = valor*(2/100)
  window.document.getElementById('total').innerHTML += "caminhão <br>"
   
  caixa.push(total3) // faz o push do valor em um array 
  somar()

}



function somar(){
  var soma = window.document.getElementById('final')
  for(var i = 0; caixa.length > i; i++ ){ 
soma_final += caixa[i]


  }
  
window.document.getElementById('final').innerText = soma_final 




}
function limpar(){ 
  window.document.getElementById('total').innerHTML = " "
  window.document.getElementById('valor').value = 0
  window.document.getElementById('final').innerText =  0
  window.location.reload();
   // limpa o array atribuindo um valor de comprimento igual a zero
}
