(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{470:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return h}));var n=r(471),o=r(0),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),h=Object(o.h)("v-card__title");n.a},471:function(t,e,r){"use strict";r(9),r(11),r(10),r(5),r(14),r(8),r(15);var n=r(2),o=(r(25),r(218),r(219),r(475),r(221)),l=r(474),c=r(90),d=r(13);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},472:function(t,e,r){var content=r(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("7082b72e",content,!0,{sourceMap:!1})},473:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),n.push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{animation-duration:2.2s;animation-iteration-count:infinite;animation-name:indeterminate-ltr}.v-progress-linear .v-progress-linear__indeterminate--active .short{animation-duration:2.2s;animation-iteration-count:infinite;animation-name:indeterminate-short-ltr}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-rtl}.v-progress-linear__stream{animation:stream-ltr .25s linear infinite;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;right:-8px;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:8px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:40px 40px}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{animation-duration:2s;animation-iteration-count:infinite;animation-name:query-ltr}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{animation-duration:2s;animation-iteration-count:infinite;animation-name:query-short-ltr}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{animation-play-state:running}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes query-ltr{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes query-rtl{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes query-short-ltr{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes query-short-rtl{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),n.locals={},t.exports=n},474:function(t,e,r){"use strict";r(25);var n=r(1),o=(r(9),r(11),r(10),r(5),r(14),r(8),r(15),r(2)),l=(r(137),r(472),r(217)),c=r(138),d=r(40),h=r(139),v=r(220),f=r(39),m=r(0),_=r(13);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var w=Object(_.a)(d.a,Object(h.b)(["absolute","fixed","top","bottom"]),v.a,f.a).extend({name:"v-progress-linear",directives:{intersect:c.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(o.a)(t,this.isReversed?"right":"left",Object(m.g)(this.normalizedValue,"%")),Object(o.a)(t,"width",Object(m.g)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?l.c:l.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(m.g)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(m.m)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(o.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},onObserve:function(t,e,r){this.isVisible=r},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),x=w;e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(x,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},475:function(t,e,r){var content=r(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("61d1dd60",content,!0,{sourceMap:!1})},476:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:.25rem}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:32px .25rem}.v-card{word-wrap:break-word;border-width:thin;display:block;max-width:100%;outline:none;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-property:box-shadow,opacity;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{left:0;overflow:hidden;right:0;top:0}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:16px;font-weight:400;letter-spacing:.0071428571em;line-height:1.375rem}.v-card__subtitle,.v-card__text,.v-card__title{padding:20px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:14px;font-weight:500;letter-spacing:.0125em;line-height:14px;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:20px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),n.locals={},t.exports=n},624:function(t,e,r){var content=r(701);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("0635df28",content,!0,{sourceMap:!1})},690:function(t,e,r){t.exports=r.p+"img/1.a068ab4.png"},691:function(t,e,r){t.exports=r.p+"img/2.ef50d4f.png"},692:function(t,e,r){t.exports=r.p+"img/3.f1e2e21.png"},693:function(t,e,r){t.exports=r.p+"img/4.b577205.png"},694:function(t,e,r){t.exports=r.p+"img/5.d70b321.png"},695:function(t,e,r){t.exports=r.p+"img/10.5437fdb.png"},696:function(t,e,r){t.exports=r.p+"img/11.e790613.png"},697:function(t,e,r){t.exports=r.p+"img/12.ad63e9a.png"},698:function(t,e,r){t.exports=r.p+"img/13.210ed68.png"},699:function(t,e,r){t.exports=r.p+"img/14.b37cb56.png"},700:function(t,e,r){"use strict";r(624)},701:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),n.push([t.i,".about-me-img[data-v-08d42f7d]{max-width:70%}.p-full-line[data-v-08d42f7d]{width:100%}",""]),n.locals={},t.exports=n},810:function(t,e,r){"use strict";r.r(e);r(5),r(34),r(35);var n=r(616),o=r(617),l={name:"how-do-i-make",data:function(){return{awards:n.a,aboutWorkItems:o.f,aboutSummary:o.e,aboutEducation:o.b,activeCategory:"dataViz",aboutCategories:o.a,aboutPublication:o.c,aboutSpeaking:o.d,toggle:null,items:[{title:"Education",value:"#education"},{title:"Publications",value:"#publications"},{title:"Speaking Engagements",value:"#speaking"}]}},components:{Header1:function(){return Promise.resolve().then(r.bind(null,477))},Banner1:function(){return r.e(1).then(r.bind(null,645))}},mounted:function(){this.activeCategory="dataViz"}},c=(r(700),r(38)),d=r(46),h=r.n(d),v=r(209),f=r(471),m=r(470),_=r(461),y=r(462),w=r(174),x=r(465),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("Header1"),t._v(" "),e("v-container",{staticClass:"mt-5"},[e("v-row",[e("v-container",[e("v-row",{attrs:{id:"how-might-we"}},[e("h1",{staticClass:"mt-5"},[t._v("\n              Design thinking, a framework to innovation\n            ")]),t._v(" "),e("br")]),t._v(" "),e("v-row",{staticClass:"mt-10"},[e("p",[t._v("\n              To put a structure in my works, I rely in the iterative nature of design thinking. Design thinking is an\n              innovation tool that follows a 5-step process which are Empathize, Define, Ideate, Prototype, and Test. In\n              my experience, it’s a mostly linear process with a chance of hopping back to the previous steps based on the\n              outcome of each step. This is because as you move towards the next step you will learn more about your users\n              and the problem they want solved which may lead you to reassess your current prototype, the identified core\n              problem, or add more dimension to your user persona.\n            ")])]),t._v(" "),e("v-row",[e("v-card",{staticClass:"pa-5",attrs:{flat:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("v-avatar",{staticClass:"ma-5",attrs:{size:"125",rounded:"0"}},[e("v-img",{attrs:{src:r(690)}})],1),t._v(" "),e("div",[e("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Empathize\n                  ")]),t._v(" "),e("v-card-subtitle",{staticClass:"pt-5"},[e("p",[t._v("\n                      This step is what makes coming up with a human-centered solution possible. Here you will gather\n                      artefacts about your users of your product or the intended audience for your output. Artefacts can\n                      be\n                      collected through user interviews, surveys, focus groups, video/voice diaries, walkthroughs,\n                      what-how-whys, and others.\n                    ")]),t._v(" "),e("p",[t._v("\n                      This stage will help us to come up with a solid persona for which every decision moving forward will\n                      be\n                      based on. It helps if it has a name.\n                    ")])])],1)],1)]),t._v(" "),e("v-card",{staticClass:"pa-5",attrs:{flat:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("v-avatar",{staticClass:"ma-5",attrs:{size:"125",rounded:"0"}},[e("v-img",{attrs:{src:r(691)}})],1),t._v(" "),e("div",[e("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Define\n                  ")]),t._v(" "),e("v-card-subtitle",{staticClass:"pt-5"},[e("p",[t._v("\n                      The empathize stage should give us the user persona that we will work with in defining the core problem that we will design a solution for. This will come largely from the list of pain points that we have uncovered during the empathize stage. Through techniques such as dot voting, 5-whys, why-how laddering, and so on.\n                    ")])])],1)],1)]),t._v(" "),e("v-card",{staticClass:"pa-5",attrs:{flat:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("v-avatar",{staticClass:"ma-5",attrs:{size:"125",rounded:"0"}},[e("v-img",{attrs:{src:r(692)}})],1),t._v(" "),e("div",[e("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Ideate\n                  ")]),t._v(" "),e("v-card-subtitle",{staticClass:"pt-5"},[e("p",[t._v("\n                      A solution needs to be useful, usable, and desirable. In this step is where we think about numerous solutions to the core problem you have identified in the Define stage. In my experience, anything goes! You will get quirky and really out-there ideas. Some, albeit being impossible to execute, helps to get more ideas to the table. I really enjoy this part of the design thinking process where you can make full use of experiences and knowledge by shaping it with your imagination and creativity.\nHere I employ a diverge-converge approach. Brainstorm a number of ideas, merge to converge analogous or related ideas to few key ideas, evaluate feasibility and viability of the remaining selections, and prioritize according to available resources.\n                    ")])])],1)],1)]),t._v(" "),e("v-card",{staticClass:"pa-5",attrs:{flat:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("v-avatar",{staticClass:"ma-5",attrs:{size:"125",rounded:"0"}},[e("v-img",{attrs:{src:r(693)}})],1),t._v(" "),e("div",[e("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Prototype\n                  ")]),t._v(" "),e("v-card-subtitle",{staticClass:"pt-5"},[e("p",[t._v("\n                      Time to get our hands dirty (can be figuratively or literally if the solution is somehow related to agriculture)! Prototypes can take various shapes and form. I like to view prototypes as our primary tool to validate your assumptions about how to the solution you came up with in the previous stage. It’s a bundle of assumptions about how the problem can be solved. Assumptions about a solution to solve the core problem defined through persona created in the two previous stages.\n                    ")]),t._v(" "),e("p",[t._v("\n                      In my experience, as long as your assumptions can be validated with your users in the next stage, Test, the best prototype is cheap and low effort. \n                    ")])])],1)],1)]),t._v(" "),e("v-card",{staticClass:"pa-5",attrs:{flat:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("v-avatar",{staticClass:"ma-5",attrs:{size:"125",rounded:"0"}},[e("v-img",{attrs:{src:r(694)}})],1),t._v(" "),e("div",[e("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Test\n                  ")]),t._v(" "),e("v-card-subtitle",{staticClass:"pt-5"},[e("p",[t._v("\n                      This time we will put our prototype to work. In my work I employ, at least 3 levels of tests before testing with actual users as often reaching users will incur some cost. First level is  test it with a a few from my team or colleagues within the project. Get their thoughts and get things fixed based on their feedback. Test it to 2 more groups within your company/network (if the data is not sensitive or the project is open sourced) then go to your users 😊 By this time, your prototype may look a bit or a lot different from when you started. Learn from your users and go back to the assumptions that you made in the prototype stage and check if they are validated or if they rejected. \n                    ")])])],1)],1)])],1),t._v(" "),e("v-divider",{staticClass:"mt-10 mt-10"}),t._v(" "),e("v-row",{staticClass:"mt-10 mb-10",attrs:{id:"craft-data-viz-story"}},[e("h1",{staticClass:"mt-5 mb-5"},[t._v("\n              The value of communicating impact\n            ")]),t._v(" "),e("p",[t._v("\n              My projects throughout the years helped me to develop an awareness of how good design can make a difference. Design is universal. You can design an app, show, video, sound, illustration, stories, sculpture, furniture, cars, rockets and everything! But only great design can deliver the impact that you maybe seeking. \n            ")]),t._v(" "),e("p",[t._v("\n              And another thing that we can design is information. That’s right, it’s information design.\nTo be honest, I’m not aware that there is a formal domain of study for how to effectively present information to maximize comprehension and impact. However, being a geomatics engineer by education and practice, I have already dabbled with information design a lot through cartography, the science and art of making maps! \n            ")]),t._v(" "),e("p",[t._v("\n              I never thought about it before but maps are the most efficient way to present information wherein the spatial location is a relevant data dimension to be displayed. We we’re working with big data before it gained popularity in the tech space. Yes, we did! Satellite images and cloud point datasets. We just know that our codes needs to be design optimally to avoid longer-than-we-can-wait runtimes. \n            ")]),t._v(" "),e("p",[t._v("\n              For me, working with maps, naturally evolved into making mapping applications as often a static map limited in terms of the layers of information you can display. With more information available, the next thing to think about is how to display it together with your map. This is where I started to really lean into learning about visual design, interaction design, user experience design, Gestalt principles, and cognitive psychology.\n            ")]),t._v(" "),e("p",[t._v("\n              In making a data visualization or story, I follow this 5-step recipe I’ve used effectively in similar projects. \n            ")])]),t._v(" "),e("v-row",{staticClass:"mt-5"},[e("h3",[t._v("\n              My 5-step Guide to an Impactful Viz & Story\n            ")]),t._v(" "),e("v-card",{attrs:{flat:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("v-avatar",{staticClass:"ma-5",attrs:{size:"125",rounded:"0"}},[e("v-img",{attrs:{src:r(695)}})],1),t._v(" "),e("div",[e("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Establish the data story’s purpose\n                  ")]),t._v(" "),e("v-card-subtitle",{staticClass:"pt-5"},[e("p",[t._v("\n                      Who is the story for? When will it be published? What’s the purpose of the story? Is it to inform? Is it to present an argument? The purpose of the story defines the needed data/evidence, tone of storytelling, and overall aesthetic.\n                    ")])])],1)],1)]),t._v(" "),e("v-card",{attrs:{flat:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("v-avatar",{staticClass:"ma-5",attrs:{size:"125",rounded:"0"}},[e("v-img",{attrs:{src:r(696)}})],1),t._v(" "),e("div",[e("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Gather data, validate data sources & methodologies\n                  ")]),t._v(" "),e("v-card-subtitle",{staticClass:"pt-5"},[e("p",[t._v("\n                      Often, you may have a dataset to work with already. If that’s not the case, Check out this list of possible data sources. Study your dataset and the methodology employed to create it. Take note of assumptions and notes about the datasets.\n                    ")])])],1)],1)]),t._v(" "),e("v-card",{attrs:{flat:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("v-avatar",{staticClass:"ma-5",attrs:{size:"125",rounded:"0"}},[e("v-img",{attrs:{src:r(697)}})],1),t._v(" "),e("div",[e("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Explore your datasets & do adjacent research\n                  ")]),t._v(" "),e("v-card-subtitle",{staticClass:"pt-5"},[e("p",[t._v("\n                      Choose a data exploration tool and explore the data. It can be your favorite spreadsheet software and create a couple of charts/graphs/maps. Be on the watch for patterns, outliers, missing data and so on. Create an informed perspective by reading articles and papers, watching videos, and so on.\n                    ")])])],1)],1)]),t._v(" "),e("v-card",{attrs:{flat:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("v-avatar",{staticClass:"ma-5",attrs:{size:"125",rounded:"0"}},[e("v-img",{attrs:{src:r(698)}})],1),t._v(" "),e("div",[e("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Structure your story around data & its purpose\n                  ")]),t._v(" "),e("v-card-subtitle",{staticClass:"pt-5"},[e("p",[t._v("\n                      Outline your data story. At the minimum, it needs to have an INTRO, ARGUMENT/BODY, and a RESOLUTION. In between, there should be a transition element to ensure that the flow of thoughts is smooth. Every element in your data story should contribute to its purpose. This should help your story be focused and concise.\n                    ")])])],1)],1)]),t._v(" "),e("v-card",{attrs:{flat:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("v-avatar",{staticClass:"ma-5",attrs:{size:"125",rounded:"0"}},[e("v-img",{attrs:{src:r(699)}})],1),t._v(" "),e("div",[e("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Put it all together, test & iterate.\n                  ")]),t._v(" "),e("v-card-subtitle",{staticClass:"pt-5"},[e("p",[t._v("\n                      Put your story together. Support text with visuals. It can be a visualization or an image. Make it interactive. I believe that data stories are more effective if the story is uncovered by the readers/users themselves.\n                    ")]),t._v(" "),e("p",[t._v("\n                      Emphasize and highlight crucial info to boost comprehension on the most important bits. Make it fun :)\n                    ")])])],1)],1)])],1)],1)],1)],1),t._v(" "),e("br")],1)}),[],!1,null,"08d42f7d",null);e.default=component.exports;h()(component,{Header1:r(477).default}),h()(component,{VAvatar:v.a,VCard:f.a,VCardSubtitle:m.b,VCardTitle:m.d,VContainer:_.a,VDivider:y.a,VImg:w.a,VRow:x.a})}}]);