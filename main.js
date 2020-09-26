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
}else{console.log('')}
  }

var i =0;
greetings1(i);
var requestId = 0;
draw(requestId);
function start1(){

  document.getElementById('click_me').style.display = 'block';
  console.log('start1');
  cancelAnimationFrame(draw);
  draw(1);

}

function start2(){
document.getElementById('canvas').style.display = 'none';
document.getElementById('about').style.display = 'none';
document.getElementById('click_me').style.display = 'none';
document.getElementById('main_window').style.display = 'block';
document.getElementById('tab_class').style.display = 'block';
window.addEventListener('resize',resolution);
document.getElementById('social_icons').style.display = 'block';
resolution(tab_class);

}

function info_show(){
dont_show_menu();
  var array = ['main_window_name','profile_pic','brief_intro'];
  for (var i = 0; i < array.length; i++) {
    document.getElementById(array[i]).style.display = 'block';

  }

  var array = ['project_intro'];
  for (var i = 0; i < array.length; i++) {
    document.getElementById(array[i]).style.display = 'none';

  }

resolution();

}

function project_show(){
  resolution();
  dont_show_menu();
var array = ['main_window_name','profile_pic','brief_intro'];
for (var i = 0; i < array.length; i++) {
  document.getElementById(array[i]).style.display = 'none';

}

  document.getElementById('project_intro').style.display = 'block';
}

function download_resume(){
document.getElementById('download2').click();
dont_show_menu();
}


function resolution() {
var width = window.innerWidth;
if(width <=1100){

  document.getElementById('social_icons').style.top = '5px';
  document.getElementById('social_icons').style.left = '50%';
  document.getElementById('social_icons').style.transform = 'translate(-50%)';
  document.getElementById('tab_class').style.display='none';
  document.getElementById('menu_icon').style.display='block';
  //document.getElementById('menu2').style.display='block';
  document.getElementById('project_intro').style.top='60%';
  document.getElementById('project_intro').style.width='90%';
  document.getElementById('brief_intro').style.display='none';
  document.getElementById('profile_pic').style.left  = '50%';
  document.getElementById('profile_pic').style.transform = 'translate(-50%)';
  document.getElementById('project_intro').style.position='absolute';

  var lis = document.getElementById('social_icons').getElementsByTagName('ul');//.style.display = 'none';
  for (var i=0; i<lis.length; i++) {
  // Get all <a> children of each <li>
  var atags = lis[i].getElementsByTagName('li');
  for (var a = 0; a<atags.length; a++) {
    // And set their color in a loop.
    atags[a].style.cssFloat = 'left';
    atags[a].style.marginRight = '5px';
    atags[a].style.position = 'relative';

    // or change some other property
    //atags[a].style.height = '25%';
  }
}

}
else{
  var array = ['tab_class','brief_intro','profile_pic','main_window_name'];
  for (var i = 0; i < array.length; i++) {
    document.getElementById(array[i]).style.display='block';
}
var array = ['project_intro','end_links','menu_icon'];
for (var i = 0; i < array.length; i++) {
  document.getElementById(array[i]).style.display='none';
}

  document.getElementById('social_icons').style.top = '50px';
  document.getElementById('social_icons').style.left = '85%';
  document.getElementById('social_icons').style.transition = 'all .3s';
  document.getElementById('menu_icon').style.display='none';
  document.getElementById('menu_icon').style.left='0px';

  document.getElementById("end_links").style.width = '0px'
  document.getElementById('tab_class').style.zIndex='112';
  document.getElementById('brief_intro').style.position  = 'absolute';
  document.getElementById('brief_intro').style.left = '45%';
  document.getElementById('brief_intro').style.transform = 'translate(0%)';
  document.getElementById('project_intro').style.width='70%';
  document.getElementById('profile_pic').style.left  = '25%';
  document.getElementById('profile_pic').style.transform = 'translate(0%)';
  var lis = document.getElementById('social_icons').getElementsByTagName('ul');//.style.display = 'none';
  for (var i=0; i<lis.length; i++) {
  // Get all <a> children of each <li>
  var atags = lis[i].getElementsByTagName('li');
  for (var a = 0; a<atags.length; a++) {
    // And set their color in a loop.
    atags[a].style.cssFloat = 'none';

    // or change some other property
    //atags[a].style.height = '25%';
  }

}
//console.log(width)

}
}


//setTimeout(function() { resolution() },1000);

function show_menu(){



var end = document.getElementById('end_links');
end.style.display = 'block';
end.style.position = 'absolute';

document.getElementById('menu_icon').style.left  = '200px';
document.getElementById('menu_icon').style.top  = '35px';
document.getElementById('menu_icon').style.zIndex  = '1';
document.getElementById('project_intro').style.zIndex  = '1110';
document.getElementById('end_links').style.width  = '200px';
end.style.transition = 'all .3s'
var lis = document.getElementById('end_links').getElementsByTagName('ul');//.style.display = 'none';
for (var i=0; i<lis.length; i++) {
// Get all <a> children of each <li>
var atags = lis[i].getElementsByTagName('li');
for (var a = 0; a<atags.length; a++) {
  // And set their color in a loop.
  atags[a].style.display = 'block';

  // or change some other property
  //atags[a].style.height = '25%';
}
}
var array = ['project_intro','tab_class','main_window_name','brief_intro','profile_pic'];

for (var i = 0; i < array.length; i++) {
  document.getElementById(array[i]).style.display  = 'none';

}


}

function dont_show_menu(){
document.getElementById('menu_icon').style.left  = '0px';
//document.getElementById('end_links').style.display = 'none';
document.getElementById('end_links').style.width = '0px';
document.getElementById('end_links').style.transition = 'all .3s';
var lis = document.getElementById('end_links').getElementsByTagName('ul');//.style.display = 'none';
for (var i=0; i<lis.length; i++) {
// Get all <a> children of each <li>
var atags = lis[i].getElementsByTagName('li');
for (var a = 0; a<atags.length; a++) {
  // And set their color in a loop.
  atags[a].style.display = 'none';

  // or change some other property
  //atags[a].style.height = '25%';
}
}


}



function show_intro(){
  document.getElementById('brief_intro').style.display = 'block';
  document.getElementById('brief_intro').style.top   = '50%';
  document.getElementById('brief_intro').style.left   = '50%';
  document.getElementById('brief_intro').style.transform  = 'translate(-50%)';

  document.getElementById('end_links').style.display  = 'none';
  document.getElementById('menu_icon').style.left  = '0px';

}
