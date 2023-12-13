"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[59985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58266:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(83117),a=n(67294),i=n(3905);const o={id:"initiate-international-credit-transfer",title:"initiateInternationalCreditTransfer",hide_table_of_contents:!1},l=void 0,s={unversionedId:"mutations/initiate-international-credit-transfer",id:"mutations/initiate-international-credit-transfer",title:"initiateInternationalCreditTransfer",description:"COMING SOON",source:"@site/docs/mutations/initiate-international-credit-transfer.mdx",sourceDirName:"mutations",slug:"/mutations/initiate-international-credit-transfer",permalink:"/mutations/initiate-international-credit-transfer",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/initiate-international-credit-transfer.mdx",tags:[],version:"current",frontMatter:{id:"initiate-international-credit-transfer",title:"initiateInternationalCreditTransfer",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"initiateFundingRequest",permalink:"/mutations/initiate-funding-request"},next:{title:"initiateMerchantPaymentCollection",permalink:"/mutations/initiate-merchant-payment-collection"}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>initiateInternationalCreditTransfer.<b>input</b></code><Bullet /><code>InitiateInternationalCreditTransferInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-initiateinternationalcredittransferbinputbcodeinitiateinternationalcredittransferinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>InitiateInternationalCreditTransferResponsePayload</code> <Badge class="secondary" text="union"/>',id:"initiateinternationalcredittransferresponsepayload-",level:4}],p=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:u,Badge:f},y="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"COMING SOON"),"\nCreate an international transfer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"initiateInternationalCreditTransfer(\n  input: InitiateInternationalCreditTransferInput!\n): InitiateInternationalCreditTransferResponsePayload\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-initiateinternationalcredittransferbinputbcodeinitiateinternationalcredittransferinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"initiateInternationalCreditTransfer.",(0,i.kt)("b",null,"input"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/inputs/initiate-international-credit-transfer-input"},(0,i.kt)("inlineCode",{parentName:"a"},"InitiateInternationalCreditTransferInput!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"initiateinternationalcredittransferresponsepayload-"},(0,i.kt)("a",{parentName:"h4",href:"/unions/initiate-international-credit-transfer-response-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"InitiateInternationalCreditTransferResponsePayload"))," ",(0,i.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Initiate International Credit Transfer Response Payload")))}g.isMDXComponent=!0}}]);