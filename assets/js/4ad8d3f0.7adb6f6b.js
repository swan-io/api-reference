"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21197],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=i(a),y=r,b=u["".concat(l,".").concat(y)]||u[y]||p[y]||o;return a?n.createElement(b,c(c({ref:t},s),{},{components:a})):n.createElement(b,c({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=y;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:r,c[1]=d;for(var i=2;i<o;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},36258:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=a(83117),r=a(67294),o=a(3905);const c={id:"add-or-update-external-account-balance-payload",title:"AddOrUpdateExternalAccountBalancePayload",hide_table_of_contents:!1},d=void 0,l={unversionedId:"unions/add-or-update-external-account-balance-payload",id:"unions/add-or-update-external-account-balance-payload",title:"AddOrUpdateExternalAccountBalancePayload",description:"No description",source:"@site/docs/unions/add-or-update-external-account-balance-payload.mdx",sourceDirName:"unions",slug:"/unions/add-or-update-external-account-balance-payload",permalink:"/unions/add-or-update-external-account-balance-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/add-or-update-external-account-balance-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-or-update-external-account-balance-payload",title:"AddOrUpdateExternalAccountBalancePayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddMerchantProfilePayload",permalink:"/unions/add-merchant-profile-payload"},next:{title:"AddReceivedInternalDirectDebitB2bMandatePayload",permalink:"/unions/add-received-internal-direct-debit-b2-b-mandate-payload"}},i={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AddOrUpdateExternalAccountBalanceSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"addorupdateexternalaccountbalancesuccesspayload-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:u,SpecifiedBy:p,Badge:y},f="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddOrUpdateExternalAccountBalancePayload = AddOrUpdateExternalAccountBalanceSuccessPayload | ValidationRejection | ForbiddenRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"addorupdateexternalaccountbalancesuccesspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/add-or-update-external-account-balance-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddOrUpdateExternalAccountBalanceSuccessPayload"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"validationrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/validation-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,o.kt)("h4",{id:"forbiddenrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/forbidden-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mutations/add-or-update-external-account-balance"},(0,o.kt)("inlineCode",{parentName:"a"},"addOrUpdateExternalAccountBalance")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);