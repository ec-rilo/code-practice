"use strict";

let initMenuAnimation = (() => {
  let notHamBtn = document.querySelector(".not-ham-btn");
  notHamBtn.addEventListener("click", () => openMobileMenu());

  let closeBtn = document.querySelector(".close-menu-btn");
  closeBtn.addEventListener("click", () => closeMobileMenu());

  function closeNotHamBtn() {
    const notHamBtnTop = notHamBtn.getElementsByTagName("div")[0];
    if (notHamBtnTop.classList.contains("slide-right-first")) {
      notHamBtnTop.classList.remove("slide-right-first");
    }
    notHamBtnTop.classList.add("slide-left-first");

    const notHamBtnBottom = notHamBtn.getElementsByTagName("div")[1];
    if (notHamBtnBottom.classList.contains("slide-right-second")) {
      notHamBtnBottom.classList.remove("slide-right-second");
    }
    notHamBtnBottom.classList.add("slide-left-second");

    const hamItemsDelay = setTimeout(() => {
      notHamBtnTop.style.display = "none";
      notHamBtnBottom.style.display = "none";
      clearTimeout(hamItemsDelay);
    }, 500);
  }

  function openNotHamBtn() {
    const notHamBtnTop = notHamBtn.getElementsByTagName("div")[0];
    notHamBtnTop.classList.remove("slide-left-first");
    notHamBtnTop.style.display = "block";
    notHamBtnTop.classList.add("slide-right-first");

    const notHamBtnBottom = notHamBtn.getElementsByTagName("div")[1];
    notHamBtnBottom.classList.remove("slide-left-second");
    notHamBtnBottom.style.display = "block";
    notHamBtnBottom.classList.add("slide-right-second");
  }

  function openCircles() {
    const circlesContainer = document.querySelector(".ham-menu-container");
    circlesContainer.style.display = "block";

    const smallCircle = circlesContainer.getElementsByTagName("div")[0];
    const mediumCircle = circlesContainer.getElementsByTagName("div")[1];
    const largeCircle = circlesContainer.getElementsByTagName("div")[2];

    const circlesArr = [smallCircle, mediumCircle, largeCircle];
    circlesArr.forEach((circle) => {
      if (circle.classList.contains("close-circle")) {
        circle.classList.remove("close-circle");
      }
      circle.classList.add("open-circle");
    });
  }

  function closeCircles() {
    const circlesContainer = document.querySelector(".ham-menu-container");
    circlesContainer.style.display = "block";

    const smallCircle = circlesContainer.getElementsByTagName("div")[0];
    const mediumCircle = circlesContainer.getElementsByTagName("div")[1];
    const largeCircle = circlesContainer.getElementsByTagName("div")[2];

    const circlesArr = [smallCircle, mediumCircle, largeCircle];
    circlesArr.forEach((circle) => {
      if (circle.classList.contains("open-circle")) {
        circle.classList.remove("open-circle");
      }
      circle.classList.add("close-circle");
    });
  }

  function openCloseBtn() {
    let closeBtn = document.querySelector(".close-menu-btn");
    closeBtn.style.display = "block";
    if (closeBtn.classList.contains("remove-close-btn")) {
      closeBtn.classList.remove("remove-close-btn");
    }
    closeBtn.classList.add("open-close-btn");
  }

  function removeCloseBtn() {
    let closeBtn = document.querySelector(".close-menu-btn");
    closeBtn.style.display = "block";
    closeBtn.classList.add("remove-close-btn");
    const closeBtnTimeout = setTimeout(() => {
      closeBtn.style.display = "none";
      clearTimeout(closeBtnTimeout);
    }, 500);
  }

  function openMenuItems() {
    const menuItemsContainer = document.querySelector(".mobile-menu-container");
    const menuItemsUL = document.querySelector(".mobile-menu-list");
    menuItemsContainer.style.display = "block";
    const menuItemsArr = menuItemsUL.children;

    let currNum = 0;
    const setMenuItemInterval = setInterval(() => {
      let currItem = menuItemsArr[currNum];
      if (currItem.classList.contains("menu-item-close-anim")) {
        currItem.classList.remove("menu-item-close-anim");
      }
      currItem.classList.add("menu-item-open-anim");
      ++currNum;
      if (currNum === menuItemsArr.length) {
        clearInterval(setMenuItemInterval);
      }
    }, 100);
  }

  function closeMenuItems() {
    const menuItemsContainer = document.querySelector(".mobile-menu-container");
    const menuItemsUL = document.querySelector(".mobile-menu-list");
    menuItemsContainer.style.display = "block";
    const menuItemsArr = menuItemsUL.children;

    let currNum = menuItemsArr.length - 1;
    console.log(currNum);
    const setMenuItemInterval = setInterval(() => {
      let currItem = menuItemsArr[currNum];

      if (currItem.classList.contains("menu-item-open-anim")) {
        currItem.classList.remove("menu-item-open-anim");
      }
      currItem.classList.add("menu-item-close-anim");
      --currNum;
      console.log(currNum);
      if (currNum === -1) {
        clearInterval(setMenuItemInterval);
      }
    }, 100);
  }

  function closeMobileMenu() {
    openNotHamBtn();
    closeCircles();
    removeCloseBtn();
    closeMenuItems();
    // Make it able to close the menu options with a fade out from top animation for each
    // Close the circles
    // Make the ham button appear
  }

  function openMobileMenu() {
    closeNotHamBtn();
    openCircles();
    openCloseBtn();
    openMenuItems();
  }
})();
