var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

// var fi = 3.14;

ctx.beginPath();
ctx.moveTo(50, 0);

function getSosu(y2, j, i){
  j = parseFloat(j.toFixed(i));
  if(i > 3){
    return j;
  }

  var jaritsu = 10;
  for(var q = 1; q < i; q++){
    jaritsu = jaritsu * 10;
  }

  var value = 1/jaritsu;

  var k;
  
  for(var w = 1; w <= 10; w++){
    var qwer = j + value * w;
    if(qwer * qwer === y2){
      return qwer;
    }
    if(qwer * qwer > y2){
      k = qwer - value;
      break;
    }
  }

  return getSosu(y2, k, i+1)
}


for(var i = 1; i <= 50; i++){ //우측 아래
  var x = i;
  var y2 = 2500 - (x * x);
  var y;

  for(var j = 1; j <= 50; j++){
    if(j*j === y2){
      y = j;
      break;
    }

    if(j*j > y2){
      y = getSosu(y2, j-1, 1);
      break;
    }
  }

  y = (y - 50) * -1;


  // x * x + y * y == 2500

  ctx.lineTo(x + 50, y)
}

// ///////

for(var i = 1; i <= 50; i++){ //우측 아래
  var x = i;
  var y2 = 2500 - (x * x);
  var y;

  for(var j = 1; j <= 50; j++){
    if(j*j === y2){
      y = j;
      break;
    }

    if(j*j > y2){
      y = getSosu(y2, j-1, 1);
      break;
    }
  }


  // x * x + y * y == 2500

  ctx.lineTo(50 + y, 50 +x)
}

for(var i = 1; i <= 50; i++){ //우측 아래
  var x = i;
  var y2 = 2500 - (x * x);
  var y;

  for(var j = 1; j <= 50; j++){
    if(j*j === y2){
      y = j;
      break;
    }

    if(j*j > y2){
      y = getSosu(y2, j-1, 1);
      break;
    }
  }


  x = (x - 50) * -1;
  // x * x + y * y == 2500

  ctx.lineTo(x, y + 50)
}

for(var i = 50; i >= 1; i--){ //우측 아래
  var x = i;
  var y2 = 2500 - (x * x);
  var y;

  for(var j = 1; j <= 50; j++){
    if(j*j === y2){
      y = j;
      break;
    }

    if(j*j > y2){
      y = getSosu(y2, j-1, 1);
      break;
    }
  }

  y = (y - 50) * -1;
  x = (x - 50) * -1;


  // x * x + y * y == 2500
  console.log(x, y);

  ctx.lineTo(x, y)
}

ctx.fill();