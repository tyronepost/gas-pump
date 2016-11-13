import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pump-options', 'Integration | Component | pump options', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{pump-options}}`);
  assert.ok(true);
});
