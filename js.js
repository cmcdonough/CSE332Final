// Copyright 2010
// cmcdonough@wustl.edu (Colin McDonough)
var SCALE = 5;
var WIDTH = 150/SCALE;
var HEIGHT = 150/SCALE;
var points= new Array();
var fileContent = '';

function draw() {
  var canvas = document.getElementById('tutorial');
  if (canvas) {
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "gray";
    ctx.globalAlpha = 1.0;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 150);
    ctx.lineTo(150, 150);
    ctx.lineTo(150, 0);
    ctx.closePath();
    ctx.stroke();

    pushPoints(15);
    for (var i = 0; i < points.length; i++) {
      dot(ctx, points[i]);
    }
  }
}

function pushPoints(numPoints) {
  points.push(5, 5);
  for (var i = 0; i < numPoints; ++i) {
    var x = Math.floor(Math.random()*(WIDTH+1));
    var y = Math.floor(Math.random()*(HEIGHT+1));
    points.push(new point(x, y));
  }
}

function dot(ctx, point) {
  ctx.save();
  ctx.fillStyle = "red";
  ctx.fillRect(point.x * SCALE, point.y * SCALE, SCALE, SCALE);
  ctx.restore();
}

function point(x, y) {
  this.x = x;
  this.y = y;
}

function run() {
  draw();
}
