var mouseevent = "empty";
var lastX,lastY; 

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

colour = "black";
width = 1;

canvas.addEventListener("mousedown",myMousedown);
  function myMousedown(e){
   mouseevent="mouseDown" ;
    colour=document.getElementById("color").value;
    width=document.getElementById("width").value;


  }

  canvas.addEventListener("mouseup",myMouseup);
  function myMouseup(e){
   mouseevent="mouseUp" ;
  }
   
  canvas.addEventListener("mouseleave",myMouseleave);
  function myMouseleave(e){
   mouseevent="mouseLeave" ;
  }

  canvas.addEventListener("mousemove",myMousemove);
  function myMousemove(e){
   currentX=e.clientX-canvas.offsetLeft;
   currentY=e.clientY-canvas.offsetTop;

   if(mouseevent=="mouseDown"){
   ctx.beginPath();
   ctx.strokeStyle=colour;
   ctx.lineWidth=width;
   ctx.moveTo(lastX,lastY);
   console.log("Last position of X = "+lastX);
   console.log("Last position of Y= "+lastY);

   ctx.lineTo(currentX,currentY);
   console.log("Current position of X = "+currentX);
   console.log("Current position of Y = "+currentY);
   ctx.stroke();
   }
   lastX=currentX;
   lastY=currentY;
  }

  function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 }
   
 var lastX,lastY; 

canvas = document.getElementById("myCanvas");
ctx2 = canvas.getContext("2d");

colour = "black";
width = 2;

var swidth=screen.width;
new_w=screen.width-70;
new_h = screen.width-300;

if(swidth < 992){
document.getElementById("myCanvas").width = new_w;
document.getElementById("myCanvas").height = new_h;
document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart",my_starttouch);
  function my_starttouch(e){
      console.log("my_starttouch");
    colour=document.getElementById("color").value;
    width=document.getElementById("width").value;

    lastX=e.touches[0].clientX-canvas.offsetLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop;

  }


  canvas.addEventListener("touchmove",mytouchmove);
  function mytouchmove(e){
      console.log("mytouchmove");
   currentX=e.touches[0].clientX-canvas.offsetLeft;
   currentY=e.touches[0].clientY-canvas.offsetTop;

   ctx.beginPath();
   ctx.strokeStyle=colour;
   ctx.lineWidth=width;
   ctx.moveTo(lastX,lastY);
   console.log("Last position of X = "+lastX);
   console.log("Last position of Y= "+lastY);


   ctx.lineTo(currentX,currentY);
   console.log("Current position of X = "+currentX);
   console.log("Current position of Y = "+currentY);
   ctx.stroke();
   
   lastX=currentX;
   lastY=currentY;
  }

  function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 }
  


