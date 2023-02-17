class FreezeWidget {
  constructor(widgetContainer) {
    this.widgetContainer = widgetContainer;
    this.ratingItems = document.querySelectorAll(
      this.widgetContainer + ".js-rmp-rating-item"
    );
    this.ratingTextContainer = document.querySelector(
      this.widgetContainer + ".js-rmp-hover-text"
    );
    this.submitBtn = document.querySelector(
      this.widgetContainer + ".js-submit-rating-btn"
    );
    this.events();
  }

  events() {
    document.querySelector('.js-rmp-rating-icons-list').style.pointerEvents = "none";

    this.submitBtn.classList.remove("rmp-rating-widget__submit-btn--visible");
    this.ratingTextContainer.innerText = "";
  }
}

export default FreezeWidget;
