


window.onload = function () {
 
console.log('paper')

  // Get a reference to the canvas object
  var canvas = document.getElementById("myCanvas");
   paper.setup(document.getElementById('mainCanvas'));
  var c = paper.Shape.Circle(200, 200, 50);
  c.fillColor = 'green';

  paper.view.draw();



};
