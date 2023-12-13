"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[35807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(n),f=c,y=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(y,d(d({ref:t},l),{},{components:n})):r.createElement(y,d({ref:t},l))}));function y(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,d=new Array(a);d[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:c,d[1]=o;for(var s=2;s<a;s++)d[s]=n[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44853:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var r=n(83117),c=n(67294),a=n(3905);const d={id:"add-direct-debit-funding-source-success-payload",title:"AddDirectDebitFundingSourceSuccessPayload",hide_table_of_contents:!1},o=void 0,i={unversionedId:"objects/add-direct-debit-funding-source-success-payload",id:"objects/add-direct-debit-funding-source-success-payload",title:"AddDirectDebitFundingSourceSuccessPayload",description:"Add Direct Debit Funding Source Success Payload",source:"@site/docs/objects/add-direct-debit-funding-source-success-payload.mdx",sourceDirName:"objects",slug:"/objects/add-direct-debit-funding-source-success-payload",permalink:"/objects/add-direct-debit-funding-source-success-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/add-direct-debit-funding-source-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-direct-debit-funding-source-success-payload",title:"AddDirectDebitFundingSourceSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddDigitalCardSuccessPayload",permalink:"/objects/add-digital-card-success-payload"},next:{title:"AddExternalAccountBalanceSuccessPayload",permalink:"/objects/add-external-account-balance-success-payload"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourceSuccessPayload.<b>fundingSource</b></code><Bullet /><code>FundingSource!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourcesuccesspayloadbfundingsourcebcodefundingsource--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,a.kt)(c.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(c.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(c.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:l,Bullet:u,SpecifiedBy:p,Badge:f},b="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Add Direct Debit Funding Source Success Payload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddDirectDebitFundingSourceSuccessPayload {\n  fundingSource: FundingSource!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourcesuccesspayloadbfundingsourcebcodefundingsource--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourceSuccessPayload.",(0,a.kt)("b",null,"fundingSource"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/interfaces/funding-source"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingSource!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The created funding source")),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/unions/add-direct-debit-funding-source-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"AddDirectDebitFundingSourcePayload")),"  ",(0,a.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);