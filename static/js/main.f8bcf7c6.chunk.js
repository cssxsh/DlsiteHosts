(this["webpackJsonpcssxsh.github.io"]=this["webpackJsonpcssxsh.github.io"]||[]).push([[0],{102:function(n,t,e){"use strict";e.r(t);var o=e(0),c=e.n(o),a=e(12),i=e.n(a),r=(e(55),e(48)),l=e(119),s=e(120),u=e(25),m=e.n(u),d=e(121),f=function(){var n=c.a.useState(["# DLSITE"]),t=Object(r.a)(n,2),e=t[0],o=t[1],a=function(){o(["# DLSITE"]);var n=new m.a.DohResolver("https://doh.pub/dns-query"),t=new m.a.DohResolver("https://cloudflare-dns.com/dns-query");new Map([["download.sangfor.com.cn",["trial.dlsite.com","img.dlsite.jp","media.dlsite.com","play.dl.dlsite.com","media.ci-en.jp","media.stg.ci-en.jp","www.nijiyome.com","www.nijiyome.jp","file.chobit.cc","img.chobit.cc"]],["w2.shared.global.fastly.net",["www.dlsite.com","ssl.dlsite.com","download.dlsite.com"]],["play.dlsite.com","play.dlsite.com"],["login.dlsite.com","login.dlsite.com"]]).forEach((function(e,c){"string"===typeof e?t.query(c,"A").then((function(n){var t=n.answers.filter((function(n){return"A"===n.type})).map((function(n){return n.data})),a=["# ".concat(c)].concat(t.map((function(n){return"".concat(n," ").concat(e," ")})));o((function(n){return n.concat(a)}))})):n.query(c,"A","GET").then((function(n){var t=n.answers.filter((function(n){return"A"===n.type})).map((function(n){return n.data})),a=["# ".concat(c)].concat(e.flatMap((function(n){return t.map((function(t){return"".concat(t," ").concat(n," ")}))})));o((function(n){return n.concat(a)}))}))}))};return c.a.useEffect(a,[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,null),c.a.createElement(d.a,{onClick:a},"LOAD"),c.a.createElement(s.a,null,e.map((function(n){return c.a.createElement("li",{key:n},n)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},50:function(n,t,e){n.exports=e(102)},55:function(n,t,e){},80:function(n,t){},82:function(n,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.f8bcf7c6.chunk.js.map