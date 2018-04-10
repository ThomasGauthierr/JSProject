window.onload = init;

let canvas, ctx;
let briques = [];

function init(){
    console.log('page chargée');
    canvas = document.quierySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    
}