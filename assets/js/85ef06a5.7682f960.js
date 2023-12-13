"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[11401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=s(n),p=o,m=l["".concat(u,".").concat(p)]||l[p]||f[p]||c;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18572:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>l,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=n(83117),o=n(67294),c=n(3905);const a={id:"rejected-funding-source-reason",title:"RejectedFundingSourceReason",hide_table_of_contents:!1},i=void 0,u={unversionedId:"enums/rejected-funding-source-reason",id:"enums/rejected-funding-source-reason",title:"RejectedFundingSourceReason",description:"Funding Source Rejected Reason",source:"@site/docs/enums/rejected-funding-source-reason.mdx",sourceDirName:"enums",slug:"/enums/rejected-funding-source-reason",permalink:"/enums/rejected-funding-source-reason",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/rejected-funding-source-reason.mdx",tags:[],version:"current",frontMatter:{id:"rejected-funding-source-reason",title:"RejectedFundingSourceReason",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RefundRejectionCode",permalink:"/enums/refund-rejection-code"},next:{title:"RejectedReasonCode",permalink:"/enums/rejected-reason-code"}},s={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>RejectedFundingSourceReason.<b>AccountVerificationRejected</b></code>",id:"code-style-fontweight-normal-rejectedfundingsourcereasonbaccountverificationrejectedbcode",level:4},{value:"Member of",id:"member-of",level:3}],l=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:l,SpecifiedBy:f,Badge:p},g="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Funding Source Rejected Reason"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"enum RejectedFundingSourceReason {\n  AccountVerificationRejected\n}\n")),(0,c.kt)("h3",{id:"values"},"Values"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-rejectedfundingsourcereasonbaccountverificationrejectedbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"RejectedFundingSourceReason.",(0,c.kt)("b",null,"AccountVerificationRejected")))),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/objects/rejected-funding-source-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"RejectedFundingSourceStatusInfo")),"  ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);