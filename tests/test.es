//test.js经过babel编译后的ES5文件
'use strict';

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('test sum', function () {
  test('test sum', function () {
    expect(_base2.default.sum(1, 2)).toBe(3);
  });
});
describe('test query', function () {
  test('query("jerry", "?hello=hi&jerry=perfect") toBe perfect', function () {
    expect(_base2.default.query('jerry', '?hello=hi&jerry=perfect')).toBe('perfect');
  });
});
describe('test serialize', function () {
  test('serialize({hello: "js", hi: "test"}) to be ?hello=js&hi=test', function () {
    expect(_base2.default.serialize({ hello: 'js', hi: 'test' })).toBe('?hello=js&hi=test');
    expect(_base2.default.serialize({})).toBe('');
  });
});
describe('test DOM', function () {
  test('test $', function () {
    document.body.innerHTML = '<div id="test"></div><div class="test"></div><header></header>';
    var idItem = _base2.default.$('#test');
    var classItem = _base2.default.$('.test');
    var tagItem = _base2.default.$('header');
    expect(idItem.id).toBe('test');
    expect(classItem.classList.contains('test')).toBe(true);
    expect(tagItem.tagName.toLocaleLowerCase()).toBe('header');
  });
  test('test removeNode', function () {
    // 测试用例里可以直接操作DOM
    document.body.innerHTML = '<div><div id="test"></div></div>';
    var div = document.getElementById('test');
    _base2.default.removeNode(div);
    expect(document.getElementById('test')).toBeNull();
  });
  test('test insertAfter', function () {
    document.body.innerHTML = '<ul><li class="first">1</li><li class="second">2</li></ul>';
    var li = document.createElement('li');
    li.innerHTML = 'Insert';
    _base2.default.insertAfter(li, document.querySelector('.first'));
    expect(document.querySelectorAll('li')[1].innerHTML).toBe('Insert');
    _base2.default.insertAfter(li, document.querySelector('.second'));
    expect(document.querySelectorAll('li')[2].innerHTML).toBe('Insert');
  });
  test('test className', function () {
    var div = document.createElement('div');
    _base2.default.addClass(div, 'test');
    expect(div.classList.contains('test')).toBe(true);
    _base2.default.removeClass(div, 'test');
    expect(div.classList.contains('test')).toBe(false);
  });
  test('test getAbsoluteUrl', function () {
    var url = _base2.default.getAbsoluteUrl('/jerry');
    var a = document.createElement('a');
    a.href = '/jerry';
    document.body.appendChild(a);
    expect(url).toBe(a.href);
  });
});
describe('test debounce', function () {
  test('test debounce', function (done) {
    var str = '';
    var test = _base2.default.debounce(function (data) {
      str += data;
      done();
      expect(str).toBe('give you data');
    });
    test();
    test();
  });
});
describe('test removeItemByIndex', function () {
  test('removeItemByIndex(0, [1, 2, 3]) to equal [2, 3]', function () {
    expect(_base2.default.removeItemByIndex(0, [1, 2, 3])).toEqual([2, 3]);
  });
  test('removeItemByIndex(1, [1, 2, 3]) to equal [1, 3]', function () {
    expect(_base2.default.removeItemByIndex(1, [1, 2, 3])).toEqual([1, 3]);
  });
});
