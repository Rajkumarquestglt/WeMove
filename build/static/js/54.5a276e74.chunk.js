(this["webpackJsonpwetaxi-market-place"]=this["webpackJsonpwetaxi-market-place"]||[]).push([[54],{280:function(e,r,t){"use strict";var a=t(6);t.d(r,"a",(function(){return a.a}))},281:function(e,r,t){"use strict";var a=t(18),n=t(4),i=t.n(n);r.a=function(e,r){return function(t){var o=Object(n.useState)(r.interceptors.request.use((function(e){var r=e;return r.headers.Authorization="Bearer ".concat(localStorage.getItem("authToken")),r}))),s=Object(a.a)(o,1)[0];return Object(n.useEffect)((function(){return function(){r.interceptors.request.eject(s)}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(e,t))}}},282:function(e,r,t){"use strict";t.d(r,"jb",(function(){return a})),t.d(r,"m",(function(){return n})),t.d(r,"f",(function(){return i})),t.d(r,"eb",(function(){return o})),t.d(r,"X",(function(){return s})),t.d(r,"N",(function(){return c})),t.d(r,"sb",(function(){return m})),t.d(r,"Y",(function(){return l})),t.d(r,"M",(function(){return d})),t.d(r,"n",(function(){return u})),t.d(r,"h",(function(){return f})),t.d(r,"g",(function(){return p})),t.d(r,"rb",(function(){return b})),t.d(r,"z",(function(){return A})),t.d(r,"F",(function(){return g})),t.d(r,"w",(function(){return N})),t.d(r,"A",(function(){return E})),t.d(r,"x",(function(){return h})),t.d(r,"d",(function(){return v})),t.d(r,"cb",(function(){return q})),t.d(r,"db",(function(){return w})),t.d(r,"kb",(function(){return x})),t.d(r,"K",(function(){return y})),t.d(r,"J",(function(){return P})),t.d(r,"H",(function(){return O})),t.d(r,"G",(function(){return T})),t.d(r,"p",(function(){return C})),t.d(r,"r",(function(){return B})),t.d(r,"q",(function(){return k})),t.d(r,"qb",(function(){return L})),t.d(r,"nb",(function(){return V})),t.d(r,"pb",(function(){return j})),t.d(r,"B",(function(){return I})),t.d(r,"V",(function(){return F})),t.d(r,"W",(function(){return S})),t.d(r,"s",(function(){return D})),t.d(r,"t",(function(){return G})),t.d(r,"O",(function(){return K})),t.d(r,"P",(function(){return R})),t.d(r,"Q",(function(){return X})),t.d(r,"R",(function(){return Z})),t.d(r,"k",(function(){return U})),t.d(r,"vb",(function(){return Y})),t.d(r,"ab",(function(){return Q})),t.d(r,"j",(function(){return z})),t.d(r,"ub",(function(){return H})),t.d(r,"Z",(function(){return J})),t.d(r,"wb",(function(){return M})),t.d(r,"v",(function(){return W})),t.d(r,"I",(function(){return _})),t.d(r,"mb",(function(){return $})),t.d(r,"ob",(function(){return ee})),t.d(r,"ib",(function(){return re})),t.d(r,"hb",(function(){return te})),t.d(r,"L",(function(){return ae})),t.d(r,"c",(function(){return ne})),t.d(r,"b",(function(){return ie})),t.d(r,"a",(function(){return oe})),t.d(r,"D",(function(){return se})),t.d(r,"lb",(function(){return ce})),t.d(r,"bb",(function(){return me})),t.d(r,"S",(function(){return le})),t.d(r,"C",(function(){return de})),t.d(r,"E",(function(){return ue})),t.d(r,"e",(function(){return fe})),t.d(r,"l",(function(){return pe})),t.d(r,"tb",(function(){return be})),t.d(r,"o",(function(){return Ae})),t.d(r,"fb",(function(){return ge})),t.d(r,"gb",(function(){return Ne})),t.d(r,"y",(function(){return Ee})),t.d(r,"u",(function(){return he})),t.d(r,"T",(function(){return ve})),t.d(r,"U",(function(){return qe})),t.d(r,"xb",(function(){return we})),t.d(r,"i",(function(){return xe}));var a="Please enter reason for rejection",n="Commission is required",i="Category name is required",o="Photo is required",s="Password is required",c="Old password is required",m="Password must contain atleast 8 digits",l="Password must contain atleast 1 capital, 1 number and 1 special character.",d="New password is required",u="Confirm password is required",f="Password & confirm password don\u2019t match",p="New password & confirm password don\u2019t match",b="Password and Confirm password doesn't match",A="Firstname is required",g="Lastname is required",N="Email is required",E="Gender is required",h="Email must be a valid email",v="Address is required",q="Phone is required",w="Phone is required and must contains 10 digits",x="Vendor contact must contains 10 digits",y="Minimum cart value is required",P="Minimum cart value must be a number",O="Maximum discount required",T="Maximum discount must be a number",C="Coupon Code is required",B="Percentage is required",k="Percentage must be a number",L="Please select vendors",V="Please select a date range for the promocode",j="Select image file only",I="GST is required",F="Packaging charges must be a number",S="Packaging charges is required",D="Delivery charge km must be a number",G="Delivery charge km is required",K="Order accept time must be a number",R="Order accept time is required",X="Order preparing time must be a number",Z="Order preparing time is required",U="Vendor platform fee is required",Y="TCS is required",Q="Payment gateway transaction percentage is required",z="Vendor platform fee must be a number",H="TCS must be a number",J="Payment gateway transaction percentage must be a number",M="Title is required",W="Device type is required",_="Message is required",$="Please select category",ee="Please select sub category type",re="Price is required",te="Price must be a number",ae="Name is required",ne="Account number is required",ie="Account number must be a number",oe="Account Holder is required",se="IFSC code is required",ce="Vendor Name is required",me="Payment Options is required",le="Order type is required",de="House number is required",ue="Landmark is required",fe="Area is required",pe="City is required",be="State is required",Ae="Country is required",ge="Pincode is required",Ne="Pincode must contains 6 digits",Ee="Please enter message",he="Description is required",ve="Please insert OTP",qe="OTP must contains 6 digits",we="Transaction id is required",xe="Vendor has not submit his/her profile yet."},283:function(e,r,t){"use strict";var a=t(4),n=t.n(a),i=t(45),o=t(38),s=t(1);r.a=function(e){var r=Object(o.c)((function(e){return e.modal})),t=r.message,a=r.notifyType,c=r.redirectURL,m=r.buttonClick,l=r.withButton,d=Object(o.b)();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"modal-backdrop fade in error-modal-backdrop"}),n.a.createElement("div",{className:"modal coman-modal fade in error-modal",id:"add-cat",tabIndex:-1,role:"dialog","aria-labelledby":"myModalLabel",style:{display:"block",zIndex:2052}},n.a.createElement("div",{className:"modal-dialog modal-a",role:"document"},n.a.createElement("div",{className:2===a||0===a?"modal-content text-center animated bounceIn":"modal-content text-center animated shake"}," ",n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"f-modal-alert"},1===a?n.a.createElement("div",{className:"f-modal-icon f-modal-error animate"},n.a.createElement("span",{className:"f-modal-x-mark"},n.a.createElement("span",{className:"f-modal-line f-modal-left animateXLeft"}),n.a.createElement("span",{className:"f-modal-line f-modal-right animateXRight"})),n.a.createElement("div",{className:"f-modal-placeholder"}),n.a.createElement("div",{className:"f-modal-fix"})):2===a?n.a.createElement("div",{className:"f-modal-icon f-modal-success animate"},n.a.createElement("span",{className:"f-modal-line f-modal-tip animateSuccessTip"}),n.a.createElement("span",{className:"f-modal-line f-modal-long animateSuccessLong"}),n.a.createElement("div",{className:"f-modal-placeholder"}),n.a.createElement("div",{className:"f-modal-fix"})):3===a?n.a.createElement("div",{className:"f-modal-icon f-modal-warning animate"},n.a.createElement("span",{className:"f-modal-body pulseWarningIns"}),n.a.createElement("span",{className:"f-modal-dot pulseWarningIns"}),n.a.createElement("div",{className:"f-modal-placeholder"}),n.a.createElement("div",{className:"f-modal-fix"})):null),n.a.createElement("p",{style:0===a?{paddingTop:"20px"}:{}},t),l&&n.a.createElement("div",{className:"text-center m-t-md"},void 0!==c&&""!==c?n.a.createElement(i.b,{className:"btn btn-primary",to:c,onClick:m?function(e){d(Object(s.Wj)()),e.stopPropagation(),m()}:function(e){d(Object(s.Wj)()),e.stopPropagation()}},"Okay"):n.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:m?function(e){d(Object(s.Wj)()),e.stopPropagation(),m()}:function(e){d(Object(s.Wj)()),e.stopPropagation()}},"Okay")))))))}},290:function(e,r,t){"use strict";var a=t(4),n=t.n(a),i=t(14);r.a=Object(i.h)((function(e){var r=e.pageTitle,a=e.rightTopSection,i=e.dataLoadeed,o=e.errorMsg,s=e.children;if(void 0===r||null===r||""===r)throw new Error("pageTitle is required params");if(void 0===i||null===i||""===i)throw new Error("dataLoadeed is required params with type boolean");if(void 0===s||null===s||""===s)throw new Error("children is required params");return n.a.createElement("div",{className:"wrapper wrapper-content ecommerce",id:"user-details"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"ibox-content"},n.a.createElement("div",{className:"box-heading"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("h2",null,n.a.createElement("button",{type:"button",className:"cardwithback-btn",onClick:function(){return e.history.goBack()}},n.a.createElement("img",{src:t(291),className:"img-back",alt:""})),r)),i&&a),i?s:n.a.createElement("div",{className:"error-card-div"},void 0!==o&&""!==o?o:"Loading..."))))))}))},291:function(e,r){e.exports="data:image/png;base64,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"},900:function(e,r,t){"use strict";t.r(r);var a=t(4),n=t.n(a),i=t(14),o=t(38),s=t(287),c=t(288),m=t(280),l=t(281),d=t(290),u=t(283),f=t(1),p=t(282);r.default=Object(l.a)(Object(i.h)((function(e){var r=e.match.params.id,t=Object(o.b)(),i=Object(o.c)((function(e){return e.promoters})),m=i.errorMsg,l=i.promoter,b=Object(o.c)((function(e){return e.modal})).open,A={columnName:"name",orderBy:"asc",search:"",skip:0,limit:10},g=s.object({firstName:s.string().trim().required(p.L),phone:s.string().label("Phone").trim().min(10).max(10).required(p.cb),dob:s.string().required("Date of Birth Required"),email:s.string().email().typeError(p.x).required(p.w),password:s.string().matches(/^[A-Za-z\d@$!%*?&]{8,}$/,p.sb),confirm_password:s.string().oneOf([s.ref("password")],"Password must be same"),commission:s.string().max(2).matches(/^[0-9]*$/,"Enter Valid Number").required("Commission is Required")});return Object(a.useEffect)((function(){return r&&t(Object(f.xj)(r)),function(){t(Object(f.Pk)())}}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{pageTitle:e.history.location.pathname.includes("add")?"Add Promoter":"Edit Promoter",dataLoadeed:!0,errorMsgAddPromoCode:""},n.a.createElement(c.a,{enableReinitialize:!0,initialValues:{firstName:r&&l.firstName?l.firstName:"",email:r&&l.email?l.email:"",phone:r&&l.phone?l.phone:"",dob:r?l.dob:"",password:"",confirm_password:"",commission:r&&l.commission?l.commission:""},validationSchema:g,onSubmit:function(a,n){var i=n.setSubmitting;!function(a){r&&(a.id=r,t(Object(f.Je)({history:e.history,formValues:a,tableFilter:A})))}(a),i(!1)}},(function(e){var t=e.values,a=e.errors,i=e.touched,o=e.handleChange,s=e.handleBlur,c=e.handleSubmit;return n.a.createElement("form",{onSubmit:c},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12 col-lg-6 col-md-6 col-sm-6"},n.a.createElement("div",{className:"from-group text-left"},n.a.createElement("h4",{className:"required-field"},"Full Name :"),n.a.createElement("input",{type:"text",name:"firstName",placeholder:"Enter Full Name",className:"form-control",value:t.firstName,onChange:o,onBlur:s}),n.a.createElement("div",{className:"error-message"},a.firstName&&i.firstName&&a.firstName))),n.a.createElement("div",{className:"col-xs-12 col-lg-6 col-md-6 col-sm-6"},n.a.createElement("div",{className:"from-group text-left"},n.a.createElement("h4",{className:"required-field"},"Email :"),n.a.createElement("input",{type:"text",name:"email",placeholder:"Enter Email",className:"form-control",value:t.email,onChange:o,onBlur:s}),n.a.createElement("div",{className:"error-message"},a.email&&i.email&&a.email))),n.a.createElement("div",{className:"col-xs-12 col-lg-6 col-md-6 col-sm-6"},n.a.createElement("div",{className:"from-group text-left"},n.a.createElement("h4",{className:"required-field"},"Password : "),n.a.createElement("input",{type:"text",name:"password",placeholder:"Enter Password",className:"form-control",value:t.password,disabled:r&&l._id,onChange:o,onBlur:s}),n.a.createElement("div",{className:"error-message"},a.password&&i.password&&a.password))),n.a.createElement("div",{className:"col-xs-12 col-lg-6 col-md-6 col-sm-6"},n.a.createElement("div",{className:"from-group text-left"},n.a.createElement("h4",{className:"required-field"},"Confirm Password : "),n.a.createElement("input",{type:"text",name:"confirm_password",placeholder:"Enter Password",className:"form-control",value:t.confirm_password,disabled:r&&l._id,onChange:o,onBlur:s}),n.a.createElement("div",{className:"error-message"},a.confirm_password&&i.confirm_password&&a.confirm_password))),n.a.createElement("div",{className:"col-xs-12 col-lg-6 col-md-6 col-sm-6"},n.a.createElement("div",{className:"from-group text-left"},n.a.createElement("h4",{className:"required-field"},"Phone : "),n.a.createElement("input",{type:"text",name:"phone",placeholder:"Enter Phone Number",className:"form-control",value:t.phone,onChange:o,onBlur:s}),n.a.createElement("div",{className:"error-message"},a.phone&&i.phone&&a.phone))),n.a.createElement("div",{className:"col-xs-12 col-lg-3 col-md-6 col-sm-12"},n.a.createElement("div",{className:"from-group text-left"},n.a.createElement("h4",{className:"required-field"},"Date of Birth : "),n.a.createElement("input",{type:"date",name:"dob",value:t.dob,onChange:o,onBlur:s,className:"form-control",required:!0}),n.a.createElement("div",{className:"error-message"},a.dob&&i.dob&&a.dob))),n.a.createElement("div",{className:"col-xs-12 col-lg-6 col-md-6 col-sm-6"},n.a.createElement("div",{className:"from-group text-left"},n.a.createElement("h4",{className:"required-field"},"Commission in Percentage(%) :"),n.a.createElement("input",{type:"text",name:"commission",placeholder:"Enter Commission",className:"form-control",value:t.commission,onChange:o,onBlur:s}),n.a.createElement("div",{className:"error-message"},a.commission&&i.commission&&a.commission)))),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{type:"submit",className:"btn btn-primary m-l-sm m-b-md",style:{marginTop:"20px"}},"Save")),n.a.createElement("div",{className:"error-message"},m))}))),b&&n.a.createElement(u.a,null))})),m.a)}}]);
//# sourceMappingURL=54.5a276e74.chunk.js.map