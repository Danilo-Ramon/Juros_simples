const Vi = document.querySelector('#Vi')
const TXJ = document.querySelector('#TXJ')
const periodo = document.querySelector('#periodo')
const resultadoFin = document.querySelector('#resultado')
const but = document.querySelector('#but')
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-theme');
});



but.addEventListener('click', rendimento)

function rendimento(){
    
    event.preventDefault()
    
    let valorIni = parseFloat(Vi.value);
    let taxaJuros = parseFloat(TXJ.value);
    let periInv = parseFloat(periodo.value);

    let resultado = valorIni + (valorIni * (taxaJuros / 100) * periInv);
    resultadoFin.value = resultado.toFixed(2);


}
