webpackJsonp([2],{"9d5+":function(t,e){},psOb:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Xxa5"),n=i.n(a),s=i("exGp"),o=i.n(s),l=i("//Fk"),c=i.n(l),r={name:"dialog",props:{showDialog:!1},data:function(){return{resolve:"",reject:"",promise:"",isError:!1,modal:{title:"",text:"",cancelButtonText:"",confirmButtonText:"OK~"}}},methods:{submit:function(){this.resolve("submit")},cancel:function(){this.reject("cancel")},confirm:function(){var t=this;return this.promise=new c.a(function(e,i){t.resolve=e,t.reject=i}),this.promise}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog"},[i("div",{staticClass:"mask"}),t._v(" "),i("div",{staticClass:"dialog-content",class:{isError:!0===t.isError}},[i("h3",{staticClass:"title"},[t._v(t._s(t.modal.title))]),t._v(" "),i("p",{staticClass:"text"},[t._v(t._s(t.modal.text))]),t._v(" "),i("div",{staticClass:"btn-group"},[i("div",{staticClass:"btn_confirm",on:{click:t.submit}},[t._v(t._s(t.modal.confirmButtonText))]),t._v(" "),i("div",{staticClass:"btn_cancel",on:{click:t.cancel}},[t._v(t._s(t.modal.cancelButtonText))])])])])},staticRenderFns:[]};var d={name:"Signup",components:{ConfirmBan:i("VU/8")(r,u,!1,function(t){i("wrWz")},null,null).exports},data:function(){return{imgs:[],files:[],isActive:"woman",isOk:!1,nicknameValue:"",buslineValue:"",phoneValue:"",showDialog:!1,tiptitle:"您有信息未填写正确哦~",tipContent:"报名成功，我们会尽快审核哦",photoLink:"",gender:1}},methods:{handleWomanClick:function(){this.isActive="woman",this.gender=1},handleManClick:function(){this.isActive="man",this.gender=2},readFile:function(t){var e=new FileReader;this.files.push(t.target.files[0]),e.readAsDataURL(t.target.files[0]);var i=this;e.onload=function(){i.imgs.push(e.result),i.$refs.pathClear.value="",""!==i.nicknameValue&&""!==i.phoneValue&&""!==i.buslineValue&&0!==i.imgs.length?i.isOk=!0:i.isOk=!1;var t=new FormData;t.append("file",i.files[0]),i.$parent.request({baseURL:"https://sit-operation.allcitygo.com/buslove/uploadFile/uploadOne",headers:{"Content-type":"multipart/form-data"},method:"POST",data:t}).then(function(t){"20000"===t.code&&(i.photoLink=t.data,console.log(i.photoLink))}).catch(function(t){console.log(t)})}},del:function(t){t.target.parentNode.parentNode.removeChild(t.target.parentNode),console.log(this.imgs),this.imgs.splice(0,1),this.files.splice(0,1),console.log(this.imgs),this.photoLink="",""!==this.nicknameValue&&""!==this.phoneValue&&""!==this.buslineValue&&0!==this.imgs.length?this.isOk=!0:this.isOk=!1},changeDisable:function(){""!==this.nicknameValue&&""!==this.phoneValue&&""!==this.buslineValue&&0!==this.imgs.length?this.isOk=!0:this.isOk=!1},uploadMes:function(){var t=this;return o()(n.a.mark(function e(){var i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$parent.request({url:"participant/apply",method:"post",data:{gender:t.gender,lineNo:t.buslineValue,nickname:t.nicknameValue,photo:t.photoLink,telephone:t.phoneValue,userId:window.localStorage.userId}});case 2:"20000"===(i=e.sent).code?(t.$refs.dialog.isError=!0,t.showDialog=!0,t.$refs.dialog.modal.title="",t.$refs.dialog.modal.text=t.tipContent,t.$refs.dialog.confirm().then(function(){t.showDialog=!1}).catch(function(){t.showDialog=!1})):"40004"===i.code?(t.$refs.dialog.isError=!1,t.showDialog=!0,t.$refs.dialog.modal.title="",t.$refs.dialog.modal.text="该用户已报名",t.$refs.dialog.confirm().then(function(){t.showDialog=!1}).catch(function(){t.showDialog=!1})):(t.$refs.dialog.isError=!1,t.showDialog=!0,t.$refs.dialog.modal.title="",t.$refs.dialog.modal.text="网络繁忙",t.$refs.dialog.confirm().then(function(){t.showDialog=!1}).catch(function(){t.showDialog=!1}));case 4:case"end":return e.stop()}},e,t)}))()},sub_mes:function(){var t=this;/1[3|4|5|7|8][0-9](\d|\*){4}\d{4}/.test(this.phoneValue)&&/^[0-9a-zA-Z\u4E00-\u9FA5]{1,20}$/.test(this.nicknameValue)&&this.isOk?(console.log(this.gender),this.uploadMes()):(this.$refs.dialog.isError=!1,this.showDialog=!0,this.$refs.dialog.modal.text="",this.$refs.dialog.modal.title=this.tiptitle,this.$refs.dialog.confirm().then(function(){t.showDialog=!1}).catch(function(){t.showDialog=!1}))}},created:function(){}};mui.previewImage();var h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signup"},[a("div",{staticClass:"contain_ban"},[a("div",{staticClass:"message-ban"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.nicknameValue,expression:"nicknameValue"}],staticClass:"nickname",attrs:{type:"text",placeholder:"昵称（支持英文大小写和中文）"},domProps:{value:t.nicknameValue},on:{input:[function(e){e.target.composing||(t.nicknameValue=e.target.value)},function(e){t.changeDisable()}]}}),t._v(" "),a("div",{staticClass:"check-sex"},[a("div",{staticClass:"woman-option",class:{active:"woman"===t.isActive},on:{click:function(e){t.handleWomanClick()}}},[t._v("我是女神")]),t._v(" "),a("div",{staticClass:"man-option",class:{active:"man"===t.isActive},on:{click:function(e){t.handleManClick()}}},[t._v("我是男神")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.buslineValue,expression:"buslineValue"}],staticClass:"busline",staticStyle:{width:"80%"},attrs:{type:"text",placeholder:"最常乘坐的公交线路（如189）"},domProps:{value:t.buslineValue},on:{input:[function(e){e.target.composing||(t.buslineValue=e.target.value)},function(e){t.changeDisable()}]}}),t._v(" "),a("span",{staticStyle:{"font-family":"PingFangSC-Regular","font-size":"0.4rem",color:"#333333"}},[t._v("路")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneValue,expression:"phoneValue"}],staticClass:"phoneNo",attrs:{type:"text",placeholder:"手机号码（为您保密，仅用于获奖联系哦）"},domProps:{value:t.phoneValue},on:{input:[function(e){e.target.composing||(t.phoneValue=e.target.value)},function(e){t.changeDisable()}]}})]),t._v(" "),a("div",{staticClass:"imgUploading"},[t._m(0),t._v(" "),a("div",{staticStyle:{position:"absolute","margin-top":"0"},attrs:{id:"moveinput"}},[a("div",{staticClass:"inputcontrol"},[a("input",{ref:"pathClear",staticClass:"inputstyle",attrs:{type:"file",id:"input1",accept:"image*",capture:"camera"},on:{change:function(e){t.readFile(e)},input:function(e){t.changeDisable()}}})])]),t._v(" "),t._l(t.imgs,function(e,n){return t.imgs.length>0?a("div",{key:n,staticClass:"picture"},[a("div",{staticClass:"imgcont",staticStyle:{float:"left",position:"relative"}},[a("img",{staticClass:"showimg",attrs:{src:e,"data-preview-src":"","data-preview-group":"1"}}),t._v(" "),a("img",{staticClass:"delete",attrs:{src:i("rPUY")},on:{click:function(e){t.del(e)}}})])]):t._e()}),t._v(" "),a("div",{staticStyle:{clear:"both"}})],2),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("button",{staticClass:"sub-btn",class:{okBtn:!0===t.isOk},on:{click:function(e){t.sub_mes()}}},[t._v("提交")])])]),t._v(" "),a("ConfirmBan",{directives:[{name:"show",rawName:"v-show",value:t.showDialog,expression:"showDialog"}],ref:"dialog"})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"txt"},[e("span",[this._v("我的靓（只需上传一张）")])])}]};var m=i("VU/8")(d,h,!1,function(t){i("9d5+")},null,null);e.default=m.exports},rPUY:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAAXNSR0IArs4c6QAABMBJREFUaAXdWs9PE0EU3m5Ka0kKnLRwMBICbbx7AOPFhCMXvOjFRBMT9T/wZIwk/gdqYqIJF02MXjiScCHWg3fTQgDjAYQTpAm1pQG/b9nZLLOzP2Z3S4svgZmdffPm+zrz3s7s24yRkmxtbV1qtVozmUzmFkxW8Fc+OTkpoSyirYB6E/UG6n9Q1vFXQ9tqPp+vjo+P/8V1YskksWATmAPA+7AzC3B5XXvo20KfZfRdBLGlJMRikcHA2Xq9/ghAnqN+RZeAnz7s7cLei3K5/A71jp+eX7s2mbW1tTvHx8evYHDSz2gK7eumaT6bmpr6omMrMpmNjY2rR0dHn2B8WmeAhLrfBwYG7k5MTPyOYicSmVqtdhPT/hVL4HIUo2nqYNw9jDtfqVS+hdk1wxSwrB5AZ6UXRIjNHnfFxhEIN5AMZuQl/OM9LOQCrXT/Zo44iCdoKN9lxl/CJhLU/9zvITA8RGD4oBpYSYY+AuUV/PV6RlSY22i8rfIhDxlGrU6n86NXPqJCL7cxKGSz2RtylPP4DMNvPxMhMeIDzo8yyTNk+ECEwnk+R2Q8OtczNl6nj0MGbLP2k9252e8V4iVugdMhw70WGru5RRFjpllO2rgtm1YA4O633W7/AkvtTePw8LAxODhoNJtNY39/XxvoyMiIUSgUjMPDQ+Pg4EC7P4LBbi6Xu8bdtjVFOIfMwUosIqUSjyyGMTQ0ZJHa3t62rqP8GxsbM4rFoqXK/hRdQpwAG/9na5mBHc8j2sIZcQuBEWAUcRMR+rI90R5WCvwmlxiUZ8M6qO5zackShZCKCO2o7Mn2fa5nycPkURdTpX1CpFH6SKPR8NgPIuRHhHbi+BwHJ37yMDFFPLPHFvpIVEJBRHR8TQWWPOgzfPmQSMIIYSDLl4SzuwfjD5GUiG2vwmhWdhuPWycg1S9PAgy92Et5TKdIhLbLJtbbaWz1DKXf4DdD50CEflPiMjsN9PrYlT38CLmVU54RYbrIAFAQV2mVOzs7Bo4RSnNs5/20hTy4zLwPi4QjjY6OKn2EZrnkeD9tIQ8uM++DIsFIqiAgmwt6Dsm6GtcNLjO++01F/IiollzahMiDM1NPg4kfETr75uZm5AdrAix1kqklMGB1DSLC6Ib1bD0YSUyWFGeoxgCwKg+gcx1GxG3LL2ynQYg8TOZHsN5a7kGj1nmwIhBZgp4jQYRoL44QP3mYdj5kOY4RblNkCSIidP0IqeyJPiHlMnnQZ7imF0OUlbd51HVLFCJCX0VItid0w0qB39r9MWOFdwBM9GgdncURN+47ABJK6R3AEgk7bzTxSvYJrl+H/Qp9eP8pXtW+IS6HDGaFqb2faLtIr5vWkTK8jgBgbQQtn7FYoYGpN9YvihCvIELMzswIAlhuVdSnxXUfl1UsL2YrHHFmRrQwhwi2e+K6H0viA857MjYPGaYJ4D/zUGQepB+lTXxyOoNAPWTYyEQO1uNj1vtNiIv4VLiUZKhop9oWVJ162LbglwIkJk8AkIHauc23aO9lSrDNGQkiEokMlZjjhNP1/XcAoTNDMpQefaFRZdRSOfspqrP/I5MR3Zh6szNs3dwpdPfbGUGGpb31ufhfNblJ/Rffm7kJibpNrKdfAv4Dgh5naUyNc3YAAAAASUVORK5CYII="},wrWz:function(t,e){}});
//# sourceMappingURL=2.893b75ca63648454bf8e.js.map