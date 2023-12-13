"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[22387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=d(n),u=o,m=f["".concat(c,".").concat(u)]||f[u]||p[u]||a;return n?i.createElement(m,r(r({ref:t},s),{},{components:n})):i.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65738:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>f,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=n(83117),o=n(67294),a=n(3905);const r={id:"identification-level",title:"IdentificationLevel",hide_table_of_contents:!1},l=void 0,c={unversionedId:"enums/identification-level",id:"enums/identification-level",title:"IdentificationLevel",description:"Possible value for the field IdentificationLevel",source:"@site/docs/enums/identification-level.mdx",sourceDirName:"enums",slug:"/enums/identification-level",permalink:"/enums/identification-level",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/identification-level.mdx",tags:[],version:"current",frontMatter:{id:"identification-level",title:"IdentificationLevel",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"IdentificationLevelInput",permalink:"/enums/identification-level-input"},next:{title:"IdentificationProcess",permalink:"/enums/identification-process"}},d={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationLevel.<b>Expert</b></code>",id:"code-style-fontweight-normal-identificationlevelbexpertbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationLevel.<b>QES</b></code>",id:"code-style-fontweight-normal-identificationlevelbqesbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationLevel.<b>PVID</b></code>",id:"code-style-fontweight-normal-identificationlevelbpvidbcode",level:4},{value:"Member of",id:"member-of",level:3}],f=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:f,SpecifiedBy:p,Badge:u},b="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Possible value for the field IdentificationLevel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum IdentificationLevel {\n  Expert\n  QES\n  PVID\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-identificationlevelbexpertbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"IdentificationLevel.",(0,a.kt)("b",null,"Expert")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Human identity verification")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-identificationlevelbqesbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"IdentificationLevel.",(0,a.kt)("b",null,"QES")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Identity verification with Qualified Electronic Signature")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-identificationlevelbpvidbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"IdentificationLevel.",(0,a.kt)("b",null,"PVID")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Identity verification with PVID")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/objects/account-membership"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountMembership")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(f,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/inputs/identification-filters-input"},(0,a.kt)("inlineCode",{parentName:"a"},"IdentificationFiltersInput")),"  ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(f,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/objects/onboarding"},(0,a.kt)("inlineCode",{parentName:"a"},"Onboarding")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(f,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/objects/onboarding-info"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardingInfo")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);