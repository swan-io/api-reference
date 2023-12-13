"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[62307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:r,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15317:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(83117),r=n(67294),o=n(3905);const s={id:"account-membership-status-info",title:"AccountMembershipStatusInfo",hide_table_of_contents:!1},c=void 0,i={unversionedId:"interfaces/account-membership-status-info",id:"interfaces/account-membership-status-info",title:"AccountMembershipStatusInfo",description:"here are the different account membership status:",source:"@site/docs/interfaces/account-membership-status-info.mdx",sourceDirName:"interfaces",slug:"/interfaces/account-membership-status-info",permalink:"/interfaces/account-membership-status-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/account-membership-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-status-info",title:"AccountMembershipStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountHolderStatusInfo",permalink:"/interfaces/account-holder-status-info"},next:{title:"AccountStatusInfo",permalink:"/interfaces/account-status-info"}},u={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipStatusInfo.<b>status</b></code><Bullet /><code>AccountMembershipStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountmembershipstatusinfobstatusbcodeaccountmembershipstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:m,SpecifiedBy:p,Badge:d},b="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"here are the different account membership status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface AccountMembershipStatusInfo {\n  status: AccountMembershipStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipstatusinfobstatusbcodeaccountmembershipstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/account-membership-status"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatus!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"AccountMembership status")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/objects/account-membership"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembership")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/objects/account-membership-binding-user-error-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipBindingUserErrorStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/account-membership-consent-pending-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipConsentPendingStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/account-membership-disabled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipDisabledStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/account-membership-enabled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipEnabledStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/account-membership-invitation-sent-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipInvitationSentStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/account-membership-suspended-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipSuspendedStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);