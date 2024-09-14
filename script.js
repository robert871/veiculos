



// trabalho de programção I 
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
  total = valor*(4/100) // faz o calculo de percentual
  window.document.getElementById('total').innerHTML += `Carro de passeio: R$ ${total} de seguro <br>` 
  caixa.push(total) // faz o push do valor em um array 
}
function adicionar1() {
 var valor = window.document.getElementById('valor').value // lê o valor de uma input
  var valor2 = 0
  valor2= parseFloat(valor)
  total1 = valor2*(5/100)
  window.document.getElementById('total').innerHTML += `Utilitário: R$ ${total1} de seguro <br>`  
  caixa.push(total1) // faz o push do valor em um array 
}
function adicionar2() {
  let total2 = 0
  var valor2 = 0
  var valor = window.document.getElementById('valor').value // lê o valor de uma input 
  valor2= parseFloat(valor) // converte o valor para numero
  total2 += valor2*(3/100)  // faz o calculo de percentual
  window.document.getElementById('total').innerHTML += `Van ou ônibus: R$ ${total2} de seguro <br>` 
  caixa.push(total2) // faz o push do valor em um array  
}function adicionar3() {
  var total3 = 0
  var valor2 = 0
  var valor = window.document.getElementById('valor').value // lê o valor de uma input 
  valor2= parseFloat(valor)
  total3 = valor*(2/100) // faz o calculo de percentual
  window.document.getElementById('total').innerHTML += `Caminhão: R$ ${total3} de seguro <br>`   
  caixa.push(total3) // faz o push do valor em um array 
}

function somar(){
  var soma = window.document.getElementById('final')
  for(var i = 0; caixa.length > i; i++ ){  
soma_final += caixa[i] 
 // esse loop soma os valores obtidos nas funções adicionar 
  }
  
window.document.getElementById('final').innerText = soma_final 
window.document.getElementById('total').innerHTML = " "
soma_final=0
window.document.getElementById('valor').value=0



}
function limpar(){ 
  window.document.getElementById('total').innerHTML = " "
  window.document.getElementById('valor').value = 0
  window.document.getElementById('final').innerText =  0
 soma_final=0
   // limpa o array atribuindo um valor de comprimento igual a zero
}

