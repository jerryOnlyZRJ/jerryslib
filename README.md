

# Jerryslib

## Write less, Do more

***

Jerryslib is designed to be a simple simple way to use some of the JavaScript native API easily!



## Installation

***

You can install with npm:

```
$ npm install jerryslib
```



## Usage

***

```
const jerryslib = require('jerryslib')
```



## Function

***

### .query(name, querystring)

Method for getting the value of the name you pass in from the querystring

```js
jerryslib.query('hello', '?hello=js') //js
```



 ### .serialize(data)

Method for serialize JSON or parameter object to a URL string

```js
jerryslib.serialize({hello: 'js', hi: 'test'}) //'?hello=js&hi=test'
```



###.$(selector)

Like JQuery, It's a DOM selector. You can use tag selector, class selector and ID selector

```js
jerryslib.$(selector) //return a DOM or null
```



### .removeNode(node)

Method for delete a node you passed

```js
jerryslib.removeNode(node) //return DOM(node)
```



### .insertAfter(node)

Method for insert a node after the target you pass in

```js
jerryslib.insertAfter(node) //without return
```



###.addClass(node, className)

Method for add a class in the node you pass in

```js
jerryslib.addClass(node, className) //without return
```



### .getAbsoluteUrl(url)

Method for get the absolute URL from the relative URL

```js
jerryslib.getAbsoluteUrl('/jerry') //'http://imweb.io/jerry'
```



### .debounce(callback, time)

Useful for implementing behavior that should only happen after a repeated action has completed.

```js
let delay = jerryslib.debounce(output, 300) //return a function
function output(data){
    console.log(data)
}
delay()
delay() //it will delay 300ms
```



### .removeItemByIndex(index, arr)

Method for remove a item by its index from a array

```js
jerryslib.removeItemByIndex(1, [1,2,3]) //[1, 3]
```



### .sum(a, b)

Method for sum

```js
jerryslib.sum(1, 2) //3
```