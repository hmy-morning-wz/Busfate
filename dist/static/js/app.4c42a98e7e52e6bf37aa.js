webpackJsonp([8],{NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("7+uW"),r=e("mvHQ"),o=e.n(r),i=e("Xxa5"),u=e.n(i),c=e("Dd8w"),s=e.n(c),p=e("//Fk"),h=e.n(p),l=e("woOf"),f=e.n(l),d=e("exGp"),m=e.n(d),v=e("mtWM"),w=e.n(v);function g(n){var t="";switch(n.code){case"0":case"200":case"20000":case"40004":t=n}return t}var y,b=(y=m()(u.a.mark(function n(t){var e,a,r;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={},a=f()({baseURL:"https://operation.allcitygo.com",method:"GET",queryString:""},t),r=new h.a(function(n,e){w()(s()({timeout:1e4,headers:{"Content-Type":"application/json; charset=UTF-8"}||t.headers,crossDomain:!0,withCredentials:!0},a)).then(function(t){n(t)}).catch(function(n){e(n)})}),n.next=5,r.then(function(n){200===n.status&&(e=n.data)},function(n){console.log(n),e={err:n.response.status,errMsg:n.response.data.message||"请检查网络是否正常",code:n.response.data.code}});case 5:return n.abrupt("return",g(e));case 6:case"end":return n.stop()}},n,this)})),function(n){return y.apply(this,arguments)});function x(n,t){return new h.a(function(e,a){var r={request:o()(t)},i=[];for(var u in r)i.push(u+"="+r[u]);var c=i.join("&"),s=new XMLHttpRequest;s.open("POST",n),s.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var n=JSON.parse(this.response);e(n)}else a(new Error("访问出错！"))},s.send(c)})}var S={name:"App",data:function(){return{request:b,ajax:x}}},k={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var q=e("VU/8")(S,k,!1,function(n){e("a47/")},null,null).exports,P=[{path:"",redirect:{name:"index"}},{path:"/",component:function(n){return e.e(6).then(function(){var t=[e("8hXn")];n.apply(null,t)}.bind(this)).catch(e.oe)},name:"index"},{path:"/BusCode",component:function(n){return e.e(3).then(function(){var t=[e("MwBY")];n.apply(null,t)}.bind(this)).catch(e.oe)},name:"BusCode"},{path:"/RankingList",component:function(n){return e.e(0).then(function(){var t=[e("PvdB")];n.apply(null,t)}.bind(this)).catch(e.oe)},name:"RankingList",meta:{title:"公交情缘"}},{path:"/Signup",component:function(n){return e.e(2).then(function(){var t=[e("psOb")];n.apply(null,t)}.bind(this)).catch(e.oe)},name:"Signup",meta:{title:"活动报名"}},{path:"/Preheat",component:function(n){return e.e(1).then(function(){var t=[e("4CUd")];n.apply(null,t)}.bind(this)).catch(e.oe)},name:"Preheat",meta:{title:"活动预热"}},{path:"/result",component:function(n){return e.e(4).then(function(){var t=[e("mKPe")];n.apply(null,t)}.bind(this)).catch(e.oe)},name:"result",meta:{title:"公交情缘"}}];P.push({path:"*",component:function(n){return e.e(5).then(function(){var t=[e("qZa5")];n.apply(null,t)}.bind(this)).catch(e.oe)},name:"error",meta:{title:"众城通"}});var C=P,H=e("/ocq"),M=e("Au9i"),O=e.n(M);e("d8/S");a.default.config.performance=!0,a.default.config.productionTip=!0,a.default.config.warnHandler=function(n,t,e){console.log(n,t,e)},a.default.use(H.a),a.default.use(O.a);var R=new H.a({routes:C});R.beforeEach(function(n,t,e){e(),document.title=n.meta.title}),new a.default({el:"#app",router:R,render:function(n){return n(q)},http:{root:"/root",headers:{Authorization:"tongkayun own mobile"}}})},"a47/":function(n,t){},"d8/S":function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.4c42a98e7e52e6bf37aa.js.map