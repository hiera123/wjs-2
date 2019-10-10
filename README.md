# wjs-2----基于bootstrap+less的响应式网站开发
示例图片
![wjs-1](https://user-images.githubusercontent.com/54127709/66548546-07bbe980-eb74-11e9-9621-45bbbd951e66.gif)

## 项目中遇到的一些小问题整理

### 1.图片永远显示在中间的处理方式(项目中的轮播图):

·图片作为背景图片
    Background-image:添加图片
    background-position:center  center
    Background-size:cover



### 2.Js做轮播图
  判断屏幕的宽度,动态创建图片


### 3.导航条和轮播图之间的空白问题
设置轮播图的margin-top:-20px;

### 4.新闻页面的空白问题解决:
offset() 方法返回或设置匹配元素相对于文档的偏移（位置）。

### 5.使用的less语法
\（1）less的定义
less是一个CSS预处理器，可以为网站启用可自定义，可管理和可重用的样式表。 做为 CSS 的一种形式的扩展，它并没有减少 CSS 的功能，而是在现有的 CSS 语法上，为CSS加入程序式语言的特性，以便可以通过Web浏览器读取。 
它提供诸如变量，函数， mixins 和操作等功能，可以构建动态CSS。

\（2）特征
- 更清晰和更可读的代码可以以有组织的方式编写。
- 我们可以定义样式，它可以在整个代码中重复使用。
- less是基于JavaScript的，是超集的CSS。
- less是一个敏捷工具，可以排除代码冗余的问题。
·优点：
- less轻松地生成可在浏览器中工作的CSS。
- less使您能够使用嵌套编写更干净，组织良好的代码。
- less通过使用变量可以更快地实现维护。
- less使您能够通过在规则集中引用它们来轻松地重用整个类。
- less提供使用操作，使得编码更快并节省时间。
·缺点：
- 由于模块之间的紧密耦合，应当采取更多的努力来重用和/或测试依赖模块。
- 与旧的预处理器(如Sass)相比，LESS具有较少的框架，Sass由框架 Compass ， Gravity和 Susy 组成。


#### 6.新闻:

“全部新闻”下方的下划线-----直线加圆点:


#### 7::before&::after用法介绍

css3为了区分伪类和伪元素，伪元素采用双冒号写法。(:before和:after是在CSS2中提出来的，CSS3中的写法是::before和::after)
常见伪类——:hover,:link,:active,:target,:not(),:focus。
常见伪元素——::first-letter,::first-line,::before,::after,::selection。
::before和::after下特有的content，用于在css渲染中向元素逻辑上的头部或尾部添加内容。
这些添加不会出现在DOM中，不会改变文档内容，不可复制，仅仅是在css渲染层加入。
所以不要用:before或:after展示有实际意义的内容，尽量使用它们显示修饰性内容，例如图标。


### 8.解决总是有边框的出现
Border:none;

### 9.使用伪元素添加虚线:伪元素的父元素必须要有具体的宽高值

### 10
行级元素设置宽高:text-align
块级元素设置宽高:margin:0 auto,
如果margin:0 auto失效,可以转换dispaly:inline-block;要加在ul里面
