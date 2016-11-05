import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pump-keypad', 'Integration | Component | pump keypad', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pump-keypad}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pump-keypad}}
      template block text
    {{/pump-keypad}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
