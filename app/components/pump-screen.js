import Ember from 'ember';
const { Component, computed, get } = Ember;

export default Component.extend({
  display: computed('cardSwiped', function() {
    const cardSwiped = get(this, 'cardSwiped');
    if (cardSwiped) {
      return 'enter zip code';
    }
    return 'swipe your credit card';
  })
});
