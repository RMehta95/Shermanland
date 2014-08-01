// DOCTYPE JAVASCRIPT

//Initial variables
var canvas; // Linked to canvas on index.html page
var stage; // EaselJS variable that holds all objects; must add "children".
var queue; // Loading queue

var main; // Main background on loading screen
var startB; // Start button in main menu

var selectPlayersB; // Button containing options to select 1-4 players. (Might need to make separate vars for each button)

var bg; // Background graphic

// var titleView = new createjs.Container(); // Loading page

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
    queue.on("complete", handleComplete, this);
    queue.loadManifest([
    			{id:"main", src:"titleview.jpg"},
    			{id:"startB", src:"startbutton.png"},
    			{id:"selectPlayersView", src:"selectplayersview.jpg"},
    			{id:"player1", src:"willie.png"},
                {id:"bgImg", src:"shermanlandboard.jpg"}
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
    // var main = ;
    //    startB = queue.getResult("startB");
	// titleView.addChild(main);
    // document.body.appendChild(main);
	// stage.addChild(queue.getResult("main"));
	// stage.update();

    // Button listeners
    // startB.onPress = tweenTitleView;
    var bitmap = new createjs.Bitmap(queue.getResult("main"));
    stage.addChild(bitmap);
    //Update stage will render next frame
    stage.update();
}


// function handleClick(event){
// 	bg = new createjs.Bitmap(queue.getResult("bgImg"));
//     bg.scaleX = 0.5;
//     bg.scaleY = 0.5;
//     stage.removeChild(titleView);
//     stage.addChild(bg);
//     stage.update();
// }

function handleTick(event) {
    stage.update();
}