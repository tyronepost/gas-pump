import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pump-lift', 'Integration | Component | pump lift', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{pump-lift}}`);
  assert.equal(this.$().text().trim(), 'lift');
});
