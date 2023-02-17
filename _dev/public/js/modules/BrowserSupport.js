class BrowserSupport {
  constructor() {
    this.starsToBeReplaced = document.querySelector(".js-rmp-replace-half-star");
    this.starsToBeRemoved = document.querySelector(".js-rmp-remove-half-star");
    this.testElement = document.createElement("x-test");
    this.supportTest = typeof this.testElement.style.webkitBackgroundClip;
    this.events();
  }

  events() {
    let supportsClip = true;
    if (this.supportTest === "undefined") {
      supportsClip = false;
    }

    if (supportsClip) {
      // modern browser, no need for adjustments
      return;
    }

    this.starsToBeReplaced.classList.remove("rmp-icon--half-highlight");
    this.starsToBeReplaced.classList.add("rmp-icon--full-highlight");
    this.starsToBeRemoved.classList.remove("rmp-icon--half-highlight");
  }
}

export default BrowserSupport;
