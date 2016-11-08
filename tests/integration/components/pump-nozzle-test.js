import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pump-nozzle', 'Integration | Component | pump nozzle', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{pump-nozzle
                      pumpEnabled=false}}`);
  let classNames = this.$().attr('class').split(' ');
  assert.ok(true);
});
