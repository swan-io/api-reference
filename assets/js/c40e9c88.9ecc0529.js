"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[22301],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,b=u["".concat(s,".").concat(p)]||u[p]||y[p]||l;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9634:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>y,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(83117),r=a(67294),l=a(3905);const o={id:"allow-sdd-virtual-iban-entry-success-payload",title:"AllowSddVirtualIbanEntrySuccessPayload",hide_table_of_contents:!1},i=void 0,s={unversionedId:"objects/allow-sdd-virtual-iban-entry-success-payload",id:"objects/allow-sdd-virtual-iban-entry-success-payload",title:"AllowSddVirtualIbanEntrySuccessPayload",description:"No description",source:"@site/docs/objects/allow-sdd-virtual-iban-entry-success-payload.mdx",sourceDirName:"objects",slug:"/objects/allow-sdd-virtual-iban-entry-success-payload",permalink:"/objects/allow-sdd-virtual-iban-entry-success-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/allow-sdd-virtual-iban-entry-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"allow-sdd-virtual-iban-entry-success-payload",title:"AllowSddVirtualIbanEntrySuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AllowSddSuccessPayload",permalink:"/objects/allow-sdd-success-payload"},next:{title:"AllowedValue",permalink:"/objects/allowed-value"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AllowSddVirtualIbanEntrySuccessPayload.<b>virtualIbanEntry</b></code><Bullet /><code>VirtualIBANEntry!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-allowsddvirtualibanentrysuccesspayloadbvirtualibanentrybcodevirtualibanentry--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:u,SpecifiedBy:y,Badge:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type AllowSddVirtualIbanEntrySuccessPayload {\n  virtualIbanEntry: VirtualIBANEntry!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-allowsddvirtualibanentrysuccesspayloadbvirtualibanentrybcodevirtualibanentry--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AllowSddVirtualIbanEntrySuccessPayload.",(0,l.kt)("b",null,"virtualIbanEntry"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/objects/virtual-ibanentry"},(0,l.kt)("inlineCode",{parentName:"a"},"VirtualIBANEntry!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/unions/allow-sdd-virtual-iban-entry-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"AllowSddVirtualIbanEntryPayload")),"  ",(0,l.kt)(p,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);