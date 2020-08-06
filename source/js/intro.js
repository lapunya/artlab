'use strict';

(function () {

  var stackedCardSlide = new window.stackedCards({
    selector: '.stacked-cards',
    transformOrigin: 'bottom'
  });

  return stackedCardSlide.init();
})();
