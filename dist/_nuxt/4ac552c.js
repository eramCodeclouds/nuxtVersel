(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(e,t,n){"use strict";n.r(t);n(4),n(1),n(3),n(66),n(49),n(20);var o={name:"MegaMenu",data:function(){return{backdrop:!0,actualData:[],allKeys:[],mobileViewData:[]}},methods:{bro:function(){console.log(this.mobileViewData)}},mounted:function(){var e=this,t=n(231);this.actualData=t,this.allKeys=Object.keys(t),this.allKeys.forEach((function(element){e.mobileViewData.push(e.actualData[element])}))},computed:{dataChunks:function(){return function(e,t){return Array.from({length:Math.ceil(e.length/t)},(function(n,i){return e.slice(i*t,i*t+t)}))}}}},r=(n(304),n(43)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"megamenu-wrap d-flex flex-wrap"},[t("div",{staticClass:"column w-20"},[t("p",[e._v("Buy With Prime")]),e._v(" "),t("div",{staticClass:"prime-link-holder"},[t("nuxt-link",{attrs:{to:"/"}},[t("img",{attrs:{src:"/images/prime-badge.png",alt:"Badge"}})])],1)]),e._v(" "),e._l(e.allKeys,(function(n){return t("div",{key:n,class:"column w-"+20*Math.ceil(e.actualData[n].length/5*20/20)},[t("p",[e._v(e._s(n))]),e._v(" "),20*Math.ceil(e.actualData[n].length/5*20/20)==60?t("div",{staticClass:"d-flex flex-wrap strength-row"},e._l(e.dataChunks(e.actualData[n],5),(function(n,o){return t("ul",{key:o},e._l(n,(function(n){return t("li",{key:n},[t("a",{attrs:{href:"#"}},[e._v(e._s(n))])])})),0)})),0):t("div",e._l(e.dataChunks(e.actualData[n],5),(function(n,o){return t("ul",{key:o},e._l(n,(function(n){return t("li",{key:n},[t("a",{attrs:{href:"#"}},[e._v(e._s(n))])])})),0)})),0)])})),e._v(" "),e._m(0)],2)}),[function(){var e=this._self._c;return e("div",{staticClass:"column w-20"},[e("div",{staticClass:"image-holder"},[e("img",{attrs:{src:"/images/logo-badge.png",alt:"image"}})])])}],!1,null,"4a4d6c24",null);t.default=component.exports},231:function(e){e.exports=JSON.parse('{"Strength":["Dumbbells","Slam Balls","Battle Ropes","Resistance Bands","Pull Up Bars","Lifting Straps & Hooks","Pull Ups Handles & Hooks","Squat, Dip & Chin Up Belts","Free Weight Equipment","Cable Machine Bars","Forearm Wrist & Grip Rollers","Cable Pull Handles","Landmine & Handles","Cable Triceps Grips","Multi Exercise Handles"],"Brands":["Living.Fit","Nouflex","JerkFit","Element 26","LPG Muscle5"],"Racks & Flooring":["Dumbbell Racks","Flooring"],"Mobility & Conditioning":["Foam Rollers","Resistance Bands","Jump Ropes","Exercise Balls","Weighted Vests"],"Weightlifting":["Barbells","Bumper Plates","Clips","Belts"],"Straps, Wraps & Support":["Gloves and Grips","Sleeves","Weight Belts","Athletic Tape"]}')},232:function(e,t,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("415d00a0",content,!0,{sourceMap:!1})},233:function(e,t,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("38e69820",content,!0,{sourceMap:!1})},234:function(e,t,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("d28c3a6c",content,!0,{sourceMap:!1})},244:function(e,t,n){"use strict";var o=n(43),component=Object(o.a)({},(function(){var e=this._self._c;return e("div",[e("PageHeader"),this._v(" "),e("main",[e("Nuxt")],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{PageHeader:n(330).default})},247:function(e,t,n){n(248),e.exports=n(249)},304:function(e,t,n){"use strict";n(232)},305:function(e,t,n){var o=n(61)((function(i){return i[1]}));o.push([e.i,".megamenu-wrap[data-v-4a4d6c24]{background:#fff;box-shadow:0 0 15px rgba(0,0,0,.3);margin:0 -15px;padding:25px 15px 10px}.megamenu-wrap .column[data-v-4a4d6c24]{margin-bottom:20px;padding:0 15px}.megamenu-wrap .column[data-v-4a4d6c24]:first-child,.megamenu-wrap .column[data-v-4a4d6c24]:nth-child(2),.megamenu-wrap .column[data-v-4a4d6c24]:nth-child(3){margin-bottom:40px}.megamenu-wrap .column.w-15[data-v-4a4d6c24]{width:15%}.megamenu-wrap .column.w-20[data-v-4a4d6c24]{width:20%}.megamenu-wrap .column.w-60[data-v-4a4d6c24]{width:60%}.megamenu-wrap .column p[data-v-4a4d6c24]{border-bottom:2px solid #000;color:#162535;font-size:18px;font-weight:700;line-height:38px;margin-bottom:30px}.prime-link-holder a[data-v-4a4d6c24]{display:inline-block}.prime-link-holder a img[data-v-4a4d6c24]{max-width:100%;width:auto}.megamenu-wrap .column .strength-row[data-v-4a4d6c24]{margin:0 -15px}.megamenu-wrap .column .strength-row ul[data-v-4a4d6c24]{padding:0 15px;width:33.33333%}.megamenu-wrap .column ul li[data-v-4a4d6c24]:not(:last-child){margin-bottom:13px}.megamenu-wrap .column ul li a[data-v-4a4d6c24]{color:#000;font-size:16px}.megamenu-wrap .column .image-holder img[data-v-4a4d6c24]{max-width:70%}",""]),o.locals={},e.exports=o},306:function(e,t,n){"use strict";n(233)},307:function(e,t,n){var o=n(61)((function(i){return i[1]}));o.push([e.i,'.site-header{left:0;position:fixed;top:0;transition:all .5s ease-in-out;width:100%;z-index:999}.site-header .logo-holder a{display:inline-block}.site-header .logo-holder a img:last-child{display:none}.site-header.sticky .logo-holder a img:last-child,.white-header .site-header .logo-holder a img:last-child{display:block}.site-header.sticky .logo-holder a img:first-child,.white-header .site-header .logo-holder a img:first-child{display:none}.site-header.sticky,.white-header .site-header{background:#fff;box-shadow:0 0 10px rgba(0,0,0,.3)}.white-header .site-header{left:0;position:sticky;top:0}.navigation{padding:0 30px}.main-menu{width:calc(100% - 185px)}.navbar-nav{justify-content:flex-end}.navbar-nav .nav-item{cursor:pointer;padding:20.5px 0}.navbar-nav .nav-item a.nav-link{color:#fff;display:inline-block;font-size:14px;padding:10px;transition:all .5s ease-in-out}.sticky .navbar-nav .nav-item a.nav-link,.white-header .site-header .navbar-nav .nav-item a.nav-link{color:#162535}.sticky .navbar-nav .nav-item a.nav-link:hover,.white-header .site-header .navbar-nav .nav-item a.nav-link:hover{color:#466cce}.nav-item .nav-link{position:relative}.nav-item .nav-link:after{background:#fff;bottom:0;content:"";height:3px;left:0;position:absolute;transform:scale(0);transition:all .5s ease-in-out;width:100%}.nav-item .nav-link:hover:after{transform:scale(1)}.nav-item.mr-megamenu>a.nav-link{padding-right:25px}.nav-item.mr-megamenu>a.nav-link:after{background:url(/images/down.png) no-repeat 50%;color:#fff;content:"";filter:invert(100%);height:10px;left:auto;position:absolute;right:10px;top:50%;transform:translateY(-50%);width:10px}.sticky .nav-item.mr-megamenu>a.nav-link:after,.white-header .site-header .nav-item.mr-megamenu>a.nav-link:after{filter:invert(0)}.sticky .nav-item.mr-megamenu>a:hover.nav-link:after,.white-header .site-header .nav-item.mr-megamenu>a:hover.nav-link:after{filter:invert(46%) sepia(20%) saturate(2544%) hue-rotate(192deg) brightness(84%) contrast(90%)}.nav-item.mr-megamenu>a:before{border:10px solid transparent;border-bottom-color:#fff;bottom:-17px;content:"";height:20px;left:50%;opacity:0;pointer-events:none;position:absolute;transform:translateX(-50%);transform:translateY(100px);transition:all .5s ease-in-out;width:20px;z-index:999}.nav-item.mr-megamenu:hover>a:before{opacity:1;pointer-events:all;transform:translate(-50%)}.megamenu-container{left:0;opacity:0;padding:0 30px;pointer-events:none;position:absolute;top:78px;transform:translateY(100px);transition:all .5s ease-in-out;width:100%}.nav-item.mr-megamenu:hover .megamenu-container{opacity:1;pointer-events:all;transform:translateY(0)}.mobile-menu-trigger{display:none}@media (max-width:1023px){.site-header{padding:10px 0}.navbar-nav{display:none!important}.mobile-menu-trigger,.mobile-menu-trigger:focus,.mobile-menu-trigger:hover{background:transparent;border:none;box-shadow:none;display:block;margin-left:auto;outline:none;padding:0}.mobile-menu-trigger span{background:#fff;border-radius:5px;display:block;height:5px;margin-bottom:5px;width:40px}.sticky .mobile-menu-trigger span,.white-header .site-header .mobile-menu-trigger span{background:#466cce}.mobile-menu-trigger span:last-child{margin-bottom:0}.mobile-topbar{background:#466cce;justify-content:space-between;left:0;padding:10px 15px;position:sticky;top:0;width:100%;z-index:999}.side-nav-close{border:none;color:#fff;font-size:30px;font-weight:300;padding:0}.side-nav-close,.side-nav-close:focus{background:transparent}.mobile-menu-list>li>a{color:#000;display:block;padding:7px 15px;-webkit-text-decoration:none;text-decoration:none}.mobile-menu-list>li.mobile-megamenu>a{padding-right:40px;position:relative}.mobile-menu-list>li.mobile-megamenu>a:after{color:#000;content:"+";font-size:20px;font-weight:700;position:absolute;right:15px;top:50%;transform:translateY(-50%)}.mobile-menu-list>li.mobile-megamenu>a[aria-expanded=true]{background:#466cce;color:#fff}.mobile-menu-list>li.mobile-megamenu>a[aria-expanded=true]:after{color:#fff;content:"-"}.parent-category a{color:#000;display:block;padding:7px 40px 7px 15px;position:relative;-webkit-text-decoration:none;text-decoration:none}.parent-category a:after{color:#000;content:"+";font-size:20px;font-weight:700;position:absolute;right:15px;top:50%;transform:translateY(-50%)}.parent-category a[aria-expanded=true]{background:#a4b6e4}.parent-category a[aria-expanded=true]:after{content:"-"}.sub-category li a{color:#000;display:block;padding:7px 15px;-webkit-text-decoration:none;text-decoration:none}}@media (max-width:767px){.navigation{padding:0 15px}}',""]),o.locals={},e.exports=o},308:function(e,t,n){"use strict";n(234)},309:function(e,t,n){var o=n(61)((function(i){return i[1]}));o.push([e.i,".prime-link-holder a[data-v-6aef6792]{display:inline-block;padding:15px}.prime-link-holder a img[data-v-6aef6792]{max-width:100%;width:auto}",""]),o.locals={},e.exports=o},310:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o}));var o=function(){return{faqs:[{id:0,question:"What is Buy with Prime and how does it work?",answer:"Buy with Prime allows millions of US-based Prime members to shop directly from participating online stores with the trusted experience you expect from Amazon—including fast, free delivery, an easy checkout experience, and returns on eligible orders. When you shop on Living.Fit, you’ll see the Prime logo and delivery promise on eligible products, which signals the item is available for free delivery, as fast as next day, with free returns. By clicking the Buy with Prime button, you can check out by signing into your Amazon account, which prepopulates your payment and shipping details on the checkout page. You will receive an order confirmation email after placing your order and then a shipping confirmation email with a link for tracking when the order is shipped. If you aren’t a Prime member, you can sign up and start your 30-day Prime free trial today."},{id:1,question:"How do I make a purchase using my Prime benefits on Living.Fit?",answer:"When you decide to purchase a product using Buy with Prime on Living.Fit, you will be prompted to sign into your Amazon account. You can then complete your order using your preferred payment method stored in your Amazon account."},{id:2,question:"Is this really the same delivery experience Im familiar with as a Prime member?",answer:"Buy with Prime purchases offer the fast, free delivery and free returns on eligible products and a seamless checkout experience shoppers trust."},{id:3,question:"Where can I check the status of my order?",answer:"You can check your order status by clicking on the link in your shipment confirmation email, which will bring you to your order details page on Living.Fit. For Buy with Prime purchases, you can’t see or track orders on your Amazon.com orders page or in the Amazon mobile app."},{id:4,question:"Who do I contact for issues or questions for my order?",answer:"If you either have a question or experience an issue with your Buy with Prime order, contact us at hello@living.fit.com. You'll receive an order confirmation email with a link to see your order status and how to contact Living.Fit."},{id:5,question:"Do I have to be a Prime member to use Buy with Prime?",answer:"Yes, you must be a Prime member to purchase products using Buy with Prime on Living.Fit. When you click on the Buy with Prime button, you will be prompted to sign in to your Amazon account, and your order will be processed using your preferred payment and shipping information stored in your Amazon account. Link to the Buy with Prime customer service page here."},{id:6,question:"How do I initiate a return for Buy with Prime purchases",answer:"To initiate a return for an eligible product purchased using Buy with Prime, click on the link in the order confirmation email to go to your order details page. From there you will be able to select the item(s) that you want to return and print a return shipping label. Then drop off your package at your local USPS location. Note that Buy with Prime purchases cannot be returned using other carriers besides USPS and may not be dropped off at Amazon locations such as Amazon Lockers, Whole Foods, or Amazon Go. You can verify the return eligibility of your purchase by visiting Living.Fit Returns."},{id:7,question:"How long does it take for me to get a refund?",answer:"For eligible orders, you'll receive a refund once the item is dropped off and scanned at a USPS location. Otherwise, the refund will be processed once the item is received and reviewed at our fulfillment center. It could take up to seven business days for the refund to show up in your account."},{id:8,question:"Can I use Amazon gift cards, promotional discounts offered by Living.Fit or points when I use Buy with Prime?",answer:"Amazon.com gift cards, promotional discounts offered by Living.Fit or points can't be used as a payment method to place an order using Buy with Prime. Amazon.com Gift Cards can only be used to purchase eligible goods and services on Amazon.com and certain related sites as detailed in the Amazon.com Gift Card Terms"}]}}},330:function(e,t,n){"use strict";n.r(t);var o={components:{megamenu:n(172).default},name:"PageHeader",data:function(){return{backdrop:!0}}},r=(n(306),n(43)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("header",{staticClass:"site-header"},[t("nav",{staticClass:"navigation"},[t("div",{staticClass:"menu-wrap d-flex flex-wrap align-items-center"},[e._m(0),e._v(" "),t("div",{staticClass:"main-menu"},[t("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],staticClass:"mobile-menu-trigger"},[t("span"),t("span"),t("span")]),e._v(" "),t("ul",{staticClass:"navbar-nav flex-row d-flex flex-wrap"},[e._m(1),e._v(" "),t("li",{staticClass:"nav-item mr-megamenu"},[t("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Equipment")]),e._v(" "),t("div",{staticClass:"megamenu-container"},[t("megamenu")],1)]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4)]),e._v(" "),t("b-sidebar",{attrs:{id:"sidebar-right",title:"Sidebar",right:"",shadow:"",backdrop:"","no-header":""},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.hide;return[t("div",{staticClass:"mobile-topbar d-flex"},[t("a",{attrs:{href:"index.html"}},[t("img",{attrs:{src:"/images/logo.svg",alt:"logo"}})]),e._v(" "),t("b-button",{staticClass:"side-nav-close",on:{click:o}},[e._v("×")])],1),e._v(" "),t("ul",{staticClass:"mobile-menu-list"},[t("li",[t("nuxt-link",{attrs:{to:"#"}},[e._v("Media")])],1),e._v(" "),t("li",{staticClass:"mobile-megamenu"},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}]},[e._v("Equipment")]),e._v(" "),t("b-collapse",{attrs:{id:"collapse-1"}},[t("MobileMegamenu")],1)],1),e._v(" "),t("li",[t("nuxt-link",{attrs:{to:"#"}},[e._v("Workout Plans")])],1),e._v(" "),t("li",[t("nuxt-link",{attrs:{to:"#"}},[e._v("Courses")])],1),e._v(" "),t("li",[t("nuxt-link",{attrs:{to:"#"}},[e._v("Membership")])],1)])]}}])})],1)])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"logo-holder"},[e("a",{attrs:{href:"index.html"}},[e("img",{attrs:{src:"/images/logo.svg",alt:"logo"}}),this._v(" "),e("img",{attrs:{src:"/images/logo-dark.svg",alt:"logo"}})])])},function(){var e=this._self._c;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[this._v("Media")])])},function(){var e=this._self._c;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[this._v("Workout Plans")])])},function(){var e=this._self._c;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[this._v("Courses")])])},function(){var e=this._self._c;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[this._v("Membership")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Megamenu:n(172).default,MobileMegamenu:n(331).default})},331:function(e,t,n){"use strict";n.r(t);n(11),n(18),n(4),n(1),n(3);var o={name:"MobileMegamenu",data:function(){return{backdrop:!0,actualData:[],allKeys:[],mobileViewData:[]}},methods:{bro:function(){console.log(this.mobileViewData)}},mounted:function(){var e=this,t=n(231);this.actualData=t,this.allKeys=Object.keys(t),this.allKeys.forEach((function(element){e.mobileViewData.push(e.actualData[element])}))}},r=(n(308),n(43)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"accordion",attrs:{role:"tablist"}},[t("div",{staticClass:"parent-category",attrs:{"header-tag":"header",role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],attrs:{block:"",variant:"info"}},[e._v("Buy With Prime")])]),e._v(" "),t("b-collapse",{attrs:{id:"accordion-1",accordion:"my-accordion",role:"tabpanel"}},[t("div",{staticClass:"prime-link-holder"},[t("nuxt-link",{attrs:{to:"/"}},[t("img",{attrs:{src:"/images/prime-badge.png",alt:"Badge"}})])],1)]),e._v(" "),e._l(e.allKeys,(function(n){return t("div",{key:n},[t("div",{staticClass:"parent-category",attrs:{"header-tag":"header",role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-".concat(n.replace(/\s+/g,"%20")),expression:"`accordion-${k.replace(/\\s+/g, '%20')}`"}],attrs:{block:"",variant:"info"}},[e._v(e._s(n))])]),e._v(" "),t("b-collapse",{attrs:{id:"accordion-"+n.replace(/\s+/g,"%20"),accordion:"my-accordion",role:"tabpanel"}},[t("ul",{staticClass:"sub-category"},e._l(e.actualData[n],(function(n){return t("li",{key:n},[t("a",{attrs:{href:"#"}},[e._v(e._s(n))])])})),0)])],1)}))],2)}),[],!1,null,"6aef6792",null);t.default=component.exports}},[[247,7,1,8]]]);