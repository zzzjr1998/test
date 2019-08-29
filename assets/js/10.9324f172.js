(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{336:function(s,t,a){"use strict";a.r(t);var n=a(24),r=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"java-lang-stackoverflowerror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-lang-stackoverflowerror","aria-hidden":"true"}},[s._v("#")]),s._v(" java.lang.StackOverflowError")]),s._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("堆栈溢出错误\n在程序栈空间耗尽时抛出，通常是深度递归导致\n本来是出现了这这个类型的错误，然后在网上寻找答案，忘了记录，下面的例子是转发的。")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("备注")]),s._v(" "),a("p",[s._v("从"),a("a",{attrs:{href:"https://blog.csdn.net/Mr_faded/article/details/78275091",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1),s._v("转载")])]),s._v(" "),a("h2",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("p",[a("img",{attrs:{src:"/bugs/bug1.png",alt:"bug1"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"/bugs/bug2.png",alt:"bug2"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"/bugs/bug3.png",alt:"bug3"}})]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("这种问题是由于自己调用自己的方法，然后一直递归。\n我出现的问题就是，在"),a("code",[s._v("Service")]),s._v("层：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UmsAdminServiceImpl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UmsAdminService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Resource")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UmsAdminService")]),s._v(" umsAdminService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UmsAdmin")]),s._v(" umsAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" umsAdminService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("umsAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("然后在别处调用了这个方法，然后就报内存溢出的错误！！！")])])},[],!1,null,null,null);t.default=r.exports}}]);