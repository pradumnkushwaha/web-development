var randomNumber1 = (Math.floor(Math.random()*10)%6)+1;
// alert(randomNumber1);
var randomimg = "dice"+randomNumber1+".png";
alert(randomimg);
var images = document.querySelectorAll("img")[0];
images.setAttribute("src" , randomimg);
