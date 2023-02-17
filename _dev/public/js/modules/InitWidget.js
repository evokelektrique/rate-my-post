import AjaxRating from "./AjaxRating";
import FreezeWidget from "./FreezeWidget";
import CookieCheck from "./CookieCheck";
import PrivilegeCheck from "./PrivilegeCheck";
import rmp_frontend from "rmp_frontend";

class InitWidget {
  constructor(postID) {
    this.postID = postID;
    this.widgetContainer = ".js-rmp-widgets-container--" + postID + " ";
    this.resultsWidget = ".js-rmp-results-widget--" + postID;
    this.ratingItems = document.querySelectorAll(
      this.widgetContainer + ".js-rmp-rating-item"
    );
    this.ratingItemsList = document.querySelectorAll(
      this.widgetContainer + ".js-rmp-rating-icons-list"
    );
    this.ratingIcons = document.querySelectorAll(
      this.widgetContainer + ".js-rmp-rating-icon"
    );
    this.ratingTextContainer = document.querySelector(
      this.widgetContainer + ".js-rmp-hover-text"
    );
    this.ratingText = false;
    this.hoveredItemOrder = 0;
    this.rating = 0;
    this.supportsHover = window.matchMedia("(hover: hover)");
    this.startTime = Math.floor(Date.now() / 1000);
    this.preventAccidental = rmp_frontend.preventAccidental;
    this.hoverTexts = rmp_frontend.hoverTexts;
    this.submitBtn = document.querySelector(
      this.widgetContainer + ".js-submit-rating-btn"
    );
    this.saveRating = false;
    this.events();
  }

  events() {
    this.doubleWidgetCheck();

    [...this.ratingItems].forEach((e) => {
      e.style.cursor = "pointer";
      e.addEventListener("mouseover", (event) => this.hoverIcons(event));
    });

    [...this.ratingItems].forEach((e) => {
      e.addEventListener("mouseout", () => this.stopHoverIcons());
    });

    [...this.ratingItemsList].forEach((e) => {
      e.addEventListener("mouseleave", () => this.removeHoverTexts());
    });

    [...this.ratingItems].forEach((e) => {
      e.addEventListener("click", (event) => this.ratingIconClicked(event));
    });

    new CookieCheck(this.widgetContainer, this.postID);
    new PrivilegeCheck();
  }

  doubleWidgetCheck() {
    let ratingWidgets = document.querySelectorAll(this.widgetContainer);
    let resultWidgets = document.querySelectorAll(this.resultsWidget);
    if (ratingWidgets.length > 1 || resultWidgets.length > 1) {
      // duplicates cause issues
      Array.from(ratingWidgets).forEach((item, index) => {
        if (index > 0) {
          item.remove();
        }
      });
      Array.from(resultWidgets).forEach((item, index) => {
        if (index > 0) {
          item.remove();
        }
      });
    }
  }

  hoverIcons(event) {
    this.hoveredItemOrder = parseInt(event.target.parentElement.dataset.value, 10);
    this.ratingText = event.target.parentElement.dataset.descriptiveRating;
    
    // highlight icons
    [...this.ratingIcons].forEach((item, index) => {
      if (index < this.hoveredItemOrder) {
        item.classList.add("rmp-icon--hovered");
      } else {
        item.classList.remove("rmp-icon--hovered");
      }
      // inject texts
      if (this.supportsHover && this.hoverTexts == 2) {
        this.ratingTextContainer.innerText = this.ratingText;
      }
    });
  }

  stopHoverIcons() {
    [...this.ratingIcons].forEach((icon) =>
      icon.classList.remove("rmp-icon--hovered")
    );
  }

  removeHoverTexts() {
    this.ratingTextContainer.innerText = "";
  }

  ratingIconClicked(event) {
    this.rating = parseInt(event.target.parentElement.dataset.value, 10);
    [...this.ratingIcons].forEach((item, index) => {
      item.classList.remove("rmp-icon--processing-rating");

      if (index < this.rating) {
        item.classList.add("rmp-icon--processing-rating");
      }
    });

    if (this.preventAccidental == 2) {
      // enabled
      this.submitButtonHandler();
      return;
    }

    new FreezeWidget(this.widgetContainer);

    // save rating
    this.saveRating = new AjaxRating(
      this.postID,
      this.widgetContainer,
      this.rating,
      this.startTime
    );
  }

  submitButtonHandler() {
    this.submitBtn.classList.add("rmp-rating-widget__submit-btn--visible");
    this.submitBtn.addEventListener("click", () => {
      if (!this.saveRating) {
        this.saveRating = new AjaxRating(
          this.postID,
          this.widgetContainer,
          this.rating,
          this.startTime
        );
      }
      new FreezeWidget(this.widgetContainer);
    });
  }
}

export default InitWidget;
