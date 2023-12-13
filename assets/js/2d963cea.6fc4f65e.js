"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[92951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=c(r),y=n,f=u["".concat(d,".").concat(y)]||u[y]||p[y]||s;return r?a.createElement(f,l(l({ref:t},i),{},{components:r})):a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<s;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},11604:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var a=r(83117),n=r(67294),s=r(3905);const l={id:"add-single-use-virtual-card-success-for-user-payload",title:"AddSingleUseVirtualCardSuccessForUserPayload",hide_table_of_contents:!1},o=void 0,d={unversionedId:"objects/add-single-use-virtual-card-success-for-user-payload",id:"objects/add-single-use-virtual-card-success-for-user-payload",title:"AddSingleUseVirtualCardSuccessForUserPayload",description:"No description",source:"@site/docs/objects/add-single-use-virtual-card-success-for-user-payload.mdx",sourceDirName:"objects",slug:"/objects/add-single-use-virtual-card-success-for-user-payload",permalink:"/objects/add-single-use-virtual-card-success-for-user-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/add-single-use-virtual-card-success-for-user-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-single-use-virtual-card-success-for-user-payload",title:"AddSingleUseVirtualCardSuccessForUserPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddSingleUseVirtualCardSuccessForProjectOwnerPayload",permalink:"/objects/add-single-use-virtual-card-success-for-project-owner-payload"},next:{title:"AddSingleUseVirtualCardsSuccessPayload",permalink:"/objects/add-single-use-virtual-cards-success-payload"}},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddSingleUseVirtualCardSuccessForUserPayload.<b>card</b></code><Bullet /><code>Card!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-addsingleusevirtualcardsuccessforuserpayloadbcardbcodecard--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:u,SpecifiedBy:p,Badge:y},m="wrapper";function g(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddSingleUseVirtualCardSuccessForUserPayload {\n  card: Card!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-addsingleusevirtualcardsuccessforuserpayloadbcardbcodecard--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AddSingleUseVirtualCardSuccessForUserPayload.",(0,s.kt)("b",null,"card"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/objects/card"},(0,s.kt)("inlineCode",{parentName:"a"},"Card!"))," ",(0,s.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The new card added")),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/unions/add-single-use-virtual-card-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardPayload")),"  ",(0,s.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);