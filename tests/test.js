import jerryslib from '../base'
describe('test sum', () => {
  test('test sum', () => {
    expect(jerryslib.sum(1, 2)).toBe(3)
  })
})
describe('test query', () => {
  test('query("jerry", "?hello=hi&jerry=perfect") toBe perfect', () => {
    expect(jerryslib.query('jerry', '?hello=hi&jerry=perfect')).toBe('perfect')
  })
})
describe('test serialize', () => {
  test('serialize({hello: "js", hi: "test"}) to be ?hello=js&hi=test', () => {
    expect(jerryslib.serialize({ hello: 'js', hi: 'test' })).toBe('?hello=js&hi=test')
    expect(jerryslib.serialize({})).toBe('')
  })
})
describe('test DOM', () => {
  test('test $', () => {
    document.body.innerHTML = '<div id="test"></div><div class="test"></div><header></header>'
    const idItem = jerryslib.$('#test')
    const classItem = jerryslib.$('.test')
    const tagItem = jerryslib.$('header')
    expect(idItem.id).toBe('test')
    expect(classItem.classList.contains('test')).toBe(true)
    expect(tagItem.tagName.toLocaleLowerCase()).toBe('header')
  })
  test('test removeNode', () => {
    // 测试用例里可以直接操作DOM
    document.body.innerHTML = '<div><div id="test"></div></div>'
    let div = document.getElementById('test')
    jerryslib.removeNode(div)
    expect(document.getElementById('test')).toBeNull()
  })
  test('test insertAfter', () => {
    document.body.innerHTML = '<ul><li class="first">1</li><li class="second">2</li></ul>'
    var li = document.createElement('li')
    li.innerHTML = 'Insert'
    jerryslib.insertAfter(li, document.querySelector('.first'))
    expect(document.querySelectorAll('li')[1].innerHTML).toBe('Insert')
    jerryslib.insertAfter(li, document.querySelector('.second'))
    expect(document.querySelectorAll('li')[2].innerHTML).toBe('Insert')
  })
  test('test className', () => {
    let div = document.createElement('div')
    jerryslib.addClass(div, 'test')
    expect(div.classList.contains('test')).toBe(true)
    jerryslib.removeClass(div, 'test')
    expect(div.classList.contains('test')).toBe(false)
  })
  test('test getAbsoluteUrl', () => {
    const url = jerryslib.getAbsoluteUrl('/jerry')
    let a = document.createElement('a')
    a.href = '/jerry'
    document.body.appendChild(a)
    expect(url).toBe(a.href)
  })
})
describe('test debounce', () => {
  test('test debounce', done => {
    let str = ''
    let test = jerryslib.debounce(data => {
      str += data
      done()
      expect(str).toBe('give you data')
    })
    test()
    test()
  })
})
describe('test removeItemByIndex', () => {
  test('removeItemByIndex(0, [1, 2, 3]) to equal [2, 3]', () => {
    expect(jerryslib.removeItemByIndex(0, [1, 2, 3])).toEqual([2, 3])
  })
  test('removeItemByIndex(1, [1, 2, 3]) to equal [1, 3]', () => {
    expect(jerryslib.removeItemByIndex(1, [1, 2, 3])).toEqual([1, 3])
  })
})
