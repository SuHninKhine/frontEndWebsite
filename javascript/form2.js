
// disabling form submissions if there are invalid fields
(() => {
    'use strict';
  
    // Fetch the form I want to apply custom validation to
    const form = document.getElementById('saveEarthForm');

    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        displayErrors();
      }
    
      form.classList.add('was-validated');
    }, false);
    
 
    function displayErrors() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const age = document.getElementById('age').value;
      const gender = document.getElementById('gender').value;
      const country = document.getElementById('country').value;
      const message = document.getElementById('message').value;
  
      const errorMessages = [];
  
      // Validate Name
      if (!name) {
        errorMessages.push({ field: 'name', message: 'Please enter your name.' });
      }
  
      // Validate Email
      if (!email) {
        errorMessages.push({ field: 'email', message: 'Please enter your email address.' });
      } else if (!isValidEmail(email)) {
        errorMessages.push({ field: 'email', message: 'Please enter a valid email address.' });
      }
  
      // Validate Age
      if (!age) {
        errorMessages.push({ field: 'age', message: 'Please enter your age.' });
      } else if (isNaN(age) || age < 18 || age > 100) {
        errorMessages.push({ field: 'age', message: 'Please enter a valid age between 18 and 100.' });
      }
  
      // Validate Gender
      if (gender === '') {
        errorMessages.push({ field: 'gender', message: 'Please select your gender.' });
      }
  
      // Validate Country
      if (!country) {
        errorMessages.push({ field: 'country', message: 'Please enter your country.' });
      }
  
      // Validate Message
      if (!message) {
        errorMessages.push({ field: 'message', message: 'Please enter your message.' });
      }


      // Clear previous error messages
      const errorDivs = document.querySelectorAll('.error-message');
      errorDivs.forEach(function(div) {
        div.textContent = '';
      });

      // Display error messages
      errorMessages.forEach(function(error) {
        const errorDiv = document.getElementById(error.field + 'Error');
        errorDiv.textContent = error.message;
      });
    }


  
    function isValidEmail(email) {
      // Basic email validation regex
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
      return emailRegex.test(email);
    }
  })();
  

