// DOCTYPE JAVASCRIPT

//Initial variables
var canvas; // Linked to canvas on index.html page
var stage; // EaselJS variable that holds all objects; must add "children".
var queue; // Loading queue of images and sounds

var main; // Main background on loading screen
var startB; // Start button in main menu
var credits; // Text

var titleView; // Loading page

var selectPlayersView; // Screen to select number of players
var playbutton1, playbutton2, playbutton3, playbutton4;
var selectPlayers; // Container

var bg, board; // Background graphic & board container
var square, squareHolder, questionMark; // Color shape, container, &question mark

// Array of all spaces on track
var pointArray = [{x:70, y:500},
    {x:120, y:500},
    {x:150, y:500},
    {x:178, y:488},
    {x:193, y:465},
    {x:203, y:440},
    {x:225, y:420},
    {x:255, y:408},
    {x:286, y:405},
    {x:315, y:410},
    {x:345, y:422},
    {x:370, y:438},
    {x:388, y:460},
    {x:411, y:482},
    {x:436, y:498},
    {x:465, y:508},
    {x:495, y:510},
    {x:525, y:508},
    {x:558, y:505},
    {x:585, y:488},
    {x:593, y:460},
    {x:579, y:440},
    {x:550, y:430},
    {x:520, y:428},
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
    {x:605, y:282},
    {x:578, y:284},
    {x:551, y:296},
    {x:520, y:305},
    {x:488, y:303},
    {x:460, y:289},
    {x:434, y:273},
    {x:408, y:256},
    {x:378, y:243},
    {x:348, y:238},
    {x:318, y:242},
    {x:288, y:252},
    {x:262, y:268},
    {x:239, y:292},
    {x:220, y:318},
    {x:204, y:341},
    {x:183, y:362},
    {x:160, y:380},
    {x:131, y:388},
    {x:102, y:388},
    {x:73, y:382},
    {x:45, y:374},
    {x:22, y:355},
    {x:10, y:327},
    {x:8, y:297},
    {x:24, y:272},
    {x:50, y:264},
    {x:78, y:268},
    {x:106, y:277},
    {x:135, y:284},
    {x:166, y:288},
    {x:192, y:276},
    {x:198, y:246},
    {x:177, y:223},
    {x:150, y:208},
    {x:130, y:184},
    {x:132, y:153},
    {x:153, y:134},
    {x:184, y:125},
    {x:214, y:128},
    {x:242, y:135},
    {x:269, y:150},
    {x:298, y:164},
    {x:328, y:180},
    {x:356, y:193},
    {x:384, y:208},
    {x:413, y:215},
    {x:445, y:223},
    {x:476, y:228},
    {x:507, y:232},
    {x:537, y:234},
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
    {x:511, y:30},
    {x:490, y:54},
    {x:476, y:82},
    {x:462, y:110},
    {x:446, y:136},
    {x:420, y:152},
    {x:385, y:157},
    {x:355, y:148},
    {x:330, y:132},
    {x:305, y:115},
    {x:276, y:96},
    {x:249, y:87},
    {x:218, y:85},
    {x:187, y:88},
    {x:158, y:93},
    {x:128, y:98},
    {x:97, y:100},
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
    {x:220, y:18},
    {x:246, y:32},
    {x:276, y:42},
    {x:310, y:48}]; 
// Listing of pieces by color
var orange = [pointArray[1],pointArray[7],pointArray[14],pointArray[21],pointArray[27],pointArray[33],pointArray[39],pointArray[46],pointArray[52],pointArray[58],pointArray[64],pointArray[71],pointArray[77],pointArray[83],pointArray[89],pointArray[96],pointArray[103],pointArray[109],pointArray[115],pointArray[121],pointArray[127],pointArray[133]];
var purple = [pointArray[2],pointArray[8],pointArray[15],pointArray[22],pointArray[28],pointArray[34],pointArray[49],pointArray[47],pointArray[53],pointArray[59],pointArray[65],pointArray[72],pointArray[78],pointArray[84],pointArray[90],pointArray[97],pointArray[104],pointArray[110],pointArray[116],pointArray[122],pointArray[128]];
var pink = [pointArray[9],pointArray[20],pointArray[42],pointArray[69],pointArray[92],pointArray[102]];
var yellow = [pointArray[3],pointArray[10],pointArray[16],pointArray[23],pointArray[29],pointArray[35],pointArray[41],pointArray[48],pointArray[54],pointArray[60],pointArray[66],pointArray[73],pointArray[79],pointArray[85],pointArray[91],pointArray[98],pointArray[105],pointArray[111],pointArray[117],pointArray[123],pointArray[129]];
var blue = [pointArray[4],pointArray[11],pointArray[17],pointArray[24],pointArray[30],pointArray[36],pointArray[43],pointArray[49],pointArray[55],pointArray[61],pointArray[67],pointArray[74],pointArray[80],pointArray[86],pointArray[93],pointArray[99],pointArray[106],pointArray[112],pointArray[118],pointArray[124],pointArray[130]];
var gold = [pointArray[5],pointArray[12],pointArray[18],pointArray[25],pointArray[31],pointArray[37],pointArray[44],pointArray[50],pointArray[56],pointArray[62],pointArray[68],pointArray[75],pointArray[81],pointArray[87],pointArray[94],pointArray[100],pointArray[107],pointArray[113],pointArray[119],pointArray[125],pointArray[131]];
var green = [pointArray[6],pointArray[13],pointArray[19],pointArray[26],pointArray[32],pointArray[38],pointArray[45],pointArray[51],pointArray[57],pointArray[63],pointArray[70],pointArray[76],pointArray[82],pointArray[88],pointArray[95],pointArray[101],pointArray[108],pointArray[114],pointArray[120],pointArray[126],pointArray[132]];

// Game pieces
var player1, player2, player3, player4;

// Score keeping
var drink;
var finish;

// Drinks
var beer;
var shot;
var wine;
var ice;

var colorArray = ["#FE7B62","#CB2DD3","#FBB4ED","#F1FD66","#004CE8","#FFD068", "#02A97E"];
var displayColor;
var counter = 0;
var currentPos, dest;
var match;
var timer = false;
var playAgain;


function init() {
    canvas = document.getElementById("canvas");

    stage = new createjs.Stage("canvas");
    stage.enableMouseOver(20);
    queue = new createjs.LoadQueue(false);
	//false allows images to load locally
    createjs.Touch.enable(stage);

    queue.installPlugin(createjs.Sound);
    createjs.MotionGuidePlugin.install();
    queue.on("complete", handleComplete, this);
    queue.loadManifest([
    			{id:"main", src:"titleview2.jpg"},
    			{id:"startB", src:"startbutton.png"},
                {id:"selectPlayersView", src:"selectplayersview2.jpg"},
                {id:"playbutton1", src:"playbutton1.png"},
                {id:"playbutton2", src:"playbutton2.png"},
                {id:"playbutton3", src:"playbutton3.png"},
                {id:"playbutton4", src:"playbutton4.png"},
                {id:"bgImg", src:"shermanlandboard.jpg"},
                {id:"player1", src:"willie.png"},
    			{id:"pushbutton", src:"pushbutton.png"},
                {id:"duckSauce", src:"BarbraStreisand.mp3"}
    		]);

}

function handleComplete(event) {
    createjs.Sound.play("duckSauce");
    createjs.Sound.setVolume(0.5);
    main = new createjs.Bitmap(queue.getResult("main"));
    startB = new createjs.Bitmap(queue.getResult("startB"));
    startB.y = 100;
    startB.x = 100;
    startB.addEventListener("click",requestPlayers);
    startB.cursor = "pointer";
    credits = new createjs.Text("©2014 Sherman Ave. Created by Rohan Mehta.", "14px Arial", "#fff");
    credits.x = 650;
    credits.y = 550;

    titleView = new createjs.Container();
    titleView.addChild(main, startB, credits);
	
    stage.addChild(titleView);
    stage.update();
}

function requestPlayers(event) {
    selectPlayersView = new createjs.Bitmap(queue.getResult("selectPlayersView"));
    playbutton1 = new createjs.Bitmap(queue.getResult("playbutton1"));
    playbutton1.x = 100;
    playbutton1.cursor = "pointer";
    playbutton2 = new createjs.Bitmap(queue.getResult("playbutton2"));
    playbutton2.x = 100;
    playbutton2.cursor = "pointer";
    playbutton3 = new createjs.Bitmap(queue.getResult("playbutton3"));
    playbutton3.x = 100;
    playbutton3.cursor = "pointer";
    playbutton4 = new createjs.Bitmap(queue.getResult("playbutton4"));
    playbutton4.x = 100;
    playbutton4.cursor = "pointer";
    
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

function loadBoard() {
    // createjs.Sound.stop("duckSauce");
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

    bg = new createjs.Bitmap(queue.getResult("bgImg"));
    bg.scaleX = 0.5;
    bg.scaleY = 0.5;

    player1 = new createjs.Bitmap(queue.getResult("player1"));
    player1.scaleX = 0.25;
    player1.scaleY = 0.25;
    player1.y = 500;
    player1.shadow = new createjs.Shadow("#000000", 5, 5, 5);

    pushbutton = new createjs.Bitmap(queue.getResult("pushbutton"));
    pushbutton.scaleX = 0.4;
    pushbutton.scaleY = 0.4;
    pushbutton.x = 840;
    pushbutton.y = 300;
    pushbutton.cursor = "pointer";
    pushbutton.on("click",pushButton);

    square = new createjs.Shape();
    square.graphics.beginFill("#000").drawRoundRect(850, 50, 100, 100, 20);
    
    questionMark = new createjs.Text("?", "64px Verdana", "#FFF");
    questionMark.x = 883;
    questionMark.y = 68;

    squareHolder = new createjs.Container();
    squareHolder.addChild(square,questionMark);


    instructions = new createjs.Text("Push to Move", "24px Impact", "#000");
    instructions.x = 835;
    instructions.y = 260;


    board = new createjs.Container();
    board.addChild(bg, player1, pushbutton, squareHolder, instructions);
    
    stage.removeAllChildren(titleView);
    stage.addChild(board);

    createjs.Tween.get(player1)
        .wait(1000)
        .to(pointArray[130], 2000, createjs.Ease.elasticIn);
}

function handleTick() {
    stage.update();
}

function pushButton() {
    if (timer === false && dest !== 134) {
        animate = setInterval(animateColor, 200);
        timer = true;
    }
}

function animateColor() {
    squareHolder.removeChild(questionMark);
    square.graphics.clear();
    displayColor = colorArray[Math.floor(Math.random()*colorArray.length)];
    square.graphics.beginFill(displayColor).drawRoundRect(850, 50, 100, 100, 20);
    counter++;
    if (counter===15) {
        clearInterval(animate);
        counter=0;
        translateColor(displayColor);
        timer = false;
        return;
    }
}

function translateColor() {
    switch (displayColor) {
        case "#FE7B62":
            findPoint(orange);
            break;
        case "#CB2DD3":
            findPoint(purple);
            break;
        case "#FBB4ED":
            findPoint(pink);
            break;
        case "#F1FD66":
            findPoint(yellow);
            break;
        case "#004CE8":
            findPoint(blue);
            break;
        case "#FFD068":
            findPoint(gold);
            break;
        case "#02A97E":
            findPoint(green);
            break;
        default:
            console.log("Not a real color.");
    }
}

function findPoint(color) {

var breakCheck1=false;
var breakCheck2=false;

for (var i=0; i < pointArray.length; i++) {
    if (player1.x === pointArray[i].x && player1.y === pointArray[i].y) {
        breakCheck1 = true;
        currentPos = i;
        break;
    }
if (breakCheck1) break;
}

var m = currentPos + 1;
for(m;m<pointArray.length; m++) {
    for(var n=0;n<color.length; n++){
        if (color[n].x === pointArray[m].x && color[n].y === pointArray[m].y) {
            dest = m;
            breakCheck2 = true;
            break;
        }
    if (breakCheck2) break;
    }
if (breakCheck2) break;
}

if (breakCheck2 === false) dest = 134;
movePlayer(color, currentPos, dest);

return;

}

function movePlayer(color, currentPos, dest) {

if (dest===5) {
    createjs.Tween.get(player1)
        .wait(1000)
        .to(pointArray[5], 1000, createjs.Ease.quadIn)
        .wait(1000)
        .to(pointArray[59], 1000, createjs.Ease.bounceIn);
} else if(dest === 134) {
    createjs.Tween.get(player1)
        .wait(1000)
        .to(pointArray[134], 1000, createjs.Ease.circIn);
} else {
    createjs.Tween.get(player1)
        .wait(1000)
        .to({x:pointArray[dest].x,y:pointArray[dest].y}, 1000, createjs.Ease.quadIn);
}
this.addEventListener("complete",drinkMessage(dest));
}


function drinkMessage(dest) {

if (dest===5) window.setTimeout(alert, 5000, "Woah, you're not getting off that easy. Double shot, no chaser.");
else if (dest===6) window.setTimeout(alert, 3000, "Start off with some bacardi. Don't spill.");
else if (dest===9) window.setTimeout(alert, 3000,"Let's see it, bartender. Gin on the rocks.");
else if (dest===15 || dest===20 || dest ===22) window.setTimeout(alert, 3000, "Schnapps on schnapps.");
else if (dest===28) window.setTimeout(alert, 3000,"Smirnoff. Treat yourself to something nice honey.");
else if (dest===36 || dest===42) window.setTimeout(alert, 3000,"Take your pick. Skol or... skol.");
else if (dest===49 || dest===53) window.setTimeout(alert, 3000,"Aye aye. Malibu or Captain Morgan, take your pick.");
else if (dest===62 || dest===69 || dest===80 || dest===87) window.setTimeout(alert, 3000,"Yee-ha, Tennessee whiskey time.");
else if (dest===89 || dest===92) window.setTimeout(alert, 3000,"Schlapp da bag. 10 seconds minimum.");
else if (dest===99 || dest===102 || dest===107) window.setTimeout(alert, 3000,"Salt, tequila, lime. Go.");
else if (dest===117 || dest===129) window.setTimeout(alert, 3000,"Liquor before beer, and you're in the clear. Chug.");
else if (dest===134) window.setTimeout(alert, 3000, "If you're stilll alive, 20 second keg standdddddd.");
}


function reset() {

createjs.Tween.get(player1)
    .wait(1000)
    .to(pointArray[0], 2000, createjs.Ease.circIn);
}

