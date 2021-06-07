<!--
 * @Author: your name
 * @Date: 2021-06-07 16:28:01
 * @LastEditTime: 2021-06-07 23:38:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\README.md
-->
# VUE_learing_notes

## 前端框架的由来

> vue官网：https://cn.vuejs.org/

**服务端渲染**

```mermaid
sequenceDiagram
浏览器->>+服务器: http://duyi.com/news
Note right of 服务器: 组装页面(服务端渲染)
服务器->>-浏览器: 完整页面
```

------

**前后端分离**

```mermaid
sequenceDiagram
浏览器->>服务器: http://duyi.com/news
服务器->>浏览器: 无内容的html
activate 浏览器
浏览器-->>服务器: ajax
服务器-->>浏览器: 各种业务数据
Note left of 浏览器: 运行js，创建元素，渲染页面
deactivate 浏览器
```

---------

**单页应用**

```mermaid
sequenceDiagram
浏览器->>服务器: http://duyi.com/news
服务器->>浏览器: 无内容的html
activate 浏览器
Note left of 浏览器: 运行js，创建元素，渲染页面
浏览器-->>服务器: ajax
服务器-->>浏览器: 各种业务数据
Note left of 浏览器: 跳转页面
浏览器-->>服务器: ajax
服务器-->>浏览器: 各种业务数据
Note left of 浏览器: JS重新构建页面元素
deactivate 浏览器
```

---------

**vue框架**

```mermaid
sequenceDiagram
浏览器->>服务器: http://duyi.com/news
服务器->>浏览器: 无内容的html
activate 浏览器
Note left of 浏览器: 运行包含vue的js，使用框架渲染页面
浏览器-->>服务器: ajax
服务器-->>浏览器: 各种业务数据
Note left of 浏览器: 使用vue-router跳转页面
deactivate 浏览器
```

## vue核心概念

### 注入

![image-20201110163548294](http://mdrs.yuanjin.tech/img/20201110163548.png)

vue会将以下配置注入到vue实例：

- data：和界面相关的数据
- computed：通过已有数据计算得来的数据，将来详细讲解
- methods：方法

> 模板中可以使用vue实例中的成员

### 虚拟DOM树

直接操作真实的DOM会引发严重的效率问题，vue使用虚拟DOM（vnode）的方式来描述要渲染的内容

vnode是一个**普通的**JS对象，用于描述界面上应该有什么，比如：

```js
var vnode = {
  tag: "h1",
  children: [
    { tag: undefined, text: "第一个vue应用：Hello World"}
  ]
}
```

上面的对象描述了：

```
有一个标签名为h1的节点，它有一个子节点，该子节点是一个文本，内容为「第一个vue应用：Hello World」
```

**vue模板并不是真实的DOM，它会被编译为虚拟DOM**

```html
<div id="app">
  <h1>第一个vue应用：{{title}}</h1>
  <p>作者：{{author}}</p>
</div>
```

上面的模板会被编译为类似下面结构的虚拟DOM

```js
{
  tag: "div",
  children: [
    { tag: "h1", children: [ { text: "第一个vue应用：Hello World" } ] },
    { tag: "p", children: [ { text: "作者：袁" } ] }
  ]
}
```

虚拟DOM树会最终生成为真实的DOM树

![image-20201106144536733](http://mdrs.yuanjin.tech/img/20201106144536.png)

当数据变化后，将引发重新渲染，vue会比较新旧两棵vnode tree，找出差异，然后仅把差异部分应用到真实dom tree中

![image-20201106145409844](http://mdrs.yuanjin.tech/img/20201106145409.png)

**可见，在vue中，要得到最终的界面，必须要生成一个vnode tree**

vue通过以下逻辑生成vnode tree：

<img src="http://mdrs.yuanjin.tech/img/20201106152046.png" style="zoom:40%;" />



**注意：虚拟节点树必须是单根的**

### 挂载

将生成的真实DOM树，放置到某个元素位置，称之为**挂载**

挂载的方式：

1. 通过`el:"css选择器"`进行配置
2. 通过`vue实例.$mount("css选择器")`进行配置

### 完整流程

<img src="http://mdrs.yuanjin.tech/img/20200908051939.png" alt="image-20200908051939745" style="zoom:50%;" />

