"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[15116],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,d=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,y=p["".concat(l,".").concat(m)]||p[m]||u[m]||d;return a?r.createElement(y,o(o({ref:t},s),{},{components:a})):r.createElement(y,o({ref:t},s))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=a.length,o=new Array(d);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<d;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90167:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(83117),n=a(67294),d=a(3905);const o={id:"card-product-disabled-rejection",title:"CardProductDisabledRejection",hide_table_of_contents:!1},i=void 0,l={unversionedId:"objects/card-product-disabled-rejection",id:"objects/card-product-disabled-rejection",title:"CardProductDisabledRejection",description:"Rejection returned if the card product is disabled.",source:"@site/docs/objects/card-product-disabled-rejection.mdx",sourceDirName:"objects",slug:"/objects/card-product-disabled-rejection",permalink:"/objects/card-product-disabled-rejection",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/card-product-disabled-rejection.mdx",tags:[],version:"current",frontMatter:{id:"card-product-disabled-rejection",title:"CardProductDisabledRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CardProductDesign",permalink:"/objects/card-product-design"},next:{title:"CardProductNotApplicableToPhysicalCardsRejection",permalink:"/objects/card-product-not-applicable-to-physical-cards-rejection"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardProductDisabledRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardproductdisabledrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:p,SpecifiedBy:u,Badge:m},f="wrapper";function b(e){let{components:t,...a}=e;return(0,d.kt)(f,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Rejection returned if the card product is disabled."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type CardProductDisabledRejection implements Rejection {\n  message: String!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-cardproductdisabledrejectionbmessagebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"CardProductDisabledRejection.",(0,d.kt)("b",null,"message"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"rejection-"},(0,d.kt)("a",{parentName:"h4",href:"/interfaces/rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,d.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/unions/add-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardPayload")),"  ",(0,d.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/unions/add-cards-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardsPayload")),"  ",(0,d.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/unions/add-cards-with-group-delivery-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardsWithGroupDeliveryPayload")),"  ",(0,d.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/unions/add-digital-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddDigitalCardPayload")),"  ",(0,d.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/unions/add-single-use-virtual-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardPayload")),"  ",(0,d.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/unions/add-single-use-virtual-cards-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardsPayload")),"  ",(0,d.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/unions/print-physical-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"PrintPhysicalCardPayload")),"  ",(0,d.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);