'use strict';

(function ($) {


	// Internet Explorer 10 in Windows Phone 8 viewport bug

	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style');
		msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
		document.head.appendChild(msViewportStyle);
	}

	$(document).ready(function () {


	}); // end ready
})(jQuery);
