
//2D array initialized with sample values. To get a blank board initialize all the values to zero
var board = [[2,4,8,16],[32,64,128,512],[1024,0,0,0],[0,0,0,0]];
var board = [];
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var move;
var tileX;
var tileY;
var totalTileNumber;
var score = 0;
var cleared = false;
var foreverContinue = false;
//As soon as webpage loads run these two functions
/*$(document).ready(function(){
    setUpBoard();
    printBoard();
    console.log("Loaded webpage"); //how you do print statements in javascript
});*/
$(document).ready(function(){
    setUpBoard();
    printBoard();
    console.log("Loaded webpage"); //how you do print statements in javascript
});
function setUpBoard(){

    // initialize board to have no values
    for(var i=0; i<4; i++){
        var innerboard = [];
        for(var j=0; j<4; j++){
            innerboard.push("x");
        }
        board.push(innerboard);
    }
    
    addTile();
    
}

function addTile() {
    //place a 2 on a random spot in the board
  //EXAMPLE:   if(parceInt(board[r][j])<2){}
    var x = Math.round(Math.random()*3);
    var y = Math.round(Math.random()*3);
    
    while(board[x][y] !== "x"){
var x = Math.round(Math.random()*3);
    var y = Math.round(Math.random()*3);
    }
board[x][y] = "2";

}
    

function printBoard(){
    var board = '<br/>' + "*--------------*" + '<br/>';
    for(var i=0; i<board.length; i++){
        board += "|   ";
        for(var j=0; j<board[i].length; j++){
            board += board[i][j] + "   |   ";
        }
        board += '<br/>';
        board += "*--------------*";
        board += '<br/>';
    }
    
    //console.log(board);
    document.getElementById("container").innerHTML = board;
}


//function gets called anytime  a key is pressed 
//e is a special variable
// that references the event obeject that reads if the user is interacting with 
//the window 
document.onkeydown = function(e) {
     
    //makes it work in internet explorer which uses window.event and not e 
    e = e || window.event;

    //keyCode is actually a character value which we convert to a String
    //to use triple equals sign 
    if (e.keyCode == UP_ARROW) {
        // up arrow

        moveTilesUp();
        combineTilesUp();
        addTile();
        console.log("Pressed up");
        
    }
    //double equals sign will convert it for us 
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
        
        moveTilesDown();
        combineTilesDown();
        addTile();
        console.log("Pressed down");

    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
       moveTilesLeft();
       combineTilesLeft();
       addTile();
       console.log("Pressed left");
    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
       moveTilesRight();
       combineTilesRight();
       addTile();
       console.log("Pressed right");

    //   console.log(board.length);
    } 
    if(cleared == true){
        document.getElementById("clear").innerHTML = "You have cleared the game! Click OK and refresh the page if you want to play again";
        alert(document.getElementById("clear").innerHTML);
        foreverContinue = true;
        cleared = false;
    }
  //  if()
    
    printBoard(); //have to recall print board to get the board to update
};
function combineTilesUp()

{
     for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
   if(r !== 0 && board[r][c] !== "x" && board[r-1][c] !== "x" && board[r][c] === board[r-1][c]){
            totalTileNumber = parseInt(board[r-1][c]) + parseInt(board[r][c]);
            score = score + parseInt(board[r-1][c]) + parseInt(board[r][c]);
            if(parseInt(board[r-1][c]) + parseInt(board[r][c]) === 2048 && foreverContinue == false){
                cleared = true;
                
            }
            console.log(totalTileNumber);

            board[r-1][c] = board[r][c];

            board[r-1][c] = totalTileNumber;
            if(board[r][c] !== "x"){
            board[r][c] = "x";
        }

           // board[r-1][c] = totalTileNumber;
          // totalTileNumber = parseInt(board[r-1][c]);
}
}
}
}
function moveTilesUp()
//ROWS ACROSS THE LEFT SIDE DOWNWARD, COLUMNS ACROSS THE TOP GOING TO RIGHT
{
    
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
           
            if(r !== 0  && board[r][c] !== "x" && board[r-1][c] === "x")
            {
                board[r-1][c] = board[r][c];
                board[r][c] = "x";
                moveTilesUp();
           //     console.log(r);
               //console.log(board.length);
            }
            
        }
        
    }   
    
}
function combineTilesDown(){
    for(var r=3; r >=0; r--)
        
    {

        for(var c=0; c<board[r].length; c++)
        {
    if(r !== 3 && board[r][c] !== "x" && board[r+1][c] !== "x" && board[r][c] === board[r+1][c]){
            totalTileNumber = parseInt(board[r+1][c]) + parseInt(board[r][c]);
            console.log(totalTileNumber);
            score = score + parseInt(board[r+1][c]) + parseInt(board[r][c]);
            board[r+1][c] = board[r][c];

            board[r+1][c] = totalTileNumber;
            if(board[r][c] !== "x"){
            board[r][c] = "x";
        }
}
}
           // board[r-1][c] = totalTileNumber;
          // totalTileNumber = parseInt(board[r-1][c]);
}
}
function moveTilesDown()
//ROWS ACROSS THE LEFT SIDE DOWNWARD, COLUMNS ACROSS THE TOP GOING TO RIGHT
{
    
    for(var r=3; r >=0; r--)
        
    {

        for(var c=0; c<board[r].length; c++)
        {


            if(r !== 3  && board[r][c] !== "x" && board[r+1][c] === "x")
            {
               // moveOnce = true;
               
                board[r+1][c] = board[r][c];
                board[r][c] = "x";
                moveTilesDown();
            //   console.log(r);
                
                 }
            }
            
        }
        
    }   
    function combineTilesRight(){
        for(var r=0; r < board.length; r++)
    {
        for(var c=3; c >=0; c--)
        {
         if(c !== 3 && board[r][c] !== "x" && board[r][c+1] !== "x" && board[r][c] === board[r][c+1]){
            totalTileNumber = parseInt(board[r][c+1]) + parseInt(board[r][c]);
            console.log(totalTileNumber);
            score = score + parseInt(board[r][c+1]) + parseInt(board[r][c]);
            board[r][c+1] = board[r][c];

            board[r][c+1] = totalTileNumber;
            if(board[r][c] !== "x"){
            board[r][c] = "x";
        }
    }
}

           // board[r-1][c] = totalTileNumber;
          // totalTileNumber = parseInt(board[r-1][c]);
}
    }
function moveTilesRight()
//ROWS ACROSS THE LEFT SIDE DOWNWARD, COLUMNS ACROSS THE TOP GOING TO RIGHT
{
    
    for(var r=0; r < board.length; r++)
    {
        for(var c=3; c >=0; c--)
        {
             
            if(c !== 4  && board[r][c] !== "x" && board[r][c+1] === "x")
            {
                board[r][c+1] = board[r][c];
                board[r][c] = "x";
                moveTilesRight();
              //  moveTilesRight();
         //       console.log(c);
               //console.log(board.length);
            }
            
        }
        
    }   
    
}
function combineTilesLeft(){
     for(var r=0; r < board.length; r++)
    {
        for(var c=0; c <=3; c++)
        {
     if(c !== 0 && board[r][c] !== "x" && board[r][c-1] !== "x" && board[r][c] === board[r][c-1]){
            totalTileNumber = parseInt(board[r][c-1]) + parseInt(board[r][c]);
            console.log(totalTileNumber);
            score = score + parseInt(board[r][c-1]) + parseInt(board[r][c]);
            board[r][c-1] = board[r][c];

            board[r][c-1] = totalTileNumber;
            if(board[r][c] !== "x"){
            board[r][c] = "x";
        }
}
}
           // board[r-1][c] = totalTileNumber;
          // totalTileNumber = parseInt(board[r-1][c]);
}
}
function moveTilesLeft()
//ROWS ACROSS THE LEFT SIDE DOWNWARD, COLUMNS ACROSS THE TOP GOING TO RIGHT
{
    
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c <=3; c++)
        {
            
            if(c !== 0  && board[r][c] !== "x" && board[r][c-1] === "x")
            {
                board[r][c-1] = board[r][c];
                board[r][c] = "x";
                moveTilesLeft();
           //     console.log(c);
               //console.log(board.length);
            }
            
        }
        
    }   
    
}


//As soon as webpage loads run these two functions


function printBoard(){
console.log(score);
document.getElementById("demo").innerHTML = "Score: " + score;
document.getElementById("demo").style.background = "#17202A";
//document.getElementById('score').innerHTML = "Score: " + score;
//text(score,10,10);
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            var boardID = "r"+i+"c"+j;
            //if the tile is not zero, put it on the board 
            if(board[i][j]!=0){
                document.getElementById(boardID).innerHTML = board[i][j];           }
            //Change the different number tiles to different colors
            switch(board[i][j]){
                case 0:
                document.getElementById(boardID).style.background = "#CACFD2";
                break;
                case 2:
                    document.getElementById(boardID).style.background = "#f0e5da";
                    break;//similar to an else if. Makes sure none of the other cases executes if this one does
                case 4:
                    document.getElementById(boardID).style.background = "#ede2c8";
                    break;
                case 8:
                    document.getElementById(boardID).style.background = "#feb578";
                    break;
                case 16:
                    document.getElementById(boardID).style.background = "#ff9962";
                    break;
                case 32:
                    document.getElementById(boardID).style.background = "#ff8060";
                    break;
                case 64:
                    document.getElementById(boardID).style.background = "#ff613c";
                    break;
                case 128:
                    document.getElementById(boardID).style.background = "#efd26d";
                    break;
                case 256:
                    document.getElementById(boardID).style.background = "#efd15c";
                    break;
                case 512:
                    document.getElementById(boardID).style.background = "#efcd4a";
                    break;
                case 1024:
                    document.getElementById(boardID).style.background = "#f0ca36";
                    break;
                case 2048:
                    document.getElementById(boardID).style.background = "#ccc0b3";
                    break;
                default:
                    //similar to the else statement. If none of the other cases execute, this statement will execute
            }
        }
    }
}
//show students an ascii conversion tool. 
/*document.onkeydown = function(e){
    console.log(e.keyCode);
};*/