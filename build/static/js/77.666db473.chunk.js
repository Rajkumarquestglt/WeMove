/*! For license information please see 77.666db473.chunk.js.LICENSE.txt */
(this["webpackJsonpwetaxi-market-place"]=this["webpackJsonpwetaxi-market-place"]||[]).push([[77],{292:function(e,t,n){e.exports=n.p+"static/media/logo-modal.ec7f7918.png"},296:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return A}));var r=n(4),a=n.n(r),i=n(297),o=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function l(e){var t=e.attributes,n=void 0===t?{}:t,r=e.children,i=void 0===r?null:r,o=e.selfClose,c=void 0!==o&&o,s=e.tagName;return c?a.a.createElement(s,n):a.a.createElement(s,n,i)}var d=function(){function e(){}var t=e.prototype;return t.attribute=function(e,t){return t},t.node=function(e,t){return t},e}(),u=/(url|image|image-set)\(/i,p=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.attribute=function(e,t){return"style"===e&&Object.keys(t).forEach((function(e){String(t[e]).match(u)&&delete t[e]})),t},r}(d),h={a:{content:9,self:!1,type:105},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:9,void:!0},body:{content:127},button:{content:8,type:105},caption:{content:1,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:97},dd:{content:1,parent:["dl"]},dl:{children:["dt","dd"],type:1},dt:{content:1,invalid:["footer","header"],parent:["dl"]},figcaption:{content:1,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:1,void:!0},img:{void:!0},li:{content:1,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:1},picture:{children:["source","img"],type:25},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:8,parent:["ruby","rtc"]},rtc:{content:8,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:8,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:1},tbody:{parent:["table"],children:["tr"]},td:{content:1,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:1,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:1},video:{children:["track","source"]},wbr:{type:9,void:!0}};function f(e){return function(t){h[t]=c({},e,h[t])}}["address","main","div","figure","p","pre"].forEach(f({content:1,type:65})),["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(f({content:8,type:73})),["p","pre"].forEach(f({content:8,type:65})),["s","small","span","del","ins"].forEach(f({content:8,type:9})),["article","aside","footer","header","nav","section","blockquote"].forEach(f({content:1,type:67})),["h1","h2","h3","h4","h5","h6"].forEach(f({content:8,type:69})),["audio","canvas","iframe","img","video"].forEach(f({type:89}));var m=Object.freeze(h),v=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],y=Object.keys(m).filter((function(e){return"canvas"!==e&&"iframe"!==e})),g=Object.freeze({alt:1,cite:1,class:1,colspan:3,controls:4,datetime:1,default:4,disabled:4,dir:1,height:1,href:1,id:1,kind:1,label:1,lang:1,loading:1,loop:4,media:1,muted:4,poster:1,role:1,rowspan:3,scope:1,sizes:1,span:3,start:3,style:5,src:1,srclang:1,srcset:1,target:1,title:1,type:1,width:1}),b=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet"}),x=/^<(!doctype|(html|head|body)(\s|>))/i,E=/^(aria\x2D|data\x2D|[0-9A-Z_a-z\u017F\u212A]+:)/i,k=/{{{(\w+)\/?}}}/;function w(){if("undefined"!==typeof window&&"undefined"!==typeof document)return document.implementation.createHTMLDocument("Interweave")}var N=function(){function t(e,t,n,r){void 0===t&&(t={}),void 0===n&&(n=[]),void 0===r&&(r=[]),this.allowed=void 0,this.banned=void 0,this.blocked=void 0,this.container=void 0,this.content=[],this.props=void 0,this.matchers=void 0,this.filters=void 0,this.keyIndex=void 0,this.props=t,this.matchers=n,this.filters=[].concat(r,[new p]),this.keyIndex=-1,this.container=this.createContainer(e||""),this.allowed=new Set(t.allowList||y),this.banned=new Set(v),this.blocked=new Set(t.blockList)}var n=t.prototype;return n.applyAttributeFilters=function(e,t){return this.filters.reduce((function(t,n){return null!==t&&"function"===typeof n.attribute?n.attribute(e,t):t}),t)},n.applyNodeFilters=function(e,t){return this.filters.reduce((function(t,n){return null!==t&&"function"===typeof n.node?n.node(e,t):t}),t)},n.applyMatchers=function(e,t){var n=this,r={},a=this.props,i=e,o=0,l=null;return this.matchers.forEach((function(e){var d=e.asTag().toLowerCase(),u=n.getTagConfig(d);if(!a[e.inverseName]&&n.isTagAllowed(d)&&n.canRenderChild(t,u)){for(var p="";i&&(l=e.match(i));){var h=l,f=h.index,m=h.length,v=h.match,y=h.valid,g=h.void,b=s(h,["index","length","match","valid","void"]),x=e.propName+o;f>0&&(p+=i.slice(0,f)),y?(p+=g?"{{{"+x+"/}}}":"{{{"+x+"}}}"+v+"{{{/"+x+"}}}",n.keyIndex+=1,o+=1,r[x]={children:v,matcher:e,props:c({},a,b,{key:n.keyIndex})}):p+=v,e.greedy?(i=p+i.slice(f+m),p=""):i=i.slice(f+(m||v.length))}e.greedy||(i=p+i)}})),0===o?e:this.replaceTokens(i,r)},n.canRenderChild=function(e,t){return!(!e.tagName||!t.tagName)&&(!e.void&&(e.children.length>0?e.children.includes(t.tagName):!(e.invalid.length>0&&e.invalid.includes(t.tagName))&&(t.parent.length>0?t.parent.includes(e.tagName):!(!e.self&&e.tagName===t.tagName)&&Boolean(e&&e.content&t.type))))},n.convertLineBreaks=function(e){var t=this.props,n=t.noHtml,r=t.disableLineBreaks;if(n||r||e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return e;var a=e.replace(/\r\n/g,"\n");return a=(a=a.replace(/\n{3,}/g,"\n\n\n")).replace(/\n/g,"<br/>")},n.createContainer=function(t){var n=(e.INTERWEAVE_SSR_POLYFILL||w)();if(n){var r=this.props.containerTagName||"body",a="body"===r||"fragment"===r?n.body:n.createElement(r);return t.match(x)||(a.innerHTML=this.convertLineBreaks(this.props.escapeHtml?o()(t):t)),a}},n.extractAttributes=function(e){var t=this,n=this.props.allowAttributes,r={},a=0;return 1===e.nodeType&&e.attributes?(Array.from(e.attributes).forEach((function(i){var o=i.name,c=i.value,s=o.toLowerCase(),l=g[s]||g[o];if(t.isSafe(e)&&(s.match(E)||(n||l&&2!==l)&&!s.match(/^on/)&&!c.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i))){var d="style"===s?t.extractStyleAttribute(e):c;4===l?d=!0:3===l?d=Number.parseFloat(String(d)):5!==l&&(d=String(d)),r[b[s]||s]=t.applyAttributeFilters(s,d),a+=1}})),0===a?null:r):null},n.extractStyleAttribute=function(e){var t={};return Array.from(e.style).forEach((function(n){var r=e.style[n];"string"!==typeof r&&"number"!==typeof r||(t[n.replace(/-([a-z])/g,(function(e,t){return t.toUpperCase()}))]=r)})),t},n.getTagConfig=function(e){var t={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return m[e]?c({},t,m[e],{tagName:e}):t},n.isSafe=function(e){if("undefined"!==typeof HTMLAnchorElement&&e instanceof HTMLAnchorElement){var t=e.getAttribute("href");if(t&&"#"===t.charAt(0))return!0;var n=e.protocol.toLowerCase();return":"===n||"http:"===n||"https:"===n||"mailto:"===n||"tel:"===n}return!0},n.isTagAllowed=function(e){return!this.banned.has(e)&&!this.blocked.has(e)&&(this.props.allowElements||this.allowed.has(e))},n.parse=function(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]},n.parseNode=function(e,t){var n=this,r=this.props,i=r.noHtml,o=r.noHtmlExceptMatchers,s=r.allowElements,d=r.transform,u=[],p="";return Array.from(e.childNodes).forEach((function(e){if(1===e.nodeType){var r=e.nodeName.toLowerCase(),h=n.getTagConfig(r);p&&(u.push(p),p="");var f,m=n.applyNodeFilters(r,e);if(!m)return;if(d){n.keyIndex+=1;var v=n.keyIndex;f=n.parseNode(m,h);var y=d(m,f,h);if(null===y)return;if("undefined"!==typeof y)return void u.push(a.a.cloneElement(y,{key:v}));n.keyIndex=v-1}if(n.banned.has(r))return;if(i||o&&"br"!==r||!n.isTagAllowed(r)||!s&&!n.canRenderChild(t,h))u=u.concat(n.parseNode(m,h.tagName?h:t));else{n.keyIndex+=1;var g=n.extractAttributes(m),b={tagName:r};g&&(b.attributes=g),h.void&&(b.selfClose=h.void),u.push(a.a.createElement(l,c({},b,{key:n.keyIndex}),f||n.parseNode(m,h)))}}else if(3===e.nodeType){var x=i&&!o?e.textContent:n.applyMatchers(e.textContent||"",t);Array.isArray(x)?u=u.concat(x):p+=x}})),p&&u.push(p),u},n.replaceTokens=function(e,t){if(!e.includes("{{{"))return e;for(var n=[],r=e,a=null;a=r.match(k);){var i=a,o=i[0],c=i[1],s=a.index,l=o.includes("/");0,s>0&&(n.push(r.slice(0,s)),r=r.slice(s));var d=t[c],u=d.children,p=d.matcher,h=d.props,f=void 0;if(l)f=o.length,n.push(p.createElement(u,h));else{var m=r.match(new RegExp("{{{/"+c+"}}}"));0,f=m.index+m[0].length,n.push(p.createElement(this.replaceTokens(r.slice(o.length,m.index),t),h))}r=r.slice(f)}return r.length>0&&n.push(r),0===n.length?"":1===n.length&&"string"===typeof n[0]?n[0]:n},t}();function A(e){var t,n=e.attributes,r=e.containerTagName,i=e.content,o=e.emptyContent,c=e.parsedContent,s=e.tagName,d=r||s||"div",u="fragment"===d||e.noWrap;if(c)t=c;else{var p=new N(i||"",e).parse();p.length>0&&(t=p)}return t||(t=o),u?a.a.createElement(a.a.Fragment,null,t):a.a.createElement(l,{attributes:n,tagName:d},t)}!function(){function e(e,t,n){this.greedy=!1,this.options=void 0,this.propName=void 0,this.inverseName=void 0,this.factory=void 0,this.options=c({},t),this.propName=e,this.inverseName="no"+(e.charAt(0).toUpperCase()+e.slice(1)),this.factory=n||null}var t=e.prototype;t.createElement=function(e,t){return this.factory?a.a.createElement(this.factory,t,e):this.replaceWith(e,t)},t.doMatch=function(e,t,n,r){return void 0===r&&(r=!1),function(e,t,n,r){void 0===r&&(r=!1);var a=e.match(t instanceof RegExp?t:new RegExp(t,"i"));return a?c({match:a[0],void:r},n(a),{index:a.index,length:a[0].length,valid:!0}):null}(e,t,n,r)},t.onBeforeParse=function(e,t){return e},t.onAfterParse=function(e,t){return e}}()}).call(this,n(19))},297:function(e,t,n){"use strict";var r=/["'&<>]/;e.exports=function(e){var t,n=""+e,a=r.exec(n);if(!a)return n;var i="",o=0,c=0;for(o=a.index;o<n.length;o++){switch(n.charCodeAt(o)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}c!==o&&(i+=n.substring(c,o)),c=o+1,i+=t}return c!==o?i+n.substring(c,o):i}},873:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),i=n(38),o=n(296),c=n(1);t.default=function(e){var t=Object(i.b)(),s=Object(i.c)((function(e){return e.cms})),l=s.CMSContent,d=s.isCMSLoaded,u=s.errorMsg;return Object(r.useEffect)((function(){return t(Object(c.si)("privacyPolicy")),function(){return t(Object(c.vk)())}}),[]),a.a.createElement("div",{id:"wrapper"},a.a.createElement("div",{className:" coman-modal coman-modal-a",id:"sign-in"},a.a.createElement("div",{className:"modal-content  text-center modal-dialog  modal-dialog-centered",role:"document",style:{textAlign:"center",width:"auto"}},a.a.createElement("a",null,a.a.createElement("img",{src:n(292),alt:"",style:{marginBottom:"29px",width:80}})),a.a.createElement("h1",null,"Policy"),a.a.createElement("div",{className:"container",style:d&&""===u?{textAlign:"justify",minHeight:250}:{textAlign:"center",padding:"125px 0px"}},d?a.a.createElement(o.a,{content:l.content}):"Loading...",d&&u),a.a.createElement("div",{style:{marginTop:"87px"}},"\xa9 Copyright 2020. All Rights Reserved"))))}}}]);
//# sourceMappingURL=77.666db473.chunk.js.map