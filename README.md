# Zero

> HTML5 CSS reset in Stylus.

Zero 只做一件事——CSS Reset。

光有 Normalize.css 是不够的，我们还需要 CSS Reset。因为，放眼望去，我们做的绝大多数页面都已经不再是 “文档”，而是 “界面”。以呈现文档为导向的浏览器默认样式和 Normalize.css 对我们来说就显得不那合适了，还是需要把样式清干净，从零开始。

当然，我们还是需要 Normalize.css 的，它将负责消灭各大浏览器默认样式的缺陷和差异。

## 安装

通过 npm 3 安装：

```sh
$ npm install cmui-zero
```

## 使用

有两种方式可以使用 Zero：

* 直接使用 Zero 的 dist 文件（需要先加载 Normalize.css）：

	```html
	<!DOCTYPE html>
	<html>
	<head>
		...
		<link rel="stylesheet" href="node_modules/normalize.css/normalize.css">
		<link rel="stylesheet" href="node_modules/cmui-zero/dist/zero.css">
	</head>
	<body>
		...
	</body>
	</html>
	```

* 使用 Zero 的 Stylus 源码。在你的样式入口文件中导入 Normalize.css 和 Zero：
	
	```stylus
	@import './node_modules/normalize.css/normalize.css'
	@import './node_modules/cmui-zero/src/zero.styl'
	```
	
	（注意：在这种方式下，Stylus 的编译选项需要打开 `include-css` 这个开关，以确保 Normalize.css 的代码被正确引入。）

## 谁在用？

移动 UI 框架 [CMUI](https://github.com/CMUI/CMUI) 采用 
Zero 作为全局的样式基础，因此所有 CMUI 用户都在使用它：

* [百姓网 - 手机版](http://m.baixing.com/)
* [薇姿官方电子商城 - 手机版](http://m.vichy.com.cn/)
* [优e网 - 手机版](http://m.uemall.com/)

***

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
