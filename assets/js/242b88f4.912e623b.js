"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[53568],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var o=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,c=function(e,n){if(null==e)return{};var t,o,c={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,c=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(t),g=c,p=u["".concat(l,".").concat(g)]||u[g]||f[g]||r;return t?o.createElement(p,a(a({ref:n},s),{},{components:t})):o.createElement(p,a({ref:n},s))}));function p(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var r=t.length,a=new Array(r);a[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:c,a[1]=i;for(var d=2;d<r;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},20434:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>g,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(83117),c=t(67294),r=t(3905);const a={id:"funding-source-connection",title:"FundingSourceConnection",hide_table_of_contents:!1},i=void 0,l={unversionedId:"objects/funding-source-connection",id:"objects/funding-source-connection",title:"FundingSourceConnection",description:"Please see the Connection interface",source:"@site/docs/objects/funding-source-connection.mdx",sourceDirName:"objects",slug:"/objects/funding-source-connection",permalink:"/objects/funding-source-connection",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/funding-source-connection.mdx",tags:[],version:"current",frontMatter:{id:"funding-source-connection",title:"FundingSourceConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FundingLimit",permalink:"/objects/funding-limit"},next:{title:"FundingSourceEdge",permalink:"/objects/funding-source-edge"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingSourceConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-fundingsourceconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingSourceConnection.<b>edges</b></code><Bullet /><code>[FundingSourceEdge!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-fundingsourceconnectionbedgesbcodefundingsourceedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingSourceConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fundingsourceconnectionbtotalcountbcodeint--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="secondary" text="interface"/>',id:"connection-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,r.kt)(c.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,r.kt)(c.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(c.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:s,Bullet:u,SpecifiedBy:f,Badge:g},m="wrapper";function b(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please see the Connection interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type FundingSourceConnection implements Connection {\n  pageInfo: PageInfo!\n  edges: [FundingSourceEdge!]!\n  totalCount: Int!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-fundingsourceconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"FundingSourceConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-fundingsourceconnectionbedgesbcodefundingsourceedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"FundingSourceConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/funding-source-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[FundingSourceEdge!]!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-fundingsourceconnectionbtotalcountbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"FundingSourceConnection.",(0,r.kt)("b",null,"totalCount"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"connection-"},(0,r.kt)("a",{parentName:"h4",href:"/interfaces/connection"},(0,r.kt)("inlineCode",{parentName:"a"},"Connection"))," ",(0,r.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Relay Connection type, used to paginate list of element (",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/objects/account"},(0,r.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);