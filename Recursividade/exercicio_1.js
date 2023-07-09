"RECURSIVIDADE";
/* Calcular a soma de todos os numeros positivos de 1 a N*/

var  N = 5;

function somaRecursiva(N){
    if(N == 0){
        return 1;
    }
    return N + somaRecursiva(N-1);
}

var result = somaRecursiva(N);
console.log(result);