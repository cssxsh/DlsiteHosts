(this["webpackJsonpcssxsh.github.io"]=this["webpackJsonpcssxsh.github.io"]||[]).push([[0],{46:function(e,n,t){e.exports=t(98)},51:function(e,n,t){},76:function(e,n){},78:function(e,n){},98:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),a=t(13),i=t.n(a),l=(t(51),t(25)),r=t(115),s=t(116),u=t(10),d=t.n(u),m=t(117),h=new d.a.DohResolver("https://doh.pub/dns-query"),p=(new d.a.DohResolver("https://1.0.0.1/dns-query"),new d.a.DohResolver("https://cloudflare-dns.com/dns-query"),new d.a.DohResolver("https://public.dns.iij.jp/dns-query"),new d.a.DohResolver("https://dns.quad9.net/dns-query"),new d.a.DohResolver("https://doh.opendns.com/dns-query")),w=new Map([["download.sangfor.com.cn",[h,["trial.dlsite.com","img.dlsite.jp","media.dlsite.com","play.dl.dlsite.com","media.ci-en.jp","media.stg.ci-en.jp","file.chobit.cc","img.chobit.cc"]]],["j.sni.global.fastly.net",[p,["ssl.dlsite.com","www.dlsite.com","www.nijiyome.com","www.nijiyome.jp"]]],["play.dlsite.com",[p,["play.dlsite.com"]]],["login.dlsite.com",[p,["login.dlsite.com"]]],["download.dlsite.com.wtxcdn.com",[h,["download.dlsite.com"]]]]),f=function(){var e=c.a.useState(["# DLSITE"]),n=Object(l.a)(e,2),t=n[0],o=n[1],a=function(){o(["# DLSITE"]),w.forEach((function(e,n){var t=Object(l.a)(e,2),c=t[0],a=t[1];c.query(n,"A","GET").then((function(e){var t=e.answers.filter((function(e){return"A"===e.type})).map((function(e){return e.data})),c=["## ".concat(n)].concat(a.flatMap((function(e){return t.map((function(n){return"".concat(n,"\t\t").concat(e," ")}))})));o((function(e){return e.concat(c)})),console.log("".concat(c,"\u52a0\u8f7d\u6210\u529f"))}))}))};return c.a.useEffect(a,[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null),c.a.createElement(m.a,{onClick:a,color:"primary"},"\u5237\u65b0"),c.a.createElement("h3",null,"\u4f7f\u7528\u524d\u8bf7\u5c06\u5df2\u6709\u7684\u65e7HOSTS\u6e05\u9664\uff0c\u706b\u72d0\u52a0\u8f7d\u53ef\u80fd\u5b58\u5728\u95ee\u9898\uff0c\u8bf7\u5c1d\u8bd5\u4f7f\u7528\u8c37\u6b4c\u5185\u6838\u7684\u6d4f\u89c8\u5668\u8bbf\u95ee\u3002"),c.a.createElement(s.a,null,t.map((function(e){return c.a.createElement("li",{key:e},e)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.cbb8a408.chunk.js.map