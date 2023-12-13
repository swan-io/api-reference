"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[95577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=l(n),f=i,m=s["".concat(d,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(m,u(u({ref:t},c),{},{components:n})):r.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,u=new Array(o);u[0]=f;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[s]="string"==typeof e?e:i,u[1]=a;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95935:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>c});var r=n(83117),i=n(67294),o=n(3905);const u={id:"funding-source-order-by-field-input",title:"FundingSourceOrderByFieldInput",hide_table_of_contents:!1},a=void 0,d={unversionedId:"enums/funding-source-order-by-field-input",id:"enums/funding-source-order-by-field-input",title:"FundingSourceOrderByFieldInput",description:"Field we can use when ordering that can be applied when listing funding source results",source:"@site/docs/enums/funding-source-order-by-field-input.mdx",sourceDirName:"enums",slug:"/enums/funding-source-order-by-field-input",permalink:"/enums/funding-source-order-by-field-input",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/funding-source-order-by-field-input.mdx",tags:[],version:"current",frontMatter:{id:"funding-source-order-by-field-input",title:"FundingSourceOrderByFieldInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FundingLimitSettingsStatus",permalink:"/enums/funding-limit-settings-status"},next:{title:"FundingSourceStatus",permalink:"/enums/funding-source-status"}},l={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>FundingSourceOrderByFieldInput.<b>createdAt</b></code>",id:"code-style-fontweight-normal-fundingsourceorderbyfieldinputbcreatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>FundingSourceOrderByFieldInput.<b>updatedAt</b></code>",id:"code-style-fontweight-normal-fundingsourceorderbyfieldinputbupdatedatbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:s,SpecifiedBy:p,Badge:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Field we can use when ordering that can be applied when listing funding source results"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum FundingSourceOrderByFieldInput {\n  createdAt\n  updatedAt\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fundingsourceorderbyfieldinputbcreatedatbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FundingSourceOrderByFieldInput.",(0,o.kt)("b",null,"createdAt")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fundingsourceorderbyfieldinputbupdatedatbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FundingSourceOrderByFieldInput.",(0,o.kt)("b",null,"updatedAt")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/inputs/funding-source-order-by-input"},(0,o.kt)("inlineCode",{parentName:"a"},"FundingSourceOrderByInput")),"  ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);