webpackJsonp([2],{"6SoI":function(t,i){},psOb:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"Signup",data:function(){return{imgs:[],isActive:"woman",notOK:"notOK"}},methods:{handleWomanClick:function(){this.isActive="woman"},handleManClick:function(){this.isActive="man"},readFile:function(t){var i=new FileReader;console.log(t.target.files[0]),i.readAsDataURL(t.target.files[0]);var s=this;i.onload=function(){s.imgs.push(i.result),s.$refs.pathClear.value="",console.log(i.result)}},del:function(t){t.target.parentNode.parentNode.removeChild(t.target.parentNode),console.log(this.imgs),this.imgs.splice(0,1),console.log(this.imgs)},changeDisable:function(){}}};mui.previewImage();var a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"signup"},[e("div",{staticClass:"contain"},[e("div",{staticClass:"message-ban"},[e("input",{staticClass:"nickname",attrs:{type:"text",placeholder:"昵称（支持英文大小写和中文）"}}),t._v(" "),e("div",{staticClass:"check-sex"},[e("div",{staticClass:"woman-option",class:{active:"woman"===t.isActive},on:{click:function(i){t.handleWomanClick()}}},[t._v("我是女神")]),t._v(" "),e("div",{staticClass:"man-option",class:{active:"man"===t.isActive},on:{click:function(i){t.handleManClick()}}},[t._v("我是男神")])]),t._v(" "),e("input",{staticClass:"busline",staticStyle:{width:"92%"},attrs:{type:"text",placeholder:"最常乘坐的公交线路（如189）"}}),e("span",{staticStyle:{"font-family":"PingFangSC-Regular","font-size":"0.4rem",color:"#333333"}},[t._v("路")]),t._v(" "),e("input",{staticClass:"phoneNo",attrs:{type:"text",placeholder:"手机号码（为您保密，仅用于获奖联系哦）"}})]),t._v(" "),e("div",{staticClass:"imgUploading"},[t._m(0),t._v(" "),e("div",{staticStyle:{position:"absolute","margin-top":"0"},attrs:{id:"moveinput"}},[e("div",{staticClass:"inputcontrol"},[e("input",{ref:"pathClear",staticClass:"inputstyle",attrs:{type:"file",id:"input1",accept:"image*",capture:"camera"},on:{change:function(i){t.readFile(i)}}})])]),t._v(" "),t._l(t.imgs,function(i,a){return t.imgs.length>0?e("div",{key:a,staticClass:"picture"},[e("div",{staticClass:"imgcont",staticStyle:{float:"left",position:"relative"}},[e("img",{staticClass:"showimg",attrs:{src:i,"data-preview-src":"","data-preview-group":"1"}}),t._v(" "),e("img",{staticClass:"delete",attrs:{src:s("rPUY")},on:{click:function(i){t.del(i)}}})])]):t._e()}),t._v(" "),e("div",{staticStyle:{clear:"both"}})],2),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("button",{staticClass:"sub-btn",attrs:{disabled:{disabled:"notOK"===t.notOk}}},[t._v("提交")])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"txt"},[i("span",[this._v("我的靓照（只需上传一张）")])])}]};var n=s("VU/8")(e,a,!1,function(t){s("6SoI")},null,null);i.default=n.exports},rPUY:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAAXNSR0IArs4c6QAABMBJREFUaAXdWs9PE0EU3m5Ka0kKnLRwMBICbbx7AOPFhCMXvOjFRBMT9T/wZIwk/gdqYqIJF02MXjiScCHWg3fTQgDjAYQTpAm1pQG/b9nZLLOzP2Z3S4svgZmdffPm+zrz3s7s24yRkmxtbV1qtVozmUzmFkxW8Fc+OTkpoSyirYB6E/UG6n9Q1vFXQ9tqPp+vjo+P/8V1YskksWATmAPA+7AzC3B5XXvo20KfZfRdBLGlJMRikcHA2Xq9/ghAnqN+RZeAnz7s7cLei3K5/A71jp+eX7s2mbW1tTvHx8evYHDSz2gK7eumaT6bmpr6omMrMpmNjY2rR0dHn2B8WmeAhLrfBwYG7k5MTPyOYicSmVqtdhPT/hVL4HIUo2nqYNw9jDtfqVS+hdk1wxSwrB5AZ6UXRIjNHnfFxhEIN5AMZuQl/OM9LOQCrXT/Zo44iCdoKN9lxl/CJhLU/9zvITA8RGD4oBpYSYY+AuUV/PV6RlSY22i8rfIhDxlGrU6n86NXPqJCL7cxKGSz2RtylPP4DMNvPxMhMeIDzo8yyTNk+ECEwnk+R2Q8OtczNl6nj0MGbLP2k9252e8V4iVugdMhw70WGru5RRFjpllO2rgtm1YA4O633W7/AkvtTePw8LAxODhoNJtNY39/XxvoyMiIUSgUjMPDQ+Pg4EC7P4LBbi6Xu8bdtjVFOIfMwUosIqUSjyyGMTQ0ZJHa3t62rqP8GxsbM4rFoqXK/hRdQpwAG/9na5mBHc8j2sIZcQuBEWAUcRMR+rI90R5WCvwmlxiUZ8M6qO5zackShZCKCO2o7Mn2fa5nycPkURdTpX1CpFH6SKPR8NgPIuRHhHbi+BwHJ37yMDFFPLPHFvpIVEJBRHR8TQWWPOgzfPmQSMIIYSDLl4SzuwfjD5GUiG2vwmhWdhuPWycg1S9PAgy92Et5TKdIhLbLJtbbaWz1DKXf4DdD50CEflPiMjsN9PrYlT38CLmVU54RYbrIAFAQV2mVOzs7Bo4RSnNs5/20hTy4zLwPi4QjjY6OKn2EZrnkeD9tIQ8uM++DIsFIqiAgmwt6Dsm6GtcNLjO++01F/IiollzahMiDM1NPg4kfETr75uZm5AdrAix1kqklMGB1DSLC6Ib1bD0YSUyWFGeoxgCwKg+gcx1GxG3LL2ynQYg8TOZHsN5a7kGj1nmwIhBZgp4jQYRoL44QP3mYdj5kOY4RblNkCSIidP0IqeyJPiHlMnnQZ7imF0OUlbd51HVLFCJCX0VItid0w0qB39r9MWOFdwBM9GgdncURN+47ABJK6R3AEgk7bzTxSvYJrl+H/Qp9eP8pXtW+IS6HDGaFqb2faLtIr5vWkTK8jgBgbQQtn7FYoYGpN9YvihCvIELMzswIAlhuVdSnxXUfl1UsL2YrHHFmRrQwhwi2e+K6H0viA857MjYPGaYJ4D/zUGQepB+lTXxyOoNAPWTYyEQO1uNj1vtNiIv4VLiUZKhop9oWVJ162LbglwIkJk8AkIHauc23aO9lSrDNGQkiEokMlZjjhNP1/XcAoTNDMpQefaFRZdRSOfspqrP/I5MR3Zh6szNs3dwpdPfbGUGGpb31ufhfNblJ/Rffm7kJibpNrKdfAv4Dgh5naUyNc3YAAAAASUVORK5CYII="}});
//# sourceMappingURL=2.f6c80371a0b434c10572.js.map