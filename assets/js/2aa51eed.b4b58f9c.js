"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[26189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(n),y=r,u=m["".concat(c,".").concat(y)]||m[y]||p[y]||o;return n?a.createElement(u,d(d({ref:t},s),{},{components:n})):a.createElement(u,d({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,d[1]=l;for(var i=2;i<o;i++)d[i]=n[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},28946:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>s});var a=n(83117),r=n(67294),o=n(3905);const d={id:"payment-mandate-edge",title:"PaymentMandateEdge",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/payment-mandate-edge",id:"objects/payment-mandate-edge",title:"PaymentMandateEdge",description:"Implements the Relay Edge interface",source:"@site/docs/objects/payment-mandate-edge.mdx",sourceDirName:"objects",slug:"/objects/payment-mandate-edge",permalink:"/objects/payment-mandate-edge",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/payment-mandate-edge.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-edge",title:"PaymentMandateEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentMandateConsentPendingStatusInfo",permalink:"/objects/payment-mandate-consent-pending-status-info"},next:{title:"PaymentMandateEnabledStatusInfo",permalink:"/objects/payment-mandate-enabled-status-info"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentmandateedgebcursorbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateEdge.<b>node</b></code><Bullet /><code>PaymentMandate!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-paymentmandateedgebnodebcodepaymentmandate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="secondary" text="interface"/>',id:"edge-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:m,SpecifiedBy:p,Badge:y},f="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Implements the Relay Edge interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaymentMandateEdge implements Edge {\n  cursor: String!\n  node: PaymentMandate!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandateedgebcursorbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateEdge.",(0,o.kt)("b",null,"cursor"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Opaque identifier pointing to this onboarding node in the pagination mechanism")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandateedgebnodebcodepaymentmandate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/interfaces/payment-mandate"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentMandate!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The payment mandate")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"edge-"},(0,o.kt)("a",{parentName:"h4",href:"/interfaces/edge"},(0,o.kt)("inlineCode",{parentName:"a"},"Edge"))," ",(0,o.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/objects/payment-mandate-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentMandateConnection")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);