(this["webpackJsonpwetaxi-market-place"]=this["webpackJsonpwetaxi-market-place"]||[]).push([[18],{280:function(e,a,t){"use strict";var l=t(6);t.d(a,"a",(function(){return l.a}))},281:function(e,a,t){"use strict";var l=t(18),n=t(4),c=t.n(n);a.a=function(e,a){return function(t){var r=Object(n.useState)(a.interceptors.request.use((function(e){var a=e;return a.headers.Authorization="Bearer ".concat(localStorage.getItem("authToken")),a}))),m=Object(l.a)(r,1)[0];return Object(n.useEffect)((function(){return function(){a.interceptors.request.eject(m)}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(e,t))}}},286:function(e,a,t){"use strict";var l=t(4),n=t.n(l);a.a=function(e){var a=e.headerTitle,t=e.children,l=e.submitBtnText,c=e.submitBtnHandler,r=e.cancelBtnText,m=e.cancelBtnHandler,s=e.closeModel,i=e.modalId,o=e.modalClass,d=e.errorMsg,u=e.isDisable;return n.a.createElement("div",{className:"modal coman-modal fade in",tabIndex:"-1",id:i||"",role:"dialog",style:{display:"block"}},n.a.createElement("div",{className:"modal-dialog ".concat(o||"modal-sm text-center"),role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("button",{type:"button",className:"close",disabled:u,onClick:s},n.a.createElement("span",{"aria-hidden":"true"},"\xd7")),(void 0!==a||null!=a||""!==a)&&n.a.createElement("h2",null,a),t,n.a.createElement("div",{className:"error-message"},d),n.a.createElement("div",{className:"text-center"},void 0!==l&&null!=l&&""!==l&&n.a.createElement("button",{type:"button",disabled:u,className:"btn btn-primary  m-l-sm",onClick:function(){"function"===typeof c?c():s()}},l),void 0!==r&&null!=r&&""!==r&&n.a.createElement("button",{type:"submit",disabled:u,className:"btn btn-primary m-l-sm",onClick:function(){"function"===typeof m&&m(),s()}},"Cancel")))),n.a.createElement("div",{className:"modal-backdrop fade in"}))}},928:function(e,a,t){"use strict";t.r(a);var l=t(3),n=t(18),c=t(4),r=t.n(c),m=t(38),s=t(410),i=t.n(s),o=(t(356),t(46)),d=t.n(o),u=t(281),E=t(280),p=t(95),b=t(286),N=t(1),v=function(e){var a=e.orderData,t=Object(c.useState)(!1),l=Object(n.a)(t,2),s=l[0],i=l[1],o=Object(c.useState)(a.cookingInstructionsByAdmin),u=Object(n.a)(o,2),E=u[0],p=u[1],v=[],f=[],y=Object(m.b)(),O=function(e,a){if(e){var t=e.apartment,l=e.area,n=e.city,c=e.houseNo,r=e.landmark,m=e.pincode,s=e.street;c&&a.push(c),t&&a.push(t),r&&a.push(r),l&&a.push(l),n&&a.push(n),s&&a.push(s),m&&a.push(m)}};return O(a.restaurantAddress,v),O(a.orderDeliverAddress,f),r.a.createElement(b.a,{closeModel:function(){(0,e.setModelOpen)(!1)},headerTitle:"Order Details",modalId:"printpreview",modalClass:"modal-small",cancelBtnText:"Add",submitBtnText:"Ok"},r.a.createElement("div",{className:"printview-order-inner m-b-md"},r.a.createElement("h3",{className:"sub_title"},"Add Instruction"),r.a.createElement("textarea",{className:"form-control",onChange:function(e){return p(e.target.value)}},E),r.a.createElement("button",{className:"btn btn-primary m-t-md",type:"button",disabled:s,onClick:function(){i(!0),y(Object(N.Gd)({cookingInstructions:E,orderId:a._id,setIsDisable:i}))}},"Send")),r.a.createElement("div",{className:"printview-order",id:"printableArea"},r.a.createElement("div",{className:"printview-order-inner"},r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{paddingLeft:0}},r.a.createElement("p",null,"Customer Comments:")),r.a.createElement("td",{colSpan:3,style:{textAlign:"left"}},r.a.createElement("b",null,r.a.createElement("span",null,a.cookingInstructions)))))))),r.a.createElement("div",{className:"printview-order",id:"printableArea"},r.a.createElement("div",{className:"printview-order-inner"},r.a.createElement("h3",{className:"sub_title"},"Customer Details"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Full Name :")),r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("p",null,a.userData.name)))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Mobile :")),r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("p",null,a.userData.phone)))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Address :")),r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("p",null,f.join(", ")))))))),r.a.createElement("div",{className:"printview-order-inner"},r.a.createElement("h3",{className:"sub_title"},"Vendor Details"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Full Name :")),r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("p",null,a.restaurantName)))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Mobile :")),r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("p",null,a.retsaurantContact)))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Address :")),r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("p",null,v.join(", ")))))))),r.a.createElement("div",{className:"printview-order-inner order_details"},r.a.createElement("h3",{className:"sub_title"},"Order Details"),r.a.createElement("table",{className:"table "},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Order ID :")),r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("p",null,a.orderNumber)))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Order Date :")),r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("p",null,d()(a.createdAt).format("DD/MM/YYYY hh:mm A "))))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Order Type :")),r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("p",null,a.isSelfPickUp?"PickUp":"Delivery")))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Payment Option :")),r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("p",null,a.isCODOrder?"COD":"Online")))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Payment Status :")),r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("p",null,a.paymentStatus))))))),r.a.createElement("div",{className:"overallTable table-responsive "},r.a.createElement("table",{className:"table table-striped table-bordered",id:"order-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"S.No."),r.a.createElement("th",null,"Item Name"),r.a.createElement("th",null,"Qty"),r.a.createElement("th",null,"Price (INR)"),r.a.createElement("th",null,"Variety - Price (INR)"))),r.a.createElement("tbody",null,a.dishList.map((function(e,a){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",{className:"s_no"},a+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,e.price.toFixed(2)),r.a.createElement("td",{className:"ing"},r.a.createElement("ul",{className:"tbl_view"},r.a.createElement("li",null,r.a.createElement("span",{className:"td lbl"},"INR ".concat((e.quantity*e.price).toFixed(2)))))))})),r.a.createElement("tr",{className:"total_box"},r.a.createElement("td",{colSpan:4}),r.a.createElement("td",null,r.a.createElement("ul",{className:"tbl_view"},r.a.createElement("li",null,r.a.createElement("span",{className:"td"},"Subtotal"),r.a.createElement("span",{className:"td lbl"},"INR ".concat(a.total))),r.a.createElement("li",null,r.a.createElement("span",{className:"td"},"Discount "),r.a.createElement("span",{className:"td lbl"},"INR ".concat(a.discount))),r.a.createElement("li",null,r.a.createElement("span",{className:"td"},"Rider Tip"),r.a.createElement("span",{className:"td lbl"},"INR ".concat(a.riderTip))),r.a.createElement("li",null,r.a.createElement("span",{className:"td"},"Tax (".concat(a.GST,"%)")),r.a.createElement("span",{className:"td lbl"},"INR ".concat(a.taxCharge))),r.a.createElement("li",null,r.a.createElement("span",{className:"td"},"Delivery Fee"),r.a.createElement("span",{className:"td lbl"},"INR ".concat(a.deliveryCharge))),r.a.createElement("li",null,r.a.createElement("span",{className:"td"},"Packaging Fee"),r.a.createElement("span",{className:"td lbl"},"INR ".concat(a.packagingCharge))),r.a.createElement("li",null,r.a.createElement("span",{className:"td"},"Total"),r.a.createElement("span",{className:"td lbl"},"INR ".concat(a.grandTotal," ")))))))))))},f=["Pending","Accepted","Preparing","ReadyForPickup","OnTheWayToPickUp","PickedUp","OnTheWayToDelivery","Delivered"],y=function(e){var a=e.orderData,t=Object(c.useState)(!1),l=Object(n.a)(t,2),s=(l[0],l[1]),i=Object(c.useState)(45),o=Object(n.a)(i,2),u=o[0],E=o[1],p=Object(m.c)((function(e){return e.order})),v=p.orderTrack,y=(p.errorMsg,f.indexOf(v.status)),O=Object(m.b)();Object(c.useEffect)((function(){return s(!0),O(Object(N.cj)({id:a._id})),7!==y&&setTimeout((function(){E(u-1)}),1e3),function(){s(!1),O(Object(N.Dk)())}}),[]),Object(c.useEffect)((function(){0===u?(E(45),O(Object(N.cj)({id:a._id}))):7!==y&&setTimeout((function(){E(u-1)}),1e3)}),[u]);return r.a.createElement(b.a,{closeModel:function(){(0,e.setModelOpen)(!1)},headerTitle:"Tracking Order",modalId:"trackDeliveryBoy",modalClass:"modal-lg"},r.a.createElement("div",null,r.a.createElement("div",{className:"form_header"},r.a.createElement("h1",null,"Order Information:")),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"detail-title-a"},r.a.createElement("p",null,r.a.createElement("span",null," Order Number:"),a.orderNumber),r.a.createElement("p",null,r.a.createElement("span",null,"Order Date: "),d()(a.createdAt).format("DD/MM/YYYY")))),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"detail-title-a"},r.a.createElement("p",null,r.a.createElement("span",null,"Order Total: "),a.total),r.a.createElement("p",null,r.a.createElement("span",null,"Order Time:"),d()(a.createdAt).format("hh:mm A")))))),!a.isSelfPickUp&&v.tookan&&r.a.createElement("div",null,r.a.createElement("div",{className:"form_header"},r.a.createElement("h1",null,"Logistics Details:")),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"detail-title-a"},r.a.createElement("p",null,r.a.createElement("span",null,"Driver Name:"),v.tookan.fleet_name))),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"detail-title-a"},r.a.createElement("p",null,r.a.createElement("span",null,"Driver Mobile: "),v.tookan.fleet_contact_number))),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"detail-title-a"},r.a.createElement("p",null,("OnTheWayToPickUp"===v.status||"OnTheWayToDelivery"===v.status)&&r.a.createElement("a",{className:"btn btn-primary",href:"OnTheWayToPickUp"===v.status?v.tookan.pickup_tracking_link:v.tookan.delivery_tracking_link,rel:"noreferrer",target:"_blank",style:{textDecoration:"none"}},"Track Driver")))))),r.a.createElement("div",{className:"form_header"},r.a.createElement("h1",null,"Order Tracking")),7!==y&&r.a.createElement("div",null,"Status will be update in ".concat(u," seconds")),r.a.createElement("div",{className:"kyc-top-bar clearfix"},r.a.createElement("ul",null,r.a.createElement("li",{className:y>=0?"current":""},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon ic-3"},r.a.createElement("i",{className:"fa fa-download","aria-hidden":"true"}))),r.a.createElement("p",null,"Pending")),r.a.createElement("li",{className:y>=1?"current":""},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon ic-3"},r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}))),r.a.createElement("p",null,"Accepted")),r.a.createElement("li",{className:y>=2?"current":""},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon ic-3"},r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}))),r.a.createElement("p",null,"Preparing")),r.a.createElement("li",{className:y>=3?"current":""},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon ic-3"},r.a.createElement("i",{className:"fa fa-motorcycle","aria-hidden":"true"}))),r.a.createElement("p",null,"Ready to Pickup")),!a.isSelfPickUp&&r.a.createElement("li",{className:y>=4?"current":""},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon ic-3"},r.a.createElement("i",{className:"fa fa-motorcycle","aria-hidden":"true"}))),r.a.createElement("p",null,"On the way to Pick up")),!a.isSelfPickUp&&r.a.createElement("li",{className:y>=5?"current":""},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon ic-3"},r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}))),r.a.createElement("p",null,"Picked up")),!a.isSelfPickUp&&r.a.createElement("li",{className:y>=6?"current":""},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon ic-3"},r.a.createElement("i",{className:"fa fa-motorcycle","aria-hidden":"true"}))),r.a.createElement("p",null,"On the way to Delivey")),r.a.createElement("li",{className:y>=7?"current":""},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon ic-3"},r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}))),r.a.createElement("p",null,"Delivered")))),r.a.createElement("div",{className:"track_ship_flow"}))};a.default=Object(u.a)((function(e){var a=Object(c.useState)(!1),t=Object(n.a)(a,2),s=t[0],o=t[1],u=Object(c.useState)(!1),E=Object(n.a)(u,2),b=E[0],f=E[1],O=Object(c.useState)(!1),h=Object(n.a)(O,2),k=h[0],g=h[1],D=Object(c.useState)(null),j=Object(n.a)(D,2),C=j[0],P=j[1],S=Object(c.useState)(!1),T=Object(n.a)(S,2),x=(T[0],T[1]),w=Object(c.useState)(!1),A=Object(n.a)(w,2),_=A[0],M=A[1],I=Object(c.useState)(null),R=Object(n.a)(I,2),U=R[0],B=R[1],F=Object(c.useState)({}),V=Object(n.a)(F,2),Y=V[0],W=V[1],q=Object(c.useState)({isSelfPickUp:"",status:"",startDate:"",endDate:""}),z=Object(n.a)(q,2),L=z[0],G=z[1],H=Object(c.useCallback)((function(){return M(!_)})),J=Object(m.c)((function(e){return e.order})),K=J.orders,Q=K.list,X=K.totalRecords,Z=J.orderCount,$=Z.acceptedOrderCount,ee=Z.deliveredOrderCount,ae=Z.preparingOrderCount,te=Z.pendingOrderCount,le=Z.rejectedOrderCount,ne=Z.totalOrderCount,ce=Z.pickedUpOrderCount,re=J.errorMsg,me=Object(c.useRef)(),se=Object(m.b)(),ie=function(e,a,t,l,n){!function(e,a,t,l,n){Y.columnName=e,Y.orderBy=a,Y.search=t,Y.skip=l,Y.limit=n,W(Y)}(e,a,t,l,n),se(t&&0!==l?Object(N.ih)({columnName:e,orderBy:a,search:t,skip:0,limit:n,filterSearch:L}):Object(N.ih)({columnName:e,orderBy:a,search:t,skip:l,limit:n,filterSearch:L}))};Object(c.useEffect)((function(){return g(!0),se(Object(N.Gi)()),ie("createdAt","desc","",0,10),function(){return g(!1)}}),[]),Object(c.useEffect)((function(){k&&""===L.status&&""===L.isSelfPickUp&&""===L.startDate&&""===L.endDate&&ie("createdAt","desc","",0,10)}),[L]);var oe=[{displayName:"Order Number",key:"orderNumber"},{displayName:"Date Time",key:"createdAt",isDateTime:!0},{displayName:"Customer Name",key:"userName"},{displayName:"Customer Number",key:"phone"},{displayName:"Order Type",key:"isSelfPickUp",isConditional:!0,positiveValue:"PickUp",negativeValue:"Delivery"},{displayName:"Vendor Name",key:"restaurantName"},{displayName:"Payment Mode",key:"isCODOrder",isCapitalize:!0,isConditional:!0,positiveValue:"COD",negativeValue:"Online"},{displayName:"Order Status",key:"status",isCapitalize:!0},{displayName:"Order Amount",key:"grandTotal"},{displayName:"Actions",noSort:!0,isActions:!0,actions:[{view:r.a.createElement("i",{className:"fa fa-eye","aria-hidden":"true"}),action:function(e){P(e),o(!0)}},{view:r.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"}),action:function(e){P(e),f(!0)},conditionalKey:"status",conditionalValue:"Rejected"}]}],de=function(e,a){var t=Object(l.a)({},L);t[a]=e,G(t)};return r.a.createElement("div",{className:"wrapper wrapper-content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"ibox"},r.a.createElement("div",{className:"ibox-content"},r.a.createElement("div",{className:"box-heading"},r.a.createElement("h2",null,"Orders ")),r.a.createElement("div",{className:"row m-b-sm"},r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-lg-2"},r.a.createElement("h4",null,"Order type:"),r.a.createElement("select",{className:"form-control ",onChange:function(e){return de(e.target.value,"isSelfPickUp")},value:L.isSelfPickUp},r.a.createElement("option",{value:""},"Select order Type"),r.a.createElement("option",{value:"false"},"Delivery"),r.a.createElement("option",{value:"true"},"Pick Up"))),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-lg-2"},r.a.createElement("h4",null,"Order status:"),r.a.createElement("select",{className:"form-control",onChange:function(e){return de(e.target.value,"status")},value:L.status},r.a.createElement("option",{value:""},"Select order status"),r.a.createElement("option",{value:"Pending"},"Pending"),r.a.createElement("option",{value:"Accepted"},"Accepted"),r.a.createElement("option",{value:"Rejected"},"Rejected"),r.a.createElement("option",{value:"Preparing"},"Preparing"),r.a.createElement("option",{value:"ReadyForPickup"},"Ready for pickup"),r.a.createElement("option",{value:"OnTheWayToPickUp"},"On the way to pickup"),r.a.createElement("option",{value:"PickedUp"},"PickedUp"),r.a.createElement("option",{value:"OnTheWayToDelivery"},"On the way to delivery"),r.a.createElement("option",{value:"Delivered"},"Delivered"),r.a.createElement("option",{value:"Canceled"},"Cancelled"))),r.a.createElement("div",{className:"col-sm-12 col-lg-8"},r.a.createElement("h4",null,"Select Date:"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-8 col-lg-8"},_?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-backdrop fade in date-backdrop",onClick:function(){H()}}),r.a.createElement(i.a,{initialRange:(d()(),d()().add(2,"days")),value:U,onSelect:function(e){B(e),de(e.start.format("yyyy-MM-DD"),"startDate"),de(e.end.format("yyyy-MM-DD"),"endDate"),H()}})):"",r.a.createElement("div",{className:"mb-10",id:"data_5"},r.a.createElement("div",{className:"input-daterange input-group",id:"datepicker"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-calendar"})),r.a.createElement("input",{type:"text",className:"input-sm form-control",name:"start",value:U&&null!=U.start&&U.start.format("DD/MM/yyyy")||"",onClick:function(e){H(),e.target.blur()}}),r.a.createElement("span",{className:"input-group-addon bor-left"},"to"),r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-calendar"})),r.a.createElement("input",{type:"text",className:"input-sm form-control",name:"end",value:U&&null!=U.end&&U.end.format("DD/MM/yyyy")||"",onClick:function(e){H(),e.target.blur()}})))),r.a.createElement("div",{className:"col-xs-6 col-sm-2 col-lg-2"},r.a.createElement("button",{className:"btn btn-primary with-100",type:"submit",onClick:function(){ie("name","asc","",0,10),me.current.setCurrentPageChild()}},"Apply")),r.a.createElement("div",{className:"col-xs-6 col-sm-2 col-lg-2"},r.a.createElement("button",{className:"btn btn-primary with-100",type:"submit",style:{background:"#80bbe7",borderColor:"#80bbe7"},onClick:function(){G({isSelfPickUp:"",status:"",startDate:"",endDate:""}),B({}),me.current.setCurrentPageChild()}},"Reset"))))),r.a.createElement("div",{id:"color"},r.a.createElement("div",{className:"colours_action"},r.a.createElement("ul",{className:"animated zoomIn"},r.a.createElement("li",null,r.a.createElement("div",{className:"icons-circle-number orange"},te),r.a.createElement("h4",null,"Pending")),r.a.createElement("li",null,r.a.createElement("div",{className:"icons-circle-number dark-green"},$),r.a.createElement("h4",null,"Accepted")),r.a.createElement("li",null,r.a.createElement("div",{className:"icons-circle-number violet"},ae),r.a.createElement("h4",null,"Preparing")),r.a.createElement("li",null,r.a.createElement("div",{className:"icons-circle-number orange"},ee),r.a.createElement("h4",null,"Delivered")),r.a.createElement("li",null,r.a.createElement("div",{className:"icons-circle-number dark-green"},le),r.a.createElement("h4",null,"Rejected")),r.a.createElement("li",null,r.a.createElement("div",{className:"icons-circle-number violet"},ce),r.a.createElement("h4",null,"Picked up")),r.a.createElement("li",null,r.a.createElement("div",{className:"icons-circle-number green"},ne),r.a.createElement("h4",null,"Total"))))),r.a.createElement("div",{className:"coman-table",id:"owner-detail-btn2"},r.a.createElement(p.b,{headers:oe,tableData:Q||null,pageCount:null===X||void 0===X?void 0:X.count,getData:ie,linkPropsName:"_id",setSearchFlag:function(e){k&&x(e)},errorMsg:re||"Loading...",initialSortColumnName:"createdAt",initialSortOrderBy:"desc",ref:me})))))),s&&r.a.createElement(v,{setModelOpen:o,orderData:C}),b&&r.a.createElement(y,{setModelOpen:f,orderData:C}))}),E.a)}}]);
//# sourceMappingURL=18.9dc58a56.chunk.js.map