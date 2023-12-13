"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[93951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(n),y=r,g=p["".concat(s,".").concat(y)]||p[y]||u[y]||c;return n?a.createElement(g,o(o({ref:t},i),{},{components:n})):a.createElement(g,o({ref:t},i))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<c;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7692:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(83117),r=n(67294),c=n(3905);const o={id:"cancel-standing-order-success-payload",title:"CancelStandingOrderSuccessPayload",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/cancel-standing-order-success-payload",id:"objects/cancel-standing-order-success-payload",title:"CancelStandingOrderSuccessPayload",description:"No description",source:"@site/docs/objects/cancel-standing-order-success-payload.mdx",sourceDirName:"objects",slug:"/objects/cancel-standing-order-success-payload",permalink:"/objects/cancel-standing-order-success-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/cancel-standing-order-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-standing-order-success-payload",title:"CancelStandingOrderSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelPhysicalCardSuccessPayload",permalink:"/objects/cancel-physical-card-success-payload"},next:{title:"CancelTransactionSuccessPayload",permalink:"/objects/cancel-transaction-success-payload"}},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelStandingOrderSuccessPayload.<b>standingOrder</b></code><Bullet /><code>StandingOrder!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cancelstandingordersuccesspayloadbstandingorderbcodestandingorder--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:i,Bullet:p,SpecifiedBy:u,Badge:y},m="wrapper";function f(e){let{components:t,...n}=e;return(0,c.kt)(m,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CancelStandingOrderSuccessPayload {\n  standingOrder: StandingOrder!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-cancelstandingordersuccesspayloadbstandingorderbcodestandingorder--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CancelStandingOrderSuccessPayload.",(0,c.kt)("b",null,"standingOrder"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/objects/standing-order"},(0,c.kt)("inlineCode",{parentName:"a"},"StandingOrder!"))," ",(0,c.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/unions/cancel-standing-order-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"CancelStandingOrderPayload")),"  ",(0,c.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);