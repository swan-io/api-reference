"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[42350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12470:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(83117),o=n(67294),r=n(3905);const l={id:"external-account-usage",title:"ExternalAccountUsage",hide_table_of_contents:!1},c=void 0,i={unversionedId:"enums/external-account-usage",id:"enums/external-account-usage",title:"ExternalAccountUsage",description:"No description",source:"@site/docs/enums/external-account-usage.mdx",sourceDirName:"enums",slug:"/enums/external-account-usage",permalink:"/enums/external-account-usage",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/external-account-usage.mdx",tags:[],version:"current",frontMatter:{id:"external-account-usage",title:"ExternalAccountUsage",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ExternalAccountDataSourceType",permalink:"/enums/external-account-data-source-type"},next:{title:"FeesTypeEnum",permalink:"/enums/fees-type-enum"}},u={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ExternalAccountUsage.<b>Private</b></code>",id:"code-style-fontweight-normal-externalaccountusagebprivatebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ExternalAccountUsage.<b>Association</b></code>",id:"code-style-fontweight-normal-externalaccountusagebassociationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ExternalAccountUsage.<b>Organization</b></code>",id:"code-style-fontweight-normal-externalaccountusageborganizationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ExternalAccountUsage.<b>Unknown</b></code>",id:"code-style-fontweight-normal-externalaccountusagebunknownbcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:d,SpecifiedBy:p,Badge:m},g="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ExternalAccountUsage {\n  Private\n  Association\n  Organization\n  Unknown\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-externalaccountusagebprivatebcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountUsage.",(0,r.kt)("b",null,"Private")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-externalaccountusagebassociationbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountUsage.",(0,r.kt)("b",null,"Association")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-externalaccountusageborganizationbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountUsage.",(0,r.kt)("b",null,"Organization")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-externalaccountusagebunknownbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountUsage.",(0,r.kt)("b",null,"Unknown")))),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/inputs/add-external-account-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AddExternalAccountInput")),"  ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/external-account"},(0,r.kt)("inlineCode",{parentName:"a"},"ExternalAccount")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);