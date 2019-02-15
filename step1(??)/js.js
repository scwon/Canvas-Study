var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

function buNemo(){
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (10, 10, 50, 50);
  
  ctx.fillStyle = "rgba(0, 0, 200)";
  ctx.fillRect (30, 30, 50, 50);
  
  ctx.clearRect(30, 30, 30, 30)
  
  ctx.fillStyle = "rgba(0, 200, 0)";
  ctx.strokeRect(10, 10, 70, 70);
}

function reNemo(){
  ctx.fillStyle = "rgb(0,0,200)";
  ctx.fillRect (10, 10, 50, 50);
  
  ctx.fillStyle = "rgba(200, 0, 0)";
  ctx.fillRect (30, 30, 50, 50);
  
  ctx.clearRect(30, 30, 30, 30)
  
  ctx.fillStyle = "rgba(0, 200, 0)";
  ctx.strokeRect(10, 10, 70, 70);
}
buNemo();
// buNemo();

var check = false;

function hoverCanvas(){
  if(check){
    buNemo();
  }else{
    reNemo();
  }

  check = !check;
}

setInterval(function(){
  if(check){
    buNemo();
  }else{
    reNemo();
  }

  check = !check;
}, 10)

canvas.addEventListener('click', hoverCanvas, false);