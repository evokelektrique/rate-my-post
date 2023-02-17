import rmp_frontend from "rmp_frontend";
import IconHighlighter from "./IconHighlighter";
import BrowserSupport from "./BrowserSupport";

class AjaxLoad {
  constructor(postID) {
    this.postID = postID;
    this.widgetContainer = ".js-rmp-widgets-container--" + postID + " ";
    this.settings = rmp_frontend;
    this.avgRatingContainer = document.querySelector(
      this.widgetContainer +
        ".js-rmp-avg-rating, .js-rmp-results-widget--" +
        postID +
        " .js-rmp-avg-rating"
    );
    this.voteCountContainer = document.querySelector(
      this.widgetContainer +
        ".js-rmp-vote-count, .js-rmp-results-widget--" +
        postID +
        " .js-rmp-vote-count"
    );
    this.noVotesContainer = document.querySelector(
      this.widgetContainer + ".js-rmp-not-rated"
    );
    this.resultsTextContainer = document.querySelector(
      this.widgetContainer + ".js-rmp-results"
    );
    this.noVotesContainer = document.querySelector(
      this.widgetContainer + ".js-rmp-not-rated"
    );
    this.resultsTextContainer = document.querySelector(
      this.widgetContainer + ".js-rmp-results"
    );
    this.msgContainer = document.querySelector(
      this.widgetContainer + ".js-rmp-msg"
    );
    this.data = new FormData();
    this.data.append("action", "load_results");
    this.data.append("postID", this.postID);
    this.data.append("nonce", this.settings.nonce);
    this.events();
  }

  events() {
    fetch(this.settings.admin_ajax, {
      method: "POST",
      body: this.data,
    })
      .then((response) => response.json())
      .then((data) => {
        const voteCount = data.voteCount;
        const avgRating = data.avgRating;
        const error = data.errorMsg;
        this.loadResults(voteCount, avgRating, error);
      });
  }

  loadResults(voteCount, avgRating, error) {
    if (error.length) {
      this.msgContainer.innerText = error;
      this.msgContainer.classList.add("rmp-rating-widget__msg--alert");
      return;
    }
    // inject data
    this.avgRatingContainer.innerText = avgRating;
    this.voteCountContainer.innerText = voteCount;
    // highlight icons
    new IconHighlighter(
      this.widgetContainer,
      this.postID,
      avgRating
    );
    // handle classes
    if (avgRating === 0) {
      this.noVotesContainer.classList.remove("rmp-rating-widget__not-rated--hidden");
      this.resultsTextContainer.classList.add("rmp-rating-widget__results--hidden");
    } else {
      this.noVotesContainer.classList.add("rmp-rating-widget__not-rated--hidden");
      this.resultsTextContainer.classList.remove(
        "rmp-rating-widget__results--hidden"
      );
    }
    new BrowserSupport();
  }
}

export default AjaxLoad;
