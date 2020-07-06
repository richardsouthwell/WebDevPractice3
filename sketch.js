var sqPerLine = 50;
var offsetY = 30;

var w;
var grid;
var newGrid;
var keyP;
var randP;
var buttonP;
var startButton;
var check;
var birthButton;
var halfLife = 0;
var lifeGivingNeighbours = 6;
var lifeGivingNeighboursButton;

function setup() {
   // createCanvas(900, 900 + 2000);
    createCanvas(900, 900 + offsetY);
    w = floor(width / sqPerLine);
    grid = create2DArray();

    for (var i = 0; i < sqPerLine; i++) {
        for (var j = 0; j < sqPerLine; j++) {
            grid[i][j] = 0;
        }
    }

    keyP = false;
    randP = false;
    buttonP = false;
    check = false;

    startButton = createButton("Start");
    startButton.style('font-size', '30px');
    startButton.position(width / 2 - 30, height - height / 4);
    startButton.size(100, 60);
    startButton.mousePressed(play);

    birthButton = createButton("modified rules");
    birthButton.mousePressed(birthFunction);

    lifeGivingNeighboursButton = createButton("change life giving neigh. no.");
    lifeGivingNeighboursButton.mousePressed(lifeGivingNeighboursFunction);



}

const halfLifeMessage = (halfLife) => {
    if (halfLife==0) {
        return ""
    } else 
    {return ""}
}

const lifeGivingNeighboursMessage = (halfLife, lifeGivingNeighbours) => {
    if (halfLife==0) {
        return ""
    } else 
    {return ", dead cells with " + lifeGivingNeighbours + " neighbours come back"}
}


const extraMessage = (halfLife,lifeGivingNeighbours) => halfLifeMessage(halfLife) + ", " + lifeGivingNeighboursMessage(halfLife, lifeGivingNeighbours);

function draw() {

    if (!buttonP) {
        pageInit();
    } else if (randP && !keyP) {
        fillGrid();
        write("click: change cells, enter: run " + extraMessage(halfLife,lifeGivingNeighbours));
       // write("\n")
       // write(extraMessage(halfLife,lifeGivingNeighbours));
    } else if (keyP == false) {
        fillGrid();
        write("click: change cells, r: randomize, w: wipe, enter: run, buttons below modify " + extraMessage(halfLife,lifeGivingNeighbours));
      //  write("\n")
       // write(extraMessage(halfLife,lifeGivingNeighbours));
        check = true;
    } else {
        fillGrid();
        write("enter: pause, w: wipe " + extraMessage(halfLife,lifeGivingNeighbours));
        //write("\n")
        //write(extraMessage(halfLife,lifeGivingNeighbours));

        newGrid = create2DArray();

        for (var i = 0; i < sqPerLine; i++) {
            for (var j = 0; j < sqPerLine; j++) {

                var current = grid[i][j];
                var neighbours = countNearbyLives(i, j);

                if (current == 0 && neighbours == 3) {
                    newGrid[i][j] = 1;
                } else if (current == 1 && (neighbours < 2 || neighbours > 3)) {
                    newGrid[i][j] = 0;
                } else {
                    newGrid[i][j] = current;
                }

                if (halfLife == 1 && current == 0 && neighbours == lifeGivingNeighbours) {
                    newGrid[i][j] = 1;
                }





            }
        }

        grid = newGrid;
    }
}

function mousePressed() {

    for (var i = 0; i < sqPerLine; i++) {
        for (var j = 0; j < sqPerLine; j++) {
            if (check && mouseX > i * w && mouseX < i * w + w && mouseY > j * w + offsetY && mouseY < j * w + w + offsetY) {
                if (grid[i][j] == 0) {
                    grid[i][j] = 1;
                } else {
                    grid[i][j] = 0;
                }
                break;
            }
        }
    }
}

function keyTyped() {

    if (key == 'r') {
        if (!keyP && buttonP) {
            for (var i = 0; i < sqPerLine; i++) {
                for (var j = 0; j < sqPerLine; j++) {
                    grid[i][j] = floor(random(2));
                }
            }

            keyP = false;
            randP = true;
        }
    }

    if (key == 'w' && buttonP) {
        for (var i = 0; i < sqPerLine; i++) {
            for (var j = 0; j < sqPerLine; j++) {
                grid[i][j] = 0;
            }
        }

        randP = false;
        keyP = false;
    }

    // 13 represents the 'enter' key
    if (keyCode == 13 && buttonP) {
        if (!keyP) {
            keyP = true;
        } else if (keyP) {
            keyP = false;
        }
    }
}

function create2DArray() {

    var arr = new Array(sqPerLine);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(sqPerLine);
    }

    return arr;
}

function countNearbyLives(i, j) {

    var lives = 0;

    for (var x = -1; x <= 1; x++) {
        for (var y = -1; y <= 1; y++) {
            if (i + x >= 0 && i + x < sqPerLine && j + y >= 0 && j + y < sqPerLine) {
                if (!(x == 0 && y == 0)) {
                    lives += grid[i + x][j + y];
                }
            }
        }
    }

    return lives;
}

function fillGrid() {

    background(255);
    strokeWeight(2);
    stroke(0, 0, 0, 20);

    for (var i = 0; i < sqPerLine; i++) {
        for (var j = 0; j < sqPerLine; j++) {
            if (grid[i][j] == 1) {
                fill(0);
            } else {
                fill(255);
            }
            rect(i * w, j * w + 30, w - 3, w - 3);
        }
    }
}

function write(words) {

    strokeWeight(2);
    stroke(255);
    fill(0);
    textSize(19);
    text(words, 1, 20);
}

function play() {

    startButton.hide();
    buttonP = true;
    textAlign(LEFT);
}

function birthFunction() {
//    startButton.hide();
halfLife = (halfLife + 1) % 2
//    textAlign(LEFT);
}

function lifeGivingNeighboursFunction() {
    //    startButton.hide();
    lifeGivingNeighbours = (lifeGivingNeighbours + 1) % 9
    //    textAlign(LEFT);
    }
    



//lifeGivingNeighbours

function pageInit() {

    textAlign(CENTER);

    background(255);
    textSize(width / 15);
    fill(0);
    text("The Game of Life", width / 2, 200);

    textAlign(LEFT);

    stroke(0, 0, 0, 20);
    strokeWeight(4);
    fill(0);
    rect(width / 13, 300, 35, 35);

    noStroke();
    textSize(width / 30);
    fill(0);
    text("Black cells are alive", width / 13 + 45, 330);

    stroke(0, 0, 0, 20);
    strokeWeight(4);
    fill(255);
    rect(width / 2 + width / 13, 300, 35, 35);

    noStroke();
    textSize(width / 30);
    fill(0);
    text("White cells are dead", width / 2 + width / 13 + 40, 330);

    textAlign(CENTER);

    textSize(width / 31);
    text("Any dead cell with 3 live neighbours becomes alive", width / 2, 430);
    text("Any live cell with less than 2 live neighbours dies", width / 2, 500);
    text("Any live cell with more than 3 live neighbours dies", width / 2, 550);
    text("Can you come up with patterns to keep the system moving?", width / 2, 620);
    //text("Click cells to turn them on/off (or press r to randomize)", width / 2, 620);
    //text("Press enter to run/pause", width / 2, 620);
    //text("Modify the rules by pressing the buttons at the bottom", width / 2, 620);
    //text("This makes it so dead cells also come back to life when they have a certain number of neighbours", width / 2, 620);



}

// halflife is toggled by birth function/button, 
// it toggles a new rule, where dead cells come back to life when they have 
// k neighbours, where k is controlled by the second button.