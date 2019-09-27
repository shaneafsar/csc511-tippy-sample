import { module, test } from 'qunit';
import trimString from 'tippy/utils/string-utils';

module('Unit | string-utils', function() {
  test('trims strings correclty', function(assert) {
    assert.equal(
      trimString('    Hello'),
      'Hello',
      'correctly trimmed from beginning of string'
    );
  });
});
