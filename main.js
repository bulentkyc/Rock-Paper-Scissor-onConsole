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