(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{345:function(t,e,n){},347:function(t,e,n){t.exports=n.p+"assets/img/rakede-farbe.22fdd6fd.png"},348:function(t,e,n){var r=n(1),a=n(0),i=n(31),s=n(4),o=n(56),c=n(57),u=n(186),l=/MSIE .\./.test(o),h=a.Function,p=function(t){return function(e,n){var r=u(arguments.length,1)>2,a=s(e)?e:h(e),o=r?c(arguments,2):void 0;return t(r?function(){i(a,this,o)}:a,n)}};r({global:!0,bind:!0,forced:l},{setTimeout:p(a.setTimeout),setInterval:p(a.setInterval)})},349:function(t,e,n){"use strict";n(345)},353:function(t,e,n){},354:function(t,e,n){},356:function(t,e,n){"use strict";n.r(e);var r=n(73),a=n(38),i=n(39),s=(n(9),n(348),n(110),function(){function t(e){var n=e.parent,r=e.element,i=void 0===r?document.createElement("div"):r;Object(a.a)(this,t),this.parent=n,this.x=0,this.y=0,this.el=i.cloneNode(!0),this.init()}var e;return Object(i.a)(t,[{key:"init",value:function(){this.parent.appendChild(this.el)}},{key:"remove",value:function(){this.el.remove()}},{key:"isVisible",value:function(){return this.x>0&&this.x<this.parent.clientWidth&&this.y>0&&this.y<this.parent.clientHeight}},{key:"animate",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0,n=0;do{e=8*Math.random()-4,n=8*Math.random()-4}while(Math.pow(e,2)+Math.pow(n,2)<2);r=Math.atan(e/n),n>0?this.y=10:(r+=Math.PI,this.y=window.innerHeight-10),this.x=Math.random()*window.innerWidth,this.el.style.transform="rotate(".concat(r,"rad)"),this.el.classList.add("active");case 8:if(!this.isVisible()){t.next=17;break}return this.x+=e,this.y+=n,this.el.style.left="".concat(this.x,"px"),this.el.style.bottom="".concat(this.y,"px"),t.next=15,o(20);case 15:t.next=8;break;case 17:this.el.classList.remove("active");case 18:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}()),o=function(t){return new Promise((function(e){return setTimeout(e,t)}))},c={name:"rocket-animation",methods:{animation:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new s({parent:t.$refs.wrapper,element:t.$refs.rakede}),e.next=4,n.animate();case 4:return n.remove(),e.next=7,o(100);case 7:e.next=0;break;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=0;a<8;a++)n();case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.animation()}},u=(n(349),n(55)),l=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{ref:"wrapper",staticClass:"rocketAnimationWrapper"},[e("img",{ref:"rakede",staticClass:"rakede",attrs:{src:n(347),alt:"rakede"}})])}),[],!1,null,"4977da14",null);e.default=l.exports},361:function(t,e,n){t.exports=n.p+"assets/img/logo.be24aa65.png"},362:function(t,e,n){t.exports=n.p+"assets/img/header-back.a0d25ab6.svg"},363:function(t,e,n){"use strict";
/*!
 * vue-no-ssr v1.1.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,a=e.props,i=r(),s=i.default;void 0===s&&(s=[]);var o=i.placeholder;return n._isMounted?s:(n.$once("hook:mounted",(function(){n.$forceUpdate()})),a.placeholderTag&&(a.placeholder||o)?t(a.placeholderTag,{class:["no-ssr-placeholder"]},a.placeholder||o):s.length>0?s.map((function(){return t(!1)})):t(!1))}};t.exports=r},364:function(t,e,n){"use strict";n(353)},365:function(t,e,n){"use strict";n(354)},374:function(t,e,n){"use strict";n.r(e);var r=n(363),a=n.n(r),i=(n(356),{components:{"no-ssr":a.a}}),s=(n(364),n(365),n(55)),o=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"header"},[e("router-link",{staticClass:"logo-link",attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{src:n(361),id:"logo",alt:"hacks on the harbour logo"}})]),this._v(" "),e("img",{staticClass:"back-curve",attrs:{src:n(362),alt:""}}),this._v(" "),e("rocket-animation")],1)}),[],!1,null,"982da684",null);e.default=o.exports}}]);