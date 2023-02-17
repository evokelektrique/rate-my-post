class DestroyWidgets {
  constructor() {
    this.ratingItems = document.querySelector(".js-rmp-rating-item");
    this.ratingItemsLists = document.querySelector(".js-rmp-rating-icons-list");
    this.events();
  }

  events() {
    this.ratingItems.style.cursor = auto;
    // this.ratingItems.off();
    // this.ratingItemsLists.off();
  }
}

export default DestroyWidgets;
