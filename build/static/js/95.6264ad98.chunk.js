(this["webpackJsonpwetaxi-market-place"]=this["webpackJsonpwetaxi-market-place"]||[]).push([[95],{279:function(e,t,a){"use strict";var l=a(6);a.d(t,"a",(function(){return l.a}))},280:function(e,t,a){"use strict";var l=a(17),n=a(5),r=a.n(n);t.a=function(e,t){return function(a){var c=Object(n.useState)(t.interceptors.request.use((function(e){var t=e;return t.headers.Authorization="Bearer ".concat(localStorage.getItem("authToken")),t}))),o=Object(l.a)(c,1)[0];return Object(n.useEffect)((function(){return function(){t.interceptors.request.eject(o)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(e,a))}}},906:function(e,t,a){"use strict";a.r(t);var l=a(17),n=a(5),r=a.n(n),c=a(37),o=a(45),s=a.n(o),d=a(53),i=a.n(d),m=a(279),u=a(280),E=a(1);t.default=Object(u.a)((function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],d=a[1],m=Object(n.useState)("today"),u=Object(l.a)(m,2),p=u[0],h=u[1],b=Object(c.c)((function(e){return e.dashboard})),f=b.adminDashboard,v=f.productCount,y=f.driverCount,g=f.orderCountForToday,N=g.orderCountDelivered,j=g.orderCountPending,O=g.orderCountRejected,w=g.orderCountTotal,T=(b.errorMsg,Object(c.b)());Object(n.useEffect)((function(){return d(!0),T(Object(E.Hg)({type:p})),i()('[data-toggle="tooltip"]').tooltip(),function(){return d(!1)}}),[]),Object(n.useEffect)((function(){o&&T(Object(E.Hg)({type:p}))}),[p]);return r.a.createElement("div",{className:"wrapper wrapper-content dashboard",id:"dashboard"},r.a.createElement("h2",null,"Welcome Vehicle Owner !"),r.a.createElement("div",{className:"row card_main"},r.a.createElement("div",{className:"col-md-6 col-xs-12 col-lg-3"},r.a.createElement("div",{className:"card three"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title"},"Total Drivers"),r.a.createElement("p",{className:"count"},y)))),r.a.createElement("div",{className:"col-md-6 col-xs-12 col-lg-3"},r.a.createElement("div",{className:"card four"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title"},"Total Vehicles"),r.a.createElement("p",{className:"count"},v))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-xs-12"},r.a.createElement("div",{className:"top_action"},r.a.createElement("div",{className:"col-xs-12 col pull-left",style:{padding:0}},r.a.createElement("h2",{className:"dashbordstat"},"".concat(p,"'s Statistics"),r.a.createElement("i",{className:"fa fa-info-circle",style:{marginLeft:5,color:"#404E67"},"aria-hidden":"true","data-toggle":"tooltip","data-placement":"top",title:"You can check your today, week and month order detail by using this filter"})),r.a.createElement("div",{style:{position:"absolute",right:0}},r.a.createElement("select",{className:"form-control",value:p,style:{width:100,marginTop:-29},onChange:function(e){return h(e.target.value)}},r.a.createElement("option",{value:"today"},"Today"),r.a.createElement("option",{value:"week"},"Weekly"),r.a.createElement("option",{value:"month"},"Monthly"))),"today"===p&&r.a.createElement("h5",null,s()().format("dddd, MMMM DD, yyyy")),"week"===p&&r.a.createElement("h5",null,"Current week"),"month"===p&&r.a.createElement("h5",null,"Current month"))),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{id:"today",className:"table table-striped table-bordered"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"today"===p&&"Today's ","Total Vehicles"),r.a.createElement("td",null,w)),r.a.createElement("tr",null,r.a.createElement("td",null,"today"===p&&"Today's ","Pending Vehicles"),r.a.createElement("td",null,j)),r.a.createElement("tr",null,r.a.createElement("td",null,"today"===p&&"Today's ","Approved Vehicles"),r.a.createElement("td",null,N)),r.a.createElement("tr",null,r.a.createElement("td",null,"today"===p&&"Today's ","Rejected Vehicles"),r.a.createElement("td",null,O))))))))}),m.a)}}]);
//# sourceMappingURL=95.6264ad98.chunk.js.map