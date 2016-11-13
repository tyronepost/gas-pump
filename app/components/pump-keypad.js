import Ember from 'ember';
const { Component, get } = Ember
export default Component.extend({
  actions: {
    enterZip: function (char) {
      get(this, 'enterZip')(char);
    },
    cancel: function () {
      get(this, 'cancel')();
    },
    enter: function() {
      get(this, 'enter')();
    }
  }
});
