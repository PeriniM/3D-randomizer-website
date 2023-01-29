var _AnalyticsCode = 'UA-255420562-1';

/**
 * Below is a modified version of the Google Analytics asynchronous tracking
 * code snippet.  It has been modified to pull the HTTPS version of ga.js
 * instead of the default HTTP version.  It is recommended that you use this
 * snippet instead of the standard tracking snippet provided when setting up
 * a Google Analytics account.
 */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  // take ga.js from local folder lib
  ga.src = 'https://www.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

/**
 * Track a click on a button using the asynchronous tracking API.
 *
 * See http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html
 * for information on how to use the asynchronous tracking API.
 */
function trackButtonClick(e) {
  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
}

document.addEventListener('DOMContentLoaded', function() {
    var privacy_policy_btn = document.getElementById('privacy_policy');
    var download_image = document.getElementById('download_image');

    // add event listener to each button
    privacy_policy_btn.addEventListener('click', function() {
      privacy_policy_btn.addEventListener('click', trackButtonClick);
    });

    download_image.addEventListener('click', function() {
      download_image.addEventListener('click', trackButtonClick);
    });
});
