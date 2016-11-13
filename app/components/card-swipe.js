import Ember from 'ember';
const { Component, get } = Ember;
export default Component.extend({
  actions: {
    swipeCard: function () {
      get(this, 'swipeCard')();
    },
  }
});
