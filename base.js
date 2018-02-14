//base.js经过babel编译后的ES5文件
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jerryslib = function () {
  function jerryslib() {
    _classCallCheck(this, jerryslib);
  }

  _createClass(jerryslib, [{
    key: 'query',

    /**
     * 获取指定的 querystring 中指定 name 的 value
     * @param {String} name
     * @param {String} querystring
     * @return {String|undefined}
     *
     * query('hello', '?hello=js') 结果是 js
     *
     */
    value: function query(name, querystring) {
      var reg = RegExp('(?:\\?|&)' + name + '=(.*?)(?:&|$)');
      var arr = reg.exec(querystring);
      return arr[1];
    }

    /**
     * 序列化对象，就是把对象转成 url 字符串
     * @param {Obj} data
     * @return {String}
     *
     * serialize({hello: 'js', hi: 'test'}) 结果是 '?hello=js&hi=test'
     */

  }, {
    key: 'serialize',
    value: function serialize(data) {
      var str = '?';
      for (var key in data) {
        str += key + '=' + data[key] + '&';
      }
      str = str.substring(0, str.length - 1);
      return str;
    }

    /**
     * 根据选择器查找 DOM
     * 就是模拟 $() ，当然，这里返回元素的 DOM 对象即可
     * @param {String} selector
     * @return {DOM|Null}
     */

  }, {
    key: '$',
    value: function $(selector) {
      return document.querySelector(selector);
    }

    /**
     * 删除 DOM 节点
     * @param {DOM} node
     * @return {DOM}
     */

  }, {
    key: 'removeNode',
    value: function removeNode(node) {
      return node.parentNode.removeChild(node);
    }

    /**
     * 在 target 节点之后插入 node 节点
     * 类似 $().insertAfter()
     * @param {DOM} node
     * @param {DOM} target
     */

  }, {
    key: 'insertAfter',
    value: function insertAfter(node, target) {
      var parent = target.parentNode;
      if (parent.lastChild === target) {
        parent.appendChild(node);
      } else {
        parent.insertBefore(node, target.nextSibling);
      }
    }

    /**
     * 添加类名
     * @param {DOM} node
     * @param {String|Array} className
     */

  }, {
    key: 'addClass',
    value: function addClass(node, className) {
      return node.classList.add(className);
    }

    /**
     * 移除类名
     * @param {DOM} node
     * @param {String|Array} className
     */

  }, {
    key: 'removeClass',
    value: function removeClass(node, className) {
      return node.classList.remove(className);
    }

    /**
     * 获取绝对路径
     * @param {String} url
     * @return {String}
     *
     * getAbsoluteUrl('/jerojiang') => 'http://imweb.io/jerojiang'
     * 在当前页面获取绝对路径，这里要创建 A 元素，测试用例看你们的了
     */

  }, {
    key: 'getAbsoluteUrl',
    value: function getAbsoluteUrl(url) {
      var a = document.createElement('a');
      a.href = url;
      document.body.appendChild(a);
      return a.href;
    }

    /**
     * 防抖动
     * 防抖动函数了啦，有做个这个习题，不清楚回去复习
     */

  }, {
    key: 'debounce',
    value: function debounce(callback, time) {
      var timer = void 0;
      time = time || 300; // 给个默认值
      return function () {
        if (!timer) {
          timer = setTimeout(function () {
            callback('give you data');
            clearTimeout(timer);
            timer = null;
          }, time);
        }
      };
    }

    /**
     *  根据所以移出数组的某一项
     * @param {Number} index
     * @param {Array} arr
     * @return {Array}
     *
     * removeItemByIndex(1, [1,2,3]) => [1, 3]
     */

  }, {
    key: 'removeItemByIndex',
    value: function removeItemByIndex(index, arr) {
      arr.splice(index, 1);
      return arr;
    }
    /**
     * [sum 求和函数(用于测试)]
     * @param  Number a
     * @param  Number b
     * @return Number
     */

  }, {
    key: 'sum',
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return jerryslib;
}();

exports.default = new jerryslib();
