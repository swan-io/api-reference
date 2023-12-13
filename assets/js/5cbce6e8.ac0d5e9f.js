"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[13564],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>f});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=s(l),p=r,f=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return l?n.createElement(f,i(i({ref:t},m),{},{components:l})):n.createElement(f,i({ref:t},m))}));function f(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=l.length,i=new Array(o);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<o;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},63778:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=l(83117),r=l(67294),o=l(3905);const i={id:"aml-risk-level",title:"AmlRiskLevel",hide_table_of_contents:!1},a=void 0,c={unversionedId:"enums/aml-risk-level",id:"enums/aml-risk-level",title:"AmlRiskLevel",description:"No description",source:"@site/docs/enums/aml-risk-level.mdx",sourceDirName:"enums",slug:"/enums/aml-risk-level",permalink:"/enums/aml-risk-level",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/aml-risk-level.mdx",tags:[],version:"current",frontMatter:{id:"aml-risk-level",title:"AmlRiskLevel",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountVerificationStatus",permalink:"/enums/account-verification-status"},next:{title:"AuthenticatorType",permalink:"/enums/authenticator-type"}},s={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AmlRiskLevel.<b>Low</b></code>",id:"code-style-fontweight-normal-amlrisklevelblowbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AmlRiskLevel.<b>Medium</b></code>",id:"code-style-fontweight-normal-amlrisklevelbmediumbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AmlRiskLevel.<b>High</b></code>",id:"code-style-fontweight-normal-amlrisklevelbhighbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AmlRiskLevel.<b>TooHigh</b></code>",id:"code-style-fontweight-normal-amlrisklevelbtoohighbcode",level:4}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:m,Bullet:u,SpecifiedBy:d,Badge:p},k="wrapper";function b(e){let{components:t,...l}=e;return(0,o.kt)(k,(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AmlRiskLevel {\n  Low\n  Medium\n  High\n  TooHigh\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-amlrisklevelblowbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AmlRiskLevel.",(0,o.kt)("b",null,"Low")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-amlrisklevelbmediumbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AmlRiskLevel.",(0,o.kt)("b",null,"Medium")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-amlrisklevelbhighbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AmlRiskLevel.",(0,o.kt)("b",null,"High")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-amlrisklevelbtoohighbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AmlRiskLevel.",(0,o.kt)("b",null,"TooHigh")))),(0,o.kt)("blockquote",null))}b.isMDXComponent=!0}}]);