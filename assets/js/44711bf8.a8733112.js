"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[88192],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=i,f=u["".concat(o,".").concat(y)]||u[y]||s[y]||a;return r?n.createElement(f,d(d({ref:t},p),{},{components:r})):n.createElement(f,d({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,d=new Array(a);d[0]=y;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,d[1]=l;for(var c=2;c<a;c++)d[c]=r[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},23472:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var n=r(83117),i=r(67294),a=r(3905);const d={id:"digital-card-order-by-input",title:"DigitalCardOrderByInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"inputs/digital-card-order-by-input",id:"inputs/digital-card-order-by-input",title:"DigitalCardOrderByInput",description:"Order that can be applied when listing digital cards",source:"@site/docs/inputs/digital-card-order-by-input.mdx",sourceDirName:"inputs",slug:"/inputs/digital-card-order-by-input",permalink:"/inputs/digital-card-order-by-input",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/digital-card-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"digital-card-order-by-input",title:"DigitalCardOrderByInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DigitalCardFiltersInput",permalink:"/inputs/digital-card-filters-input"},next:{title:"DisableAccountMembershipInput",permalink:"/inputs/disable-account-membership-input"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardOrderByInput.<b>field</b></code><Bullet /><code>DigitalCardOrderByFieldInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-digitalcardorderbyinputbfieldbcodedigitalcardorderbyfieldinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardOrderByInput.<b>direction</b></code><Bullet /><code>OrderByDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-digitalcardorderbyinputbdirectionbcodeorderbydirection-",level:4}],u=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:s,Badge:y},g="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Order that can be applied when listing digital cards"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input DigitalCardOrderByInput {\n  field: DigitalCardOrderByFieldInput\n  direction: OrderByDirection\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-digitalcardorderbyinputbfieldbcodedigitalcardorderbyfieldinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardOrderByInput.",(0,a.kt)("b",null,"field"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/enums/digital-card-order-by-field-input"},(0,a.kt)("inlineCode",{parentName:"a"},"DigitalCardOrderByFieldInput"))," ",(0,a.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-digitalcardorderbyinputbdirectionbcodeorderbydirection-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardOrderByInput.",(0,a.kt)("b",null,"direction"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/enums/order-by-direction"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderByDirection"))," ",(0,a.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}m.isMDXComponent=!0}}]);