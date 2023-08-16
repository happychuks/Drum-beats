var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i <numberOfDrumButtons; i++) {
//event that happens when a button is clicked
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
 
});
}

//event that happens when a key is press on the keyboard
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});



function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickbass = new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
            break;       
               
    
        default: console.log(buttonInnerHTML);
            
    }
}

//to add animation to button pressed which fades out in 0.1s using the class created in the css file "pressed"
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); //this adds the animation
    setTimeout(function() {activeButton.classList.remove("pressed");},100); //this removes the animation after 0.1s

}
// function handleClick() {
//     alert("I just got clicked");
// }
// function playAudio() {Audio.play();
// }



