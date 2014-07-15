// DOCTYPE JAVASCRIPT


var canvas, stage, bg;

function init() {
    canvas = document.getElementById("canvas");
    // var ctx = canvas.getContext("2d");



    // var bg = new Image();
    // bg.src = "shermanlanddd.jpg";
    // bg.onload = function(){
    //   ctx.drawImage(this,0,0);
    // };

    // var pieces = new Image();
    // pieces.src = "shotglasstest.jpg";

    stage = new createjs.Stage("canvas");
    // Ticker.setFPS(60);
    // Ticker.addListener(this);
    createjs.Ticker.addEventListener("tick", handleTick);
    bg = new createjs.Bitmap("shermanlanddd.jpg");
    bg.scaleX = 0.5;
    bg.scaleY = 0.5;
    stage.addChild(bg);

}

function handleTick(event) {
	stage.update();
}