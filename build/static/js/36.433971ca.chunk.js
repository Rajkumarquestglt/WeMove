(this["webpackJsonpwetaxi-market-place"]=this["webpackJsonpwetaxi-market-place"]||[]).push([[36],{280:function(e,a,t){"use strict";var i=t(6);t.d(a,"a",(function(){return i.a}))},281:function(e,a,t){"use strict";var i=t(18),r=t(4),n=t.n(r);a.a=function(e,a){return function(t){var s=Object(r.useState)(a.interceptors.request.use((function(e){var a=e;return a.headers.Authorization="Bearer ".concat(localStorage.getItem("authToken")),a}))),c=Object(i.a)(s,1)[0];return Object(r.useEffect)((function(){return function(){a.interceptors.request.eject(c)}}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(e,t))}}},897:function(e,a,t){"use strict";t.r(a);var i=t(18),r=t(4),n=t.n(r),s=t(38),c=t(95),l=t(280),o=t(281),m=t(1),u=[{displayName:"Order ID",key:"orderNumber"},{displayName:"User Name",key:"userName"},{displayName:"Vendor Name",key:"brandName"},{displayName:"Vendor Rating",key:"rating",className:"active-green",isRating:!0,ratingType:"star"},{displayName:"Packaging",key:"packaging",isRating:!0},{displayName:"Price Value",key:"priceValue",isRating:!0},{displayName:"Vendor Review",key:"review"},{displayName:"Logistics Driver Name",key:"driverName"},{displayName:"Logistics Rating",key:"logisticRating",className:"active-green",isRating:!0,ratingType:"star"},{displayName:"Time",key:"logisticTime",isRating:!0},{displayName:"Food handling",key:"logisticFoodHandling",isRating:!0},{displayName:"Professionalism",key:"logisticProfessionalism",isRating:!0},{displayName:"Logistics Review",key:"logisticReview"}];a.default=Object(o.a)((function(e){var a=Object(r.useState)(!1),t=Object(i.a)(a,2),l=t[0],o=t[1],d=Object(r.useState)(!1),g=Object(i.a)(d,2),N=(g[0],g[1]),p=Object(s.c)((function(e){return e.review})),y=p.logisticsReviews,b=y.list,v=y.totalRecords,k=p.errorMsg,f=Object(s.b)(),R=function(e,a,t,i,r){f(t&&0!==i?Object(m.Wg)({columnName:e,orderBy:a,search:t,skip:0,limit:r}):Object(m.Wg)({columnName:e,orderBy:a,search:t,skip:i,limit:r}))};Object(r.useEffect)((function(){return o(!0),R("orderNumber","desc","",0,10),function(){return o(!1)}}),[]);return n.a.createElement("div",{className:"wrapper wrapper-content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"ibox"},n.a.createElement("div",{className:"ibox-content"},n.a.createElement("div",{className:"box-heading"},n.a.createElement("h2",null,"Rating")),n.a.createElement("div",{className:"coman-table",id:"owner-detail-btn"},n.a.createElement(c.b,{headers:u,tableData:b||null,pageCount:null===v||void 0===v?void 0:v.count,getData:R,link:{},linkPropsName:"_id",setSearchFlag:function(e){l&&N(e)},errorMsg:k||"Loading...",initialSortColumnName:"orderNumber",initialSortOrderBy:"desc"})))))))}),l.a)}}]);
//# sourceMappingURL=36.433971ca.chunk.js.map