Tel-Splitter
=============

[![Build Status](https://travis-ci.org/black-trooper/tel-splitter.svg?branch=develop)](https://travis-ci.org/black-trooper/tel-splitter)
[![Coverage Status](https://coveralls.io/repos/github/black-trooper/tel-splitter/badge.svg?branch=develop)](https://coveralls.io/github/black-trooper/tel-splitter?branch=develop)

## Overview
ハイフンで区切られていない電話番号をフォーマットするツールです。

フォーマットした結果を配列で返すこともできます。

総務省の「市外局番の一覧」を元に作成しています。
http://www.soumu.go.jp/main_sosiki/joho_tsusin/top/tel_number/shigai_list.html

## Install

```sh
npm install --save tel-splitter
```
```javascript
// using ES modules
import * as telSplitter from 'tel-splitter'
// or 
import { format, split } from 'tel-splitter'

// using CommonJS modules
const telSplitter = require('tel-splitter')
// or
const {format, split} = require('tel-splitter')
```

```html
<!-- CDN経由でブラウザ上のscriptタグから呼び出す場合 -->
<script type="text/javascript" src="https://unpkg.com/tel-splitter/telsplitter.umd.production.min.js"></script>
<script>
  console.log(TelSplitter.format('09012345678'))
  console.log(TelSplitter.split('09012345678'))
</script>
```

## Usage

```javascript
import * as telSplitter from 'tel-splitter'

// 電話番号を区切って配列に格納
telSplitter.split('03XXXXYYYY')
// -> ["03", "XXXX", "YYYY"]

// 電話番号をハイフン区切りでフォーマット
telSplitter.format('03XXXXYYYY')
// -> 03-XXXX-YYYY

// 変なところにハイフンが入っていても問題なし
telSplitter.format('03X-XXX-YYYY')
// -> 03-XXXX-YYYY

// 第2引数の strict で携帯電話等の番号の区切り方が変わります。
telSplitter.format('090XXXXYYYY')
// -> 090-XXXX-YYYY
telSplitter.format('090XXXXYYYY', true)
// -> 090-XXX-XYYYY
```

## Thanks
[[PHP] ハイフンなしの電話番号からハイフン付き電話番号を復元する](http://qiita.com/mpyw/items/431c0c8cb70084a74be5)