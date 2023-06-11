var randomNumber1 = Math.floor((Math.random()*6))+1; // generate random number

var randomImage1 = "dice"+randomNumber1+".png"; // random images
var randomImageSrc1 = "images/"+randomImage1;  //address of random image
var images = document.querySelectorAll("img"); //get all images having img tag
var firstImage = images[0]; // get first image
firstImage.setAttribute("src" ,randomImageSrc1 ); // change attribute of first image to random generated image

// For second image 
var randomNumber2 = Math.floor((Math.random()*6))+1; // generate random number
var randomImage2 = "dice"+randomNumber2+".png"; // random images
var randomImageSrc2 = "images/"+randomImage2;  //address of random image
var secondImage = images[1]; // for second image
secondImage.setAttribute("src" ,randomImageSrc2 ); // change attribute of second image

//if player 1 wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 win 🚩";
}
// if player 2 wins
else if ( randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 win 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Match draw 🎌";
}


