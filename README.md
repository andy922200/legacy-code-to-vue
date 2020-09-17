<h3 align="center"> hw-frontend-migration-vuejs </h3>
<a href="#">
  <p align="center">Click here to the demo site</p>
</a>

## Table of Contents
- [About this project](#about-this-project)
- [Source Kits used in this project](#source-kits-used-in-this-project)
- [About Target 4](#about-target-4)
- [About Target 5](#about-target-5)
- [Deliverable 2](#deliverable-2)
- [Run the frontend server](#run-the-frontend-server)

## About this project 
<p>There is a page written in PHP without any framework.</p>
<p>Try to rework it with Vue.js.</p>
  
## Source Kits used in this project
- [vue](https://vuejs.org/) - The Progressive JavaScript Framework.
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [Bootstrap Vue](https://bootstrap-vue.org/) - Vue.js & Bootstrap 4, but jQuery is not required

### About Target 4
運用 v-model.trim 的功能，先將輸入值的頭尾多餘的空白去除
* Title in Chinese
  Step 1. 運用正則表達式，將中文字元的 Unicode 範圍輸入，並加上長度限制
  Step 2. 運用正則表達式，檢查字串中是否有英文字母
* Title in English
  Step 1. 運用正則表達式，將英文字串規定在最多 100 字
  Step 2. 運用正則表達式，踢出掉特殊字元
* Intro
  Step 1. 將去除頭尾空白後的字串，再扣除掉字元間的空白
  Step 2. 運用正則表達式，確保有 Intro 開頭，並且有10個字出現
三者都回傳正確後，才 Insert 到畫面上，不然就跳出對應的錯誤訊息

### About Target 5
* 原先的資料夾有使用到的 jQuery, Bootstrap 檔案，在 Bootstrap Vue 中已經整合完畢，jQuery 不需要使用。
* 將 css 部分抽離 views 頁面，統一放置在 styles 下管理

### Deliverable 2
...

## Run the frontend server
**1. Enter the project folder**
```
> Open a new terminal window and enter the client folder
$ cd legacy-code-to-vue/client
```
**2. Install packages via npm**
```
$ npm install
```
**3. Compiles the webpack for development**
```
$ npm run serve
```
**4. Format the coding style( If necessary )**
```
$ npm run lint
```

## Author
- [Andy Lien](https://github.com/andy922200)
