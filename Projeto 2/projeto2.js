var idade=18;
var humano=true;
var mes_aniversario="setembro";

//Atividade 1
if (idade>=18){
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}

// Atividade 2
if (idade>=18 && humano==true){
   console.log("você é maior de idade e é humano.")
}else{
    console.log("Uma das condições não foi atendida. Ou você não é humano ou você não é maior de idade.")
}


//Atividade 3

if (mes_aniversario=="janeiro" || mes_aniversario=="dezembro"){
    console.log("Condição atendida. Você faz aniversário em "+mes_aniversario)
} else {
    console.log("Você não faz aniversário em janeiro ou dezembro")
}

//bônus

//Atividade 4
var nome="Fnio"

if (nome.substring(0,1)=="R" || nome.substring(0,1)=="r"){
    console.log("O nome "+nome+" começa com a letra R")
}else{
    console.log("O nome informado não começa com a letra R")
}

//Atividade 5//

if(nome.length>=6 || nome.substring(0,1)=="E" || nome.substring(0,1)=="e"){
    console.log("Seu nome tem mais que 6 letras ou começa com a letra E")
} else {
    console.log("Critérios não atendidos. Seu nome não tem mais que 6 letras e não começa com a letra E")
}