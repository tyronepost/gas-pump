import Ember from 'ember';
const { Controller, get, set } = Ember;

export default Controller.extend({
  pumpEnabled: false,
  cardSwiped: false,

  init: function () {
    this._super(...arguments); 
    set(this, 'zipCode', '');
  },
  actions: {
    enablePump: function () {
      set(this, 'pumpEnabled', true);
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
  }
});
