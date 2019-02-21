// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// var count = 7;

// var color = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'purple'];

// var qq = 0;
// setInterval(function(){
//   var values = [];
//   for(var i = 0; i < count; i++){
//     values.push(Math.floor(Math.random()*100) + 1);
//   }

//   values = [1, 1, 1, 1, 1, 1, 1];

//   var thisRadian = Math.PI;

//   var total = 0; 
//   values.forEach((num) => total+=num);

//   var percent = values.map((num) => {
//     return num/total * 100;
//   })

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   percent.forEach((per, index) => {
//     ctx.fillStyle = color[((7-qq)+index) % 7];
//     ctx.beginPath();
//     var nextRadian = thisRadian + (Math.PI * (per/100));
//     ctx.arc(200, 200, 100, thisRadian, nextRadian, false);
//     ctx.arc(200, 200, 70, nextRadian, thisRadian, true);
//     ctx.fill();

//     thisRadian = nextRadian;
//   })

//   console.log('qq ===', qq);

//   if(qq < 6){
//     qq++;
//   }else{
//     qq = 0;
//   }
//   if(count < 10){
//     // count ++;
//   }else{
//     // count = 1;
//   }
// }, 1000)


// aaddsfasfsdafs;adf;askfksdakfksad;fkadsfkdsakfopsakfopskaopfksadopfkopasdkfopsadkpofkaopfksaopfkpoas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var count = 1;
var color = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'purple'];

setInterval(function(){
  var values = [];
  for(var i = 0; i < count; i++){
    values.push(Math.floor(Math.random()*100) + 1);
  }

  var thisRadian = Math.PI;

  var total = 0; 
  values.forEach((num) => total+=num);

  var percent = values.map((num) => {
    return num/total * 100;
  })

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  percent.forEach((per, index) => {
    ctx.fillStyle = color[index % 7];
    ctx.beginPath();
    var nextRadian = thisRadian + Math.PI * (per/100);
    ctx.arc(200, 200, 100, thisRadian, nextRadian, false);
    ctx.arc(200, 200, 70, nextRadian, thisRadian, true);
    ctx.fill();

    thisRadian = nextRadian;
  })

  ctx.fillStyle = 'black';
  ctx.font = "30px auto";
  ctx.textAlign = "center"
  ctx.fillText("CPU", 200, 200);

  if(count < 7){
    count ++;
  }else{
    count = 1;
  }
}, 1000)