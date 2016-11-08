import Ember from 'ember';
const { Controller, set } = Ember;

export default Controller.extend({
  pumpEnabled: false,

  actions: {
    enablePump: function () {
     set(this, 'pumpEnabled', true);
    },
  }
});
