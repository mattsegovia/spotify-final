webpackJsonp([0],{"1uuo":function(t,s){},"5mED":function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i=a("NYxO"),r={name:"DisplayResult",data:function(){return{queryString:"",artistInformation:{}}},props:["query","artistInfo"],components:{searchComponent:v},methods:{search_artist:function(t){},openModal:function(){document.getElementById("modals").classList.add("is-active")},closeModal:function(){document.getElementById("modals").classList.remove("is-active")},openModals:function(t){document.getElementsByClassName("modal")[t].style.display="block"},closeModals:function(t){document.getElementsByClassName("modal")[t].style.display="none"}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"DisplayResult"}},[a("br"),t._v(" "),a("p",{staticClass:"is-pulled-left is-clearfix is-paddingless is-marginless"}),t._v(" "),a("ul",{attrs:{id:"example-1"}},t._l(t.artistInfo,function(s){return a("li",{key:s},[a("ul",t._l(s.items,function(s,e){return a("li",{key:s},[a("button",{staticClass:"button is-large",on:{click:function(s){t.openModals(e)}}},[t._v(" \n    "+t._s(s.name)+" \n")]),t._v(" "),a("div",{staticClass:"modal",attrs:{id:"modals"}},[a("div",{staticClass:"modal-background"}),t._v(" "),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v(t._s(s.name))]),t._v(" "),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(s){t.closeModals(e)}}})]),t._v(" "),a("section",{staticClass:"modal-card-body"},[s.images.length>0?a("img",{staticClass:"artistPic image is-246x246",attrs:{src:s.images[0].url}}):a("img",{staticClass:"artistPic image is-246x246",attrs:{src:"https://image.flaticon.com/icons/svg/174/174872.svg"}})]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("div",{staticClass:"container"},[a("span",[t._v(" Popularity score: \n            "),s.popularity>80?a("img",{staticClass:"image is-32x32 has-text-centered",attrs:{src:"https://image.flaticon.com/icons/svg/597/597893.svg"}}):s.popularity>50&&s.popularity<80?a("img",{staticClass:"image is-32x32",attrs:{src:"https://image.flaticon.com/icons/svg/34/34780.svg"}}):a("img",{staticClass:"image is-32x32",attrs:{src:"https://image.flaticon.com/icons/svg/34/34812.svg"}})]),t._v(" "),a("br"),t._v(" "),a("p",[t._v(" Folowers: "+t._s(s.followers.total)+" ")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("  Genres: "+t._s(s.genres.toString())+" ")]),t._v(" "),a("br"),t._v(" "),a("a",{attrs:{href:s.external_urls.spotify}},[t._v("Artist Profile")])])])])])])}))])}))])},staticRenderFns:[]};var o=a("VU/8")(r,n,!1,function(t){a("flN0")},"data-v-22245b67",null).exports,c=io(),l={name:"Search",data:function(){return{query:"",queryType:"artist",queryImage:"https://image.flaticon.com/icons/svg/234/234450.svg",isFetchingResult:!1}},methods:{specifySearch:function(t,s){this.queryType=t,this.queryImage=s,console.log("type: "+this.queryType)},search_artist:function(t){this.isFetchingResult=!0,c.emit("add-search",this.query);var s=this;axios.get("/search/?artist="+t).then(function(t){s.isFetchingResult=!1,s.$store.state.artistInfo=t.data,console.log(s.artistInfo.artists)}),this.query=""}},computed:{placeholderText:function(){return"Search for "+this.queryType+"..."},artistInfo:function(){return this.$store.state.artistInfo}},components:{DisplayResult:o}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"search"},[a("div",{staticClass:"field has-addons "},[a("p",{staticClass:"control"},[a("span",{staticClass:"select navbar-item has-dropdown is-hoverable is-dark"},[a("a",{staticClass:"navbar-link"},[a("img",{attrs:{src:t.queryImage,height:"100",width:"50"}})]),t._v(" "),a("div",{staticClass:"navbar-dropdown is-boxed"},[a("a",{staticClass:"navbar-item",on:{click:function(s){t.specifySearch("song","https://image.flaticon.com/icons/svg/148/148722.svg")}}},[a("img",{attrs:{src:"https://image.flaticon.com/icons/svg/148/148722.svg",height:"100",width:"100"}})]),t._v(" "),a("a",{staticClass:"navbar-item",on:{click:function(s){t.specifySearch("artist","https://image.flaticon.com/icons/svg/234/234450.svg")}}},[a("img",{attrs:{src:"https://image.flaticon.com/icons/svg/234/234450.svg",height:"100",width:"100"}})]),t._v(" "),a("a",{staticClass:"navbar-item",on:{click:function(s){t.specifySearch("album","https://image.flaticon.com/icons/svg/140/140258.svg")}}},[a("img",{attrs:{src:"https://image.flaticon.com/icons/svg/140/140258.svg",height:"100",width:"100"}})])])])]),t._v(" "),a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text",placeholder:t.placeholderText},domProps:{value:t.query},on:{keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13,s.key,"Enter"))return null;t.search_artist(t.query)},input:function(s){s.target.composing||(t.query=s.target.value)}}})]),t._v(" "),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-success",attrs:{href:"#"},on:{click:function(s){t.search_artist(t.query)}}},[t._v("\n            Search\n            ")])])]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.isFetchingResult,expression:"isFetchingResult"}]},[t._v("Searching for "+t._s(t.queryType)+"...")]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:!t.isFetchingResult,expression:"!isFetchingResult"}]},[a("DisplayResult",{attrs:{query:t.query,artistInfo:t.artistInfo}})],1)])},staticRenderFns:[]};var v=a("VU/8")(l,u,!1,function(t){a("5mED")},"data-v-b84f2458",null).exports,h={name:"SearchHistory",data:function(){return{openHistory:!1}},computed:{count:function(){return this.$store.state.count},currentSearches:function(){return this.$store.state.searches}},methods:{search_artist:function(t){this.openHistory=!1,this.$store.state.query=t;var s=this;axios.get("/search/?artist="+t).then(function(t){s.$store.state.artistInfo=t.data})}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"modal",class:{"is-active":t.openHistory}},[a("div",{staticClass:"modal-background"}),t._v(" "),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Search History")]),t._v(" "),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(s){t.openHistory=!1}}})]),t._v(" "),a("section",{staticClass:"modal-card-body"},t._l(t.currentSearches,function(s){return a("a",{key:t.currentSearches.indexOf(s),staticClass:"panel-block",on:{click:function(a){t.search_artist(s.searchQuery)}}},[t._v(t._s(s.searchQuery)+" - "+t._s(s.searchTime))])})),t._v(" "),a("footer",{staticClass:"modal-card-foot"})])]),t._v(" "),a("a",{staticClass:"button is-success",attrs:{href:"#",id:"search-history"},on:{click:function(s){t.openHistory=!0}}},[t._v("Search History")])])},staticRenderFns:[]};var m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"login"}})},staticRenderFns:[]};var p={name:"app",data:function(){return{description:"Search for an artist, song, or album!"}},components:{searchComponent:v,SearchHistory:a("VU/8")(h,d,!1,function(t){a("QUXJ")},"data-v-05391478",null).exports,Login:a("VU/8")({name:"login",data:function(){return{authtoken:"abcd",error:!1}},methods:{submitTodo:function(t){if(""===t)return this.error=!0;this.authtoken="",this.error=!1}}},m,!1,function(t){a("cpCd")},"data-v-62a2119c",null).exports,DisplayResult:o}},f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),a("br"),t._v(" "),a("h1",{staticClass:"title"},[t._v(t._s(t.description))]),t._v(" "),a("search-component"),t._v(" "),a("SearchHistory")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("nav",{staticClass:"navbar is-transparent is-dark"},[s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item",attrs:{href:"https://www.spotify.com/us/",w:""}},[s("img",{attrs:{src:a("aHsI"),width:"112",height:"28"}})])]),this._v(" "),s("div",{staticClass:"navbar-menu",attrs:{id:"navbarExampleTransparentExample"}},[s("div",{staticClass:"navbar-start"},[s("a",{staticClass:"navbar-item"},[this._v("\n                  Featured Playlists\n                ")]),this._v(" "),s("a",{staticClass:"navbar-item"},[this._v("\n                  New Releases\n                ")])])])])}]};var _=a("VU/8")(p,f,!1,function(t){a("PM0o")},null,null).exports,g=a("/ocq"),y={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var b=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},y,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports;e.a.use(g.a);var C=new g.a({routes:[{path:"/what",name:"HelloWorld",component:b}]});e.a.use(i.a),e.a.config.productionTip=!1,store=new i.a.Store({state:{searches:[],artistInfo:{}},mutations:{update:function(t,s){t.searches=s},updateArtistInfo:function(t,s){t.artistInfo=s}}}),app=new e.a({el:"#app",router:C,store:store,components:{App:_},template:"<App/>"})},PM0o:function(t,s){},QUXJ:function(t,s){},aHsI:function(t,s,a){t.exports=a.p+"static/img/spotify_logo_green.11dc437.png"},cpCd:function(t,s){},flN0:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.3341f5b9065828b4cb33.js.map