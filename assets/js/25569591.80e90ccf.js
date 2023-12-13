"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84824],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(b,d(d({ref:t},s),{},{components:r})):n.createElement(b,d({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,d[1]=c;for(var l=2;l<i;l++)d[l]=r[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80437:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>o,toc:()=>s});var n=r(83117),a=r(67294),i=r(3905);const d={id:"received-direct-debit-mandate",title:"receivedDirectDebitMandate",hide_table_of_contents:!1},c=void 0,o={unversionedId:"queries/received-direct-debit-mandate",id:"queries/received-direct-debit-mandate",title:"receivedDirectDebitMandate",description:"Returns a received direct debit mandate from its id.",source:"@site/docs/queries/received-direct-debit-mandate.mdx",sourceDirName:"queries",slug:"/queries/received-direct-debit-mandate",permalink:"/queries/received-direct-debit-mandate",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/received-direct-debit-mandate.mdx",tags:[],version:"current",frontMatter:{id:"received-direct-debit-mandate",title:"receivedDirectDebitMandate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"projectInfo",permalink:"/queries/project-info"},next:{title:"shareholder",permalink:"/queries/shareholder"}},l={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>receivedDirectDebitMandate.<b>receivedDirectDebitMandateId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-receiveddirectdebitmandatebreceiveddirectdebitmandateidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ReceivedDirectDebitMandate</code> <Badge class="secondary" text="interface"/>',id:"receiveddirectdebitmandate-",level:4}],u=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:u,SpecifiedBy:p,Badge:m},f="wrapper";function v(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns a received direct debit mandate from its id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"receivedDirectDebitMandate(\n  receivedDirectDebitMandateId: ID!\n): ReceivedDirectDebitMandate\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-receiveddirectdebitmandatebreceiveddirectdebitmandateidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"receivedDirectDebitMandate.",(0,i.kt)("b",null,"receivedDirectDebitMandateId"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"receiveddirectdebitmandate-"},(0,i.kt)("a",{parentName:"h4",href:"/interfaces/received-direct-debit-mandate"},(0,i.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandate"))," ",(0,i.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Interface for Received Direct Debit Mandate")))}v.isMDXComponent=!0}}]);