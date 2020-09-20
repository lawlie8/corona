console.log('hello')
var canvas = document.querySelector('canvas');
console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function greetings1(i){

var array  = ['Hello','I am Keshav','Nice To Meet You','Browse My Profile','(/◕ヮ◕)/',""]


function greetings2(greet){
console.log(i);

var k1 = document.getElementById('k1');
k1.innerHTML = array[greet];
if(i!=5){
  i++;
  greetings1(i);
}
else{
  start1();
}
}

  setTimeout(function () {
  greetings2(i)
}, 1500);


}




function draw(r) {
var flag = r;
  var c = canvas.getContext('2d');
  var r,g,b,a;
  //a = Math.floor(a);
  console.log("flag "+flag);
///console.log(r,g,b,a);
  var color_random = [r,g,b,a];
  //c.fillStyle = "#FF0000";
  c.clearRect(0,0,innerWidth,innerHeight);



for(i=0;i<50;i++){
  var r = Math.random()  * 255;
  var g = Math.random()  * 255;
  var b = Math.random()  * 255;
  var a = Math.random()  * 1;
  r = Math.floor(r);
  g = Math.floor(g);
  b = Math.floor(b);
  var x = Math.random()  * window.innerWidth;
  var y = Math.random()  * window.innerHeight;
c.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
 c.fillRect(x,y,50,50);
}

if(flag==undefined){
setTimeout(function () {requestAnimationFrame(draw)}, 150);
}else{asd}
  }

var i =0;
greetings1(i);
var requestId = 0;
draw(requestId)
function start1(){
document.getElementById('click_me').style.display = 'block';
  console.log('start1');
  cancelAnimationFrame(draw);
  //document.getElementById('canvas').style.display = 'none';

  draw(1);

}

function start2(){
document.getElementById('canvas').style.display = 'none';
document.getElementById('about').style.display = 'none';
document.getElementById('click_me').style.display = 'none';
document.getElementById('main_window').style.display = 'block';
document.getElementById('tab_class').style.display = 'block';
document.getElementById('social_icons').style.display = 'block';

}

function info_show(){
  var array = ['main_window_name','profile_pic','brief_intro'];
  for (var i = 0; i < array.length; i++) {
    document.getElementById(array[i]).style.display = 'block';

  }

  var array = ['project_intro'];
  for (var i = 0; i < array.length; i++) {
    document.getElementById(array[i]).style.display = 'none';

  }


//document.getElementById('brief_intro').style.display = 'block';

}

function project_show(){
var array = ['main_window_name','profile_pic','brief_intro'];
for (var i = 0; i < array.length; i++) {
  document.getElementById(array[i]).style.display = 'none';

}

  document.getElementById('project_intro').style.display = 'block';


}

function download_resume(){


document.getElementById('download2').click();

}
