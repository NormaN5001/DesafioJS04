function mensagem(){
	console.log("Ola mundo!")
}
mensagem()

function sobre(name, idade, estiloMusical){
    console.log(`Eu me chamo ${name}, (:`);
    console.log(`Tenho ${idade} anos de idade`);
    console.log(`E o meu estilo musical preferido eu acho que e um ${estiloMusical}`);
}
sobre("Nicolas", 18, "Rapzin");

function sobre2(animeFavorito, musicaFavorita){
    console.log(`O meu anime favorito e: ${animeFavorito}`);
    console.log(`Minha musica favorita creio que seja: ${musicaFavorita}`);
}
sobre2("Attack on Titan", "Sem graca - Haikaiss");

function conta(numero){
	console.log(`${numero}`*3)
}
conta(30)
