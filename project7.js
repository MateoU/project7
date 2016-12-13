var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var isDrawing = false;
// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

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

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
  var pt = transformPoint(e);
  drawCircle(pt.x, pt.y, 5, "blue");
  var isDrawing = true;
});

document.addEventListener("mouseup", function(e){
  
});

document.addEventListener("mousemove", function(e){

});
