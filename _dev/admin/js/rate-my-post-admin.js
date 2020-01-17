import $ from 'jquery';
import Tabs from './modules/Tabs';
import AjaxOptions from './modules/AjaxOptions';
import MigrateRatings from './modules/MigrateRatings';
import CptHandler from './modules/CptHandler';
import RelationsHandler from './modules/RelationsHandler';
import OrderlyTables from './modules/OrderlyTables';
import AjaxRatings from './modules/AjaxRatings';
import AjaxFeedback from './modules/AjaxFeedback';
import WaypointsHandler from './modules/WaypointsHandler';

$(document).ready(() => {

  let settingsPage = $('.js-rmp-menu').length;
  let orderlyTablesPage = $('.js-rmp-orderly-tables').length;
  let metaboxPage = $('.js-rmp-meta-box').length;

  if(settingsPage) {
    let tabs = new Tabs();
    let ajaxSettings = new AjaxOptions('.js-rmp-save-options', '.js-rmp-option', 'update_options', '.js-rmp-options-msg', '.js-rmp-reset-options', 'reset_options');
    let ajaxCustomization = new AjaxOptions('.js-rmp-save-customization', '.js-rmp-customization', 'update_customization', '.js-rmp-customization-msg', '.js-rmp-reset-customization', 'reset_customization');
    let ajaxSecurity = new AjaxOptions('.js-rmp-save-security', '.js-rmp-security', 'update_security', '.js-rmp-security-msg', '.js-rmp-reset-security', 'reset_security');
    let migration = new MigrateRatings();
    let cptHandler = new CptHandler();
    let relationsHandler = new RelationsHandler();
    let stickySaveSettings = new WaypointsHandler('js-rmp-options-waypoint', '.js-rmp-options-sticky');
    let stickySaveCustomization = new WaypointsHandler('js-rmp-customization-waypoint', '.js-rmp-customization-sticky');
    let stickySaveSecurity = new WaypointsHandler('js-rmp-security-waypoint', '.js-rmp-security-sticky');
  }

  if(orderlyTablesPage) {
    let orderlyTables = new OrderlyTables();
  }

  if(metaboxPage) {
    let ajaxRating = new AjaxRatings();
    let ajaxFeedback = new AjaxFeedback();
  }

});