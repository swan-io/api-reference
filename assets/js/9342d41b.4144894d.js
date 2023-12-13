"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[94831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},o=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,p=u["".concat(c,".").concat(m)]||u[m]||g[m]||s;return n?a.createElement(p,r(r({ref:t},o),{},{components:n})):a.createElement(p,r({ref:t},o))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:i,r[1]=d;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9682:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var a=n(83117),i=n(67294),s=n(3905);const r={id:"add-funding-limit-settings-change-request-success-payload",title:"AddFundingLimitSettingsChangeRequestSuccessPayload",hide_table_of_contents:!1},d=void 0,c={unversionedId:"objects/add-funding-limit-settings-change-request-success-payload",id:"objects/add-funding-limit-settings-change-request-success-payload",title:"AddFundingLimitSettingsChangeRequestSuccessPayload",description:"Add Funding Limit Settings Change Request Success Payload",source:"@site/docs/objects/add-funding-limit-settings-change-request-success-payload.mdx",sourceDirName:"objects",slug:"/objects/add-funding-limit-settings-change-request-success-payload",permalink:"/objects/add-funding-limit-settings-change-request-success-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/add-funding-limit-settings-change-request-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-funding-limit-settings-change-request-success-payload",title:"AddFundingLimitSettingsChangeRequestSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddExternalAccountSuccessPayload",permalink:"/objects/add-external-account-success-payload"},next:{title:"AddInternalDirectDebitPaymentMandateSuccessPayload",permalink:"/objects/add-internal-direct-debit-payment-mandate-success-payload"}},l={},o=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddFundingLimitSettingsChangeRequestSuccessPayload.<b>fundingLimitSettingsChangeRequest</b></code><Bullet /><code>FundingLimitSettingsChangeRequest!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestsuccesspayloadbfundinglimitsettingschangerequestbcodefundinglimitsettingschangerequest--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,s.kt)(i.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,s.kt)(i.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(i.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:o,Bullet:u,SpecifiedBy:g,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,s.kt)(f,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Add Funding Limit Settings Change Request Success Payload"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddFundingLimitSettingsChangeRequestSuccessPayload {\n  fundingLimitSettingsChangeRequest: FundingLimitSettingsChangeRequest!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestsuccesspayloadbfundinglimitsettingschangerequestbcodefundinglimitsettingschangerequest--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AddFundingLimitSettingsChangeRequestSuccessPayload.",(0,s.kt)("b",null,"fundingLimitSettingsChangeRequest"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/objects/funding-limit-settings-change-request"},(0,s.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequest!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The new request for funding limit settings change")),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/unions/add-funding-limit-settings-change-request-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"AddFundingLimitSettingsChangeRequestPayload")),"  ",(0,s.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);