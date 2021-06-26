(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{81:function(e,t,s){"use strict";s.r(t);var r=s(15),a=s.n(r),n=s(26),c=s(3),o=s(0),l=s(5),d=s(31),i=s(32),u=s(30),m=s(24),b=s(23),p=s(1);t.default=function(){var e=Object(o.useContext)(d.a).checkPassword,t=Object(o.useContext)(i.a).handleModalText,s=Object(l.g)(),r=Object(b.a)(),j=r.sendRequest,h=r.isLoading,g=r.setIsLoading,f=Object(m.a)(localStorage.getItem("token")),x=f._id,w=f.email,O=Object(o.useState)(""),y=Object(c.a)(O,2),v=y[0],k=y[1],N=Object(o.useState)(!1),C=Object(c.a)(N,2),S=C[0],F=C[1],T=Object(o.useState)(""),_=Object(c.a)(T,2),q=_[0],A=_[1],I=Object(o.useState)(""),J=Object(c.a)(I,2),P=J[0],L=J[1],B=Object(o.useState)([]),D=Object(c.a)(B,2),E=D[0],H=D[1],M=function(){var t=Object(n.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(H([]),!S){t.next=3;break}return t.abrupt("return");case 3:if(!localStorage.getItem("token")){t.next=19;break}return g(!0),t.prev=5,t.next=8,e({email:w,password:v});case 8:(r=t.sent)&&(F(!!r),g(!1)),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(5),console.log(t.t0),g(!1),H(["Wrong password!"]);case 17:t.next=21;break;case 19:s.push("/"),s.go(0);case 21:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(){return t.apply(this,arguments)}}(),R=function(){var e=Object(n.a)(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H([]),r.preventDefault(),q!==P?H(["The two passwords don't match"]):(g(!0),n=function(e){e.error&&(g(!1),H(e.error.split("(Joi): ")[1].split(",").map((function(e){return e.replaceAll('"',"")})))),1===e.updatedCount&&(s.push("/"),g(!1),t("Password changed!"))},j({url:"/api/users/".concat(x),method:"PATCH",headers:{"Content-Type":"application/json"},body:{password:P}},n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=E.map((function(e){return Object(p.jsx)("li",{children:e.charAt(0).toUpperCase()+e.slice(1)})}));return Object(p.jsxs)(p.Fragment,{children:[h&&Object(p.jsx)(u.a,{}),Object(p.jsx)("div",{className:"md:col-span-1",children:Object(p.jsx)("div",{className:"md:col-span-2",children:Object(p.jsx)("form",{onSubmit:R,children:Object(p.jsxs)("div",{className:"overflow-hidden sm:rounded-md",children:[Object(p.jsx)("div",{className:"px-4 py-5 bg-white sm:p-6",children:Object(p.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[Object(p.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[Object(p.jsx)("label",{htmlFor:"email_address",className:"block text-sm font-medium text-gray-700",children:"Current password"}),Object(p.jsx)("input",{type:"password",name:"current-password",id:"current-password",autoComplete:"current-password",disabled:S,value:v,onChange:function(e){F(!1),H([]),k(e.target.value)},onBlur:M,className:"mt-2 p-1 ring-1 ring-gray-300 placeholder-black focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 ".concat(S?"bg-green-100 ring-green-900":v&&"bg-red-100 ring-red-900"," rounded-md")})]}),Object(p.jsxs)("div",{className:"col-span-6 sm:col-span-3 ".concat(!S&&"hidden"),children:[Object(p.jsx)("label",{htmlFor:"first_name",className:"block text-sm font-medium text-gray-700",children:"New password"}),Object(p.jsx)("input",{type:"password",name:"new-password",id:"new-password",autoComplete:"new-password",required:!0,disabled:!S,value:q,onChange:function(e){A(e.target.value)},className:"mt-2 p-1 ring-1 ring-gray-300 placeholder-black focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(p.jsxs)("div",{className:"col-span-6 sm:col-span-3 ".concat(!S&&"hidden"),children:[Object(p.jsx)("label",{htmlFor:"last_name",className:"block text-sm font-medium text-gray-700",children:"Confirm password"}),Object(p.jsx)("input",{type:"password",name:"confirm-password",id:"confirm-password",autoComplete:"new-password",required:!0,disabled:!S,value:P,onChange:function(e){L(e.target.value)},className:"mt-2 p-1 ring-1 ring-gray-300 placeholder-black focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]})]})}),E.length>0&&Object(p.jsxs)("div",{class:"mx-5 mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",role:"alert",children:[Object(p.jsx)("h4",{className:"font-bold text-xl",children:"Error"}),Object(p.jsx)("ul",{className:"ml-5 list-disc",children:U})]}),Object(p.jsxs)("div",{className:"px-4 my-2  text-right sm:px-6",children:[Object(p.jsx)("button",{type:"button",className:"inline-flex justify-center py-2 px-4 ml-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",onClick:function(){s.push("/")},children:"Cancel"}),Object(p.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 ml-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Save"})]})]})})})})]})}}}]);
//# sourceMappingURL=7.e96b0cab.chunk.js.map