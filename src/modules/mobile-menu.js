"use strict";

let initMenuAnimation = (() => {
  let notHamBtn = document.querySelector(".not-ham-btn");

  function closeNotHamBtn() {
    const notHamBtnTop = notHamBtn.getElementsByTagName("div")[0];
    notHamBtnTop.classList.add("slide-left-first");

    const notHamBtnBottom = notHamBtn.getElementsByTagName("div")[1];
    notHamBtnBottom.classList.add("slide-left-second");

    setTimeout(() => {
      notHamBtnTop.style.display = "none";
      notHamBtnBottom.style.display = "none";
    }, 2000);
  }

  function openCircles() {
    const circlesContainer = document.querySelector(".ham-menu-container");
    circlesContainer.style.display = "block";

    const smallCircle = circlesContainer.getElementsByTagName("div")[0];
    const mediumCircle = circlesContainer.getElementsByTagName("div")[1];
    const largeCircle = circlesContainer.getElementsByTagName("div")[2];

    const circlesArr = [smallCircle, mediumCircle, largeCircle];
    circlesArr.forEach((circle) => {
      circle.classList.add("open-circle");
    });
  }

  function openCloseBtn() {
    // Make it able to close the menu options with a fade out from top animation for each
    // Close the circles
    // Make the ham button appear
  }

  notHamBtn.addEventListener("click", () => {
    closeNotHamBtn();
    openCircles();
    // Close the not ham btn and set it to invisible.
    // open the circles
    // Open the close button
    // Open the menu items
    // For each menu item add a fade in from bottom animation for each
  });
})();
