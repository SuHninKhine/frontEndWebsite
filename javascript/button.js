function buttonAnimation(buttonInnerHTML) {
    var button = document.querySelector("." + buttonInnerHTML);
    button.classList.add("pressed");
    setTimeout(function() {
      button.classList.remove("pressed");
    }, 2000);
  }
  
  //adding event listener by waiting for the keypress
  document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });
  
  var buttons = document.querySelectorAll(".drum");
  var modals = document.querySelectorAll('.modal');
  
  var modalIdMap = {
    'u': 'reduceModal',
    's': 'reuseModal',
    'e': 'recycleModal',
  };
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      console.log('Button Clicked:', buttonInnerHTML); // Debugging statement
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
  
      // Get the corresponding modal ID based on the button text
      var modalId = modalIdMap[buttonInnerHTML.toLowerCase()];
      var modal = document.getElementById(modalId);
      modal.style.display = 'block';
    });
  }
  
  // Close the modal when the close button is clicked
  var closeButtons = document.querySelectorAll('.close');
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
      var modal = this.closest('.modal');
      modal.style.display = 'none';
    });
  }
  
  // Close the modal when clicked outside the modal
  window.addEventListener('click', function(event) {
    for (var i = 0; i < modals.length; i++) {
      if (event.target === modals[i]) {
        modals[i].style.display = 'none';
      }
    }
  });
  
  //the function for making sounds
  function makeSound(key) {
    switch (key) {
      case "u":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "s":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "e":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      default:
        console.log(key);
    }
  }
  
