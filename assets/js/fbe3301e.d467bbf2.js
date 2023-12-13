"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[62157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||r;return n?o.createElement(m,c(c({ref:t},s),{},{components:n})):o.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var d=2;d<r;d++)c[d]=n[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25171:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var o=n(83117),a=n(67294),r=n(3905);const c={id:"card-connection",title:"CardConnection",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/card-connection",id:"objects/card-connection",title:"CardConnection",description:"Implements the Relay Connection interface, used to paginate list of element (Learn More)",source:"@site/docs/objects/card-connection.mdx",sourceDirName:"objects",slug:"/objects/card-connection",permalink:"/objects/card-connection",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/card-connection.mdx",tags:[],version:"current",frontMatter:{id:"card-connection",title:"CardConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CardConfidential",permalink:"/objects/card-confidential"},next:{title:"CardConsentPendingStatusInfo",permalink:"/objects/card-consent-pending-status-info"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardconnectionbtotalcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardConnection.<b>edges</b></code><Bullet /><code>[CardEdge!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardconnectionbedgesbcodecardedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="secondary" text="interface"/>',id:"connection-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:u,Badge:f},b="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Implements the Relay Connection interface, used to paginate list of element (",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CardConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [CardEdge!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconnectionbtotalcountbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConnection.",(0,r.kt)("b",null,"totalCount"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Total number of element in the list")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Information about the current, the previous and the next page")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconnectionbedgesbcodecardedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/card-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[CardEdge!]!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CardEdge list")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"connection-"},(0,r.kt)("a",{parentName:"h4",href:"/interfaces/connection"},(0,r.kt)("inlineCode",{parentName:"a"},"Connection"))," ",(0,r.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Relay Connection type, used to paginate list of element (",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/queries/cards"},(0,r.kt)("inlineCode",{parentName:"a"},"cards")),"  ",(0,r.kt)(f,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/objects/account-membership"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembership")),"  ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);