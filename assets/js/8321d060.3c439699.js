"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[63449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89623:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(83117),a=n(67294),o=n(3905);const r={id:"identification-filters-input",title:"IdentificationFiltersInput",hide_table_of_contents:!1},s=void 0,l={unversionedId:"inputs/identification-filters-input",id:"inputs/identification-filters-input",title:"IdentificationFiltersInput",description:"Filter that can be passed to get the identifications in specific data ranges",source:"@site/docs/inputs/identification-filters-input.mdx",sourceDirName:"inputs",slug:"/inputs/identification-filters-input",permalink:"/inputs/identification-filters-input",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/identification-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"identification-filters-input",title:"IdentificationFiltersInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"IbanValidationInput",permalink:"/inputs/iban-validation-input"},next:{title:"IdentificationsOrderByInput",permalink:"/inputs/identifications-order-by-input"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IdentificationFiltersInput.<b>statuses</b></code><Bullet /><code>[SwanIdentificationStatus!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-identificationfiltersinputbstatusesbcodeswanidentificationstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IdentificationFiltersInput.<b>levels</b></code><Bullet /><code>[IdentificationLevel!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-identificationfiltersinputblevelsbcodeidentificationlevel--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IdentificationFiltersInput.<b>processes</b></code><Bullet /><code>[IdentificationProcess!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-identificationfiltersinputbprocessesbcodeidentificationprocess--",level:4}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:u,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Filter that can be passed to get the identifications in specific data ranges"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input IdentificationFiltersInput {\n  statuses: [SwanIdentificationStatus!]\n  levels: [IdentificationLevel!]\n  processes: [IdentificationProcess!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationfiltersinputbstatusesbcodeswanidentificationstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationFiltersInput.",(0,o.kt)("b",null,"statuses"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/swan-identification-status"},(0,o.kt)("inlineCode",{parentName:"a"},"[SwanIdentificationStatus!]"))," ",(0,o.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To filter on status values")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationfiltersinputblevelsbcodeidentificationlevel--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationFiltersInput.",(0,o.kt)("b",null,"levels"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/identification-level"},(0,o.kt)("inlineCode",{parentName:"a"},"[IdentificationLevel!]"))," ",(0,o.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To filter on level values")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationfiltersinputbprocessesbcodeidentificationprocess--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationFiltersInput.",(0,o.kt)("b",null,"processes"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/identification-process"},(0,o.kt)("inlineCode",{parentName:"a"},"[IdentificationProcess!]"))," ",(0,o.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To filter on process values")))}b.isMDXComponent=!0}}]);