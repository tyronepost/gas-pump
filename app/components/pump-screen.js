import Component from 'ember-component';
import computed from 'ember-computed';
import get from 'ember-metal/get';

export default Component.extend({
  display: computed('cardSwiped', function() {
    const cardSwiped = get(this, 'cardSwiped');
    if (cardSwiped) {
      return 'enter zip code';
    }
    return 'swipe your credit card';
  })
});
