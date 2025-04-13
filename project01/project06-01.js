"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Gary Hembree
      Date:   4-17-25

      Filename: project06-01.js
*/
//Part 3
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");
//Part 4
submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  //Part 5
  if (!pwd.checkValidity()) {
    pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    pwd.reportValidity();
  }
  //Part 5b
  else if (pwd.value !== pwd2.value) {
    pwd2.setCustomValidity("Your passwords must match");
    pwd2.reportValidity();
  }
  //Part 5c
  else {
    pwd.setCustomValidity("");
    pwd2.setCustomValidity("");
    document.forms[0].submit();
  }
});