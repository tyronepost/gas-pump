import Ember from 'ember';
const { Component, get } = Ember;

export default Component.extend({
  actions: {
    lift: function () {
      get(this, 'liftPump')();
    },
  }
});

