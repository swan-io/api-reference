"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[97151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,m=s["".concat(l,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[s]="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9298:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>a,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(83117),i=n(67294),o=n(3905);const c={id:"direct-debit-sequence",title:"DirectDebitSequence",hide_table_of_contents:!1},a=void 0,l={unversionedId:"enums/direct-debit-sequence",id:"enums/direct-debit-sequence",title:"DirectDebitSequence",description:"No description",source:"@site/docs/enums/direct-debit-sequence.mdx",sourceDirName:"enums",slug:"/enums/direct-debit-sequence",permalink:"/enums/direct-debit-sequence",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/direct-debit-sequence.mdx",tags:[],version:"current",frontMatter:{id:"direct-debit-sequence",title:"DirectDebitSequence",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DigitalizationType",permalink:"/enums/digitalization-type"},next:{title:"DocumentFileSide",permalink:"/enums/document-file-side"}},u={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>DirectDebitSequence.<b>OneOff</b></code>",id:"code-style-fontweight-normal-directdebitsequenceboneoffbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DirectDebitSequence.<b>Recurring</b></code>",id:"code-style-fontweight-normal-directdebitsequencebrecurringbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:s,SpecifiedBy:p,Badge:f},b="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum DirectDebitSequence {\n  OneOff\n  Recurring\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-directdebitsequenceboneoffbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitSequence.",(0,o.kt)("b",null,"OneOff")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-directdebitsequencebrecurringbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitSequence.",(0,o.kt)("b",null,"Recurring")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/inputs/add-sepa-direct-debit-payment-mandate-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddSepaDirectDebitPaymentMandateInput")),"  ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);