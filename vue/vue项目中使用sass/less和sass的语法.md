#### less和sass



##### 1. 注释
```
less和sass一样: 单行注释不会被编译 多行会
```



##### 2. 定义变量

```css
less: @number
sass: $number
```



##### 3. 插值写法

```less
less

@first: first;
.@{first}-box{height: 200px;}

@mx: margin;
.box{@{mx}-left: auto; @{mx}-right: auto;}
```
```scss
sass

$first: first;
.#{$first}-box{height: 200px;}

$mx: margin;
.box{#{$mx}-left: auto; #{$mx}-right: auto;}
```



##### 4. 作用域

```
less
局部变量先使用后定义也可以
```
```
sass
局部变量需要先定义后使用 否则往上级作用域查找
```



##### 5. 选择器嵌套及伪类选择器

```less
less和sass一样

ul{
  list-style: none;
  >li{
    height: 40px;
  }
  &:hover{background: #4f4;}
}
```
```less
以上效果

ul {
  list-style: none;
}
ul > li {
  height: 40px;
}
ul:hover {
  background: #4f4;
}
```



##### 6. 属性嵌套

```less
less

N/A
```
```scss
sass

.box{
  font: {
    weight: bold;
    size:16px;
    family:"arial";
  }
}
```



##### 7. 运算

```
less和sass相同之处
如果都是px +1或者+1px均可
支持颜色运算
```
```less
less和sass不同之处
less: .box {height: 1rem + 1px} 输出.box {height: 2rem}
sass: .box {height: 1rem + 1px} 报错
```



##### 8. 函数及自定义函数

```less
less 不支持自定义函数
内置sqrt(100)函数只有less有 .box{height:sqrt(10000px)}
```
```scss
@function sum($a, $b){@return $a + $b;}
.box{height:sum(100px, 88px); width:100px * random()}
random()只有sass有
```



##### 9. 混入(无参数及有参数)

```less
less 

.fl{float: left;}
.bg(@color){background: @color;}
.box{.fl;.bg(#44f);}
```
```scss
@mixin fl(){float: left;}
@mixin bg($color){background: $color;}
.box{@include fl;@include bg(#44f);}
```



##### 10. 命名空间

```less
less

#namespace(){.show{display: block;}}
.box{#namespace.show}

输出.box{display: block;}
```
```scss
sass

N/A
```



##### 11. 继承

```less
less

.init-font-size{font-size: 16px;}
h1,h2,h3{&:extend(.init-font-size);}
```
```scss
sass

%init-font-size{font-size: 16px;}
h1,h2,h3{@extend %init-font-size;}
```



##### 12. 合并

```less
less

// 逗号合并使用+ 空格合并使用+_
.box{
  background+: url(cat.png);
  background+: url(dog.png);
  transform+_: translateX(100px);
  transform+_: rotate(45deg);
}

输出

.box {
  background: url(cat.png), url(dog.png);
  transform: translateX(100px) rotate(45deg);
}
```
```scss
sass
$bg: (a:url(cat.png), b:url(dpg.png));
$transform: (a: translateX(100px), b: rotate(45deg));
.box{
  background: map-values($bg);
  transform: zip(map-values($transform)...);
}

输出

.box {
  background: url(cat.png), url(dog.png);
  transform: translateX(100px) rotate(45deg);
}
```



##### 13. 媒体查询

```less
less和sass一样
.box{
  width: 100%;
  @media all and (min-width:768px){width: 720px;}
  @media all and (min-width:992px){width: 960px;}
  @media all and (min-width:1200px){width: 1140px;}
}

输出

.box {
  width: 100%;
}
@media all and (min-width: 768px) {
  .box {
    width: 720px;
  }
}
@media all and (min-width: 992px) {
  .box {
    width: 960px;
  }
}
@media all and (min-width: 1200px) {
  .box {
    width: 1140px;
  }
}
```



##### 14. 条件

```less
less

@count: 99;
.height(@x) when (@x >= 100){height: @x * 10px;}
.height(@x) when (@x < 100){height: @x * 100px;}
.box{.height(@count);}

输出

.box{height: 9900px;}
```
```scss
sass

$height:99;
.box{
  @if($height>=100){
    height:$height*10px;
  }@else if($height<100){
    height:$height*100px;
  }
}

输出

.box{height: 9900px;}
```



##### 15. 循环

```less
less

.setHeight(@i) when (@i<4){
  .box-@{i}{
    height:100px+@i;
  }
  .setHeight(@i+1);
}
.setHeight(1); // 调用

输出

.box-1 {
  height: 101px;
}
.box-2 {
  height: 102px;
}
.box-3 {
  height: 103px;
}
```
```scss
sass

@for $i from 0 to 4{
  .box-#{$i}{
    height:100px + $i;
  }
}
// 如果是through包括4

输出

.box-1 {
  height: 101px;
}

.box-2 {
  height: 102px;
}

.box-3 {
  height: 103px;
}
```



##### 16. 导入

```less
less和sass一样

@import 'reset.less';
@import 'reset.scss';
```