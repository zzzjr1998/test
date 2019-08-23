(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{260:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"vuepress部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress部署","aria-hidden":"true"}},[s._v("#")]),s._v(" vuepress部署")]),s._v(" "),n("h2",{attrs:{id:"部署githubpages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署githubpages","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署GithubPages")]),s._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("这里演示发布至"),n("code",[s._v("https://<USERNAME>.github.io/")]),s._v("。")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("在你的GitHub上创建一个仓库名为"),n("code",[s._v("<USERNAME>.github.io")]),s._v("的仓库,例如，我的GitHub用户名为"),n("code",[s._v("zhengjunren")]),s._v("，则创建名为"),n("code",[s._v("zhengjunren.github.io")]),s._v("的仓库")])]),s._v(" "),n("li",[n("p",[s._v("在项目下创建"),n("code",[s._v("deploy.sh")]),s._v("文件")])])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:zhengjunren/zhengjunren.github.io.git master\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("在cmd命令台中运行"),n("code",[s._v("deploy.sh")]),s._v("脚本。")]),s._v(" "),n("h2",{attrs:{id:"部署giteepages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署giteepages","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署GiteePages")]),s._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),n("p",[s._v("由于"),n("code",[s._v("gitee pages")]),s._v("不支持免费地推送后重新部署，建议使用"),n("code",[s._v("GitHub Pages")]),s._v("。")])]),s._v(" "),n("ul",[n("li",[s._v("创建仓库，仓库名为用户名，\n例如用户名为"),n("code",[s._v("zhengjunren")]),s._v("，创建名为"),n("code",[s._v("zhengjunren")]),s._v("的仓库\n其余步骤相同，"),n("strong",[s._v("注意"),n("code",[s._v("deploy.sh")]),s._v("中"),n("code",[s._v("git push")]),s._v("命令不同哦")]),s._v("！")])])])},[],!1,null,null,null);t.default=e.exports}}]);