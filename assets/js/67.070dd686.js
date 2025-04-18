(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{424:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"博客启动丢失样式文件和字体的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#博客启动丢失样式文件和字体的问题"}},[s._v("#")]),s._v(" 博客启动丢失样式文件和字体的问题")]),s._v(" "),a("h2",{attrs:{id:"丢失样式文件的场景1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#丢失样式文件的场景1"}},[s._v("#")]),s._v(" 丢失样式文件的场景1")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("重现")]),s._v(" "),a("p",[s._v("部署在github pages时，使用xabcs.github.io/wild访问时丢失样式文件(因为仓库名称不是xabcs.github.io,所以要使用一个带uri后缀的地址访问仓库，而不是xabcs.github.io)，在控制台报错：样式文件全部404")])]),s._v(" "),a("p",[s._v("原因：config.ts 没有配置base")]),s._v(" "),a("p",[s._v("解决：")]),s._v(" "),a("div",{staticClass:"language-language line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("config.ts中配置base\nbase: '/wild'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"丢失样式文件场景2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#丢失样式文件场景2"}},[s._v("#")]),s._v(" 丢失样式文件场景2")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("重现")]),s._v(" "),a("p",[s._v("部署在github pages时，使用"),a("strong",[s._v("xabcs.xabc.fun")]),s._v("访问时丢失样式文件在控制台报错：样式文件全部404")])]),s._v(" "),a("p",[s._v("原因：\n配置了域名之后，可以直接通过"),a("strong",[s._v("xabcs.xabc.fun")]),s._v("的根目录访问，base中的 "),a("code",[s._v("/wild/")]),s._v(" 配置没有去掉")]),s._v(" "),a("p",[s._v("解决：\n注释掉config.ts的"),a("code",[s._v("base")]),s._v("配置")]),s._v(" "),a("h2",{attrs:{id:"字体丢失场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体丢失场景"}},[s._v("#")]),s._v(" 字体丢失场景")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("重现")]),s._v(" "),a("blockquote",[a("p",[s._v("部署在github pages时，使用xabcs.xabc.fun访问时，页面显示的字体不是期望的字体，项目build是提示language 不存在")])])]),s._v(" "),a("p",[s._v("原因：\n在样式文件中引用字体的目录不对，去掉base中的"),a("code",[s._v("/wild/")]),s._v("后，字体文件的/wild/没有去掉")]),s._v(" "),a("p",[s._v("解决：\n更改index.styl文件中字体的引用路径")]),s._v(" "),a("div",{staticClass:"language-language line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@font-face\n    font-family 'JetBrains Mono'\n    src url('/fonts/LXGWWenkai/JetBrainsMono-Regular.woff2') format('woff2'),\n    url('/fonts/LXGWWenkai/JetBrainsMono-Regular.woff') format('woff'),\n    url('/fonts/LXGWWenkai/JetBrainsMono-Regular.ttf') format('truetype')\n    font-weight 400\n    font-display swap\n    font-style normal\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("fonts前面不需要"),a("code",[s._v("/wild/")]),s._v("了")])])}),[],!1,null,null,null);a.default=e.exports}}]);