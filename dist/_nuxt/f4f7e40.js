(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{338:function(t,e,o){var content=o(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("7c1bb949",content,!0,{sourceMap:!1})},342:function(t,e,o){"use strict";o(338)},343:function(t,e,o){var n=o(61)((function(i){return i[1]}));n.push([t.i,'.faq-page h1{color:#162535;font-size:30px;font-weight:600}.faq-page h1,.page-heading{margin-bottom:20px}.page-heading p{color:#162535;margin:0}.accordion-item{margin-bottom:10px}.accordion-item .accordion-heading{margin-bottom:2px}.accordion-item .accordion-heading button,.accordion-item .accordion-heading button:focus{background:#162535;border:none;box-shadow:none;font-weight:700;padding:15px 50px 15px 20px;position:relative;text-align:left}.accordion-item .accordion-heading button:after{background:url(/images/down.png) no-repeat 50%;background-size:20px;content:"";filter:invert(100%);height:20px;position:absolute;right:20px;top:50%;transform:translateY(-50%);width:20px}.accordion-item .accordion-heading button[aria-expanded=true]:after{transform:rotate(180deg) translateY(50%)}.accordion-item .collapse{background:#f1f1f1;border-radius:4px;padding:15px 20px}.accordion-item .collapse p{color:#686868}.accordion-item .collapse p:last-child{margin:0}',""]),n.locals={},t.exports=n},345:function(t,e,o){"use strict";o.r(e);o(4),o(5),o(2),o(1),o(6),o(3),o(7);var n=o(0),r=o(109);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d={head:{bodyAttrs:{class:"white-header"}},data:function(){return{faqs:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)("faq",{storeFaqs:function(t){return t.faqs}}))},l=d,f=(o(342),o(43)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"faq-page"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.storeFaqs,(function(o,n){return e("div",{key:o.id,staticClass:"accordion-item"},[e("div",{staticClass:"accordion-heading",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"Q-"+n,expression:"'Q-'+index"}],attrs:{block:""}},[t._v("Q: "+t._s(o.question))])],1),t._v(" "),e("b-collapse",{attrs:{visible:0===n,id:"Q-".concat(o.id),accordion:"my-accordion",role:"tabpanel"}},[e("p",[e("strong",[t._v("A:")]),t._v(" "+t._s(o.answer)+"\n                    ")])])],1)})),0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-heading"},[e("h1",[t._v("Buy with Prime FAQ")]),t._v(" "),e("p",[t._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non laoreet velit. Nunc ac sagittis odio. Cras non tellus quis sapien accumsan vestibulum sit amet ut orci. Fusce sodales nisi a orci sagittis, non malesuada augue ultrices.\n            ")])])}],!1,null,null,null);e.default=component.exports}}]);