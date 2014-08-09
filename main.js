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
var pointArray; // Array of all spaces on track

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

var colorArray;
var count;
// var data;

function init() {
    canvas = document.getElementById("canvas");

    stage = new createjs.Stage("canvas");
    queue = new createjs.LoadQueue(false);
	//false allows images to load locally

    queue.installPlugin(createjs.Sound);
    createjs.MotionGuidePlugin.install();
    queue.on("complete", handleComplete, this);
    queue.loadManifest([
    			{id:"main", src:"titleview2.jpg"},
    			{id:"startB", src:"startbutton.png"},
        //         {id:"selectPlayersView", src:"selectplayersview.jpg"},
       //          {id:"playbutton1", src:"playbutton1.png"},
       //          {id:"playbutton2", src:"playbutton2.png"},
       //          {id:"playbutton3", src:"playbutton3.png"},
       //          {id:"playbutton4", src:"playbutton4.png"},
                {id:"bgImg", src:"shermanlandboard.jpg"},
                {id:"player1", src:"willie3.png"}
    			// , {src:"Morty.jpg", id:"player2"},
    			// {src:"Morty.jpg", id:"player3"},
    			// {src:"Morty.jpg", id:"player4"},
    			// {src:"blank", id:"beer"},
    			// {src:"blank", id:"shot"},
    			// {src:"blank", id:"wine"},
    			// {src:"blank", id:"ice"}
    		]);

}



function handleComplete(event) {
    var main = new createjs.Bitmap(queue.getResult("main"));
    var startB = new createjs.Bitmap(queue.getResult("startB"));
    startB.y = 100;
    startB.x = 100;
    startB.addEventListener("click",loadBoard);
    
    var titleView = new createjs.Container();
    titleView.addChild(main, startB);
	
    stage.addChild(titleView);
    stage.update();
}

// function requestPlayers(event) {
//     selectPlayersView = new createjs.Bitmap(queue.getResult("selectPlayersView"));
//     playbutton1 = new createjs.Bitmap(queue.getResult("playbutton1"));
//     playbutton2 = new createjs.Bitmap(queue.getResult("playbutton2"));
//     playbutton3 = new createjs.Bitmap(queue.getResult("playbutton3"));
//     playbutton4 = new createjs.Bitmap(queue.getResult("playbutton4"));
    
//     selectPlayers = new createjs.Container();
//     selectPlayers.addChild(selectPlayersView, playbutton1, playbutton2, playbutton3, playbutton4);

//     stage.removeChild(titleView);
//     stage.addChild(selectPlayers);
//     stage.update();

//     playbutton1.addEventListener("click", loadBoard);
//     playbutton2.addEventListener("click", loadBoard);
//     playbutton3.addEventListener("click", loadBoard);
//     playbutton4.addEventListener("click", loadBoard);
// }

function loadBoard(event) {
    bg = new createjs.Bitmap(queue.getResult("bgImg"));
    bg.scaleX = 0.5;
    bg.scaleY = 0.5;

    player1 = new createjs.Bitmap(queue.getResult("player1"));
    player1.scaleX = 0.25;
    player1.scaleY = 0.25;
    player1.y = 500;

    board = new createjs.Container();
    board.addChild(bg, player1);
    
    stage.removeAllChildren(titleView);
    stage.addChild(board);
    createjs.Tween.get(player1)
        .wait(500)
        .to(pointArray[0], 1000, createjs.Ease.elasticIn);

    var square = new createjs.Shape();
    square.graphics.beginFill("#fa7a5f").inject(setColor).drawRoundRect(850, 50, 100, 100, 20);
    // square.addEventListener("mouseover",animateColors);
    // square.x = 500;

    board.addChildAt(square,1);
    createjs.Ticker.addEventListener("tick", handleTick);
    stage.update();
}


function setColor(color) {
    colorArray = ["#a7a5f","#531dd","#f0fc52","#143ef","#ffd85f", "#2cad84"];
    this.fillStyle = colorArray[Math.round(Math.random()*6)];
}

function handleTick(event) {
    if(createjs.Ticker.getTime(true) < 4000) {
        // Ticker.setPaused(true);
        createjs.Ticker.setFPS(10);
        stage.update();
    }
}





pointArray = [{x:70, y:500},
    {x:120, y:500},
    {x:150, y:500},
    {x:178, y:488},
    {x:193, y:465},
    {x:205, y:440},
    {x:228, y:418},
    {x:255, y:408},
    {x:286, y:405},
    {x:317, y:410},
    {x:345, y:422},
    {x:372, y:438},
    {x:393, y:460},
    {x:413, y:482},
    {x:438, y:498},
    {x:467, y:508},
    {x:498, y:510},
    {x:528, y:508},
    {x:558, y:505},
    {x:585, y:488},
    {x:593, y:460},
    {x:581, y:440},
    {x:552, y:430},
    {x:522, y:428},
    {x:490, y:430},
    {x:458, y:430},
    {x:427, y:425},
    {x:400, y:415},
    {x:380, y:390},
    {x:375, y:362},
    {x:398, y:338},
    {x:430, y:340},
    {x:461, y:350},
    {x:488, y:364},
    {x:515, y:380},
    {x:542, y:390},
    {x:572, y:400},
    {x:603, y:394},
    {x:630, y:380},
    {x:645, y:355},
    {x:647, y:325},
    {x:635, y:300},
    {x:608, y:282},
    {x:578, y:284},
    {x:551, y:296},
    {x:520, y:305},
    {x:490, y:303},
    {x:460, y:289},
    {x:434, y:273},
    {x:408, y:256},
    {x:378, y:243},
    {x:350, y:238},
    {x:318, y:242},
    {x:288, y:252},
    {x:262, y:268},
    {x:240, y:290},
    {x:220, y:318},
    {x:204, y:341},
    {x:185, y:362},
    {x:160, y:380},
    {x:131, y:388},
    {x:102, y:388},
    {x:73, y:382},
    {x:45, y:374},
    {x:22, y:355},
    {x:10, y:327},
    {x:08, y:297},
    {x:24, y:272},
    {x:50, y:264},
    {x:80, y:268},
    {x:106, y:277},
    {x:135, y:284},
    {x:166, y:288},
    {x:192, y:276},
    {x:198, y:246},
    {x:179, y:223},
    {x:150, y:208},
    {x:130, y:184},
    {x:132, y:153},
    {x:155, y:134},
    {x:184, y:125},
    {x:214, y:128},
    {x:244, y:135},
    {x:271, y:150},
    {x:300, y:164},
    {x:328, y:180},
    {x:356, y:193},
    {x:384, y:208},
    {x:415, y:215},
    {x:445, y:223},
    {x:476, y:228},
    {x:507, y:232},
    {x:540, y:234},
    {x:572, y:230},
    {x:601, y:224},
    {x:630, y:210},
    {x:648, y:189},
    {x:654, y:158},
    {x:646, y:130},
    {x:620, y:110},
    {x:596, y:93},
    {x:584, y:62},
    {x:572, y:36},
    {x:543, y:23},
    {x:513, y:30},
    {x:490, y:54},
    {x:476, y:82},
    {x:462, y:110},
    {x:446, y:136},
    {x:420, y:152},
    {x:387, y:157},
    {x:355, y:148},
    {x:330, y:132},
    {x:305, y:115},
    {x:278, y:96},
    {x:249, y:87},
    {x:218, y:85},
    {x:187, y:88},
    {x:158, y:93},
    {x:128, y:98},
    {x:98, y:100},
    {x:70, y:92},
    {x:47, y:75},
    {x:32, y:50},
    {x:28, y:20},
    {x:38, y:-9},
    {x:60, y:-30},
    {x:90, y:-40},
    {x:118, y:-38},
    {x:148, y:-30},
    {x:172, y:-17},
    {x:196, y:2},
    {x:222, y:18},
    {x:248, y:32},
    {x:276, y:42},
    {x:310, y:48}];

