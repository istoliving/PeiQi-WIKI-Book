(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{2764:function(s,a,n){"use strict";n.r(a);var t=n(64),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"伪加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪加密"}},[s._v("#")]),s._v(" 伪加密")]),s._v(" "),a("h2",{attrs:{id:"关于"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[s._v("#")]),s._v(" 关于")]),s._v(" "),a("p",[s._v("ZIP伪加密就是通过修改zip压缩包特定的字节,进而在打开文件时压缩包被识别为使用了密码加密,从而达到伪装加密效果，实际上并没有对压缩包进行密码加密。我们需要通过使用工具修改特定位置的字节来破解伪加密。")]),s._v(" "),a("p",[a("img",{attrs:{src:n(899),alt:"img"}})]),s._v(" "),a("p",[s._v("ZIP压缩文件中有三个关键数据段:  压缩源文件数据区，压缩源文件目录区，压缩文件源文件目录结束区")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("压缩源文件数据区\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("B "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),s._v("：头文件标记（"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x04034b50")]),s._v("）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("：解压文件所需 pkware 版本\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("：全局方式位标记（有无加密）头文件标记后"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("：压缩方式\n\n压缩源文件目录区\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("B "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),s._v("：目录中文件文件头标记"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x02014b50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("：压缩使用的 pkware 版本\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("：解压文件所需 pkware 版本\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("：全局方式位标记（有无加密，伪加密判断点）目录文件标记后"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("bytes\n\n压缩文件源文件目录结束区\n    \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("B "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),s._v("：目录结束标记\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("：当前磁盘编号\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("：目录区开始磁盘编号\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("：本磁盘上纪录总数\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("：目录区中纪录总数\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("：目录区尺寸大小\n\n无加密"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\t压缩源文件数据区全局加密为 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 压缩源文件目录区全局加密为 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("\n有加密"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\t压缩源文件数据区全局加密为 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 压缩源文件目录区全局加密为 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("\n伪加密"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\t压缩源文件数据区全局加密为 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 压缩源文件目录区全局加密为 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h2",{attrs:{id:"buuctf-zip伪加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buuctf-zip伪加密"}},[s._v("#")]),s._v(" BuuCTF - zip伪加密")]),s._v(" "),a("p",[s._v("打开需要密码，使用十六进制查看工具打开，发现全局加密标志为 09 00")]),s._v(" "),a("p",[a("img",{attrs:{src:n(900),alt:"img"}})]),s._v(" "),a("p",[s._v("修改为 00 00 后解压可打开获取内部文件")]),s._v(" "),a("p",[a("img",{attrs:{src:n(901),alt:"img"}})])])}),[],!1,null,null,null);a.default=e.exports},899:function(s,a,n){s.exports=n.p+"assets/img/1667891007677-9c6e77f7-5552-4b67-8e13-7b63aa6fc3f7.4fff2046.png"},900:function(s,a,n){s.exports=n.p+"assets/img/1667891839387-dbb7d4f4-4b00-460a-902a-fdc245342e96.3418b6c1.png"},901:function(s,a,n){s.exports=n.p+"assets/img/1667891895318-802c4f32-7421-4b1f-bf2a-2a5b8e26bb38.4f8d53ae.png"}}]);