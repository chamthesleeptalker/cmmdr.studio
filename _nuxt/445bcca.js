(window.webpackJsonp=window.webpackJsonp||[]).push([[55,56,93],{471:function(e,t,r){"use strict";r(9),r(11),r(10),r(5),r(14),r(8),r(15);var o=r(2),n=(r(25),r(218),r(219),r(475),r(221)),l=r(474),c=r(90),d=r(13);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=Object(d.a)(l.a,c.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=v({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=l.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},472:function(e,t,r){var content=r(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("7082b72e",content,!0,{sourceMap:!1})},473:function(e,t,r){var o=r(20)((function(i){return i[1]}));o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),o.push([e.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{animation-duration:2.2s;animation-iteration-count:infinite;animation-name:indeterminate-ltr}.v-progress-linear .v-progress-linear__indeterminate--active .short{animation-duration:2.2s;animation-iteration-count:infinite;animation-name:indeterminate-short-ltr}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-rtl}.v-progress-linear__stream{animation:stream-ltr .25s linear infinite;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;right:-8px;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:8px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:40px 40px}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{animation-duration:2s;animation-iteration-count:infinite;animation-name:query-ltr}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{animation-duration:2s;animation-iteration-count:infinite;animation-name:query-short-ltr}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{animation-play-state:running}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes query-ltr{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes query-rtl{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes query-short-ltr{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes query-short-rtl{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),o.locals={},e.exports=o},474:function(e,t,r){"use strict";r(25);var o=r(1),n=(r(9),r(11),r(10),r(5),r(14),r(8),r(15),r(2)),l=(r(137),r(472),r(217)),c=r(138),d=r(40),h=r(139),v=r(220),f=r(39),m=r(0),y=r(13);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var w=Object(y.a)(d.a,Object(h.b)(["absolute","fixed","top","bottom"]),v.a,f.a).extend({name:"v-progress-linear",directives:{intersect:c.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(e,this.isReversed?"right":"left",Object(m.g)(this.normalizedValue,"%")),Object(n.a)(e,"width",Object(m.g)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?l.c:l.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(m.g)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(m.m)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),x=w;t.a=o.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(x,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},475:function(e,t,r){var content=r(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("61d1dd60",content,!0,{sourceMap:!1})},476:function(e,t,r){var o=r(20)((function(i){return i[1]}));o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),o.push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:.25rem}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:32px .25rem}.v-card{word-wrap:break-word;border-width:thin;display:block;max-width:100%;outline:none;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-property:box-shadow,opacity;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{left:0;overflow:hidden;right:0;top:0}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:16px;font-weight:400;letter-spacing:.0071428571em;line-height:1.375rem}.v-card__subtitle,.v-card__text,.v-card__title{padding:20px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:14px;font-weight:500;letter-spacing:.0125em;line-height:14px;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:20px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),o.locals={},e.exports=o},486:function(e,t,r){var content=r(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("deb58b0a",content,!0,{sourceMap:!1})},487:function(e,t,r){"use strict";r(25),r(70);var o=r(1);t.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var r=this;this.clearDelay();var o=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){r.isActive={open:!0,close:!1}[e]},o)}}})},488:function(e,t,r){e.exports=r.p+"img/da.69bb644.png"},489:function(e,t,r){e.exports=r.p+"img/PhilSHORE.44c6412.png"},490:function(e,t,r){e.exports=r.p+"img/dTracker.60966b8.png"},491:function(e,t,r){e.exports=r.p+"img/dDist.e93e1af.png"},492:function(e,t,r){e.exports=r.p+"img/sra.0ae16ca.png"},493:function(e,t,r){e.exports=r.p+"img/filgeo.21935ae.png"},495:function(e,t,r){"use strict";r(486)},496:function(e,t,r){var o=r(20)((function(i){return i[1]}));o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),o.push([e.i,".portfolio-card-title{color:#fff!important;font-size:1.5rem;text-align:center}",""]),o.locals={},e.exports=o},498:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var o={dataViz:{title:"data visualization and storytelling",works:[{src:r(500),title:"Flowers and Tracks: A visual and cartographic exploration",desc:"This data story invokes the readers curiosity regarding historical typhoon data in the west pacific region and how it has changed over the years because of climate change.",data:"RSMC Tokyo-Typhoon Center",date:"November 2022",page:"/flowers-and-tracks"},{src:r(501),title:"To all the Women of the World: A Data Portrait Project",desc:"A data portrait project for GeoLadiesPH in celebration of International Women's Day 2022.",data:"Gathered survey responses throughout the month of March 2022",date:"March 2022",page:"/to-all-the-women-of-the-world"},{src:r(502),title:"Why do we visualize data?",desc:"An exploration to find the intersections of why we make personal visualization projects.",data:"Survey results from the Data Visualization Society's State of the Industry Survey",date:"January 2022",page:"/why-do-we-visualize-data"},{src:r(503),title:"Sephora Flowers",desc:"Determining the SEPHORA'S top 20 products based on the number of reviews and ratings",data:"Scrapped data from Sephora's website",date:"May 2021",page:"/sephora-flowers"},{src:r(504),title:"Drug Prevalence in Policies of the Western Pacific Region",desc:"This visualization aims to convey the characteristics of the existing policies that the countries in the Western Pacific Region have.",data:"University of the Philippines Manila Research Team",date:"June 2021",page:"/drug-policy"},{src:r(505),title:"Celebrating 5 years of Crowd2Map Tanzania",desc:"A contribution to Viz for Social Good's call to visualize the milestones of Crowd2Map Tanzania as they celebrate their 5th year.",data:"Viz for Social Good",date:"September 2021",page:"/crowd2map-tanzania"},{src:r(506),title:"Trees of Innovation (Data visualization and Data Story)",desc:"A winning entry to 2020's World Statistics data visualization and data story-telling challenge. Relating trees to a member country's GDP and full-time researcher hiring.",data:"Asian Development Bank's Key Indicators Database",date:"Dec 2020",page:"/trees-of-innovation"}]},product:{title:"Product Development",works:[{src:"https://www.irayaenergies.com/wp-content/uploads/2022/02/brochure.png",title:"ElasticDocs, AI-powered Intuitive Knowledge Container",desc:"ElasticDocs is Iraya's flagship products that optimizes an organization's knowledge investment by making it searchable and usable than ever.",data:"Iraya Energies",date:"",page:"/projects/elasticdocs-iraya"},{src:r(488),title:"Data Atelier",desc:"Data Atelier aims to democratize data access and availability for search and further processing by empowering users to upcycle their organization's data investment.",data:"Iraya Energies",date:"",page:"/projects/da-iraya"}]},gisDev:{title:"Research & Digital Solutions",works:[{src:r(489),title:"Philippine Sites for Harnessing Ocean Renewable Energy",desc:"The PhilSHORE project evaluated the Philippine's potential for tidal current energy.",data:"Training Center for Applied Geodesy and Photogrammetry",date:"",page:"/projects/philshore"},{src:r(490),title:"Diwata-1 Satellite Tracker",desc:"The Diwata-1 Tracker visualizes current satellite location and future path as a guide to be used for image capture missions.",data:"PHL-Microsat (Philippine Microsatellite Project)",date:"",page:"/projects/diwata-tracker"},{src:r(491),title:"Diwata-1 Satellite Image Distribution and Image Request Platform",desc:"Images captured by the Diwata-1 Microsatellite can be accessed through this platform. Imagery for new locations along the satelitte path can be requested as well.",data:"PHL-Microsat (Philippine Microsatellite Project)",date:"",page:"/projects/diwata-distribution"},{src:r(492),title:"Yield Estimation System for Sugarcane Project",desc:"The SRA-YESS WebGIS platform served as a dashboard to make data-driven decisions to predict and optimize farm output.",data:"Sugar Regulatory Administrator",date:"",page:"/projects/sra-yess"},{src:r(493),title:"Pasil B and C Hydroelectric Plant Project and the National Greening Program",desc:"This project visualization tool enabled ground personnel to have a compact and portable way to display relevant project datasets.",data:"Fil Geosolutions Inc.",date:"",page:"/projects/filgeo"}]}}},500:function(e,t,r){e.exports=r.p+"img/img7.4976568.png"},501:function(e,t,r){e.exports=r.p+"img/img1.9c27eea.jpg"},502:function(e,t,r){e.exports=r.p+"img/img2.9d19231.jpg"},503:function(e,t,r){e.exports=r.p+"img/img3.3679071.jpg"},504:function(e,t,r){e.exports=r.p+"img/img6.bbbe43b.jpg"},505:function(e,t,r){e.exports=r.p+"img/img5.1e38a6a.jpg"},506:function(e,t,r){e.exports=r.p+"img/img4.70e3653.jpg"},507:function(e,t,r){"use strict";r.r(t);var o={name:"PortfolioCard",props:{item:Object},data:function(){return{absolute:!0,overlay:!1,darkB:!1,lightB:!0}}},n=(r(495),r(38)),l=r(46),c=r.n(l),d=r(471),h=r(461),v=r(217),f=r(516),m=r(174),y=r(210),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("v-hover",{scopedSlots:e._u([{key:"default",fn:function(r){var o=r.hover;return[t("v-card",{staticClass:"portfolio-card overflow-hidden",attrs:{to:e.item.page}},[t("v-img",{attrs:{src:e.item.src}}),e._v(" "),t("v-fade-transition",[o?t("v-overlay",{staticClass:"pa-3",attrs:{absolute:"",color:"#04010f",opacity:"0.8",light:!0,dark:!1}},[t("v-container",[t("p",{staticClass:"text-h4 portfolio-card-title"},[e._v("\n              "+e._s(e.item.title)+"\n            ")])])],1):e._e()],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VContainer:h.a,VFadeTransition:v.c,VHover:f.a,VImg:m.a,VOverlay:y.a})},509:function(e,t,r){var content=r(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("aea61b0c",content,!0,{sourceMap:!1})},516:function(e,t,r){"use strict";var o=r(487),n=r(65),l=r(13),c=r(12);t.a=Object(l.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},517:function(e,t,r){"use strict";r(509)},518:function(e,t,r){var o=r(20)((function(i){return i[1]}));o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),o.push([e.i,".portfolio-component{margin:0;padding:0}.portfolio-card{border-radius:0!important;box-shadow:none!important}.portfolio-row{width:100%}",""]),o.locals={},e.exports=o},527:function(e,t,r){"use strict";r.r(t);r(57),r(5),r(34),r(35);var o=r(498),n={name:"Portfolio",props:{works:Array},data:function(){return{portfolio:o.a,reveal:!1}},components:{PortfolioCard:function(){return Promise.resolve().then(r.bind(null,507))}},methods:{},mounted:function(){}},l=(r(517),r(38)),c=r(46),d=r.n(c),h=r(463),v=r(465),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"portfolio-component mini-spacer bg-extra-light"},[t("v-row",{staticClass:"portfolio-row ma-0 pa-0"},[t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[t("div",{staticClass:"text-center"})])],1),e._v(" "),t("v-row",{staticClass:"portfolio-row ma-0 pa-0"},e._l(e.works.slice(1),(function(e){return t("v-col",{key:e.title,staticClass:"ma-0 pa-0",attrs:{cols:"12",md:"6",lg:"4"}},[t("portfolio-card",{attrs:{item:e}})],1)})),1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports;d()(component,{PortfolioCard:r(507).default}),d()(component,{VCol:h.a,VRow:v.a})}}]);