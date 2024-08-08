"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70499],{87798:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>g,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>l,assets:()=>i,contentTitle:()=>u,default:()=>x,frontMatter:()=>r,metadata:()=>a,toc:()=>f});var t=s(74848),d=s(28453),c=s(96540);const r={id:"funding-source-status",title:"FundingSourceStatus"},u=void 0,a={id:"enums/funding-source-status",title:"FundingSourceStatus",description:"Funding Source Statuses",source:"@site/docs/enums/funding-source-status.mdx",sourceDirName:"enums",slug:"/enums/funding-source-status",permalink:"/enums/funding-source-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/funding-source-status.mdx",tags:[],version:"current",frontMatter:{id:"funding-source-status",title:"FundingSourceStatus"},sidebar:"schemaSidebar",previous:{title:"FundingSourceOrderByFieldInput",permalink:"/enums/funding-source-order-by-field-input"},next:{title:"IBANStatus",permalink:"/enums/ibanstatus"}},i={},o=()=>{const e={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const n={a:"a",...(0,d.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:s,startOpen:r=!1})=>{const u={details:"details",summary:"summary",...(0,d.R)()},[a,i]=(0,c.useState)(r);return(0,t.jsxs)(u.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(u.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&s]})},f=[{value:"Values",id:"values",level:3},{value:"<code>FundingSourceStatus.<b>Pending</b></code>",id:"fundingsourcestatuspending",level:4},{value:"<code>FundingSourceStatus.<b>Enabled</b></code>",id:"fundingsourcestatusenabled",level:4},{value:"<code>FundingSourceStatus.<b>Canceled</b></code>",id:"fundingsourcestatuscanceled",level:4},{value:"<code>FundingSourceStatus.<b>Rejected</b></code>",id:"fundingsourcestatusrejected",level:4},{value:"<code>FundingSourceStatus.<b>Suspended</b></code>",id:"fundingsourcestatussuspended",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Funding Source Statuses"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"enum FundingSourceStatus {\n  Pending\n  Enabled\n  Canceled\n  Rejected\n  Suspended\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,t.jsx)(n.h4,{id:"fundingsourcestatuspending",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingSourceStatus.",(0,t.jsx)("b",{children:"Pending"})]})})}),"\n",(0,t.jsx)(n.h4,{id:"fundingsourcestatusenabled",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingSourceStatus.",(0,t.jsx)("b",{children:"Enabled"})]})})}),"\n",(0,t.jsx)(n.h4,{id:"fundingsourcestatuscanceled",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingSourceStatus.",(0,t.jsx)("b",{children:"Canceled"})]})})}),"\n",(0,t.jsx)(n.h4,{id:"fundingsourcestatusrejected",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingSourceStatus.",(0,t.jsx)("b",{children:"Rejected"})]})})}),"\n",(0,t.jsx)(n.h4,{id:"fundingsourcestatussuspended",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingSourceStatus.",(0,t.jsx)("b",{children:"Suspended"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/objects/canceled-funding-source-status-info",children:(0,t.jsx)(n.code,{children:"CanceledFundingSourceStatusInfo"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/objects/enabled-funding-source-status-info",children:(0,t.jsx)(n.code,{children:"EnabledFundingSourceStatusInfo"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/inputs/funding-source-filters-input",children:(0,t.jsx)(n.code,{children:"FundingSourceFiltersInput"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/interfaces/funding-source-status-info",children:(0,t.jsx)(n.code,{children:"FundingSourceStatusInfo"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"interface"}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/objects/funding-source-wrong-status-rejection",children:(0,t.jsx)(n.code,{children:"FundingSourceWrongStatusRejection"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/objects/pending-funding-source-status-info",children:(0,t.jsx)(n.code,{children:"PendingFundingSourceStatusInfo"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/objects/rejected-funding-source-status-info",children:(0,t.jsx)(n.code,{children:"RejectedFundingSourceStatusInfo"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/objects/suspended-funding-source-status-info",children:(0,t.jsx)(n.code,{children:"SuspendedFundingSourceStatusInfo"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>u});var t=s(96540);const d={},c=t.createContext(d);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);