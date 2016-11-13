import Ember from 'ember';
const { Controller, computed, get, set } = Ember;

export default Controller.extend({
  cardSwiped: false,

  pumpEnabled: computed('zipEntered', 'pumpLifted', function () {
    if(get(this, 'zipEntered') && get(this, 'pumpLifted')) {
      return true;
    }
    return false;
  }),

  init: function () {
    this._super(...arguments); 
    set(this, 'zipCode', '');
  },

  actions: {
    enablePump: function () {
      set(this, 'pumpLifted', true);
    },
    swipeCard: function () {
      set(this, 'cardSwiped', true);
    },
    enterZip: function (char) {
      let zipCode = get(this, 'zipCode');
      if (zipCode.length < 5) {
        set(this, 'zipCode', zipCode + char);
      }
    },
    enter: function () {
      const zipCode = get(this, 'zipCode');
      if (zipCode.length == 5) {
        set(this, 'zipEntered', true);
      }
    },
    cancel: function () {
      set(this, 'zipCode', ''); 
    },
  }
});
