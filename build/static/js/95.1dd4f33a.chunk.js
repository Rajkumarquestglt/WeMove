(this["webpackJsonpwetaxi-market-place"]=this["webpackJsonpwetaxi-market-place"]||[]).push([[95],{911:function(e,a,t){"use strict";t.r(a);var l=t(18),n=t(4),c=t.n(n),m=t(38),r=t(535),s=t.n(r),o=t(46),i=t.n(o),p=t(1);t(542);a.default=function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),r=(t[0],t[1]),o=Object(n.useState)(!1),E=Object(l.a)(o,2),u=E[0],b=E[1],d=Object(m.c)((function(e){return e.payment})),g=d.paymentHistory,x=d.errorMsg,N=Object(m.b)(),y=function(e,a){N(Object(p.jj)({month:e+1,year:a}))};Object(n.useEffect)((function(){return r(!0),y((new Date).getMonth(),(new Date).getFullYear()),function(){return r(!1)}}),[]);return c.a.createElement("div",{className:"wrapper wrapper-content"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},c.a.createElement("div",{className:"ibox"},c.a.createElement("div",{className:"ibox-content"},c.a.createElement("div",{className:"box-heading"},c.a.createElement("h2",null,"Payout History")),c.a.createElement("div",{className:"row m-b-sm"},c.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12"},c.a.createElement("h4",null,"Select Date:"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-9 col-md-9 col-lg-6"},c.a.createElement("div",{className:"mb-10",id:"data_5"},c.a.createElement(s.a,{inputProps:{className:"form-control"},year:(new Date).getFullYear(),month:(new Date).getMonth(),maxDate:[11,9999],showMonthYearPicker:!0,onChange:function(e,a,t){var l=new Date;(function(e,a){var t;return t=12*(a.getFullYear()-e.getFullYear()),t-=e.getMonth(),(t+=a.getMonth())<=0?0:t})(new Date(a,t-1,1),new Date(l.getFullYear(),l.getMonth(),1))>0?(b(!1),y(t,a)):b(!0)}}),c.a.createElement("div",{className:"error-message"},u&&"Selected month and year must be current or previous")))))),g[0]?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"1st Cycle (01-".concat(g[0].month,"-").concat(g[0].year," to\n                   15-").concat(g[0].month,"-").concat(g[0].year,")")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"A"),"Commission"),c.a.createElement("p",null,"\u20b9".concat(g[0].commission))))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"B"),"Platform fee - Monthly"),c.a.createElement("p",null,"\u20b9".concat(g[0].chefPlatformFee)),c.a.createElement("p",{className:"my-name text-right"})))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"C"),"GST on commission"),c.a.createElement("p",null,"\u20b9".concat(g[0].gst)))))),c.a.createElement("div",{className:"row m-t-sm"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"D"),"TCS amount"),c.a.createElement("p",null,"\u20b9".concat(g[0].tcs))))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"E"),"Transaction fee"),c.a.createElement("p",null,"\u20b9".concat(g[0].paymentGateway)),c.a.createElement("p",{className:"my-name text-right"})))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"F"),"Total payable amount"),c.a.createElement("p",null,"\u20b9".concat(g[0].amount)),c.a.createElement("p",{className:"my-name text-right"})))),c.a.createElement("h4",{style:{marginLeft:"15px"}},"Total amount for the 1st cycle is"," \u20b9".concat(g[0].amount)))):c.a.createElement("div",{className:"error-card-div"},x),g[1]?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"2nd Cycle (16-".concat(g[0].month,"-").concat(g[0].year," to \n          ").concat(i()([g[0].year,g[0].month-1]).endOf("month").format("DD"),"-\n          ").concat(g[0].month,"-").concat(g[0].year,")")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"A"),"Commission"),c.a.createElement("p",null,"\u20b9".concat(g[1].commission))))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"B"),"Platform fee - Monthly"),c.a.createElement("p",null,"\u20b9".concat(g[1].chefPlatformFee)),c.a.createElement("p",{className:"my-name text-right"})))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"C"),"GST on commission"),c.a.createElement("p",null,"\u20b9".concat(g[1].gst)))))),c.a.createElement("div",{className:"row m-t-sm"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"D"),"TCS amount"),c.a.createElement("p",null,"\u20b9".concat(g[1].tcs))))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"E"),"Transaction fee"),c.a.createElement("p",null,"\u20b9".concat(g[1].paymentGateway)),c.a.createElement("p",{className:"my-name text-right"})))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"ibox float-e-margins"},c.a.createElement("div",{className:"ibox-title"},c.a.createElement("h5",null,c.a.createElement("button",{type:"button",className:"btn-primary btn",style:{padding:"5px 10px",marginRight:"10px"}},"F"),"Total payable amount"),c.a.createElement("p",null,"\u20b9".concat(g[1].amount)),c.a.createElement("p",{className:"my-name text-right"})))),c.a.createElement("h4",{style:{marginLeft:"15px"}},"Total amount for the 2nd cycle is"," \u20b9".concat(g[1].amount)))):null)))))}}}]);
//# sourceMappingURL=95.1dd4f33a.chunk.js.map