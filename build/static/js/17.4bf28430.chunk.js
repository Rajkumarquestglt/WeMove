(this["webpackJsonpwetaxi-market-place"]=this["webpackJsonpwetaxi-market-place"]||[]).push([[17],{280:function(e,a,t){"use strict";var n=t(6);t.d(a,"a",(function(){return n.a}))},281:function(e,a,t){"use strict";var n=t(18),c=t(4),l=t.n(c);a.a=function(e,a){return function(t){var s=Object(c.useState)(a.interceptors.request.use((function(e){var a=e;return a.headers.Authorization="Bearer ".concat(localStorage.getItem("authToken")),a}))),r=Object(n.a)(s,1)[0];return Object(c.useEffect)((function(){return function(){a.interceptors.request.eject(r)}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(e,t))}}},283:function(e,a,t){"use strict";var n=t(4),c=t.n(n),l=t(45),s=t(38),r=t(1);a.a=function(e){var a=Object(s.c)((function(e){return e.modal})),t=a.message,n=a.notifyType,m=a.redirectURL,o=a.buttonClick,i=a.withButton,d=Object(s.b)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"modal-backdrop fade in error-modal-backdrop"}),c.a.createElement("div",{className:"modal coman-modal fade in error-modal",id:"add-cat",tabIndex:-1,role:"dialog","aria-labelledby":"myModalLabel",style:{display:"block",zIndex:2052}},c.a.createElement("div",{className:"modal-dialog modal-a",role:"document"},c.a.createElement("div",{className:2===n||0===n?"modal-content text-center animated bounceIn":"modal-content text-center animated shake"}," ",c.a.createElement("div",{className:"modal-body"},c.a.createElement("div",{className:"f-modal-alert"},1===n?c.a.createElement("div",{className:"f-modal-icon f-modal-error animate"},c.a.createElement("span",{className:"f-modal-x-mark"},c.a.createElement("span",{className:"f-modal-line f-modal-left animateXLeft"}),c.a.createElement("span",{className:"f-modal-line f-modal-right animateXRight"})),c.a.createElement("div",{className:"f-modal-placeholder"}),c.a.createElement("div",{className:"f-modal-fix"})):2===n?c.a.createElement("div",{className:"f-modal-icon f-modal-success animate"},c.a.createElement("span",{className:"f-modal-line f-modal-tip animateSuccessTip"}),c.a.createElement("span",{className:"f-modal-line f-modal-long animateSuccessLong"}),c.a.createElement("div",{className:"f-modal-placeholder"}),c.a.createElement("div",{className:"f-modal-fix"})):3===n?c.a.createElement("div",{className:"f-modal-icon f-modal-warning animate"},c.a.createElement("span",{className:"f-modal-body pulseWarningIns"}),c.a.createElement("span",{className:"f-modal-dot pulseWarningIns"}),c.a.createElement("div",{className:"f-modal-placeholder"}),c.a.createElement("div",{className:"f-modal-fix"})):null),c.a.createElement("p",{style:0===n?{paddingTop:"20px"}:{}},t),i&&c.a.createElement("div",{className:"text-center m-t-md"},void 0!==m&&""!==m?c.a.createElement(l.b,{className:"btn btn-primary",to:m,onClick:o?function(e){d(Object(r.Wj)()),e.stopPropagation(),o()}:function(e){d(Object(r.Wj)()),e.stopPropagation()}},"Okay"):c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:o?function(e){d(Object(r.Wj)()),e.stopPropagation(),o()}:function(e){d(Object(r.Wj)()),e.stopPropagation()}},"Okay")))))))}},901:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t(18),l=t(4),s=t.n(l),r=t(38),m=t(95),o=t(280),i=t(281),d=t(1),u=t(283);a.default=Object(i.a)((function(e){var a=Object(l.useState)(!1),t=Object(c.a)(a,2),o=t[0],i=t[1],b=Object(l.useState)(!1),f=Object(c.a)(b,2),p=f[0],E=f[1],N=Object(l.useState)(!1),v=Object(c.a)(N,2),g=(v[0],v[1]),j=Object(l.useState)({}),O=Object(c.a)(j,2),y=O[0],k=O[1],h=Object(r.c)((function(e){return e.contactus})),x=h.contactus,w=x.list,S=x.totalRecords,C=h.errorMsg,F=Object(r.c)((function(e){return e.modal})).open,B=Object(r.b)(),I=function(e,a,t,n,c){!function(e,a,t,n,c){y.columnName=e,y.orderBy=a,y.search=t,y.skip=n,y.limit=c,k(y)}(e,a,t,n,c),B(t&&0!==n?Object(d.Fg)({columnName:e,orderBy:a,search:t,skip:0,limit:c,isUserRequest:p}):Object(d.Fg)({columnName:e,orderBy:a,search:t,skip:n,limit:c,isUserRequest:p}))};Object(l.useEffect)((function(){return i(!0),I("userName","asc","",0,10),function(){return i(!1)}}),[]),Object(l.useEffect)((function(){o&&I("userName","asc","",0,10)}),[p]);var L=[{displayName:"Full Name",key:"userName"},{displayName:"Email",key:"userEmail"},{displayName:"Message",key:"message"},{displayName:"Actions",noSort:!0,isActions:!0,actions:[{view:s.a.createElement("span",null," Mark as resolved "),action:function(e){B(Object(d.Yk)({open:!0,notifyType:0,withButton:!1,message:"please wait a while..."})),B(Object(d.Zd)({id:e._id,email:e.userEmail,tableFilter:Object(n.a)(Object(n.a)({},y),{},{isUserRequest:p})}))}}]}],M=function(e){o&&g(e)};return s.a.createElement("div",{className:"wrapper wrapper-content"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},s.a.createElement("div",{className:"ibox"},s.a.createElement("div",{className:"ibox-content"},s.a.createElement("div",{className:"box-heading"},s.a.createElement("h2",null,"Contact us ")),s.a.createElement("div",{className:"tabs-container",id:"tab-new"},s.a.createElement("ul",{className:"nav nav-tabs"},s.a.createElement("li",{className:"active"},s.a.createElement("a",{"data-toggle":"tab",href:"#tab-1",onClick:function(){E(!1),B(Object(d.yk)())}},"Queries from Vendor")),s.a.createElement("li",{className:""},s.a.createElement("a",{"data-toggle":"tab",href:"#tab-2",onClick:function(){E(!0),B(Object(d.yk)())}},"Queries from Customer"))),s.a.createElement("div",{className:"tab-content"},s.a.createElement("div",{id:"tab-1",className:"tab-pane active"},s.a.createElement("div",{className:"panel-body"},s.a.createElement("div",{className:"coman-table"},s.a.createElement(m.b,{headers:L,tableData:w||null,pageCount:null===S||void 0===S?void 0:S.count,getData:I,linkPropsName:"_id",setSearchFlag:M,errorMsg:C||"Loading...",initialSortColumnName:"userName"})))),s.a.createElement("div",{id:"tab-2",className:"tab-pane"},s.a.createElement("div",{className:"panel-body"},s.a.createElement("div",{className:"coman-table"},s.a.createElement(m.b,{headers:L,tableData:w||null,pageCount:null===S||void 0===S?void 0:S.count,getData:I,linkPropsName:"_id",setSearchFlag:M,errorMsg:C||"Loading...",initialSortColumnName:"userName"})))))))))),F&&s.a.createElement(u.a,null))}),o.a)}}]);
//# sourceMappingURL=17.4bf28430.chunk.js.map