import rmp_frontend from "rmp_frontend";
import FeedbackSubmitted from "./FeedbackSubmitted";

class AjaxFeedback {
  constructor(widgetContainer, postID, feedback, token, ratingID) {
    this.widgetContainer = widgetContainer;
    this.postID = postID;
    this.feedback = feedback;
    this.settings = rmp_frontend;
    this.duration = false;
    this.ratingID = ratingID;
    this.token = token;
    this.recaptcha = rmp_frontend.grecaptcha;
    this.recaptchaKey = rmp_frontend.siteKey;
    this.data = new FormData();
    this.data.append("action", "process_feedback");
    this.data.append("feedback", this.feedback);
    this.data.append("postID", this.postID);
    this.data.append("duration", this.duration);
    this.data.append("rating_id", this.ratingID);
    this.data.append("rating_token", this.token);
    this.data.append("nonce", this.settings.nonce);
    this.events();
  }

  events() {
    if (this.recaptcha != 2) {
      // recaptcha disabled
      this.saveFeedback();
      return;
    }
    import("grecaptcha").then((grecaptcha) => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(this.recaptchaKey, { action: "RMPfeedback" })
          .then((token) => {
            this.data.token = token;
            this.saveFeedback();
          });
      });
    });
  }

  saveFeedback() {
    fetch(this.settings.admin_ajax, {
      method: "POST",
      body: this.data,
    })
      .then((response) => response.json())
      .then((data) => {
        new FeedbackSubmitted(this.widgetContainer, data);
      });
  }
}

export default AjaxFeedback;
