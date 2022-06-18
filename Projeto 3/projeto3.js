//1 - Criar um loop que conte de 1 até 10 usando FOR

for (var i=0;i<=10;i++){
    console.log(i)
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE
var contador=10;

while (contador>0){
    console.log(contador)
    contador=contador-1
}

//4- Criar um loop que conte todos os números pares de 0 a 100

var contador_pares=0
var divisores=[]

for (var i=0;i<=100;i++){
    if (i%2==0){
        divisores.push(i)
        contador_pares=contador_pares+1
    }
}

console.log(`De 0 a 100 há ${contador_pares} números pares, são eles ${divisores}`)