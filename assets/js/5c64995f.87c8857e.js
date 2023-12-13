"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36511],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(t),y=o,f=s["".concat(i,".").concat(y)]||s[y]||p[y]||r;return t?a.createElement(f,c(c({ref:n},u),{},{components:t})):a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=y;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<r;d++)c[d]=t[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},23663:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>y,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=t(83117),o=t(67294),r=t(3905);const c={id:"cancel-funding-source-payload",title:"CancelFundingSourcePayload",hide_table_of_contents:!1},l=void 0,i={unversionedId:"unions/cancel-funding-source-payload",id:"unions/cancel-funding-source-payload",title:"CancelFundingSourcePayload",description:"Cancel Funding Source Payload",source:"@site/docs/unions/cancel-funding-source-payload.mdx",sourceDirName:"unions",slug:"/unions/cancel-funding-source-payload",permalink:"/unions/cancel-funding-source-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/cancel-funding-source-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-funding-source-payload",title:"CancelFundingSourcePayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelDigitalCardPayload",permalink:"/unions/cancel-digital-card-payload"},next:{title:"CancelPhysicalCardPayload",permalink:"/unions/cancel-physical-card-payload"}},d={},u=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>CancelFundingSourceSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"cancelfundingsourcesuccesspayload-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>NotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"notfoundrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:s,SpecifiedBy:p,Badge:y},g="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cancel Funding Source Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union CancelFundingSourcePayload = CancelFundingSourceSuccessPayload | ForbiddenRejection | NotFoundRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"cancelfundingsourcesuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/objects/cancel-funding-source-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"CancelFundingSourceSuccessPayload"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cancel Funding Source Success Payload")),(0,r.kt)("h4",{id:"forbiddenrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/objects/forbidden-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"notfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/objects/not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"NotFoundRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mutations/cancel-funding-source"},(0,r.kt)("inlineCode",{parentName:"a"},"cancelFundingSource")),"  ",(0,r.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);