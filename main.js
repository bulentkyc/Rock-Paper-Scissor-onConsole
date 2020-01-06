let userItem = parseInt(prompt(" Please type your choise as a number.\n 1 - Rock \n 2 - Paper \n 3 - Scissor"));
//console.log(userItem);


let appItem = Math.floor(Math.random()*3)+1;

let winner;

/* //worse
if (userItem-appItem == 1) {
    winner = "user";
}else if(userItem-appItem == 2){
    winner = "app";
}else if(userItem == appItem){
    winner = "draw";
}else if(userItem-appItem == -1){
    winner = "app";
}else if(userItem-appItem == -2){
    winner = "user";
} */

//Better
if(userItem == appItem){
    winner = "draw";
}else if (userItem-appItem == 1 || userItem-appItem == -2) {
    winner = "user";
}else{
    winner = "app";
}

//You can send for an interview. Because this is a good practice
let converter = function(itemNumber) {
    switch (itemNumber) {
        case 1:
            return('Rock');

        case 2:
            return('Paper');

        case 3:
            return('Scissor');
    
        default:
            return('Number has to be between 1-3');
    }
}



//     userItem: "Rock",
//     appItem: "Paper",
//     winner: "app"
let game = {
    userItem: converter(userItem),
    appItem: converter(appItem),
    winner
}

/* 
//Never send this code for interview
switch (userItem) {
    case 1:
        game.userItem = "Rock"
        break;

    case 2:
        game.userItem = "Paper"
        break;

    case 3:
        game.userItem = "Scissor"
        break;
}

switch (appItem) {
    case 1:
        game.appItem = "Rock"
        break;

    case 2:
        game.appItem = "Paper"
        break;

    case 3:
        game.appItem = "Scissor"
        break;
} */
console.log(game);

console.log(converter(userItem));