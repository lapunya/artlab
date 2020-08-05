'use strict';

(function () {
  var stackedCards  = document.querySelector('.stacked-cards');

  if (stackedCards) {
    var stackedCardSlide = new window.stackedCards(stackedCards, {
      selector: '.stacked-cards',
      transformOrigin: 'bottom'
    });
  }

  return stackedCardSlide;
})();
/* var stackedCardSlide = new stackedCards({selector: '.stacked-cards', transformOrigin: 'bottom'});

stackedCardSlide.init(); */
