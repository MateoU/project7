var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var isDrawing = false;
var selectedColor;
var selectedSize;
var selectedShape;
var addedNum = 0;

var newNum = 0
var grayColor;

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

var convertObject = {
  "green": "#2ECC71",
  "red": "#E74C3C",
  "blue": "#2E86C1",
  "yellow": "#FFC300",
  "orange": "#FFAA00",
  "trump": "#FFD278",
  "purple": "#8E44AD",
  "gray": "#34495E",
  "black": "black",
  "eraser": "white",
  "rainbow": "rainbow",
  "gradient": "gray",
  "pink": "#FFA2FE"
}

var rainbowConversion = {
  "0": "#FF0000",
  "1": "#FF3600",
  "2": "#FF5D00",
  "3": "#FF8F00",
  "4": "#FFC100",
  "5": "#FFF300",
  "6": "#D1FF00",
  "7": "#87FF00",
  "8": "#36FF00",
  "9": "#00FF61",
  "10": "#00FFB2",
  "11": "#00F7FF",
  "12": "#00AAFF",
  "13": "#003AFF",
  "14": "#2300FF",
  "15": "#8F00FF",
  "16": "#C500FF",
  "17": "#FF00E0"
}

var bwConversion = {
  "0": "#EAEAEA",
  "1": "#D8D6D6",
  "2": "#C9C8C8",
  "3": "#B8B7B7",
  "4": "#A0A0A0",
  "5": "#8C8C8C",
  "6": "#757575",
  "7": "#5B5B5B",
  "8": "#414141",
  "9": "#212121"
}

var convertedColor;
// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  // square drawing code here
  var square = document.createElementNS(namespace, "rect");
  square.setAttribute("fill", color);
  square.setAttribute("x", x);
  square.setAttribute("y", y);
  square.setAttribute("width", size);
  square.setAttribute("height", size);
  screen.appendChild(square);
}

function drawCircle(cx, cy, radius, color){
  var circle = document.createElementNS(namespace, "circle");
  circle.setAttribute("fill", color);
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", radius);
  screen.appendChild(circle);
}

function getAttributes() {
  selectedColor = document.getElementById("colorSelect").value;
  convertedColor = convertObject[selectedColor];
  selectedSize = document.getElementById("sizeSelect").value;
  selectedShape = document.getElementById("shapeSelect").value;
}

var rainbowcolor;
// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
  getAttributes();
  var pt = transformPoint(e);
  if(selectedShape == "circle"){
      drawCircle(pt.x, pt.y, selectedSize, convertedColor);


  } else if(selectedShape == "square") {
    drawSquare(pt.x, pt.y, selectedSize, convertedColor);
  }


  isDrawing = true;
});

document.addEventListener("mouseup", function(e){
  isDrawing = false;
});

document.addEventListener("mousemove", function(e){
  if(isDrawing == true){
    var pt = transformPoint(e);
    if(selectedShape == "circle"){
      if(convertedColor == "rainbow"){
        drawCircle(pt.x, pt.y, selectedSize, rainbowcolor);
      } else if (convertedColor == "gray") {
        drawCircle(pt.x, pt.y, selectedSize, grayColor);
      }else {
        drawCircle(pt.x, pt.y, selectedSize, convertedColor);
      }
    } else if(selectedShape == "square") {
      if(convertedColor == "rainbow"){
        drawSquare(pt.x, pt.y, selectedSize, rainbowcolor);
      } else if (convertedColor == "gray") {
        drawSquare(pt.x, pt.y, selectedSize, grayColor);
      } else {
        drawSquare(pt.x, pt.y, selectedSize, convertedColor);
      }
    }
    addedNum += 1;
    if(addedNum > 17){
      addedNum = 0
    }
    rainbowcolor = rainbowConversion[addedNum];

    newNum += 1;
    if(newNum > 9){
      newNum = 0;
    }
    grayColor = bwConversion[newNum];
  }
});

document.getElementById("button").addEventListener("mousedown", function(){
  console.log("djkl");
  $("#screen").empty();
});

while (screen.lastChild){
  screen.removeChild(screen.lastChild);
}

document.getElementById("button2").addEventListener("click", function(){
  screen.removeChild(screen.lastChild);
  console.log("fds");
});
