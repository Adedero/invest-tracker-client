const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/quill-DY0AYgTF.js","assets/_commonjsHelpers-Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{P as oe,bq as ce,a8 as j,bh as Q,aq as ue,aY as H,br as le,bs as pe,ar as qe,ah as G,bt as U,bu as me,bv as fe,aD as C,b0 as A,bg as be,an as ve,aa as Z,bw as he,bx as ge,f as N,A as F,ag as ie,h as T,o as c,c as q,b as o,I as Y,q as z,j as D,H as v,a,v as k,k as $,t as d,n as re,s as K,O as se,ax as we,R as p,aT as ke,by as ye,af as xe,a6 as W,E as _e,a4 as J,K as $e,B as Te}from"./index-k-7ViVgn.js";import{s as Se}from"./index-LLjMRP17.js";import{s as Ee}from"./index-Dd8S0VpA.js";import{u as V}from"./index-HWEJQlsh.js";import{t as R}from"./helpers-BF5XYaOm.js";import{s as ze}from"./index-BHY7YUQw.js";import{s as De}from"./index-DhLjQS3e.js";import{_ as ae}from"./ErrorMessage.vue_vue_type_script_setup_true_lang-B7HlNIPr.js";import{s as Oe}from"./index-Cfn63MK0.js";import{_ as Ce}from"./PageLoader-COy97JVn.js";import{_ as Ae}from"./VCard.vue_vue_type_script_setup_true_lang-DiPn360S.js";import"./index-BaQMZKPQ.js";var Le=function(t){var e=t.dt;return`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: `.concat(e("tooltip.max.width"),`;
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 `).concat(e("tooltip.gutter"),`;
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: `).concat(e("tooltip.gutter"),` 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: `).concat(e("tooltip.background"),`;
    color: `).concat(e("tooltip.color"),`;
    padding: `).concat(e("tooltip.padding"),`;
    box-shadow: `).concat(e("tooltip.shadow"),`;
    border-radius: `).concat(e("tooltip.border.radius"),`;
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
}

.p-tooltip-right .p-tooltip-arrow {
    margin-top: calc(-1 * `).concat(e("tooltip.gutter"),`);
    border-width: `).concat(e("tooltip.gutter")," ").concat(e("tooltip.gutter")," ").concat(e("tooltip.gutter"),` 0;
    border-right-color: `).concat(e("tooltip.background"),`;
}

.p-tooltip-left .p-tooltip-arrow {
    margin-top: calc(-1 * `).concat(e("tooltip.gutter"),`);
    border-width: `).concat(e("tooltip.gutter")," 0 ").concat(e("tooltip.gutter")," ").concat(e("tooltip.gutter"),`;
    border-left-color: `).concat(e("tooltip.background"),`;
}

.p-tooltip-top .p-tooltip-arrow {
    margin-left: calc(-1 * `).concat(e("tooltip.gutter"),`);
    border-width: `).concat(e("tooltip.gutter")," ").concat(e("tooltip.gutter")," 0 ").concat(e("tooltip.gutter"),`;
    border-top-color: `).concat(e("tooltip.background"),`;
    border-bottom-color: `).concat(e("tooltip.background"),`;
}

.p-tooltip-bottom .p-tooltip-arrow {
    margin-left: calc(-1 * `).concat(e("tooltip.gutter"),`);
    border-width: 0 `).concat(e("tooltip.gutter")," ").concat(e("tooltip.gutter")," ").concat(e("tooltip.gutter"),`;
    border-top-color: `).concat(e("tooltip.background"),`;
    border-bottom-color: `).concat(e("tooltip.background"),`;
}
`)},Ie={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},He=oe.extend({name:"tooltip-directive",theme:Le,classes:Ie}),Me=ce.extend({style:He});function Be(l,t){return Re(l)||Ve(l,t)||je(l,t)||Pe()}function Pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(l,t){if(l){if(typeof l=="string")return X(l,t);var e={}.toString.call(l).slice(8,-1);return e==="Object"&&l.constructor&&(e=l.constructor.name),e==="Map"||e==="Set"?Array.from(l):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?X(l,t):void 0}}function X(l,t){(t==null||t>l.length)&&(t=l.length);for(var e=0,n=Array(t);e<t;e++)n[e]=l[e];return n}function Ve(l,t){var e=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(e!=null){var n,r,s,b,h=[],f=!0,x=!1;try{if(s=(e=e.call(l)).next,t!==0)for(;!(f=(n=s.call(e)).done)&&(h.push(n.value),h.length!==t);f=!0);}catch(g){x=!0,r=g}finally{try{if(!f&&e.return!=null&&(b=e.return(),Object(b)!==b))return}finally{if(x)throw r}}return h}}function Re(l){if(Array.isArray(l))return l}function ee(l,t,e){return(t=Ue(t))in l?Object.defineProperty(l,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[t]=e,l}function Ue(l){var t=We(l,"string");return O(t)=="symbol"?t:t+""}function We(l,t){if(O(l)!="object"||!l)return l;var e=l[Symbol.toPrimitive];if(e!==void 0){var n=e.call(l,t||"default");if(O(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(l)}function O(l){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(l)}var Ne=Me.extend("tooltip",{beforeMount:function(t,e){var n,r=this.getTarget(t);if(r.$_ptooltipModifiers=this.getModifiers(e),e.value){if(typeof e.value=="string")r.$_ptooltipValue=e.value,r.$_ptooltipDisabled=!1,r.$_ptooltipEscape=!0,r.$_ptooltipClass=null,r.$_ptooltipFitContent=!0,r.$_ptooltipIdAttr=j()+"_tooltip",r.$_ptooltipShowDelay=0,r.$_ptooltipHideDelay=0,r.$_ptooltipAutoHide=!0;else if(O(e.value)==="object"&&e.value){if(Q(e.value.value)||e.value.value.trim()==="")return;r.$_ptooltipValue=e.value.value,r.$_ptooltipDisabled=!!e.value.disabled===e.value.disabled?e.value.disabled:!1,r.$_ptooltipEscape=!!e.value.escape===e.value.escape?e.value.escape:!0,r.$_ptooltipClass=e.value.class||"",r.$_ptooltipFitContent=!!e.value.fitContent===e.value.fitContent?e.value.fitContent:!0,r.$_ptooltipIdAttr=e.value.id||j()+"_tooltip",r.$_ptooltipShowDelay=e.value.showDelay||0,r.$_ptooltipHideDelay=e.value.hideDelay||0,r.$_ptooltipAutoHide=!!e.value.autoHide===e.value.autoHide?e.value.autoHide:!0}}else return;r.$_ptooltipZIndex=(n=e.instance.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.zIndex)===null||n===void 0?void 0:n.tooltip,this.bindEvents(r,e),t.setAttribute("data-pd-tooltip",!0)},updated:function(t,e){var n=this.getTarget(t);if(n.$_ptooltipModifiers=this.getModifiers(e),this.unbindEvents(n),!!e.value){if(typeof e.value=="string")n.$_ptooltipValue=e.value,n.$_ptooltipDisabled=!1,n.$_ptooltipEscape=!0,n.$_ptooltipClass=null,n.$_ptooltipIdAttr=n.$_ptooltipIdAttr||j()+"_tooltip",n.$_ptooltipShowDelay=0,n.$_ptooltipHideDelay=0,n.$_ptooltipAutoHide=!0,this.bindEvents(n,e);else if(O(e.value)==="object"&&e.value)if(Q(e.value.value)||e.value.value.trim()===""){this.unbindEvents(n,e);return}else n.$_ptooltipValue=e.value.value,n.$_ptooltipDisabled=!!e.value.disabled===e.value.disabled?e.value.disabled:!1,n.$_ptooltipEscape=!!e.value.escape===e.value.escape?e.value.escape:!0,n.$_ptooltipClass=e.value.class||"",n.$_ptooltipFitContent=!!e.value.fitContent===e.value.fitContent?e.value.fitContent:!0,n.$_ptooltipIdAttr=e.value.id||n.$_ptooltipIdAttr||j()+"_tooltip",n.$_ptooltipShowDelay=e.value.showDelay||0,n.$_ptooltipHideDelay=e.value.hideDelay||0,n.$_ptooltipAutoHide=!!e.value.autoHide===e.value.autoHide?e.value.autoHide:!0,this.bindEvents(n,e)}},unmounted:function(t,e){var n=this.getTarget(t);this.remove(n),this.unbindEvents(n,e),n.$_ptooltipScrollHandler&&(n.$_ptooltipScrollHandler.destroy(),n.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(t,e){var n=this,r=t.$_ptooltipModifiers;r.focus?(t.$_focusevent=function(s){return n.onFocus(s,e)},t.addEventListener("focus",t.$_focusevent),t.addEventListener("blur",this.onBlur.bind(this))):(t.$_mouseenterevent=function(s){return n.onMouseEnter(s,e)},t.addEventListener("mouseenter",t.$_mouseenterevent),t.addEventListener("mouseleave",this.onMouseLeave.bind(this)),t.addEventListener("click",this.onClick.bind(this))),t.addEventListener("keydown",this.onKeydown.bind(this))},unbindEvents:function(t){var e=t.$_ptooltipModifiers;e.focus?(t.removeEventListener("focus",t.$_focusevent),t.$_focusevent=null,t.removeEventListener("blur",this.onBlur.bind(this))):(t.removeEventListener("mouseenter",t.$_mouseenterevent),t.$_mouseenterevent=null,t.removeEventListener("mouseleave",this.onMouseLeave.bind(this)),t.removeEventListener("click",this.onClick.bind(this))),t.removeEventListener("keydown",this.onKeydown.bind(this))},bindScrollListener:function(t){var e=this;t.$_ptooltipScrollHandler||(t.$_ptooltipScrollHandler=new ue(t,function(){e.hide(t)})),t.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(t){t.$_ptooltipScrollHandler&&t.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(t,e){var n=t.currentTarget,r=n.$_ptooltipShowDelay;this.show(n,e,r)},onMouseLeave:function(t){var e=t.currentTarget,n=e.$_ptooltipHideDelay,r=e.$_ptooltipAutoHide;if(r)this.hide(e,n);else{var s=H(t.target,"data-pc-name")==="tooltip"||H(t.target,"data-pc-section")==="arrow"||H(t.target,"data-pc-section")==="text"||H(t.relatedTarget,"data-pc-name")==="tooltip"||H(t.relatedTarget,"data-pc-section")==="arrow"||H(t.relatedTarget,"data-pc-section")==="text";!s&&this.hide(e,n)}},onFocus:function(t,e){var n=t.currentTarget,r=n.$_ptooltipShowDelay;this.show(n,e,r)},onBlur:function(t){var e=t.currentTarget,n=e.$_ptooltipHideDelay;this.hide(e,n)},onClick:function(t){var e=t.currentTarget,n=e.$_ptooltipHideDelay;this.hide(e,n)},onKeydown:function(t){var e=t.currentTarget,n=e.$_ptooltipHideDelay;t.code==="Escape"&&this.hide(t.currentTarget,n)},tooltipActions:function(t,e){if(!(t.$_ptooltipDisabled||!le(t))){var n=this.create(t,e);this.align(t),!this.isUnstyled()&&pe(n,250);var r=this;window.addEventListener("resize",function s(){qe()||r.hide(t),window.removeEventListener("resize",s)}),n.addEventListener("mouseleave",function s(){r.hide(t),n.removeEventListener("mouseleave",s),t.removeEventListener("mouseenter",t.$_mouseenterevent),setTimeout(function(){return t.addEventListener("mouseenter",t.$_mouseenterevent)},50)}),this.bindScrollListener(t),G.set("tooltip",n,t.$_ptooltipZIndex)}},show:function(t,e,n){var r=this;n!==void 0?this.timer=setTimeout(function(){return r.tooltipActions(t,e)},n):this.tooltipActions(t,e)},tooltipRemoval:function(t){this.remove(t),this.unbindScrollListener(t)},hide:function(t,e){var n=this;clearTimeout(this.timer),e!==void 0?setTimeout(function(){return n.tooltipRemoval(t)},e):this.tooltipRemoval(t)},getTooltipElement:function(t){return document.getElementById(t.$_ptooltipId)},create:function(t){var e=t.$_ptooltipModifiers,n=U("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:e})}),r=U("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:e})});t.$_ptooltipEscape?(r.innerHTML="",r.appendChild(document.createTextNode(t.$_ptooltipValue))):r.innerHTML=t.$_ptooltipValue;var s=U("div",ee(ee({id:t.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:t.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&t.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),t.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:e})),n,r);return document.body.appendChild(s),t.$_ptooltipId=s.id,this.$el=s,s},remove:function(t){if(t){var e=this.getTooltipElement(t);e&&e.parentElement&&(G.clear(e),document.body.removeChild(e)),t.$_ptooltipId=null}},align:function(t){var e=t.$_ptooltipModifiers;e.top?(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignTop(t))):e.left?(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignLeft(t))))):e.bottom?(this.alignBottom(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&this.alignBottom(t))):(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignRight(t)))))},getHostOffset:function(t){var e=t.getBoundingClientRect(),n=e.left+me(),r=e.top+fe();return{left:n,top:r}},alignRight:function(t){this.preAlign(t,"right");var e=this.getTooltipElement(t),n=this.getHostOffset(t),r=n.left+C(t),s=n.top+(A(t)-A(e))/2;e.style.left=r+"px",e.style.top=s+"px"},alignLeft:function(t){this.preAlign(t,"left");var e=this.getTooltipElement(t),n=this.getHostOffset(t),r=n.left-C(e),s=n.top+(A(t)-A(e))/2;e.style.left=r+"px",e.style.top=s+"px"},alignTop:function(t){this.preAlign(t,"top");var e=this.getTooltipElement(t),n=this.getHostOffset(t),r=n.left+(C(t)-C(e))/2,s=n.top-A(e);e.style.left=r+"px",e.style.top=s+"px"},alignBottom:function(t){this.preAlign(t,"bottom");var e=this.getTooltipElement(t),n=this.getHostOffset(t),r=n.left+(C(t)-C(e))/2,s=n.top+A(t);e.style.left=r+"px",e.style.top=s+"px"},preAlign:function(t,e){var n=this.getTooltipElement(t);n.style.left="-999px",n.style.top="-999px",be(n,"p-tooltip-".concat(n.$_ptooltipPosition)),!this.isUnstyled()&&ve(n,"p-tooltip-".concat(e)),n.$_ptooltipPosition=e,n.setAttribute("data-p-position",e);var r=Z(n,'[data-pc-section="arrow"]');r.style.top=e==="bottom"?"0":e==="right"||e==="left"||e!=="right"&&e!=="left"&&e!=="top"&&e!=="bottom"?"50%":null,r.style.bottom=e==="top"?"0":null,r.style.left=e==="right"||e!=="right"&&e!=="left"&&e!=="top"&&e!=="bottom"?"0":e==="top"||e==="bottom"?"50%":null,r.style.right=e==="left"?"0":null},isOutOfBounds:function(t){var e=this.getTooltipElement(t),n=e.getBoundingClientRect(),r=n.top,s=n.left,b=C(e),h=A(e),f=he();return s+b>f.width||s<0||r<0||r+h>f.height},getTarget:function(t){var e;return ge(t,"p-inputwrapper")&&(e=Z(t,"input"))!==null&&e!==void 0?e:t},getModifiers:function(t){return t.modifiers&&Object.keys(t.modifiers).length?t.modifiers:t.arg&&O(t.arg)==="object"?Object.entries(t.arg).reduce(function(e,n){var r=Be(n,2),s=r[0],b=r[1];return(s==="event"||s==="position")&&(e[b]=!0),e},{}):{}}}});const Fe={key:0,class:"mt-2 border rounded-lg p-2 flex items-start gap-2"},Ye={class:"text-sm text-mute"},Ke={key:0},Qe={class:"font-semibold"},Ge={key:1},Ze={class:"font-semibold"},Je={class:"font-semibold"},Xe={key:2},et={class:"font-semibold"},tt={class:"font-semibold"},nt={class:"font-semibold"},ot={key:1,class:"mt-2"},lt={class:"mt-4 flex items-center justify-end gap-2"},it=N({__name:"TransactionStatusManager",props:{transaction:{},action:{}},emits:["update"],setup(l,{emit:t}){const e=t,n=F(),r=ie(),s=T(!1),b=T(!1),h=T(""),f=T(!1),x=T();async function g(){if(l.transaction.status!=="pending"){r.add({severity:"error",summary:"Failed",detail:"Transaction status has already been resolved",life:6e3});return}if(l.transaction.transactionType!=="deposit"&&l.transaction.transactionType!=="withdrawal"){r.add({severity:"error",summary:"Failed",detail:"Only deposit or withdrawal transactions can be modified",life:6e3});return}if(l.action==="failed"&&!h.value){r.add({severity:"error",summary:"Failed",detail:"No reason for failure provided",life:6e3});return}await V(`admin/transaction-status/${l.transaction.id}`,{loading:f,error:x,config:{method:"PUT",router:n,body:{status:l.action,reason:h.value}}},i=>{e("update",i.data),r.add({severity:"success",summary:"Done",detail:"Transaction status updated successfully",life:400}),w()}),x.value&&r.add({severity:"error",summary:"Failed",detail:x.value.message,life:6e3})}function w(){s.value=!1,b.value=!1}return(i,u)=>{const _=K,y=Ee,m=Se,L=se;return c(),q("div",null,[o("div",{onClick:u[0]||(u[0]=E=>b.value=!0),class:"cursor-pointer"},[Y(i.$slots,"default",{},()=>[i.action==="successful"?(c(),z(_,{key:0,label:`Approve ${D(R)(i.transaction.transactionType)}`,icon:"pi pi-chevron-right","icon-pos":"right",size:"small",fluid:""},null,8,["label"])):v("",!0),i.action==="failed"?(c(),z(_,{key:1,label:`Fail ${D(R)(i.transaction.transactionType)}`,icon:"pi pi-chevron-right","icon-pos":"right",size:"small",fluid:"",severity:"danger"},null,8,["label"])):v("",!0)])]),a(L,{visible:b.value,"onUpdate:visible":u[3]||(u[3]=E=>b.value=E),modal:"",header:"Update Transaction Status",class:"w-full max-w-96"},{default:k(()=>[o("div",null,[o("p",null,[$(" You are about to mark this "+d(i.transaction.transactionType)+" as ",1),o("span",{class:re(`font-semibold ${i.action==="failed"?"text-red-500":"text-green-500"}`)},d(i.action),3),u[4]||(u[4]=$(". Are you sure you want to proceed? "))]),i.action==="successful"?(c(),q("div",Fe,[a(y,{binary:"",modelValue:s.value,"onUpdate:modelValue":u[1]||(u[1]=E=>s.value=E)},null,8,["modelValue"]),o("p",Ye,[i.transaction.isWireTransfer?(c(),q("span",Ke,[u[5]||(u[5]=$(" I have received ")),o("span",Qe," $"+d(i.transaction.amountInUSD.toLocaleString()),1),u[6]||(u[6]=$(" from the client via wire transfer. "))])):i.transaction.transactionType==="deposit"?(c(),q("span",Ge,[u[7]||(u[7]=$(" I have received ")),o("span",Ze,d(i.transaction.amountInCurrency)+" "+d(i.transaction.currency),1),u[8]||(u[8]=$(", ")),u[9]||(u[9]=o("span",null,"the equivalent of ",-1)),o("span",Je," $"+d(i.transaction.amountInUSD.toLocaleString()),1),u[10]||(u[10]=o("span",null," from the client via cryptocurrency deposit to my wallet address. ",-1))])):(c(),q("span",Xe,[u[11]||(u[11]=$(" I have sent ")),o("span",et,d(`${i.transaction.amountInCurrency} ${i.transaction.currency}`),1),u[12]||(u[12]=$(", the equivalent of ")),o("span",tt," $"+d(i.transaction.actualAmountInUSD.toLocaleString()),1),u[13]||(u[13]=o("span",null," to the client's wallet address: ",-1)),o("span",nt,d(i.transaction.withdrawalWalletAddress),1)]))])])):v("",!0),i.action==="failed"?(c(),q("div",ot,[u[14]||(u[14]=o("p",{class:"text-sm text-mute font-medium"},[$(" Reason for transaction failure "),o("span",{class:"text-red-500"},"*")],-1)),a(m,{modelValue:h.value,"onUpdate:modelValue":u[2]||(u[2]=E=>h.value=E),rows:"4",class:"resize-none",fluid:""},null,8,["modelValue"])])):v("",!0),o("div",lt,[a(_,{onClick:w,label:"Cancel",severity:"secondary"}),i.action==="successful"?(c(),z(_,{key:0,onClick:g,loading:f.value,disabled:f.value||!s.value,label:"Proceed",severity:"primary"},null,8,["loading","disabled"])):v("",!0),i.action==="failed"?(c(),z(_,{key:1,onClick:g,loading:f.value,disabled:f.value||!h.value,label:"Proceed",severity:"danger"},null,8,["loading","disabled"])):v("",!0)])])]),_:1},8,["visible"])])}}});var rt=function(t){var e=t.dt;return`
/*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    inset-inline-start: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-inline-start: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-inline-start: -1.5rem;
    margin-inline-end: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-inline-start: 0.3rem;
    margin-inline-end: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-inline-start: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-inline-end: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background: #000;
}
.ql-editor .ql-bg-red {
    background: #e60000;
}
.ql-editor .ql-bg-orange {
    background: #f90;
}
.ql-editor .ql-bg-yellow {
    background: #ff0;
}
.ql-editor .ql-bg-green {
    background: #008a00;
}
.ql-editor .ql-bg-blue {
    background: #06c;
}
.ql-editor .ql-bg-purple {
    background: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    inset-inline-start: 15px;
    pointer-events: none;
    position: absolute;
    inset-inline-end: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding-block: 3px;
    padding-inline: 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-inline-start: 4px solid #ccc;
    margin-block-end: 5px;
    margin-block-start: 5px;
    padding-inline-start: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-block-end: 5px;
    margin-block-start: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    inset-inline-start: 0;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-inline-start: 8px;
    padding-inline-end: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-block-end: 5px;
    padding-block-start: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-block-start: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    inset-inline-end: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-block-start: -9px;
    inset-inline-end: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-inline-end: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-block-start: 0;
}
.ql-snow .ql-tooltip {
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-inline-end: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-inline-end: 1px solid #ccc;
    content: 'Edit';
    margin-inline-start: 16px;
    padding-inline-end: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-inline-start: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-inline-end: 0;
    content: 'Save';
    padding-inline-end: 0;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}

.p-editor .p-editor-toolbar {
    background: `.concat(e("editor.toolbar.background"),`;
    border-start-end-radius: `).concat(e("editor.toolbar.border.radius"),`;
    border-start-start-radius: `).concat(e("editor.toolbar.border.radius"),`;
}

.p-editor .p-editor-toolbar.ql-snow {
    border: 1px solid `).concat(e("editor.toolbar.border.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: `).concat(e("editor.toolbar.item.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-fill {
    fill: `).concat(e("editor.toolbar.item.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: `).concat(e("editor.toolbar.item.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
    color: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
    stroke: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
    fill: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: `).concat(e("editor.overlay.background"),`;
    border: 1px solid `).concat(e("editor.overlay.border.color"),`;
    box-shadow: `).concat(e("editor.overlay.shadow"),`;
    border-radius: `).concat(e("editor.overlay.border.radius"),`;
    padding: `).concat(e("editor.overlay.padding"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: `).concat(e("editor.overlay.option.color"),`;
    border-radius: `).concat(e("editor.overlay.option.border.radius"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    background: `).concat(e("editor.overlay.option.focus.background"),`;
    color: `).concat(e("editor.overlay.option.focus.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: `).concat(e("editor.overlay.option.padding"),`;
}

.p-editor .p-editor-content {
    border-end-end-radius: `).concat(e("editor.content.border.radius"),`;
    border-end-start-radius: `).concat(e("editor.content.border.radius"),`;
}

.p-editor .p-editor-content.ql-snow {
    border: 1px solid `).concat(e("editor.content.border.color"),`;
}

.p-editor .p-editor-content .ql-editor {
    background: `).concat(e("editor.content.background"),`;
    color: `).concat(e("editor.content.color"),`;
    border-end-end-radius: `).concat(e("editor.content.border.radius"),`;
    border-end-start-radius: `).concat(e("editor.content.border.radius"),`;
}

.p-editor .ql-snow.ql-toolbar button:hover,
.p-editor .ql-snow.ql-toolbar button:focus {
    color: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor .ql-snow.ql-toolbar button.ql-active,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
    stroke: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
    color: `).concat(e("editor.toolbar.item.active.color"),`;
}
`)},st={root:function(t){var e=t.instance;return["p-editor",{"p-invalid":e.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},at=oe.extend({name:"editor",theme:rt,classes:st}),dt={name:"BaseEditor",extends:De,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:at,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function B(l){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(l)}function te(l,t){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(l,r).enumerable})),e.push.apply(e,n)}return e}function ct(l){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?te(Object(e),!0).forEach(function(n){ut(l,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):te(Object(e)).forEach(function(n){Object.defineProperty(l,n,Object.getOwnPropertyDescriptor(e,n))})}return l}function ut(l,t,e){return(t=pt(t))in l?Object.defineProperty(l,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[t]=e,l}function pt(l){var t=qt(l,"string");return B(t)=="symbol"?t:t+""}function qt(l,t){if(B(l)!="object"||!l)return l;var e=l[Symbol.toPrimitive];if(e!==void 0){var n=e.call(l,t||"default");if(B(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(l)}var ne=function(){try{return window.Quill}catch{return null}}(),de={name:"Editor",extends:dt,inheritAttrs:!1,emits:["text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(t,e){t!==e&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(t))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var t=this,e={modules:ct({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};ne?(this.quill=new ne(this.$refs.editorElement,e),this.initQuill(),this.handleLoad()):we(()=>import("./quill-DY0AYgTF.js"),__vite__mapDeps([0,1])).then(function(n){n&&le(t.$refs.editorElement)&&(n.default?t.quill=new n.default(t.$refs.editorElement,e):t.quill=new n(t.$refs.editorElement,e),t.initQuill())}).then(function(){t.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(t){this.quill&&(t?this.quill.clipboard.dangerouslyPasteHTML(t):this.quill.setText(""))},initQuill:function(){var t=this;this.renderValue(this.d_value),this.quill.on("text-change",function(e,n,r){if(r==="user"){var s=t.$refs.editorElement.children[0].innerHTML,b=t.quill.getText().trim();s==="<p><br></p>"&&(s=""),t.writeValue(s),t.$emit("text-change",{htmlValue:s,textValue:b,delta:e,source:r,instance:t.quill})}}),this.quill.on("selection-change",function(e,n,r){var s=t.$refs.editorElement.children[0].innerHTML,b=t.quill.getText().trim();t.$emit("selection-change",{htmlValue:s,textValue:b,range:e,oldRange:n,source:r,instance:t.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function mt(l,t,e,n,r,s){return c(),q("div",p({class:l.cx("root")},l.ptmi("root")),[o("div",p({ref:"toolbarElement",class:l.cx("toolbar")},l.ptm("toolbar")),[Y(l.$slots,"toolbar",{},function(){return[o("span",p({class:"ql-formats"},l.ptm("formats")),[o("select",p({class:"ql-header",defaultValue:"0"},l.ptm("header")),[o("option",p({value:"1"},l.ptm("option")),"Heading",16),o("option",p({value:"2"},l.ptm("option")),"Subheading",16),o("option",p({value:"0"},l.ptm("option")),"Normal",16)],16),o("select",p({class:"ql-font"},l.ptm("font")),[o("option",ke(ye(l.ptm("option"))),null,16),o("option",p({value:"serif"},l.ptm("option")),null,16),o("option",p({value:"monospace"},l.ptm("option")),null,16)],16)],16),o("span",p({class:"ql-formats"},l.ptm("formats")),[o("button",p({class:"ql-bold",type:"button"},l.ptm("bold")),null,16),o("button",p({class:"ql-italic",type:"button"},l.ptm("italic")),null,16),o("button",p({class:"ql-underline",type:"button"},l.ptm("underline")),null,16)],16),(c(),q("span",p({key:r.reRenderColorKey,class:"ql-formats"},l.ptm("formats")),[o("select",p({class:"ql-color"},l.ptm("color")),null,16),o("select",p({class:"ql-background"},l.ptm("background")),null,16)],16)),o("span",p({class:"ql-formats"},l.ptm("formats")),[o("button",p({class:"ql-list",value:"ordered",type:"button"},l.ptm("list")),null,16),o("button",p({class:"ql-list",value:"bullet",type:"button"},l.ptm("list")),null,16),o("select",p({class:"ql-align"},l.ptm("select")),[o("option",p({defaultValue:""},l.ptm("option")),null,16),o("option",p({value:"center"},l.ptm("option")),null,16),o("option",p({value:"right"},l.ptm("option")),null,16),o("option",p({value:"justify"},l.ptm("option")),null,16)],16)],16),o("span",p({class:"ql-formats"},l.ptm("formats")),[o("button",p({class:"ql-link",type:"button"},l.ptm("link")),null,16),o("button",p({class:"ql-image",type:"button"},l.ptm("image")),null,16),o("button",p({class:"ql-code-block",type:"button"},l.ptm("codeBlock")),null,16)],16),o("span",p({class:"ql-formats"},l.ptm("formats")),[o("button",p({class:"ql-clean",type:"button"},l.ptm("clean")),null,16)],16)]})],16),o("div",p({ref:"editorElement",class:l.cx("content"),style:l.editorStyle},l.ptm("content")),null,16)],16)}de.render=mt;const ft={key:0,class:"mt-1 mb-2"},bt={class:"ql-formats"},vt={class:"ql-bold"},ht={class:"ql-italic"},gt={class:"ql-underline"},wt={key:0,class:"mt-2 flex items-center justify-end"},kt={key:1,class:"w-full grid place-content-center h-60"},yt=N({__name:"WireTransferDetailMailer",props:{transaction:{},user:{}},emits:["done"],setup(l,{emit:t}){const e=t,n=F(),r=ie(),s=xe(),b=T(!1),h=T(!0),f=T(l.transaction.wireTransferEmail||""),x=T(!1),g=T();async function w(){f.value&&(await V("admin/email",{loading:x,error:g,config:{router:n,method:"POST",body:{email:l.user.email,data:{subject:"Wire Transfer Details",intro:f.value,footer:"This email was sent to you because you initiated a deposit request to your Invest Tracker account through Wire Transfer."}}}},()=>{r.add({severity:"success",summary:"Done",detail:"Email has been sent",life:3e3})}),g.value&&r.add({severity:"error",summary:"Failed to send email",detail:g.value.message,life:6e3}),await V(`admin/transactions/${l.transaction.id}`,{loading:x,error:g,config:{router:n,method:"PUT",body:{data:{wireTransferEmail:f.value}}}},()=>{e("done",f.value)}),g.value&&r.add({severity:"error",summary:"Failed to update transaction",detail:g.value.message,life:6e3}))}function i(){h.value=!0,f.value=l.transaction.wireTransferEmail||""}const u=()=>{s.require({message:`Send email to ${l.user.name??"user"}?`,header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Proceed"},accept:()=>{w()}})};return(_,y)=>{const m=K,L=ae,E=de,P=ze,M=se,I=Ne;return c(),q("div",null,[o("div",{onClick:y[0]||(y[0]=S=>b.value=!0),class:"cursor-pointer"},[Y(_.$slots,"default",{},()=>[a(m,{label:_.transaction.status!=="pending"?"View":_.transaction.wireTransferEmail?"Resend":"Send transfer details",icon:"pi pi-send",size:"small"},null,8,["label"])])]),a(M,{visible:b.value,"onUpdate:visible":y[3]||(y[3]=S=>b.value=S),maximizable:"",modal:"",header:"Wire Transfer Email",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"},onHide:i},{default:k(()=>[g.value?(c(),q("div",ft,[a(L,{error:g.value,closable:""},null,8,["error"])])):v("",!0),o("div",null,[a(E,{modelValue:f.value,"onUpdate:modelValue":y[1]||(y[1]=S=>f.value=S),editorStyle:"height: 320px",onLoad:y[2]||(y[2]=S=>h.value=!1),readonly:_.transaction.status!=="pending"},{toolbar:k(()=>[o("span",bt,[W(o("button",vt,null,512),[[I,"Bold",void 0,{bottom:!0}]]),W(o("button",ht,null,512),[[I,"Italic",void 0,{bottom:!0}]]),W(o("button",gt,null,512),[[I,"Underline",void 0,{bottom:!0}]])]),y[4]||(y[4]=o("span",{class:"ql-formats"},[o("select",{class:"ql-color"}),o("select",{class:"ql-background"})],-1))]),_:1},8,["modelValue","readonly"]),_.transaction.status==="pending"?(c(),q("div",wt,[a(m,{onClick:u,loading:x.value,disabled:x.value||!f.value,label:"Send",icon:"pi pi-send"},null,8,["loading","disabled"])])):v("",!0),h.value?(c(),q("div",kt,[a(P,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])):v("",!0)])]),_:1},8,["visible"])])}}}),xt={class:"text-lg font-semibold text-primary-500"},_t={class:"text-sm"},$t={class:"mt-2"},Tt={key:2},St={class:"md:h-[calc(100dvh-8.5rem)] grid md:grid-cols-3 gap-2"},Et={class:"md:h-full md:overflow-y-auto md:col-span-2"},zt={class:"grid gap-2 md:grid-cols-3"},Dt={class:"text-xl font-semibold"},Ot={class:"text-sm"},Ct={key:0,class:"mt-2"},At={key:0,class:"mt-2"},Lt={class:"text-sm text-mute"},It={key:1,class:"mt-2"},Ht={key:0,class:"text-sm text-mute"},Mt={key:1,class:"text-sm text-mute"},Bt={key:2,class:"flex justify-end mt-1"},Pt={class:"mt-2"},jt={class:"grid gap-2"},Vt={key:0,class:"contents"},Rt={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},Ut={class:"flex items-center"},Wt={class:"text-right font-semibold"},Nt={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},Ft={class:"flex items-center"},Yt={class:"text-right font-semibold"},Kt={key:1,class:"contents"},Qt={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},Gt={class:"flex items-center"},Zt={class:"text-right font-semibold"},Jt={key:0,class:"contents"},Xt={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},en={class:"flex items-center"},tn={class:"text-right font-semibold"},nn={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},on={class:"flex items-center"},ln={class:"text-xs text-mute"},rn={class:"text-right font-semibold"},sn={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},an={class:"flex items-center"},dn={class:"text-xs text-mute"},cn={class:"text-right font-semibold"},un={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},pn={class:"flex items-center"},qn={class:"text-xs text-mute"},mn={class:"text-right font-semibold"},fn={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},bn={class:"flex items-center"},vn={class:"text-right font-semibold"},hn={key:2,class:"contents"},gn={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},wn={class:"flex items-center"},kn={class:"text-right font-semibold"},yn={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},xn={class:"flex items-center"},_n={class:"text-right font-semibold"},$n={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},Tn={class:"flex items-center"},Sn={class:"text-right font-semibold"},En={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},zn={class:"flex items-center"},Dn={class:"text-right font-semibold"},On={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},Cn={class:"flex items-center"},An={class:"text-xs text-mute"},Ln={class:"text-right font-semibold"},In={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},Hn={class:"flex items-center"},Mn={class:"text-xs text-mute"},Bn={class:"text-right font-semibold"},Pn={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},jn={class:"flex items-center"},Vn={class:"text-right font-semibold"},Rn={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},Un={class:"flex items-center"},Wn={class:"text-right font-semibold"},Nn={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},Fn={class:"flex items-center"},Yn={class:"text-right font-semibold"},Kn={key:3,class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},Qn={class:"flex items-center"},Gn={class:"text-right font-semibold"},Zn={key:0},Jn={key:1},Xn={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},eo={class:"flex items-center"},to={class:"text-right font-semibold"},no={key:4,class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},oo={class:"flex items-center"},lo={class:"text-right font-semibold"},io={class:"md:h-full md:overflow-y-auto md:col-span-1"},ro={class:"flex flex-col items-center justify-center gap-2 text-center"},so={class:"w-32 aspect-square rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800"},ao=["src"],co={class:"font-semibold md:text-lg"},uo={class:"text-sm text-mute"},po={key:0,class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},qo={class:"flex items-center"},mo={class:"text-sm"},fo={key:1,class:"contents"},bo={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},vo={class:"flex items-center"},ho={class:"my-1"},go={class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},wo={class:"flex items-center"},ko={class:"my-1"},yo={key:2,class:"v-card !p-2 border dark:border-white/30 dark:bg-slate-800"},xo={class:"flex items-center"},Ho=N({__name:"TransactionView",setup(l){var g;const t=F(),e=(g=t.currentRoute.value.params.transactionId)==null?void 0:g.toString(),n=T(),r=T(!1),s=T();async function b(){await V(`admin/transactions/${e}?relation=user`,{loading:r,error:s,config:{router:t,cache:!0}},w=>{n.value=w.data})}function h(w){n.value&&(n.value={...n.value,...w})}function f(w){return w==="deposit"?{icon:"arrow_circle_down",color:"text-primary-500"}:w==="withdrawal"?{icon:"arrow_circle_up",color:"text-red-500"}:w==="investment"?{icon:"spa",color:"text-green-500"}:{icon:"payments",color:"text-green-500"}}function x(w){return w==="successful"?"success":w==="pending"?"warn":"danger"}return _e(async()=>{await b()}),(w,i)=>{const u=Ae,_=Ce,y=ae,m=$e,L=Oe,E=yt,P=K,M=Te,I=it;return c(),q("div",null,[a(u,{class:"p-2"},{default:k(()=>{var S;return[o("div",xt,[i[3]||(i[3]=o("span",null,"Transaction ",-1)),o("span",_t,"ID: "+d((S=n.value)==null?void 0:S.id),1)])]}),_:1}),o("div",$t,[r.value?(c(),z(_,{key:0})):s.value?(c(),z(y,{key:1,error:s.value,request:"GET",onRetry:b},null,8,["error"])):n.value?(c(),q("div",Tt,[o("div",St,[o("div",Et,[o("div",zt,[a(u,{header:"Amount"},{default:k(()=>[o("div",Dt,[o("span",null," $"+d(n.value.amountInUSD.toLocaleString().split(".")[0])+".",1),o("span",Ot,d(n.value.amountInUSD.toLocaleString().split(".")[1]??"00"),1)])]),_:1}),a(u,{header:"Type"},{default:k(()=>[o("div",{class:re(["flex items-center gap-1 font-semibold text-lg",f(n.value.transactionType).color])},[a(m,{size:"20",name:f(n.value.transactionType).icon},null,8,["name"]),o("p",null,d(D(R)(n.value.transactionType)),1)],2)]),_:1}),a(u,{header:"Status"},{default:k(()=>[a(L,{class:"font-semibold",severity:x(n.value.status),value:D(R)(n.value.status)},null,8,["severity","value"])]),_:1})]),n.value.isWireTransfer?(c(),q("div",Ct,[a(u,null,{header:k(()=>[a(L,{value:"Wire Transfer",severity:"info",icon:"pi pi-bolt"})]),default:k(()=>[n.value.status!=="pending"?(c(),q("div",At,[o("p",Lt,[i[4]||(i[4]=$(" This is a ")),i[5]||(i[5]=o("span",{class:"font-medium"},"Wire Transfer",-1)),$(" deposit request. "+d(n.value.wireTransferEmail?"The transfer details have been sent to the client's email":""),1)])])):(c(),q("div",It,[n.value.wireTransferEmail?(c(),q("p",Ht," The wire transfer details have been sent to the client's email. ")):(c(),q("p",Mt,i[6]||(i[6]=[$(" This is a "),o("span",{class:"font-medium"},"Wire Transfer",-1),$(" deposit request. You need to send the details of the transfer to the user's email. ")])))])),n.value&&n.value.user?(c(),q("div",Bt,[a(E,{transaction:n.value,user:n.value.user,onDone:i[0]||(i[0]=S=>n.value&&(n.value.wireTransferEmail=S))},null,8,["transaction","user"])])):v("",!0)]),_:1})])):v("",!0),o("div",Pt,[a(u,{header:"Details"},{default:k(()=>[o("div",jt,[n.value.transactionType==="investment"||n.value.transactionType==="profit"?(c(),q("div",Vt,[o("div",Rt,[o("div",Ut,[a(m,{prime:"",name:"dollar",size:"12",class:"text-mute p-1 rounded-full"}),i[7]||(i[7]=o("p",{class:"text-mute text-sm font-semibold"},"Amount",-1))]),o("p",Wt," $"+d(n.value.amountInUSD.toLocaleString()),1)]),o("div",Nt,[o("div",Ft,[a(m,{prime:"",name:"info-circle",size:"12",class:"text-mute p-1 rounded-full"}),i[8]||(i[8]=o("p",{class:"text-mute text-sm font-semibold"},"Investment ID",-1))]),o("p",Yt,d(n.value.investmentId),1)])])):v("",!0),n.value.transactionType==="deposit"?(c(),q("div",Kt,[o("div",Qt,[o("div",Gt,[a(m,{prime:"",name:"dollar",size:"12",class:"text-mute p-1 rounded-full"}),i[9]||(i[9]=o("p",{class:"text-mute text-sm font-semibold"},"Deposit Amount",-1))]),o("p",Zt," $"+d(n.value.amountInUSD.toLocaleString()),1)]),n.value.isWireTransfer?v("",!0):(c(),q("div",Jt,[o("div",Xt,[o("div",en,[a(m,{prime:"",name:"bitcoin",size:"12",class:"text-mute p-1 rounded-full"}),i[10]||(i[10]=o("p",{class:"text-mute text-sm font-semibold"},"Selected Currency",-1))]),o("p",tn,d(n.value.currency),1)]),o("div",nn,[o("div",on,[a(m,{prime:"",name:"arrow-right-arrow-left",size:"12",class:"text-mute p-1 rounded-full"}),i[11]||(i[11]=o("p",{class:"text-mute text-sm font-semibold"},"Exchange Rate",-1))]),o("p",ln,d(`1 ${n.value.currency} in USD`),1),o("p",rn,"$"+d(n.value.rate),1)]),o("div",sn,[o("div",an,[a(m,{prime:"",name:"money-bill",size:"12",class:"text-mute p-1 rounded-full"}),i[12]||(i[12]=o("p",{class:"text-mute text-sm font-semibold"},"Amount in selected currency",-1))]),o("p",dn,d(n.value.currency),1),o("p",cn,d(n.value.amountInCurrency),1)]),o("div",un,[o("div",pn,[a(m,{prime:"",name:"wallet",size:"12",class:"text-mute p-1 rounded-full"}),i[13]||(i[13]=o("p",{class:"text-mute text-sm font-semibold"},"Your Wallet Address",-1))]),o("p",qn," Wallet address provided by you for "+d(n.value.currency??"crypto")+" deposits. ",1),o("p",mn,d(n.value.depositWalletAddress??"No address provided"),1)]),o("div",fn,[o("div",bn,[a(m,{prime:"",name:"sitemap",size:"12",class:"text-mute p-1 rounded-full"}),i[14]||(i[14]=o("p",{class:"text-mute text-sm font-semibold"},"Wallet Address Network",-1))]),o("p",vn,d(n.value.depositWalletNetwork??"No wallet address network provided"),1)])]))])):v("",!0),n.value.transactionType==="withdrawal"?(c(),q("div",hn,[o("div",gn,[o("div",wn,[a(m,{prime:"",name:"dollar",size:"12",class:"text-mute p-1 rounded-full"}),i[15]||(i[15]=o("p",{class:"text-mute text-sm font-semibold"},"Amount Requested",-1))]),o("p",kn," $"+d(n.value.amountInUSD.toLocaleString()),1)]),o("div",yn,[o("div",xn,[a(m,{prime:"",name:"dollar",size:"12",class:"text-mute p-1 rounded-full"}),i[16]||(i[16]=o("p",{class:"text-mute text-sm font-semibold"},"Withdrawal Charge",-1))]),o("p",_n,"$"+d(n.value.charge.toLocaleString()),1)]),o("div",$n,[o("div",Tn,[a(m,{prime:"",name:"dollar",size:"12",class:"text-mute p-1 rounded-full"}),i[17]||(i[17]=o("p",{class:"text-mute text-sm font-semibold"},"Actual Amount",-1))]),o("p",Sn," $"+d(n.value.actualAmountInUSD.toLocaleString()),1)]),o("div",En,[o("div",zn,[a(m,{prime:"",name:"bitcoin",size:"12",class:"text-mute p-1 rounded-full"}),i[18]||(i[18]=o("p",{class:"text-mute text-sm font-semibold"},"Selected Currency",-1))]),o("p",Dn,d(n.value.currency),1)]),o("div",On,[o("div",Cn,[a(m,{prime:"",name:"arrow-right-arrow-left",size:"12",class:"text-mute p-1 rounded-full"}),i[19]||(i[19]=o("p",{class:"text-mute text-sm font-semibold"},"Exchange Rate",-1))]),o("p",An,d(`1 ${n.value.currency} in USD`),1),o("p",Ln,"$"+d(n.value.rate),1)]),o("div",In,[o("div",Hn,[a(m,{prime:"",name:"money-bill",size:"12",class:"text-mute p-1 rounded-full"}),i[20]||(i[20]=o("p",{class:"text-mute text-sm font-semibold"},"Amount in selected currency",-1))]),o("p",Mn,d(n.value.currency),1),o("p",Bn,d(n.value.amountInCurrency),1)]),o("div",Pn,[o("div",jn,[a(m,{prime:"",name:"wallet",size:"12",class:"text-mute p-1 rounded-full"}),i[21]||(i[21]=o("p",{class:"text-mute text-sm font-semibold"},"Client's Wallet Address",-1))]),i[22]||(i[22]=o("p",{class:"text-xs text-mute"}," Wallet address provided by client for withdrawal. ",-1)),o("p",Vn,d(n.value.withdrawalWalletAddress??"No address provided"),1)]),o("div",Rn,[o("div",Un,[a(m,{prime:"",name:"sitemap",size:"12",class:"text-mute p-1 rounded-full"}),i[23]||(i[23]=o("p",{class:"text-mute text-sm font-semibold"},"Wallet Address Network",-1))]),o("p",Wn,d(n.value.withdrawalWalletNetwork??"No wallet address network provided"),1)])])):v("",!0),o("div",Nn,[o("div",Fn,[a(m,{prime:"",name:"calendar",size:"12",class:"text-mute p-1 rounded-full"}),i[24]||(i[24]=o("p",{class:"text-mute text-sm font-semibold"},"Created Date",-1))]),o("p",Yn,d(D(J)(new Date(n.value.createdAt),"ddd, DD MMM, YYYY hh:mm aa")),1)]),n.value.transactionType==="deposit"||n.value.transactionType==="withdrawal"?(c(),q("div",Kn,[o("div",Qn,[a(m,{prime:"",name:"calendar-clock",size:"12",class:"text-mute p-1 rounded-full"}),i[25]||(i[25]=o("p",{class:"text-mute text-sm font-semibold"},"Approval Date",-1))]),o("p",Gn,[n.value.approvedAt?(c(),q("span",Zn,d(D(J)(new Date(n.value.approvedAt),"ddd, DD MMM, YYYY hh:mm aa")),1)):(c(),q("span",Jn,"Not approved"))])])):v("",!0),o("div",Xn,[o("div",eo,[a(m,{prime:"",name:"info-circle",size:"12",class:"text-mute p-1 rounded-full"}),i[26]||(i[26]=o("p",{class:"text-mute text-sm font-semibold"},"Description",-1))]),o("p",to,d(n.value.description||"No description provided"),1)]),n.value.status==="failed"?(c(),q("div",no,[o("div",oo,[a(m,{prime:"",name:"question-circle",size:"12",class:"text-mute p-1 rounded-full"}),i[27]||(i[27]=o("p",{class:"text-mute text-sm font-semibold"},"Reason for Failure",-1))]),o("p",lo,d(n.value.failureReason||"No reason provided"),1)])):v("",!0)])]),_:1})])]),o("div",io,[n.value.user?(c(),z(u,{key:0,header:"User"},{default:k(()=>[o("div",ro,[o("div",so,[n.value.user.image?(c(),q("img",{key:0,src:n.value.user.image,class:"w-full h-full object-cover"},null,8,ao)):v("",!0),a(m,{name:"account_circle",size:"8rem",class:"text-primary-500"})]),o("div",null,[o("p",co,d(n.value.user.name),1),o("p",uo,d(n.value.user.email),1)]),a(P,{onClick:i[1]||(i[1]=S=>D(t).push({name:"admin-user",params:{userId:n.value.user.id}})),label:"Profile",icon:"pi pi-user",outlined:""})])]),_:1})):v("",!0),a(u,{header:"Actions",class:"mt-2 grid gap-2"},{default:k(()=>[n.value.transactionType==="investment"||n.value.transactionType==="profit"?(c(),q("div",po,[o("div",qo,[a(m,{prime:"",name:"info-circle",size:"12",class:"text-mute p-1 rounded-full"}),i[28]||(i[28]=o("p",{class:"text-mute text-sm font-semibold"},"Investment ID",-1))]),o("p",mo,d(n.value.investmentId),1),a(P,{onClick:i[2]||(i[2]=S=>D(t).push({name:"admin-investment",params:{investmentId:n.value.investmentId}})),label:"View Investment",icon:"pi pi-chevron-right","icon-pos":"right",size:"small",class:"mt-2",fluid:"",outlined:""})])):n.value.status==="pending"?(c(),q("div",fo,[o("div",bo,[o("div",vo,[a(m,{prime:"",name:"check-circle",size:"12",class:"text-mute p-1 rounded-full"}),i[29]||(i[29]=o("p",{class:"text-mute text-sm font-semibold"},"Approve Transaction",-1))]),o("div",ho,[n.value.transactionType==="withdrawal"?(c(),z(M,{key:0,size:"small"},{default:k(()=>i[30]||(i[30]=[o("p",{class:"text-xs"}," Make sure you have transfered the required amount into the client's wallet address before approving this transaction. ",-1)])),_:1})):v("",!0),n.value.transactionType==="deposit"?(c(),z(M,{key:1,size:"small"},{default:k(()=>i[31]||(i[31]=[o("p",{class:"text-xs"}," Make sure the client has completed the transfer before approving this transaction. ",-1)])),_:1})):v("",!0)]),a(I,{onUpdate:h,transaction:n.value,action:"successful",class:"mt-2"},null,8,["transaction"])]),o("div",go,[o("div",wo,[a(m,{prime:"",name:"times-circle",size:"12",class:"text-mute p-1 rounded-full"}),i[32]||(i[32]=o("p",{class:"text-mute text-sm font-semibold"},"Fail Transaction",-1))]),o("div",ko,[n.value.transactionType==="withdrawal"?(c(),z(M,{key:0,size:"small",severity:"error"},{default:k(()=>i[33]||(i[33]=[o("p",{class:"text-xs"}," The withdrawal amount will be refunded to the client's in-app wallet ",-1)])),_:1})):v("",!0)]),a(I,{onUpdate:h,transaction:n.value,action:"failed",class:"mt-2"},null,8,["transaction"])])])):(c(),q("div",yo,[o("div",xo,[a(m,{prime:"",name:"times-circle",size:"12",class:"text-mute p-1 rounded-full"}),i[34]||(i[34]=o("p",{class:"text-mute text-sm font-semibold"},"No Actions",-1))]),i[35]||(i[35]=o("p",{class:"mt-2 text-sm text-primary-500 font-medium"}," There are no actions to perform on this transaction. ",-1))]))]),_:1})])])])):v("",!0)])])}}});export{Ho as default};
