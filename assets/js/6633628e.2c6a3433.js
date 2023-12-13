"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[11600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,d(d({ref:t},l),{},{components:n})):r.createElement(f,d({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,d=new Array(i);d[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,d[1]=c;for(var s=2;s<i;s++)d[s]=n[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26365:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=n(83117),a=n(67294),i=n(3905);const d={id:"suspend-received-direct-debit-mandated-rejection-reason",title:"SuspendReceivedDirectDebitMandatedRejectionReason",hide_table_of_contents:!1},c=void 0,o={unversionedId:"enums/suspend-received-direct-debit-mandated-rejection-reason",id:"enums/suspend-received-direct-debit-mandated-rejection-reason",title:"SuspendReceivedDirectDebitMandatedRejectionReason",description:"Enum of reasons of rejection for suspendReceivedDirectDebitMandate mutation",source:"@site/docs/enums/suspend-received-direct-debit-mandated-rejection-reason.mdx",sourceDirName:"enums",slug:"/enums/suspend-received-direct-debit-mandated-rejection-reason",permalink:"/enums/suspend-received-direct-debit-mandated-rejection-reason",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/suspend-received-direct-debit-mandated-rejection-reason.mdx",tags:[],version:"current",frontMatter:{id:"suspend-received-direct-debit-mandated-rejection-reason",title:"SuspendReceivedDirectDebitMandatedRejectionReason",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SuspendAccountReasonType",permalink:"/enums/suspend-account-reason-type"},next:{title:"SwanIdentificationStatus",permalink:"/enums/swan-identification-status"}},s={},l=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SuspendReceivedDirectDebitMandatedRejectionReason.<b>ReceivedDirectDebitMandateCanceled</b></code>",id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatedrejectionreasonbreceiveddirectdebitmandatecanceledbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:u,SpecifiedBy:p,Badge:m},b="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Enum of reasons of rejection for suspendReceivedDirectDebitMandate mutation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SuspendReceivedDirectDebitMandatedRejectionReason {\n  ReceivedDirectDebitMandateCanceled\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatedrejectionreasonbreceiveddirectdebitmandatecanceledbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SuspendReceivedDirectDebitMandatedRejectionReason.",(0,i.kt)("b",null,"ReceivedDirectDebitMandateCanceled")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Received direct debit mandate is canceled and therefore can't be suspend")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/objects/suspend-received-direct-debit-mandated-rejection"},(0,i.kt)("inlineCode",{parentName:"a"},"SuspendReceivedDirectDebitMandatedRejection")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);