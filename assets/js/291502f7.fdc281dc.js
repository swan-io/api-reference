"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=i.createContext({}),g=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=g(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=g(n),f=s,m=c["".concat(o,".").concat(f)]||c[f]||d[f]||a;return n?i.createElement(m,r(r({ref:t},l),{},{components:n})):i.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:s,r[1]=u;for(var g=2;g<a;g++)r[g]=n[g];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57847:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>c,SpecifiedBy:()=>d,assets:()=>g,contentTitle:()=>u,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(83117),s=n(67294),a=n(3905);const r={id:"funding-limit-settings-change-request-pending-status-info",title:"FundingLimitSettingsChangeRequestPendingStatusInfo",hide_table_of_contents:!1},u=void 0,o={unversionedId:"objects/funding-limit-settings-change-request-pending-status-info",id:"objects/funding-limit-settings-change-request-pending-status-info",title:"FundingLimitSettingsChangeRequestPendingStatusInfo",description:"StatusInfo when funding limit settings change request is pending",source:"@site/docs/objects/funding-limit-settings-change-request-pending-status-info.mdx",sourceDirName:"objects",slug:"/objects/funding-limit-settings-change-request-pending-status-info",permalink:"/objects/funding-limit-settings-change-request-pending-status-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/funding-limit-settings-change-request-pending-status-info.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-settings-change-request-pending-status-info",title:"FundingLimitSettingsChangeRequestPendingStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FundingLimitSettingsChangeRequestEdge",permalink:"/objects/funding-limit-settings-change-request-edge"},next:{title:"FundingLimitSettingsChangeRequestRefusedStatusInfo",permalink:"/objects/funding-limit-settings-change-request-refused-status-info"}},g={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitSettingsChangeRequestPendingStatusInfo.<b>status</b></code><Bullet /><code>FundingLimitSettingsChangeRequestStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-fundinglimitsettingschangerequestpendingstatusinfobstatusbcodefundinglimitsettingschangerequeststatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FundingLimitSettingsChangeRequestStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"fundinglimitsettingschangerequeststatusinfo-",level:4}],c=()=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(s.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:c,SpecifiedBy:d,Badge:f},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"StatusInfo when funding limit settings change request is pending"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type FundingLimitSettingsChangeRequestPendingStatusInfo implements FundingLimitSettingsChangeRequestStatusInfo {\n  status: FundingLimitSettingsChangeRequestStatus!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingschangerequestpendingstatusinfobstatusbcodefundinglimitsettingschangerequeststatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsChangeRequestPendingStatusInfo.",(0,a.kt)("b",null,"status"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/enums/funding-limit-settings-change-request-status"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestStatus!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"fundinglimitsettingschangerequeststatusinfo-"},(0,a.kt)("a",{parentName:"h4",href:"/interfaces/funding-limit-settings-change-request-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestStatusInfo"))," ",(0,a.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Object containing details about funding limit settings change request status")))}h.isMDXComponent=!0}}]);