"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),y=r,b=c["".concat(d,".").concat(y)]||c[y]||p[y]||l;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},22500:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>c,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(83117),r=n(67294),l=n(3905);const o={id:"allow-sdd-virtual-iban-entry",title:"allowSddVirtualIbanEntry",hide_table_of_contents:!1},i=void 0,d={unversionedId:"mutations/allow-sdd-virtual-iban-entry",id:"mutations/allow-sdd-virtual-iban-entry",title:"allowSddVirtualIbanEntry",description:"Allows to receive Sepa Direct Debit on a Virtual IBAN.",source:"@site/docs/mutations/allow-sdd-virtual-iban-entry.mdx",sourceDirName:"mutations",slug:"/mutations/allow-sdd-virtual-iban-entry",permalink:"/mutations/allow-sdd-virtual-iban-entry",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/allow-sdd-virtual-iban-entry.mdx",tags:[],version:"current",frontMatter:{id:"allow-sdd-virtual-iban-entry",title:"allowSddVirtualIbanEntry",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"addVirtualIbanEntry",permalink:"/mutations/add-virtual-iban-entry"},next:{title:"allowSdd",permalink:"/mutations/allow-sdd"}},u={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>allowSddVirtualIbanEntry.<b>input</b></code><Bullet /><code>AllowSddVirtualIbanEntryInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-allowsddvirtualibanentrybinputbcodeallowsddvirtualibanentryinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AllowSddVirtualIbanEntryPayload</code> <Badge class="secondary" text="union"/>',id:"allowsddvirtualibanentrypayload-",level:4}],c=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:c,SpecifiedBy:p,Badge:y},m="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Allows to receive Sepa Direct Debit on a Virtual IBAN."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"allowSddVirtualIbanEntry(\n  input: AllowSddVirtualIbanEntryInput!\n): AllowSddVirtualIbanEntryPayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-allowsddvirtualibanentrybinputbcodeallowsddvirtualibanentryinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"allowSddVirtualIbanEntry.",(0,l.kt)("b",null,"input"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/inputs/allow-sdd-virtual-iban-entry-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AllowSddVirtualIbanEntryInput!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"allowsddvirtualibanentrypayload-"},(0,l.kt)("a",{parentName:"h4",href:"/unions/allow-sdd-virtual-iban-entry-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"AllowSddVirtualIbanEntryPayload"))," ",(0,l.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}f.isMDXComponent=!0}}]);