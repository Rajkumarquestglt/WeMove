(this["webpackJsonpwetaxi-market-place"]=this["webpackJsonpwetaxi-market-place"]||[]).push([[91],{279:function(e,t,a){"use strict";var l=a(6);a.d(t,"a",(function(){return l.a}))},280:function(e,t,a){"use strict";var l=a(17),n=a(5),c=a.n(n);t.a=function(e,t){return function(a){var r=Object(n.useState)(t.interceptors.request.use((function(e){var t=e;return t.headers.Authorization="Bearer ".concat(localStorage.getItem("authToken")),t}))),o=Object(l.a)(r,1)[0];return Object(n.useEffect)((function(){return function(){t.interceptors.request.eject(o)}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(e,a))}}},895:function(e,t,a){"use strict";a.r(t);var l=a(17),n=a(5),c=a.n(n),r=a(37),o=a(45),s=a.n(o),d=a(53),m=a.n(d),i=a(279),u=a(280),E=a(1);t.default=Object(u.a)((function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],d=a[1],i=Object(n.useState)("today"),u=Object(l.a)(i,2),p=u[0],h=u[1],v=Object(r.c)((function(e){return e.dashboard})),f=v.adminDashboard,b=f.productCount,y=f.driverCount,N=f.chefCount,g=f.orderCountForToday,j=g.orderCountDelivered,O=g.orderCountPending,w=g.orderCountRejected,T=g.orderCountTotal,k=(v.errorMsg,Object(r.b)());Object(n.useEffect)((function(){return d(!0),k(Object(E.Hg)({type:p})),m()('[data-toggle="tooltip"]').tooltip(),function(){return d(!1)}}),[]),Object(n.useEffect)((function(){o&&k(Object(E.Hg)({type:p}))}),[p]);return c.a.createElement("div",{className:"wrapper wrapper-content dashboard",id:"dashboard"},c.a.createElement("h2",null,"Welcome Promoter !"),c.a.createElement("div",{className:"row card_main"},c.a.createElement("div",{className:"col-md-6 col-xs-12 col-lg-3"},c.a.createElement("div",{className:"card one"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"title"},"Total Vendors Added"),c.a.createElement("p",{className:"count"},N)))),c.a.createElement("div",{className:"col-md-6 col-xs-12 col-lg-3"},c.a.createElement("div",{className:"card three"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"title"},"Total Drivers Added"),c.a.createElement("p",{className:"count"},y)))),c.a.createElement("div",{className:"col-md-6 col-xs-12 col-lg-3"},c.a.createElement("div",{className:"card four"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"title"},"Total Vehicles Added"),c.a.createElement("p",{className:"count"},b))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-xs-12"},c.a.createElement("div",{className:"top_action"},c.a.createElement("div",{className:"col-xs-12 col pull-left",style:{padding:0}},c.a.createElement("h2",{className:"dashbordstat"},"".concat(p,"'s Statistics"),c.a.createElement("i",{className:"fa fa-info-circle",style:{marginLeft:5,color:"#404E67"},"aria-hidden":"true","data-toggle":"tooltip","data-placement":"top",title:"You can check your today, week and month order detail by using this filter"})),c.a.createElement("div",{style:{position:"absolute",right:0}},c.a.createElement("select",{className:"form-control",value:p,style:{width:100,marginTop:-29},onChange:function(e){return h(e.target.value)}},c.a.createElement("option",{value:"today"},"Today"),c.a.createElement("option",{value:"week"},"Weekly"),c.a.createElement("option",{value:"month"},"Monthly"))),"today"===p&&c.a.createElement("h5",null,s()().format("dddd, MMMM DD, yyyy")),"week"===p&&c.a.createElement("h5",null,"Current week"),"month"===p&&c.a.createElement("h5",null,"Current month"))),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{id:"today",className:"table table-striped table-bordered"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"today"===p&&"Today's ","Total Vehicles"),c.a.createElement("td",null,T)),c.a.createElement("tr",null,c.a.createElement("td",null,"today"===p&&"Today's ","Pending Vehicles"),c.a.createElement("td",null,O)),c.a.createElement("tr",null,c.a.createElement("td",null,"today"===p&&"Today's ","Approved Vehicles"),c.a.createElement("td",null,j)),c.a.createElement("tr",null,c.a.createElement("td",null,"today"===p&&"Today's ","Rejected Vehicles"),c.a.createElement("td",null,w))))))))}),i.a)}}]);
//# sourceMappingURL=91.407702c0.chunk.js.map