# Introduction

jsHelpers is a set of tools help you write your AJAX application in a simpler way. It focuses on reducing complexity of JavaScript code, but it has nothing to do with DOM or Array. If you want some basic library helps you with DOM manipulation and JavaScript extension, try [jQuery](http://jquery.com), [Prototype](http://www.prototypejs.org), [Tangram](http://tangram.baidu.com), etc. jsHelpers works with these libraries but doesn't depend on any of them. 

What does jsHelpers do then? I apologize for not providing more details here. You can find it in [documentations](http://catchen.github.com/jsHelpers/). All documentations are in both Chinese and English.

The latest release is [1.0.0](https://github.com/CatChen/jsHelpers/tree/1.0.0). In this release, all source code and unit tests are ready. It also works with [Node.js](http://nodejs.org/) and [Node Package Manager](http://npmjs.org/).

# How to use

## Browser

You can refer to any script files in the build directory. Every module has both minified and non-minified versions.

    <script type="text/javascript" src="build/jshelpers-min.js"></script>

## Node.js

You can install jsHelpers to your project via npm.

    npm install jshelpers

Then you can use it in your node.js project.

    const jshelpers = require('jshelpers');
