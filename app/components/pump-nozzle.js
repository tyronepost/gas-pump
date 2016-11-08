import Ember from 'ember';
const { Component, computed, get } = Ember;

export default Component.extend({
  pumpClass: computed('pumpEnabled', function() {
    const pumpEnabled = get(this, 'pumpEnabled');
    if (pumpEnabled) {
      return 'success';
    }
    return 'danger';
  })
});
