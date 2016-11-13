import Ember from 'ember';
const { Component, get } = Ember
export default Component.extend({
  actions: {
    enterZip: function (char) {
      get(this, 'enterZip')(char);
    },
  }
});
