"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[92703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,h=m["".concat(d,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(h,c(c({ref:t},i),{},{components:n})):a.createElement(h,c({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86627:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var a=n(83117),r=n(67294),o=n(3905);const c={id:"rejected-merchant-payment-method-status-info",title:"RejectedMerchantPaymentMethodStatusInfo",hide_table_of_contents:!1},s=void 0,d={unversionedId:"objects/rejected-merchant-payment-method-status-info",id:"objects/rejected-merchant-payment-method-status-info",title:"RejectedMerchantPaymentMethodStatusInfo",description:"RejectedMerchantPaymentMethodStatusInfo",source:"@site/docs/objects/rejected-merchant-payment-method-status-info.mdx",sourceDirName:"objects",slug:"/objects/rejected-merchant-payment-method-status-info",permalink:"/objects/rejected-merchant-payment-method-status-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/rejected-merchant-payment-method-status-info.mdx",tags:[],version:"current",frontMatter:{id:"rejected-merchant-payment-method-status-info",title:"RejectedMerchantPaymentMethodStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RejectedFundingSourceStatusInfo",permalink:"/objects/rejected-funding-source-status-info"},next:{title:"RejectedMerchantProfileStatusInfo",permalink:"/objects/rejected-merchant-profile-status-info"}},l={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RejectedMerchantPaymentMethodStatusInfo.<b>status</b></code><Bullet /><code>MerchantPaymentMethodStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-rejectedmerchantpaymentmethodstatusinfobstatusbcodemerchantpaymentmethodstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RejectedMerchantPaymentMethodStatusInfo.<b>rejectedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-rejectedmerchantpaymentmethodstatusinfobrejectedatbcodedate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentMethodStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"merchantpaymentmethodstatusinfo-",level:4}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:i,Bullet:m,SpecifiedBy:u,Badge:f},p="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RejectedMerchantPaymentMethodStatusInfo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type RejectedMerchantPaymentMethodStatusInfo implements MerchantPaymentMethodStatusInfo {\n  status: MerchantPaymentMethodStatus!\n  rejectedAt: Date!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-rejectedmerchantpaymentmethodstatusinfobstatusbcodemerchantpaymentmethodstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RejectedMerchantPaymentMethodStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/merchant-payment-method-status"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodStatus!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-rejectedmerchantpaymentmethodstatusinfobrejectedatbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RejectedMerchantPaymentMethodStatusInfo.",(0,o.kt)("b",null,"rejectedAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Merchant Payment Method rejected date")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"merchantpaymentmethodstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/interfaces/merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodStatusInfo"))," ",(0,o.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The payment method status information")))}y.isMDXComponent=!0}}]);