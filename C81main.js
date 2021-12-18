canvas = document.getElementById('myCanvas');
pen = canvas.getContext('2d');
color = "black";
mouse_event = "";
pre_mouse_x = "";
pre_mouse_y = "";
canvas.addEventListener("mousedown", mmd);

function mmd(e) {
    mouse_event = "mousedown";
    console.log(mouse_event);

}
canvas.addEventListener("mouseup",mmu);
function mmu(e) {
    mouse_event="mouseup";
    console.log(mouse_event);

}
canvas.addEventListener("mouseleave",mml);
function mml(e){
    mouse_event="mouseleave";
    console.log(mouse_event);
}
canvas.addEventListener("mousemove",mmm);
function mmm(e){
    currentMousex=e.clientX-canvas.offsetLeft;
    currentMousey=e.clientY-canvas.offsetTop;
if(mouse_event=="mousedown"){
    pen.beginPath();
    pen.strokeStyle=color;
    pen.lineWidth=3;
    pen.moveTo(pre_mouse_x,pre_mouse_y)
    pen.lineTo(currentMousex,currentMousey)
    pen.stroke();
    pre_mouse_x=currentMousex;
    pre_mouse_y=currentMousey

}


}
preTx="";
preTy="";
if (screen.width<992){
    canvas.width=screen.width-50;
    canvas.height=screen.height-300;
    document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart", ts);

function ts(e) {
    preTx=e.touches[0].clientX-canvas.offsetLeft;
    preTy=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",tm);
function tm(e){
    currentTx=e.touches[0].clientX-canvas.offsetLeft;
    currentTy=e.touches[0].clientY-canvas.offsetTop;

    pen.beginPath();
    pen.strokeStyle=color;
    pen.lineWidth=3;
    pen.moveTo(preTx,preTy);
    pen.lineTo(currentTx,currentTy);
    pen.stroke();
    preTx=currentTx;
    preTy=currentTy;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

