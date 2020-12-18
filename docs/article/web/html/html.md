---	
author: cherish	
categorys: ['html']	
tags: [html]	
top: true	
date: 2020/10/12	
title: html	
excerpt: html5新特性
created: 2019/12/30
---	
#### HTML5 中的一些有趣的新特性：
1、用于绘画的 canvas 元素
2、用于媒介回放的 video 和 audio 元素
3、对本地离线存储的更好的支持
4、新的特殊内容元素，比如 article、footer、header、nav、section
5、新的表单控件，比如 calendar、date、time、email、url、search

# 快速上手

## 安装
``` javascript
npm config set registry http://npm.xesv5.com
npm install @xes/matrixsdk --save
```
## 简单示例
``` javascript
import Matrix from '@xes/matrixsdk'
const MX = new Matrix({
    appId:'your app id',
    appName:'your app name'
})
(async function(){
    // 使用前三步核心步骤
    // 获取Matrix用户信息
    await MX.actGetInfo(1234)
    // 加载核心数据
    await MX.initCoreData()
    // 开启消息轮询
    MX.Message.initMsg()
    // 享用所有SDK API
})() 
```

## 通用说明
### 所有act开头的接口都是异步接口并且参数类型都为Object，返回Promise也可以通过传递参数使用回调。
示例
``` javascript
// 示例一
MX.actGetInfo({id:1234}).then((res)=>{
    // TODO Suceess
}).catch((err)=>{
    // TODO Error
})
// 示例二
MX.actGetInfo({
    id:1234,
    onSuccess:(res)=>{
        // TODO Success
    },
    onError:(err)=>{
        // TODO Error
    }
})
```

### 所有异步接口返回`<res>`的信息格式如下


|字段 | 类型 | 默认 | 说明 | 
|:-: | :-: | :-: | :-: | :-:|
|stat| Int||0=>代表错误；1=>代表成功;3=>代表警告|
|msg| String||提示的消息|
|type| String||提示的类型，有success,error,warning|

### 使用其他API必须先完成初始三部曲

``` javascript
import Matrix from '@xes/matrixsdk'
const MX = new Matrix()
(async function(){
    // 使用前三步核心步骤
    // 获取Matrix用户信息
    await MX.actGetInfo(1234)
    // 加载核心数据
    await MX.initCoreData()
    // 开启消息轮询
    MX.Message.initMsg()
    // 享用所有SDK API
})() 
```

### 所有可以用于直接渲染的方法都带有☘标识。
关于可渲染相关，参照：[connectVue() ⇒ Function](/matrix.html#connectvue-options-⇒-object-vue-plugin)