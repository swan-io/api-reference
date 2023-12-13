"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var c=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},o=Object.keys(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=c.createContext({}),p=function(e){var t=c.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=p(e.components);return c.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},m=c.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?c.createElement(b,s(s({ref:t},i),{},{components:n})):c.createElement(b,s({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return c.createElement.apply(null,s)}return c.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15639:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var c=n(83117),r=n(67294),o=n(3905);const s={id:"suspend-account-membership-success-payload",title:"SuspendAccountMembershipSuccessPayload",hide_table_of_contents:!1},a=void 0,l={unversionedId:"objects/suspend-account-membership-success-payload",id:"objects/suspend-account-membership-success-payload",title:"SuspendAccountMembershipSuccessPayload",description:"No description",source:"@site/docs/objects/suspend-account-membership-success-payload.mdx",sourceDirName:"objects",slug:"/objects/suspend-account-membership-success-payload",permalink:"/objects/suspend-account-membership-success-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/suspend-account-membership-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"suspend-account-membership-success-payload",title:"SuspendAccountMembershipSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupportingDocument",permalink:"/objects/supporting-document"},next:{title:"SuspendAccountReason",permalink:"/objects/suspend-account-reason"}},p={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendAccountMembershipSuccessPayload.<b>accountMembership</b></code><Bullet /><code>AccountMembership!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-suspendaccountmembershipsuccesspayloadbaccountmembershipbcodeaccountmembership--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:i,Bullet:u,SpecifiedBy:d,Badge:m},y="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,c.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SuspendAccountMembershipSuccessPayload {\n  accountMembership: AccountMembership!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-suspendaccountmembershipsuccesspayloadbaccountmembershipbcodeaccountmembership--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SuspendAccountMembershipSuccessPayload.",(0,o.kt)("b",null,"accountMembership"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/account-membership"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembership!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/unions/suspend-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"SuspendAccountMembershipPayload")),"  ",(0,o.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);