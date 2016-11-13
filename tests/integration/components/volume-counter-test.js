import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('volume-counter', 'Integration | Component | volume counter', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{volume-counter}}`);
  assert.equal(this.$().text().trim(), '0.00');
});
