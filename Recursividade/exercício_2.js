"Contagem regresiva"
/* Faça uma contagem regresiva usando recursividade*/

var cont = 10;

function ContRegresive(cont){
    if(cont == 0 ){
        return 1;
    }

    return console.log(cont), ContRegresive(cont-1);
}

var result = ContRegresive(cont);
console.log(result);

