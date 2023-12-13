"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[2169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(g,c(c({ref:t},d),{},{components:n})):o.createElement(g,c({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58647:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var o=n(83117),r=n(67294),a=n(3905);const c={id:"consent-edge",title:"ConsentEdge",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/consent-edge",id:"objects/consent-edge",title:"ConsentEdge",description:"Implements the Relay Edge interface",source:"@site/docs/objects/consent-edge.mdx",sourceDirName:"objects",slug:"/objects/consent-edge",permalink:"/objects/consent-edge",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/consent-edge.mdx",tags:[],version:"current",frontMatter:{id:"consent-edge",title:"ConsentEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ConsentConnection",permalink:"/objects/consent-connection"},next:{title:"ConsentNotFoundRejection",permalink:"/objects/consent-not-found-rejection"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ConsentEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-consentedgebcursorbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConsentEdge.<b>node</b></code><Bullet /><code>Consent!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-consentedgebnodebcodeconsent--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="secondary" text="interface"/>',id:"edge-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:p,SpecifiedBy:u,Badge:m},f="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Implements the Relay Edge interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ConsentEdge implements Edge {\n  cursor: String!\n  node: Consent!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-consentedgebcursorbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ConsentEdge.",(0,a.kt)("b",null,"cursor"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Opaque identifier pointing to this consent node in the pagination mechanism")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-consentedgebnodebcodeconsent--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ConsentEdge.",(0,a.kt)("b",null,"node"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/objects/consent"},(0,a.kt)("inlineCode",{parentName:"a"},"Consent!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The consent")),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"edge-"},(0,a.kt)("a",{parentName:"h4",href:"/interfaces/edge"},(0,a.kt)("inlineCode",{parentName:"a"},"Edge"))," ",(0,a.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type.")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/objects/consent-connection"},(0,a.kt)("inlineCode",{parentName:"a"},"ConsentConnection")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);