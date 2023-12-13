"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,b=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(b,c(c({ref:t},s),{},{components:n})):a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var m=2;m<o;m++)c[m]=n[m];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24493:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>m,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var a=n(83117),r=n(67294),o=n(3905);const c={id:"sepapayment-mandate-scheme",title:"SEPAPaymentMandateScheme",hide_table_of_contents:!1},i=void 0,l={unversionedId:"enums/sepapayment-mandate-scheme",id:"enums/sepapayment-mandate-scheme",title:"SEPAPaymentMandateScheme",description:"No description",source:"@site/docs/enums/sepapayment-mandate-scheme.mdx",sourceDirName:"enums",slug:"/enums/sepapayment-mandate-scheme",permalink:"/enums/sepapayment-mandate-scheme",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/sepapayment-mandate-scheme.mdx",tags:[],version:"current",frontMatter:{id:"sepapayment-mandate-scheme",title:"SEPAPaymentMandateScheme",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SEPADirectDebitScheme",permalink:"/enums/sepadirect-debit-scheme"},next:{title:"SEPAPaymentMandateSequence",permalink:"/enums/sepapayment-mandate-sequence"}},m={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SEPAPaymentMandateScheme.<b>SepaDirectDebitCore</b></code>",id:"code-style-fontweight-normal-sepapaymentmandateschemebsepadirectdebitcorebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SEPAPaymentMandateScheme.<b>SepaDirectDebitB2b</b></code>",id:"code-style-fontweight-normal-sepapaymentmandateschemebsepadirectdebitb2bbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:p,SpecifiedBy:d,Badge:u},y="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SEPAPaymentMandateScheme {\n  SepaDirectDebitCore\n  SepaDirectDebitB2b\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandateschemebsepadirectdebitcorebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateScheme.",(0,o.kt)("b",null,"SepaDirectDebitCore")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Core")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandateschemebsepadirectdebitb2bbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateScheme.",(0,o.kt)("b",null,"SepaDirectDebitB2b")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit B2B")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/objects/sepapayment-direct-debit-mandate"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPAPaymentDirectDebitMandate")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);