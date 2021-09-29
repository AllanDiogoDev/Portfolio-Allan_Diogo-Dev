
const msg = "A PROCURA DE UM WEBSITE ?"; 

let titulo = document.querySelector('#titulo-header');

for(var i=0; i<msg.length; i++){
    (function(pos){
        setTimeout(function(){
           // console.log( msg.charAt(pos));
           titulo.innerHTML += msg.charAt(pos);
        },35 * pos);
    })(i);
}

function voltar() {
    window.history.back();
 }

function html(value) {
    document.getElementById('font-linguagens').innerHTML = "HTML - a estrutura do site, famoso alicerce da construção. &#128558	";
}
function css(value) {
    document.getElementById('font-linguagens').innerHTML = "CSS - especialista em decorações, um estilista nato, não pode faltar! &#128540 ";
}
function js(value) {
    document.getElementById('font-linguagens').innerHTML = "JS - faz tudo, desenha e pinta, gosto muito do JS por ser completo e útil. &#128525";
}
function php(value) {
    document.getElementById('font-linguagens').innerHTML = "PHP - um dos meus melhores amigos, sempre esteve presente em meus projetos! &#128517";
}
function node(value) {
    document.getElementById('font-linguagens').innerHTML = "NodeJS - estou o conhecendo melhor, mas como é parente do JS é de casa. &#128524 ";
}
function phyton(value) {
    document.getElementById('font-linguagens').innerHTML = "Phyton - dispensa ; sendo incrivelmente prático e ótimo para back-end. &#128521";
}
function c(value) {
    document.getElementById('font-linguagens').innerHTML = "C++ - uma das primeiras linguagens que me recebeu como dev. &#128526 ";
}
function bootstrap(value) { 
    document.getElementById('font-linguagens').innerHTML = "Bootstrap -  para um layout mais prático e bem encaixadinho. &#128540; ";
}
function out(value) {
    document.getElementById('font-linguagens').innerHTML = "Clique em alguma das tecnologias... &#128522";
}