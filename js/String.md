#### 字符串反序的3种方法

1. split  reverse  join

```js
str.split('').reverse().join('')
```

2. 新增数组一个一个放入

```js
function reverseString(str) {
  const arr = [];
  for (let item of str) {
    arr.unshift(item)
  }
  return arr.join('')
}
console.log(reverseString('fedcba')); // abcdef
```

3. 转成数组两边交换

```js
function reverseString(str) {
  const arr = str.split('');
  const length = arr.length;
  const until = parseInt(length / 2)

  for (let i = 0; i < until; i++) {
    [arr[i], arr[length - 1 - i]] = [arr[length - 1 - i], arr[i]];
  }
  return arr.join('')
}
console.log(reverseString('fedcba')); // abcdef
```



#### 方法

- indexOf
- lastIndexOf
- search （和indexOf不一样的地方是search的参数可以是正则）
- concat
- slice
- substring （跟slice一个意思）
- substr（mdn不推荐使用了）
- split
- replace(searchvalue, newvalue)（参数可以是正则）
- replaceAll（符合的全部替换）
- toUpperCase
- toLowerCase
- chatAt
- charCodeAt



#### **ES6新增**

- includes（IE不支持）
- startsWith（IE不支持）
- endsWith（IE不支持）



#### **实现includes**

```js
if (!String.prototype.includes) {
  String.prototype.includes = function (item) {
    const instance = this;
    return instance.indexOf(item) > -1
  }
}
```





