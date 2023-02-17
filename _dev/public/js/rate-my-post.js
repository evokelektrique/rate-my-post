import InitWidget from "./modules/InitWidget";
import AjaxLoad from "./modules/AjaxLoad";
import BrowserSupport from "./modules/BrowserSupport";
import DestroyWidgets from "./modules/DestroyWidgets";
import rmp_frontend from "rmp_frontend";

function init_rate_my_post() {
  // deal with half-highlighted icons for older browsers
  new BrowserSupport();

  // check if rating or results widget is present
  let ratingWidgets = document.getElementsByClassName("js-rmp-rating-widget");
  let resultsWidgets = document.getElementsByClassName("js-rmp-results-widget");
  let ratingWidgetContainers = document.getElementsByClassName(
    "js-rmp-widgets-container"
  );

  // exit if rating or results widget is not present
  if (ratingWidgets.length < 1 && resultsWidgets.length < 1) {
    return;
  }
  // save post ids to array
  let postsIDs = [];

  Array.from(ratingWidgetContainers).forEach((item) => {
    postsIDs.push(item.dataset.postId);
  });

  // remove duplicates
  let uniquePostIDs = postsIDs.filter(
    (item, index) => postsIDs.indexOf(item) === index
  );
  // postsIDs = [...new Set(postsIDs)]; //requires polyfill

  // ajax load results
  if (rmp_frontend.ajaxLoad == 2) {
    new AjaxLoad(uniquePostIDs[0]); // limit to one due to script executions
    new InitWidget(uniquePostIDs[0]);
    return;
  }

  // init each widget
  uniquePostIDs.forEach((postID) => {
    new InitWidget(postID);
  });
}

// Init
document.addEventListener("DOMContentLoaded", function () {
  init_rate_my_post();
});

export function re_init() {
  // console.log('re-init running');
  new DestroyWidgets();
  init_rate_my_post();
}
