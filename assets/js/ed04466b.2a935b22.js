"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[99253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38179:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(83117),i=n(67294),o=n(3905);const r={id:"account-verification-status",title:"AccountVerificationStatus",hide_table_of_contents:!1},c=void 0,l={unversionedId:"enums/account-verification-status",id:"enums/account-verification-status",title:"AccountVerificationStatus",description:"Account Verification Status",source:"@site/docs/enums/account-verification-status.mdx",sourceDirName:"enums",slug:"/enums/account-verification-status",permalink:"/enums/account-verification-status",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/account-verification-status.mdx",tags:[],version:"current",frontMatter:{id:"account-verification-status",title:"AccountVerificationStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountStatus",permalink:"/enums/account-status"},next:{title:"AmlRiskLevel",permalink:"/enums/aml-risk-level"}},s={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AccountVerificationStatus.<b>PendingVerification</b></code>",id:"code-style-fontweight-normal-accountverificationstatusbpendingverificationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountVerificationStatus.<b>PendingReview</b></code>",id:"code-style-fontweight-normal-accountverificationstatusbpendingreviewbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountVerificationStatus.<b>Verified</b></code>",id:"code-style-fontweight-normal-accountverificationstatusbverifiedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountVerificationStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-accountverificationstatusbrejectedbcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:d,SpecifiedBy:f,Badge:p},b="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Account Verification Status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AccountVerificationStatus {\n  PendingVerification\n  PendingReview\n  Verified\n  Rejected\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountverificationstatusbpendingverificationbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountVerificationStatus.",(0,o.kt)("b",null,"PendingVerification")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We are waiting for the end user to send a credit transfer from his external iban to any Swan owned iban")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountverificationstatusbpendingreviewbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountVerificationStatus.",(0,o.kt)("b",null,"PendingReview")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We could not automatically match the external iban based on last received transfer.\nManuel review process is underway")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountverificationstatusbverifiedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountVerificationStatus.",(0,o.kt)("b",null,"Verified")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account has been verified")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountverificationstatusbrejectedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountVerificationStatus.",(0,o.kt)("b",null,"Rejected")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account verification has been rejected")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/interfaces/account-verification-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountVerificationStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/pending-review-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PendingReviewStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/pending-verification-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PendingVerificationStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/rejected-verification-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"RejectedVerificationStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/verified-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"VerifiedStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);