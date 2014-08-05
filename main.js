// DOCTYPE JAVASCRIPT

//Initial variables
var canvas; // Linked to canvas on index.html page
var stage; // EaselJS variable that holds all objects; must add "children".
var queue; // Loading queue

var main; // Main background on loading screen
var startB; // Start button in main menu

var titleView; // Loading page
var selectPlayersView; // Screen to select number of players
var playbutton1;
var playbutton2;
var playbutton3;
var playbutton4;
var selectPlayers; // Container

var bg; // Background graphic
var board; // Container

// Game pieces
var player1;
var player2;
var player3;
var player4;

// Score keeping
var drink;
var finish;

// Drinks
var beer;
var shot;
var wine;
var ice;

function init() {
    canvas = document.getElementById("canvas");

    stage = new createjs.Stage("canvas");
    queue = new createjs.LoadQueue(false);
	//false allows images to load locally

    queue.installPlugin(createjs.Sound);
    createjs.MotionGuidePlugin.install();
    queue.on("complete", handleComplete, this);
    queue.loadManifest([
    			{id:"main", src:"titleview.jpg"},
    			{id:"startB", src:"startbutton.png"},
    			{id:"selectPlayersView", src:"selectplayersview.jpg"},
                {id:"playbutton1", src:"playbutton1.png"},
                {id:"playbutton2", src:"playbutton2.png"},
                {id:"playbutton3", src:"playbutton3.png"},
                {id:"playbutton4", src:"playbutton4.png"},
                {id:"bgImg", src:"shermanlandboard.jpg"},
                {id:"player1", src:"willie.png"}
    			// , {src:"Morty.jpg", id:"player2"},
    			// {src:"Morty.jpg", id:"player3"},
    			// {src:"Morty.jpg", id:"player4"},
    			// {src:"blank", id:"beer"},
    			// {src:"blank", id:"shot"},
    			// {src:"blank", id:"wine"},
    			// {src:"blank", id:"ice"}
    		]);

    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    //move this to later spot


}

function handleComplete(event) {
    var main = new createjs.Bitmap(queue.getResult("main"));
    var startB = new createjs.Bitmap(queue.getResult("startB"));
    startB.y = 100;
    startB.addEventListener("click",requestPlayers);
    
    var titleView = new createjs.Container();
    titleView.addChild(main, startB);
	
    
    stage.addChild(titleView);
    stage.update();
}

function requestPlayers(event) {
    selectPlayersView = new createjs.Bitmap(queue.getResult("selectPlayersView"));
    playbutton1 = new createjs.Bitmap(queue.getResult("playbutton1"));
    playbutton2 = new createjs.Bitmap(queue.getResult("playbutton2"));
    playbutton3 = new createjs.Bitmap(queue.getResult("playbutton3"));
    playbutton4 = new createjs.Bitmap(queue.getResult("playbutton4"));
    
    selectPlayers = new createjs.Container();
    selectPlayers.addChild(selectPlayersView, playbutton1, playbutton2, playbutton3, playbutton4);

    stage.removeChild(titleView);
    stage.addChild(selectPlayers);
    stage.update();

    playbutton1.addEventListener("click", loadBoard);
    playbutton2.addEventListener("click", loadBoard);
    playbutton3.addEventListener("click", loadBoard);
    playbutton4.addEventListener("click", loadBoard);
}

function loadBoard(event) {
    bg = new createjs.Bitmap(queue.getResult("bgImg"));
    bg.scaleX = 0.5;
    bg.scaleY = 0.5;

    player1 = new createjs.Bitmap(queue.getResult("player1"));
    player1.scaleX = 0.5;
    player1.scaleY = 0.5;
    player1.y = 500;

    board = new createjs.Container();
    board.addChild(bg, player1);
    
    stage.removeChild(selectPlayers);
    stage.addChild(board);
    stage.update();

    createjs.Tween.get(player1)
        .wait(500)
        .to({x:400, y:300}, 1000, createjs.Ease.elasticOut);
}

function firstMove(event) {
    stage.update();
}

function handleTick(event) {
    stage.update();
}