// If the user clicks on the portfolio tab
// It becomes a dropdown

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

let ul = document.querySelector(".nav-menu");
let children = ul.childNodes;
children.forEach((child) => {
  if (child.nodeName === "LI") {
    let grandChildren = child.childNodes;
    grandChildren.forEach((grandChild) => {
      if (grandChild.nodeName === "UL") {
        let parent = grandChild.parentNode;
        let parentInnerText = parent.children[0].innerHTML;
        let grandChildDD = new DropDown(grandChild);
        parent.addEventListener("click", () => {
          children.forEach((child) => {
            child.addEventListener(
              "click",
              () => {
                let childInnerText = child.children[0].innerHTML;
                if (
                  grandChildDD.status() === "visible" &&
                  childInnerText !== parentInnerText
                ) {
                  grandChildDD.makeHidden();
                  grandChildDD.toggleStatus();
                  console.log(grandChildDD.status());
                }
              },
              { once: true }
            );
          });
          if (grandChildDD.status() === "visible") {
            grandChildDD.makeHidden();
            grandChildDD.toggleStatus();
          } else if (grandChildDD.status() === "hidden") {
            grandChildDD.makeVisible();
            grandChildDD.toggleStatus();
          }
        });
      }
    });
  }
});
