"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=i(n),p=a,m=f["".concat(s,".").concat(p)]||f[p]||u[p]||o;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59243:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=n(83117),a=n(67294),o=n(3905);const c={id:"rejected-merchant-profile-status-info",title:"RejectedMerchantProfileStatusInfo",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/rejected-merchant-profile-status-info",id:"objects/rejected-merchant-profile-status-info",title:"RejectedMerchantProfileStatusInfo",description:"RejectedMerchantProfileStatusInfo",source:"@site/docs/objects/rejected-merchant-profile-status-info.mdx",sourceDirName:"objects",slug:"/objects/rejected-merchant-profile-status-info",permalink:"/objects/rejected-merchant-profile-status-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/rejected-merchant-profile-status-info.mdx",tags:[],version:"current",frontMatter:{id:"rejected-merchant-profile-status-info",title:"RejectedMerchantProfileStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RejectedMerchantPaymentMethodStatusInfo",permalink:"/objects/rejected-merchant-payment-method-status-info"},next:{title:"RejectedTransactionStatusInfo",permalink:"/objects/rejected-transaction-status-info"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RejectedMerchantProfileStatusInfo.<b>status</b></code><Bullet /><code>MerchantProfileStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-rejectedmerchantprofilestatusinfobstatusbcodemerchantprofilestatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RejectedMerchantProfileStatusInfo.<b>rejectedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-rejectedmerchantprofilestatusinfobrejectedatbcodedate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantProfileStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"merchantprofilestatusinfo-",level:4}],f=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:f,SpecifiedBy:u,Badge:p},h="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RejectedMerchantProfileStatusInfo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type RejectedMerchantProfileStatusInfo implements MerchantProfileStatusInfo {\n  status: MerchantProfileStatus!\n  rejectedAt: Date!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-rejectedmerchantprofilestatusinfobstatusbcodemerchantprofilestatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RejectedMerchantProfileStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/merchant-profile-status"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfileStatus!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-rejectedmerchantprofilestatusinfobrejectedatbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RejectedMerchantProfileStatusInfo.",(0,o.kt)("b",null,"rejectedAt"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"merchantprofilestatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/interfaces/merchant-profile-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfileStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Merchant Profile Status Information")))}y.isMDXComponent=!0}}]);