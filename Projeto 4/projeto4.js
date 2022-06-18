//1 - crie uma função que exiba uma mensagem no console

function msg(){
    console.log("Bom dia!O sol já nasceu lá na fazendinha!")
};

msg()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function yourname(Name){
    console.log(`Olá, ${Name}.`)
}

yourname("Renan")


//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function publicinfo(Name,age,song){
    console.log(`Olá, ${Name}.Verifiquei que você tem ${age} anos e gosta de ouvir músicas do estilo ${song}.`)
}

publicinfo("Renan","29","Romântico")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function whatdoyoulike(movie,songagain){
    console.log(`Verifiquei que você gosta do filme ${movie} e da música ${songagain}`)
}

whatdoyoulike("Duro de matar", "Various")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triple(number){
    console.log (`O triplo de ${number} é ${number*3}`)
}

triple(10)