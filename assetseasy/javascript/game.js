
var result = 0;
var randomNumber = Math.floor(Math.random() * 101 + 20);
// var crystal1 = $("#cry1");
// var crystal2 = $("#cry2");
// var crystal3 = $("#cry3");
// var crystal4 = $("#cry4");
$(".randomNumber").html(randomNumber);
    console.log("randomNumber", randomNumber);

// $(".randomNumber").html(randomNumber1);
var numberOption =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

var numberOption1 = Math.floor(Math.random() * numberOption.length + 1);
var numberOption2 = Math.floor(Math.random() * numberOption.length + 1);
var numberOption3 = Math.floor(Math.random() * numberOption.length + 1);
var numberOption4 = Math.floor(Math.random() * numberOption.length + 1);


$("cry1").html(numberOption1);
$("cry2").html(numberOption2);
$("cry3").html(numberOption3);
$("cry4").html(numberOption4);  



$("#cry1").on('click', function() {
    result += numberOption1;
    console.log("result1", result);
    $(".totalScore").html(result);
})
$("#cry2").on('click', function() {
    result += numberOption2;
    console.log("result2", result);
    $(".totalScore").html(result);
})
$("#cry3").on('click', function() {
    result += numberOption3;
    console.log("result3", result);
    $(".totalScore").html(result);
})
$("#cry4").on('click', function() {
    result += numberOption4;
    console.log("result4", result);
    $(".totalScore").html(result);
})

if (result === randomNumber){
    alert("YOU WON");
}
else if 
    (result > randomNumber) {
        alert("YOU LOST");
    }



console.log("result5", result);


console.log("numberOption1",numberOption1);
console.log("numberOption2",numberOption2);
console.log("numberOption3",numberOption3);
console.log("numberOption4",numberOption4);

