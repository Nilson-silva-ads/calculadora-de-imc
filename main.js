
const calcular = document.getElementById('calcular');

calcular.addEventListener('click', imc);

function imc() {

 const nome = document.getElementById('nome').value;
 const altura = document.getElementById('altura').value;
 const peso = document.getElementById('peso').value;
 const resultado = document.getElementById('resultado');

 if (nome !== '' ||  altura !=='' ||  peso !== '') { 

   var calculoImc =  (peso /(altura * altura)).toFixed(1);
    
    let clacificação = '';

   if (calculoImc <18.5) {
   clacificação = " com MAGREZA!! Você esta com abaixo do peso."

   } else if (calculoImc <24.9 ) {
    clacificação = " NORMAL!!! Parabens você está no peso ideal"
    
   } else if (calculoImc <29.9) {
    clacificação = " com SOBREPESO!! levemente cima do peso."

   } else if ( calculoImc <34.9 ) {
    clacificação = " com OBESIDADE GRAU I !!!"
    
   } else if ( calculoImc <39.9) {
    clacificação = " com OBESIDADE GRAU II !!!"
 
   } else if ( calculoImc > 40) {
    clacificação = " com OBESIDADE GRAU III!!!"
    
   }

   resultado.textContent = `${nome}, Seu IMC é ${calculoImc}, e você está ${clacificação}` 
    

   
 } else { 

  resultado.textContent = "preencha todos os campos!!!"

   
 }

}
