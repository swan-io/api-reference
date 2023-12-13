"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[63054],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),h=o,f=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return t?n.createElement(f,l(l({ref:r},c),{},{components:t})):n.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=h;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},74951:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>h,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=t(83117),o=t(67294),a=t(3905);const l={id:"shareholder-info",title:"ShareholderInfo",hide_table_of_contents:!1},i=void 0,d={unversionedId:"unions/shareholder-info",id:"unions/shareholder-info",title:"ShareholderInfo",description:"Shareholder information.",source:"@site/docs/unions/shareholder-info.mdx",sourceDirName:"unions",slug:"/unions/shareholder-info",permalink:"/unions/shareholder-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/shareholder-info.mdx",tags:[],version:"current",frontMatter:{id:"shareholder-info",title:"ShareholderInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ScheduleStandingOrderPayload",permalink:"/unions/schedule-standing-order-payload"},next:{title:"SuspendAccountMembershipPayload",permalink:"/unions/suspend-account-membership-payload"}},s={},c=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>IndividualShareholder</code> <Badge class="secondary" text="object"/>',id:"individualshareholder-",level:4},{value:'<code>CompanyShareholder</code> <Badge class="secondary" text="object"/>',id:"companyshareholder-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:p,SpecifiedBy:u,Badge:h},m="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Shareholder information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"union ShareholderInfo = IndividualShareholder | CompanyShareholder\n")),(0,a.kt)("h3",{id:"possible-types"},"Possible types"),(0,a.kt)("h4",{id:"individualshareholder-"},(0,a.kt)("a",{parentName:"h4",href:"/objects/individual-shareholder"},(0,a.kt)("inlineCode",{parentName:"a"},"IndividualShareholder"))," ",(0,a.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Individual shareholder info.")),(0,a.kt)("h4",{id:"companyshareholder-"},(0,a.kt)("a",{parentName:"h4",href:"/objects/company-shareholder"},(0,a.kt)("inlineCode",{parentName:"a"},"CompanyShareholder"))," ",(0,a.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Company shareholder info.")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/objects/shareholder"},(0,a.kt)("inlineCode",{parentName:"a"},"Shareholder")),"  ",(0,a.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);