(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{329:function(t,e,a){},386:function(t,e,a){"use strict";var o=a(329);a.n(o).a},408:function(t,e,a){"use strict";a.r(e);var o=a(303),n={name:"FormComposition",components:{DynamicForm:o.DynamicForm},data:function(){return{formData:null,testForm:{id:"test-form",fields:[new o.FormField({type:"text",label:"Name",name:"name"}),new o.FormField({type:"email",label:"Email",name:"email"})]}}},methods:{updateForm:function(t){this.formData=t}}},i=(a(386),a(44)),m=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-composition library-example"},[t.testForm?a("div",{staticClass:"col"},[a("dynamic-form",{attrs:{id:t.testForm.id,fields:t.testForm.fields},on:{change:t.updateForm}})],1):t._e(),t._v(" "),a("div",{staticClass:"col"},[a("pre",[t._v(t._s(t.formData))])])])}),[],!1,null,null,null);e.default=m.exports}}]);