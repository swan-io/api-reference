"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[37645],{16646:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>u,Details:()=>x,SpecifiedBy:()=>l,assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var s=n(74848),c=n(28453),a=n(96540);const o={id:"account-status",title:"AccountStatus"},d=void 0,r={id:"enums/account-status",title:"AccountStatus",description:"No description",source:"@site/docs/enums/account-status.mdx",sourceDirName:"enums",slug:"/enums/account-status",permalink:"/enums/account-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/account-status.mdx",tags:[],version:"current",frontMatter:{id:"account-status",title:"AccountStatus"},sidebar:"schemaSidebar",previous:{title:"AccountStandingOrderOrderByFieldInput",permalink:"/enums/account-standing-order-order-by-field-input"},next:{title:"AccountVerificationStatus",permalink:"/enums/account-verification-status"}},i={},u=()=>{const e={span:"span",...(0,c.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const t={a:"a",...(0,c.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,c.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,c.R)()},[r,i]=(0,a.useState)(o);return(0,s.jsxs)(d.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},p=[{value:"Values",id:"values",level:3},{value:"<code>AccountStatus.<b>Opened</b></code>",id:"accountstatusopened",level:4},{value:"<code>AccountStatus.<b>Suspended</b></code>",id:"accountstatussuspended",level:4},{value:"<code>AccountStatus.<b>Closing</b></code>",id:"accountstatusclosing",level:4},{value:"<code>AccountStatus.<b>Closed</b></code>",id:"accountstatusclosed",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum AccountStatus {\n  Opened\n  Suspended\n  Closing\n  Closed\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"accountstatusopened",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountStatus.",(0,s.jsx)("b",{children:"Opened"})]})})}),"\n",(0,s.jsx)(t.p,{children:"When the account is opened"}),"\n",(0,s.jsx)(t.h4,{id:"accountstatussuspended",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountStatus.",(0,s.jsx)("b",{children:"Suspended"})]})})}),"\n",(0,s.jsx)(t.p,{children:"When the account is suspended"}),"\n",(0,s.jsx)(t.h4,{id:"accountstatusclosing",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountStatus.",(0,s.jsx)("b",{children:"Closing"})]})})}),"\n",(0,s.jsx)(t.p,{children:"When the account is currently closing"}),"\n",(0,s.jsx)(t.h4,{id:"accountstatusclosed",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountStatus.",(0,s.jsx)("b",{children:"Closed"})]})})}),"\n",(0,s.jsx)(t.p,{children:"When the account is closed"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/objects/account-closed-status",children:(0,s.jsx)(t.code,{children:"AccountClosedStatus"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/objects/account-closing-status",children:(0,s.jsx)(t.code,{children:"AccountClosingStatus"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/inputs/account-filter-input",children:(0,s.jsx)(t.code,{children:"AccountFilterInput"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/objects/account-opened-status",children:(0,s.jsx)(t.code,{children:"AccountOpenedStatus"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/interfaces/account-status-info",children:(0,s.jsx)(t.code,{children:"AccountStatusInfo"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/objects/account-suspended-status",children:(0,s.jsx)(t.code,{children:"AccountSuspendedStatus"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(96540);const c={},a=s.createContext(c);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);