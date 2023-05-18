var numberOfButtons = document.querySelectorAll(".btn").length;


for (i=0; i<numberOfButtons; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function(event){
    var buttonClicked = this.innerHTML;
    playSound(buttonClicked);
    var keyRetrive = this.classList[2];
    buttonAnimation(keyRetrive);
});
}


for (i=0; i<numberOfButtons; i++) {
    document.addEventListener("keydown", function(event){
    var keyPressed = event.key;
    playSound(keyPressed);
    buttonAnimation(keyPressed);
});
}


function playSound(buttonClick) {
   
    switch (buttonClick) {

        // these cases are for the click by triggering the inner html
        case "Snare<br>Key:R":
          var snare = new Audio("./sound/snare.wav");
          snare.play();
          break;
        
        case "Kick<br>Key:T":
            var kick = new Audio("./sound/kick.wav");
            kick.play();
          break;
        
        case "Hi Hat<br>Key:F":
            var hihat = new Audio("./sound/hihat.wav");
            hihat.play();
          break;
        
        case "Open Hi Hat<br>Key:G":
          var hihatopen = new Audio("./sound/hihatopen.wav");
          hihatopen.play();
          break;

        // these cases are for keys pressed on the keyboard by triggering the keys.
        case "r":
          var snare = new Audio("./sound/snare.wav");
          snare.volume = 0.4;
          snare.play();
          break;
        
        case "t":
            var kick = new Audio("./sound/kick.wav");
            kick.volume = 0.4;
            kick.play();
          break;
        
        case "f":
            var hihat = new Audio("./sound/hihat.wav");
            hihat.volume = 0.4;
            hihat.play();
          break;
        
        case "g":
          var hihatopen = new Audio("./sound/hihatopen.wav");
          hihatopen.volume = 0.4;
          hihatopen.play();
          break;
        
         default:
          
      }
    
}

function buttonAnimation(buttonPressed) {
    var activeButton = document.querySelector("." + buttonPressed);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 50)

}
