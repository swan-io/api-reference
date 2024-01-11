"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),p=o,g=m["".concat(u,".").concat(p)]||m[p]||d[p]||l;return n?a.createElement(g,r(r({ref:t},s),{},{components:n})):a.createElement(g,r({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[m]="string"==typeof e?e:o,r[1]=c;for(var i=2;i<l;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1487:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var a=n(83117),o=n(67294),l=n(3905);const r={id:"legal-document-status",title:"LegalDocumentStatus",hide_table_of_contents:!1},c=void 0,u={unversionedId:"enums/legal-document-status",id:"enums/legal-document-status",title:"LegalDocumentStatus",description:"No description",source:"@site/docs/enums/legal-document-status.mdx",sourceDirName:"enums",slug:"/enums/legal-document-status",permalink:"/enums/legal-document-status",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/legal-document-status.mdx",tags:[],version:"current",frontMatter:{id:"legal-document-status",title:"LegalDocumentStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Language",permalink:"/enums/language"},next:{title:"LegalDocumentType",permalink:"/enums/legal-document-type"}},i={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>LegalDocumentStatus.<b>Upcoming</b></code>",id:"code-style-fontweight-normal-legaldocumentstatusbupcomingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LegalDocumentStatus.<b>Active</b></code>",id:"code-style-fontweight-normal-legaldocumentstatusbactivebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LegalDocumentStatus.<b>Inactive</b></code>",id:"code-style-fontweight-normal-legaldocumentstatusbinactivebcode",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:m,SpecifiedBy:d,Badge:p},f="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum LegalDocumentStatus {\n  Upcoming\n  Active\n  Inactive\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentstatusbupcomingbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentStatus.",(0,l.kt)("b",null,"Upcoming")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the LegalDocument will be the next active on the account")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentstatusbactivebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentStatus.",(0,l.kt)("b",null,"Active")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the LegalDocument is currently active on the account")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentstatusbinactivebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentStatus.",(0,l.kt)("b",null,"Inactive")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the LegalDocument is no more active on the account")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/objects/legal-document-active-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"LegalDocumentActiveStatusInfo")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/objects/legal-document-inactive-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"LegalDocumentInactiveStatusInfo")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/inputs/legal-documents-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"LegalDocumentsFilterInput")),"  ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/interfaces/legal-document-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"LegalDocumentStatusInfo")),"  ",(0,l.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/objects/legal-document-upcoming-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"LegalDocumentUpcomingStatusInfo")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);