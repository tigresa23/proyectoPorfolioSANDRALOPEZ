//function changeImage(){
//    let displayImage = document.getElementById("div [class= 'imagen_personaje_1']")
//if(displayImage.src.match('imgARCANOS/ElEmperador0.jpg')){
//    displayImage.src = 'imgARCANOS/ElEmperador1.jpg'
//} else {
//    displayImage.src = 'imgARCANOS/ElEmperador.jpg'
//}
//}
//------------------------------------------------------------------------------------------------------------
// Lo que quiero es que cuando yo haga clic sobre una carta
// me aparezca debajo de ella otra imagen de mayor tamaño

//cada carta tiene un id único en el index.html dentro de la class casa-carta
// y quiero que una imagen aparezca en el espacio que tiene un id único dentro de la class casa-elegida
//------------------------------------------------------------------------------------------------------------


// llamo a los HTML elements 
// creando una variable e igualandola a un elemento por el id de HTML
let elEmperador = document.getElementById("ElEmperador");
let elErmitaño = document.getElementById("ElErmitaño");
let elJuicio = document.getElementById("ElJuicio");
let elLoco = document.getElementById("ElLoco");
let elMundo = document.getElementById("ElMundo");
let elMago = document.getElementById("ElMago");
let elPapa = document.getElementById("ElPapa");
let elSol = document.getElementById("ElSol");
let laEmperatriz = document.getElementById("LaEmperatriz");
let laEstrella = document.getElementById("LaEstrella");
let losEnamorados = document.getElementById("LosEnamorados");
let imgcambio1 = document.getElementById("ElEmperador1");
let imgcambio2 = document.getElementById("ElErmitaño1");
let imgcambio3 = document.getElementById("ElJuicio1");
let imgcambio4 = document.getElementById("ElLoco1");
let imgcambio5 = document.getElementById("ElMundo1");
let imgcambio6 = document.getElementById("ElMago1");
let imgcambio7 = document.getElementById("ElPapa1");
let imgcambio8 = document.getElementById("ElSol1");
let imgcambio9 = document.getElementById("LaEmperatriz1");
let imgcambio10 = document.getElementById("LaEstrella1");
let imgcambio11 = document.getElementById("LosEnamorados1");

//------- Crear funciones 


//cada vez que yo haga clic en la img con el id elEmperador
//se llamará al evento onclick
//y este va a lanzar una función 
//que se encargará de cambiar el atributo src
//del elemento con el id ElEmperador1
elEmperador.onclick = function() {
    imgcambio1.src="imgARCANOS/ElEmperador1.jpg";}
imgcambio1.onclick = function(){
    imgcambio1.src="";}
//-------

elErmitaño.onclick = function() {
    imgcambio2.src="imgARCANOS/ElErmitaño1.jpg";}
imgcambio2.onclick = function(){
    imgcambio2.src="";}
//-------     

elJuicio.onclick = function() {
    imgcambio3.src="imgARCANOS/ElJuicio1.jpg";}
imgcambio3.onclick = function() {
        imgcambio3.src="";}
//-------
elLoco.onclick = function() {
    imgcambio4.src="imgARCANOS/ElLoco1.jpg";}
imgcambio4.onclick = function() {
        imgcambio4.src="";}
//-------
elMundo.onclick = function() {
    imgcambio5.src="imgARCANOS/ElMundo1.jpg";}
imgcambio5.onclick = function() {
        imgcambio5.src="";}
//-------
elMago.onclick = function() {
    imgcambio6.src="imgARCANOS/ElMago1.jpg";}
imgcambio6.onclick = function() {
        imgcambio6.src="";}
//-------
elPapa.onclick = function() {
    imgcambio7.src="imgARCANOS/ElPapa1.jpg";}
imgcambio7.onclick = function() {
        imgcambio7.src="";}
//-------
elSol.onclick = function() {
    imgcambio8.src="imgARCANOS/ElSol1.jpg";}
imgcambio8.onclick = function() {
        imgcambio8.src="";}
//-------
laEmperatriz.onclick = function() {
    imgcambio9.src="imgARCANOS/LaEmperatriz1.jpg";}
imgcambio9.onclick = function() {
        imgcambio9.src="";}
//-------
laEstrella.onclick = function() {
    imgcambio10.src="imgARCANOS/LaEstrella1.jpg";}
imgcambio10.onclick = function() {
        imgcambio10.src="";}
//-------
losEnamorados.onclick = function() {
    imgcambio11.src="imgARCANOS/LosEnamorados1.jpg";}
imgcambio11.onclick = function() {
        imgcambio11.src="";}
//------- 
