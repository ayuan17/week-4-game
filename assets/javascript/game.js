
//GLOBAL VARIABLES
var crystal = {
    win:0,
    loss:0,
    totalScore: 0,
    crystals: [1, 2, 3, 4],

    randomNumber: function(first, second){
        var result = Math.floor(Math.random() * second) + first;
        return result;
    },
    result:0
};

//Generates random number for Start of game and for crystals
crystal.totalScore = crystal.randomNumber(19, 101);
$(".totalScore").html(crystal.totalScore);

console.log(crystal.totalScore);

function random(){
    for(var i = 0; i < crystal.crystals.length; i++){
    crystal.crystals[i] = crystal.randomNumber(1, 12);
    }

}
random();

var crystalNumber = $('.crystal img');

function crystalRandom(){
    for(var i = 0; i < crystalNumber.length; i++){

    $(crystalNumber[i]).html(crystal.crystals[i]);

    }

}

crystalRandom();

function reset(){
    random()
    crystal.totalScore = crystal.randomNumber(19, 101);
    $(".totalScore").html(crystal.totalScore);
    crystalRandom();
    crystal.result = 0;

}


$('.crystal').on('click', function(){
   var value = $(this).children(this).text();

   var number = parseInt(value);

   crystal.result += number;

   $('.result').html(crystal.result);

   console.log(crystal.result);

if(crystal.totalScore === crystal.result){

    crystal.win++;
    $('.win').html(crystal.win);
    reset();

    console.log(crystal.crystals);
    console.log(crystal.totalScore);
    console.log(crystal.result);

}

else if(crystal.result > crystal.totalScore){
    crystal.loss++;
    $('.loss').html(crystal.loss);
    reset();

    console.log(crystal.crystals);
    console.log(crystal.totalScore);
    console.log(crystal.result);


}

});

console.log(crystal.result);

















//PSUEDOCODE

//AT THE START OF THE GAME, COMPUTER SPITS OUT A RANDOM NUMBER IN THE randomNumber ELEMENT

//THE USER HAS FOUR CRYSTALS TO PICK FROM
    //EACH CRYSTAL HAS A RANDOM VALUE APPLIED TO IT EACH ROUND
    //EVERYTIME USER CLICKS ON THE CRYSTAL, IT ADDS THAT NUMBER TO THE totalScore

//THE RANDOM VALUE IS EQUAL TO THE RANDOM NUMBER THE COMPUTER FIRST GENERATES

//THE TOTAL SCORE OF THE CURRENT ROUND ADDS UP IN THE BOX BELOW THE DIAMONDS

//IF PLAYER EXCEEDS THE randomNumber, THE PLAYER LOSES

//IF THE PLAYER MATCHES CORRECTLY, THE PLAY WINS AND THE winsLosses BOX UPDATES.

//AFTER PLAY WINS/LOSES
    //GAME RESETS
    //NEW RANDOM NUMBER IS GENERATED
    //winsLosses BOX IS SAME
    //totalScore RESETS















//GLOBAL VARIABLES

//FUNCTIONS

//MAIN PROCESS