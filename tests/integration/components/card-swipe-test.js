import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('card-swipe', 'Integration | Component | card swipe', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{card-swipe}}`);
  assert.equal(this.$().text().trim(), 'Swipe Card');
});
