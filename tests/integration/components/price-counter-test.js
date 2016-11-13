import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('price-counter', 'Integration | Component | price counter', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{price-counter}}`);
  assert.equal(this.$().text().trim(), '0.00');
});
