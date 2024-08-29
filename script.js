async function getweather(){
   
    var tempCelsisus = resposta.data.main.temp;

    //imprime valor no front ens com concatenar jquery e duas cadas decimas
    document.getElementById('temperatura').innerHTML = `A temperatura ateal de mogi das cruzes é: ${tempCelsisus.toFixed(2)} °c`;

}
 //chamar função
getweather()