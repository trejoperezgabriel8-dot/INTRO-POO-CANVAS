const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

canvasOOP.height = "200"; //window_height;
canvasOOP.width = "300"; //window_width;

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

class Circle {
  //Carga los valores predeterminados del objeto
  constructor(x, y, radius, color, text, backcolor, textcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textcolor = textcolor;
  }

  //Método para renderizar el objeto
  draw(context) {
    //Rellena el objeto
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    //Dibuja la línea del objeto
    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    //Dibuja el texto al centro del objeto
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = "rgb(0, 0, 0)";
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}
// CIRCULO 1 (normal)
let miCirculo = new Circle(
    canvasOOP.width / 2,
    canvasOOP.height / 2,
    50,
    "purple",
    "Tec",
    "rgb(245, 161, 66)"
);
miCirculo.draw(ctx);


let lineWidth = 10;

// Radio máximo seguro
let maxRadius = (Math.min(canvasRandom.width, canvasRandom.height) / 2) - (lineWidth / 2);

// Radio aleatorio seguro
let randomRadius = Math.floor(Math.random() * (maxRadius - 30)) + 30;

// Margen real considerando línea
let margin = randomRadius + (lineWidth / 2);

// Posición segura
let randomX = Math.random() * (canvasRandom.width - 2 * margin) + margin;
let randomY = Math.random() * (canvasRandom.height - 2 * margin) + margin;

let miCirculoRandom = new Circle(
    randomX,
    randomY,
    randomRadius,
    "green",
    "Tec",
    "rgb(83, 186, 52)"
);

// Asegúrate que tu clase use este grosor
ctxRandom.lineWidth = lineWidth;

miCirculoRandom.draw(ctxRandom);
let MaxCircle = 10;
let arrayCircle = [];

// función para generar colores random
function randomColor(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}

for (let i = 0; i < 5; i++) {

let maxRadius = (Math.min(canvasMultiple.width, canvasMultiple.height) / 2) - (lineWidth / 2);

let randomRadius = Math.floor(Math.random() * (maxRadius - 10)) + 10;

let margin = randomRadius + (lineWidth / 2);

let randomX = Math.random() * (canvasMultiple.width - 2 * margin) + margin;
let randomY = Math.random() * (canvasMultiple.height - 2 * margin) + margin;

// colores diferentes
let strokeColor = randomColor();
let fillColor = randomColor();
let textColor = randomColor();

let miCirculoMultiple = new Circle(
  randomX,
  randomY,
  randomRadius,
  strokeColor,
  i + 1,
  fillColor,
  textColor
);

arrayCircle.push(miCirculoMultiple);
arrayCircle[i].draw(ctxMultiple);

}