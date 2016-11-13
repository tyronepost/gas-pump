import Ember from 'ember';
const { Controller, set } = Ember;

export default Controller.extend({
  pumpEnabled: false,
  cardSwiped: false,

  actions: {
    enablePump: function () {
     set(this, 'pumpEnabled', true);
    },
    swipeCard: function () {
     set(this, 'cardSwiped', true);
    },
  }
});
