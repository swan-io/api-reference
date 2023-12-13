"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17608],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var i=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,s=function(t,e){if(null==t)return{};var n,i,s={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var o=i.createContext({}),u=function(t){var e=i.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=u(t.components);return i.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(t,e){var n=t.components,s=t.mdxType,a=t.originalType,o=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=u(n),g=s,f=c["".concat(o,".").concat(g)]||c[g]||m[g]||a;return n?i.createElement(f,r(r({ref:e},d),{},{components:n})):i.createElement(f,r({ref:e},d))}));function f(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=n.length,r=new Array(a);r[0]=g;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[c]="string"==typeof t?t:s,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},74449:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>g,Bullet:()=>c,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(83117),s=n(67294),a=n(3905);const r={id:"funding-limit-settings-status",title:"FundingLimitSettingsStatus",hide_table_of_contents:!1},l=void 0,o={unversionedId:"enums/funding-limit-settings-status",id:"enums/funding-limit-settings-status",title:"FundingLimitSettingsStatus",description:"Possible values for funding limit settings status",source:"@site/docs/enums/funding-limit-settings-status.mdx",sourceDirName:"enums",slug:"/enums/funding-limit-settings-status",permalink:"/enums/funding-limit-settings-status",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/funding-limit-settings-status.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-settings-status",title:"FundingLimitSettingsStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FundingLimitSettingsChangeRequestStatus",permalink:"/enums/funding-limit-settings-change-request-status"},next:{title:"FundingSourceOrderByFieldInput",permalink:"/enums/funding-source-order-by-field-input"}},u={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>FundingLimitSettingsStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-fundinglimitsettingsstatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>FundingLimitSettingsStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-fundinglimitsettingsstatusbsuspendedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>FundingLimitSettingsStatus.<b>Disabled</b></code>",id:"code-style-fontweight-normal-fundinglimitsettingsstatusbdisabledbcode",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=t=>(0,a.kt)(s.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),g=t=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+t.class},t.text)),f={toc:d,Bullet:c,SpecifiedBy:m,Badge:g},p="wrapper";function b(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,i.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Possible values for funding limit settings status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum FundingLimitSettingsStatus {\n  Enabled\n  Suspended\n  Disabled\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingsstatusbenabledbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsStatus.",(0,a.kt)("b",null,"Enabled")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the funding limit settings is enabled")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingsstatusbsuspendedbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsStatus.",(0,a.kt)("b",null,"Suspended")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the funding limit settings is suspended")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingsstatusbdisabledbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsStatus.",(0,a.kt)("b",null,"Disabled")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the funding limit settings is disabled")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/objects/disabled-funding-limit-settings-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"DisabledFundingLimitSettingsStatusInfo")),"  ",(0,a.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/objects/enabled-funding-limit-settings-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"EnabledFundingLimitSettingsStatusInfo")),"  ",(0,a.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/interfaces/funding-limit-settings-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsStatusInfo")),"  ",(0,a.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/objects/suspended-funding-limit-settings-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"SuspendedFundingLimitSettingsStatusInfo")),"  ",(0,a.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);