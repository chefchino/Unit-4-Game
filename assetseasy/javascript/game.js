

var randomNumber = Math.floor(Math.random() * 101 + 20);
    
    console.log("randomNumber", randomNumber);

// $(".randomNumber").html(randomNumber1);
var numberOption =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

var numberOption1 = Math.floor(Math.random() * numberOption.length + 1);
var numberOption2 = Math.floor(Math.random() * numberOption.length + 1);
var numberOption3 = Math.floor(Math.random() * numberOption.length + 1);
var numberOption4 = Math.floor(Math.random() * numberOption.length + 1);

if (numberOption1 !== numberOption2 !== numberOption3 !== numberOption4)
{
    numberOption1 = Math.floor(Math.random() * numberOption.length + 1);
    numberOption2 = Math.floor(Math.random() * numberOption.length + 1);
    numberOption3 = Math.floor(Math.random() * numberOption.length + 1);
    numberOption4 = Math.floor(Math.random() * numberOption.length + 1);
}
else {

$("cry1").html(numberOption1);
$("cry2").html(numberOption2);
$("cry3").html(numberOption3);
$("cry4").html(numberOption4);  
}



console.log("numberOption1",numberOption1);
console.log("numberOption2",numberOption2);
console.log("numberOption3",numberOption3);
console.log("numberOption4",numberOption4);

