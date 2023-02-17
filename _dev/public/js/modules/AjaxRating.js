import rmp_frontend from "rmp_frontend";
import LoadResults from "./LoadResults";

class AjaxRating {
  constructor(postID, widgetContainer, rating, startTime) {
    this.postID = postID;
    this.widgetContainer = widgetContainer;
    this.rating = rating;
    this.duration = Math.floor(Date.now() / 1000) - startTime;
    this.settings = rmp_frontend;
    this.recaptcha = rmp_frontend.grecaptcha;
    this.recaptchaKey = rmp_frontend.siteKey;
    this.data = new FormData();
    this.data.append("action", "process_rating");
    this.data.append("star_rating", this.rating);
    this.data.append("postID", this.postID);
    this.data.append("duration", this.duration);
    this.data.append("nonce", this.settings.nonce);
    this.events();
  }

  events() {
    if (this.recaptcha != 2) {
      // recaptcha disabled
      this.saveRating();
      return;
    }
    import("grecaptcha").then((grecaptcha) => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(this.recaptchaKey, { action: "RMPrating" })
          .then((token) => {
            this.data.token = token;
            this.saveRating();
          });
      });
    });
  }

  saveRating() {
    fetch(this.settings.admin_ajax, {
      method: "POST",
      body: this.data,
    })
      .then((response) => response.json())
      .then((data) => {
        new LoadResults(this.postID, this.widgetContainer, data, this.rating);
      });
  }
}

export default AjaxRating;
