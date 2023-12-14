"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[44117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,m=u["".concat(i,".").concat(p)]||u[p]||y[p]||o;return n?a.createElement(m,c(c({ref:t},d),{},{components:n})):a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73454:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>y,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=n(83117),r=n(67294),o=n(3905);const c={id:"external-account-already-exists-rejection",title:"ExternalAccountAlreadyExistsRejection",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/external-account-already-exists-rejection",id:"objects/external-account-already-exists-rejection",title:"ExternalAccountAlreadyExistsRejection",description:"No description",source:"@site/docs/objects/external-account-already-exists-rejection.mdx",sourceDirName:"objects",slug:"/objects/external-account-already-exists-rejection",permalink:"/objects/external-account-already-exists-rejection",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/external-account-already-exists-rejection.mdx",tags:[],version:"current",frontMatter:{id:"external-account-already-exists-rejection",title:"ExternalAccountAlreadyExistsRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ExpiredMerchantPaymentLinkStatusInfo",permalink:"/objects/expired-merchant-payment-link-status-info"},next:{title:"ExternalAccountBalanceAlreadyExistsRejection",permalink:"/objects/external-account-balance-already-exists-rejection"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountAlreadyExistsRejection.<b>iban</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-externalaccountalreadyexistsrejectionbibanbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountAlreadyExistsRejection.<b>accountHolderId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-externalaccountalreadyexistsrejectionbaccountholderidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountAlreadyExistsRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-externalaccountalreadyexistsrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:y,Badge:p},x="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(x,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ExternalAccountAlreadyExistsRejection implements Rejection {\n  iban: String!\n  accountHolderId: String!\n  message: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-externalaccountalreadyexistsrejectionbibanbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountAlreadyExistsRejection.",(0,o.kt)("b",null,"iban"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-externalaccountalreadyexistsrejectionbaccountholderidbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountAlreadyExistsRejection.",(0,o.kt)("b",null,"accountHolderId"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-externalaccountalreadyexistsrejectionbmessagebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountAlreadyExistsRejection.",(0,o.kt)("b",null,"message"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"rejection-"},(0,o.kt)("a",{parentName:"h4",href:"/interfaces/rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/unions/add-external-account-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddExternalAccountPayload")),"  ",(0,o.kt)(p,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);