"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[15009],{9141:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>x,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>j,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var t=a(74848),c=a(28453),l=a(96540);const r={id:"external-account-balance-type",title:"ExternalAccountBalanceType"},o=void 0,s={id:"enums/external-account-balance-type",title:"ExternalAccountBalanceType",description:"No description",source:"@site/docs/enums/external-account-balance-type.mdx",sourceDirName:"enums",slug:"/enums/external-account-balance-type",permalink:"/enums/external-account-balance-type",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/external-account-balance-type.mdx",tags:[],version:"current",frontMatter:{id:"external-account-balance-type",title:"ExternalAccountBalanceType"},sidebar:"schemaSidebar",previous:{title:"ExportType",permalink:"/enums/export-type"},next:{title:"ExternalAccountDataSourceType",permalink:"/enums/external-account-data-source-type"}},d={},i=()=>{const e={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const n={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:a,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,c.R)()},[s,d]=(0,l.useState)(r);return(0,t.jsxs)(o.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:s?e:n}),s&&a]})},h=[{value:"Values",id:"values",level:3},{value:"<code>ExternalAccountBalanceType.<b>ClosingBooked</b></code>",id:"externalaccountbalancetypeclosingbooked",level:4},{value:"<code>ExternalAccountBalanceType.<b>PreviouslyClosedBooked</b></code>",id:"externalaccountbalancetypepreviouslyclosedbooked",level:4},{value:"<code>ExternalAccountBalanceType.<b>InterimAvailable</b></code>",id:"externalaccountbalancetypeinterimavailable",level:4},{value:"<code>ExternalAccountBalanceType.<b>Expected</b></code>",id:"externalaccountbalancetypeexpected",level:4},{value:"<code>ExternalAccountBalanceType.<b>ValueDate</b></code>",id:"externalaccountbalancetypevaluedate",level:4},{value:"<code>ExternalAccountBalanceType.<b>Other</b></code>",id:"externalaccountbalancetypeother",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"enum ExternalAccountBalanceType {\n  ClosingBooked\n  PreviouslyClosedBooked\n  InterimAvailable\n  Expected\n  ValueDate\n  Other\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,t.jsx)(n.h4,{id:"externalaccountbalancetypeclosingbooked",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ExternalAccountBalanceType.",(0,t.jsx)("b",{children:"ClosingBooked"})]})})}),"\n",(0,t.jsx)(n.p,{children:"Balance of the account at the end of the pre-agreed account reporting period"}),"\n",(0,t.jsx)(n.h4,{id:"externalaccountbalancetypepreviouslyclosedbooked",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ExternalAccountBalanceType.",(0,t.jsx)("b",{children:"PreviouslyClosedBooked"})]})})}),"\n",(0,t.jsx)(n.p,{children:"Balance of the account at the previously closed account reporting period"}),"\n",(0,t.jsx)(n.h4,{id:"externalaccountbalancetypeinterimavailable",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ExternalAccountBalanceType.",(0,t.jsx)("b",{children:"InterimAvailable"})]})})}),"\n",(0,t.jsx)(n.p,{children:"Available balance calculated in the course of the account servicer's business day, at the time specified, and subject to further changes during the business day"}),"\n",(0,t.jsx)(n.h4,{id:"externalaccountbalancetypeexpected",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ExternalAccountBalanceType.",(0,t.jsx)("b",{children:"Expected"})]})})}),"\n",(0,t.jsx)(n.p,{children:"Balance composed of booked entries and pending items known at the time of calculation"}),"\n",(0,t.jsx)(n.h4,{id:"externalaccountbalancetypevaluedate",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ExternalAccountBalanceType.",(0,t.jsx)("b",{children:"ValueDate"})]})})}),"\n",(0,t.jsx)(n.p,{children:"Value-date balance"}),"\n",(0,t.jsx)(n.h4,{id:"externalaccountbalancetypeother",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ExternalAccountBalanceType.",(0,t.jsx)("b",{children:"Other"})]})})}),"\n",(0,t.jsx)(n.p,{children:"Other balance"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/inputs/add-external-account-balance-input",children:(0,t.jsx)(n.code,{children:"AddExternalAccountBalanceInput"})}),"  ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/inputs/add-or-update-external-account-balance-input",children:(0,t.jsx)(n.code,{children:"AddOrUpdateExternalAccountBalanceInput"})}),"  ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/objects/external-account-balance",children:(0,t.jsx)(n.code,{children:"ExternalAccountBalance"})}),"  ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/objects/external-account-balance-already-exists-rejection",children:(0,t.jsx)(n.code,{children:"ExternalAccountBalanceAlreadyExistsRejection"})}),"  ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/inputs/external-account-balance-input",children:(0,t.jsx)(n.code,{children:"ExternalAccountBalanceInput"})}),"  ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"input"})]})]})}function j(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var t=a(96540);const c={},l=t.createContext(c);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);