import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pump-keypad', 'Integration | Component | pump keypad', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{pump-keypad}}`);
  assert.ok(true);

});
