class jerryslib {
  /**
   * 获取指定的 querystring 中指定 name 的 value
   * @param {String} name
   * @param {String} querystring
   * @return {String|undefined}
   *
   * query('hello', '?hello=js') 结果是 js
   *
   */
  query (name, querystring) {
    let reg = RegExp('(?:\\?|&)' + name + '=(.*?)(?:&|$)')
    let arr = reg.exec(querystring)
    return arr[1]
  }

  /**
   * 序列化对象，就是把对象转成 url 字符串
   * @param {Obj} data
   * @return {String}
   *
   * serialize({hello: 'js', hi: 'test'}) 结果是 '?hello=js&hi=test'
   */
  serialize (data) {
    let str = '?'
    for (let key in data) {
      str += `${key}=${data[key]}&`
    }
    str = str.substring(0, str.length - 1)
    return str
  }

  /**
   * 根据选择器查找 DOM
   * 就是模拟 $() ，当然，这里返回元素的 DOM 对象即可
   * @param {String} selector
   * @return {DOM|Null}
   */
  $ (selector) {
    return document.querySelector(selector)
  }

  /**
   * 删除 DOM 节点
   * @param {DOM} node
   * @return {DOM}
   */

  removeNode (node) {
    return node.parentNode.removeChild(node)
  }

  /**
   * 在 target 节点之后插入 node 节点
   * 类似 $().insertAfter()
   * @param {DOM} node
   * @param {DOM} target
   */
  insertAfter (node, target) {
    let parent = target.parentNode
    if (parent.lastChild === target) {
      parent.appendChild(node)
    } else {
      parent.insertBefore(node, target.nextSibling)
    }
  }

  /**
   * 添加类名
   * @param {DOM} node
   * @param {String|Array} className
   */
  addClass (node, className) {
    return node.classList.add(className)
  }

  /**
   * 移除类名
   * @param {DOM} node
   * @param {String|Array} className
   */
  removeClass (node, className) {
    return node.classList.remove(className)
  }

  /**
   * 获取绝对路径
   * @param {String} url
   * @return {String}
   *
   * getAbsoluteUrl('/jerojiang') => 'http://imweb.io/jerojiang'
   * 在当前页面获取绝对路径，这里要创建 A 元素，测试用例看你们的了
   */
  getAbsoluteUrl (url) {
    let a = document.createElement('a')
    a.href = url
    document.body.appendChild(a)
    return a.href
  }

  /**
   * 防抖动
   * 防抖动函数了啦，有做个这个习题，不清楚回去复习
   */
  debounce (callback, time) {
    let timer
    time = time || 300 // 给个默认值
    return function () {
      if (!timer) {
        timer = setTimeout(() => {
          callback('give you data')
          clearTimeout(timer)
          timer = null
        }, time)
      }
    }
  }

  /**
   *  根据所以移出数组的某一项
   * @param {Number} index
   * @param {Array} arr
   * @return {Array}
   *
   * removeItemByIndex(1, [1,2,3]) => [1, 3]
   */
  removeItemByIndex (index, arr) {
    arr.splice(index, 1)
    return arr
  }
  /**
   * [sum 求和函数(用于测试)]
   * @param  Number a
   * @param  Number b
   * @return Number
   */
  sum (a, b) {
    return a + b
  }
}
export default new jerryslib
