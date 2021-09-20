/**
 * Drop Down Menu Module
 */

class DropDown {
  constructor(element) {
    this.element = element;
    this.currStatus = "hidden";
  }

  status() {
    return this.currStatus;
  }

  toggleStatus() {
    if (this.currStatus === "visible") {
      this.currStatus = "hidden";
      return this.currStatus;
    } else {
      this.currStatus = "visible";
      return this.currStatus;
    }
  }

  makeVisible() {
    this.element.classList.add("expand-contract-expanded");
    this.element.classList.remove("expand-contract-contracted");
  }
  makeHidden() {
    this.element.classList.add("expand-contract-contracted");
    this.element.classList.remove("expand-contract-expanded");
  }
}

let initDDMenus = (() => {
  let navMenu = document.querySelector(".nav-menu");
  let navMenuChildren = navMenu.childNodes;
  navMenuChildren.forEach((menuChild) => {
    if (menuChild.nodeName === "LI") {
      let menuChildrenElems = menuChild.childNodes;
      menuChildrenElems.forEach((menuChild) => {
        if (menuChild.nodeName === "UL") {
          let menuParent = menuChild.parentNode;
          let menuParentText = menuParent.children[0].innerHTML;
          let menuChildDD = new DropDown(menuChild);
          menuParent.addEventListener("click", () => {
            navMenuChildren.forEach((menuChild) => {
              menuChild.addEventListener(
                "click",
                () => {
                  let menuChildText = menuChild.children[0].innerHTML;
                  if (
                    menuChildDD.status() === "visible" &&
                    menuChildText !== menuParentText
                  ) {
                    menuChildDD.makeHidden();
                    menuChildDD.toggleStatus();
                  }
                },
                { once: true }
              );
            });
            if (menuChildDD.status() === "visible") {
              menuChildDD.makeHidden();
              menuChildDD.toggleStatus();
            } else if (menuChildDD.status() === "hidden") {
              menuChildDD.makeVisible();
              menuChildDD.toggleStatus();
            }
          });
        }
      });
    }
  });
})();
