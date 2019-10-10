
var result = 0;
var wins = 0;
var loses = 0;
var randomNumber = Math.floor(Math.random() * 101 + 20);

$(".randomNumber").html(randomNumber);
    


var numberOption =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

var numberOption1 = Math.floor(Math.random() * numberOption.length + 1);
var numberOption2 = Math.floor(Math.random() * numberOption.length + 1);
var numberOption3 = Math.floor(Math.random() * numberOption.length + 1);
var numberOption4 = Math.floor(Math.random() * numberOption.length + 1);


$("cry1").html(numberOption1);
$("cry2").html(numberOption2);
$("cry3").html(numberOption3);
$("cry4").html(numberOption4); 

function reset() {
    randomNumber = Math.floor(Math.random() * 101 + 20);
    numberOption1 = Math.floor(Math.random() * numberOption.length + 1);
    numberOption2 = Math.floor(Math.random() * numberOption.length + 1);
    numberOption3 = Math.floor(Math.random() * numberOption.length + 1);
    numberOption4 = Math.floor(Math.random() * numberOption.length + 1);
    $(".randomNumber").html(randomNumber);
    $("#wins").html(wins);
    $("#loses").html(loses);
    result = 0;
}

function startGame(){

$("#cry1").on('click', function() {
    result += numberOption1;
    $(".totalScore").html(result);
    totalScore();
})
$("#cry2").on('click', function() {
    result += numberOption2;
    $(".totalScore").html(result);
    totalScore();
})
$("#cry3").on('click', function() {
    result += numberOption3;
    $(".totalScore").html(result);
  
    totalScore();
})
$("#cry4").on('click', function() {
    result += numberOption4;
    $(".totalScore").html( result);
   totalScore();
})

function totalScore(){
    if (result == randomNumber) {
        ("Wins :", wins++);
        console.log("YOU WON");
        reset();
     
    }
    else if (result > randomNumber) {
        ("Loses :", loses++);
        console.log("GOT YOU");
        reset();
    }
}




}
startGame();




console.log("result5", result);


console.log("numberOption1",numberOption1);
console.log("numberOption2",numberOption2);
console.log("numberOption3",numberOption3);
console.log("numberOption4",numberOption4);

