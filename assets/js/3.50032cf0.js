(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{347:function(t,n,a){},349:function(t,n,a){"use strict";var e=a(1),i=a(40).find,s=a(113),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),e({target:"Array",proto:!0,forced:r},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},350:function(t,n,a){var e=a(1),i=a(351).entries;e({target:"Object",stat:!0},{entries:function(t){return i(t)}})},351:function(t,n,a){var e=a(7),i=a(2),s=a(58),r=a(15),u=i(a(85).f),o=i([].push),c=function(t){return function(n){for(var a,i=r(n),c=s(i),l=c.length,g=0,h=[];l>g;)a=c[g++],e&&!u(i,a)||o(h,t?[a,i[a]]:i[a]);return h}};t.exports={entries:c(!0),values:c(!1)}},352:function(t,n,a){"use strict";a(347)},356:function(t,n,a){},357:function(t,n,a){},363:function(t,n,a){"use strict";a.r(n);var e=a(112),i=(a(349),a(9),a(350),a(190),a(191),{name:"ToggleLanguage",data:function(){return{currentLang:void 0,languages:{"en-UK":{lang:"english",path:"/en"},"de-DE":{lang:"german",path:"/de",id:"de-DE"}}}},methods:{setLanguage:function(t){var n,a=t.target.value;this.$route.path=null===(n=this.languages.find((function(t){return t.lang===a})))||void 0===n?void 0:n.path},updateLang:function(){var t,n,a=this;this.currentLang=null===(t=Object.entries(this.languages).find((function(t){var n=Object(e.a)(t,2),i=(n[0],n[1]);return a.$route.path.startsWith(i.path)})))||void 0===t?void 0:t[1],this.currentLang||this.$router.push("".concat((null!==(n=this.languages[this.getUserLang()])&&void 0!==n?n:this.languages["en-UK"]).path).concat(this.$route.path))},getUserLang:function(){return navigator.language||navigator.userLanguage}},created:function(){this.updateLang()},watch:{$route:function(){this.updateLang()}}}),s=(a(352),a(56)),r=Object(s.a)(i,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ClientOnly",[a("div",{staticClass:"languages"},t._l(t.languages,(function(n){return a("router-link",{key:n.lang,staticClass:"language",class:{active:t.currentLang===n},attrs:{to:n.path}},[t._v(t._s(n.lang))])})),1)])}),[],!1,null,"830ec064",null);n.default=r.exports},365:function(t,n,a){"use strict";a(356)},366:function(t,n,a){"use strict";a(357)},380:function(t,n,a){"use strict";a.r(n);var e={components:{ToggleLanguage:a(363).default}},i=(a(365),a(366),a(56)),s=Object(i.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"layout"},[n("hoth-header",{staticClass:"header"}),this._v(" "),n("main",{staticClass:"content"},[n("hoth-nav",{staticClass:"nav"}),this._v(" "),n("ClientOnly",[n("ToggleLanguage")],1),this._v(" "),n("Content",{staticClass:"card"})],1),this._v(" "),n("hoth-footer",{staticClass:"footer"})],1)}),[],!1,null,null,null);n.default=s.exports}}]);