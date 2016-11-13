import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pump-screen', 'Integration | Component | pump screen', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{pump-screen}}`);
  assert.equal(this.$().text().trim(), 'screen text goes here');
  });
