webpackJsonp([5],{"CJG/":function(t,e){},n3Vr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("//Fk"),s=n.n(i),c={name:"dialog",props:{dialogOption:Object},data:function(){return{resolve:"",reject:"",promise:""}},computed:{modal:function(){var t=this.dialogOption;return{title:t.title||"提示",text:t.text,cancelButtonText:t.cancelButtonText?t.cancelButtonText:"取消",confirmButtonText:t.confirmButtonText?t.confirmButtonText:"确定"}}},methods:{submit:function(){this.resolve("submit")},cancel:function(){this.reject("cancel")},confirm:function(){var t=this;return this.promise=new s.a(function(e,n){t.resolve=e,t.reject=n}),this.promise}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog"},[n("div",{staticClass:"mask"}),t._v(" "),n("div",{staticClass:"dialog-content"},[n("h3",{staticClass:"title"},[t._v(t._s(t.modal.title))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(t.modal.text))]),t._v(" "),n("div",{staticClass:"btn-group"},[n("div",{staticClass:"btn",on:{click:t.cancel}},[t._v(t._s(t.modal.cancelButtonText))]),t._v(" "),n("div",{staticClass:"btn",on:{click:t.submit}},[t._v(t._s(t.modal.confirmButtonText))])])])])},staticRenderFns:[]};var a=n("VU/8")(c,o,!1,function(t){n("CJG/")},null,null);e.default=a.exports}});
//# sourceMappingURL=5.7c74ee8c22c76e2a6fa0.js.map