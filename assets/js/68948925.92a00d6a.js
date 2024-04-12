"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20507],{44338:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=a(85893),i=a(11151),n=a(67294);const r={id:"capital-deposit-case-status",title:"CapitalDepositCaseStatus"},c=void 0,o={id:"enums/capital-deposit-case-status",title:"CapitalDepositCaseStatus",description:"Status of a capital deposit case.",source:"@site/docs/enums/capital-deposit-case-status.mdx",sourceDirName:"enums",slug:"/enums/capital-deposit-case-status",permalink:"/enums/capital-deposit-case-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/capital-deposit-case-status.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-case-status",title:"CapitalDepositCaseStatus"},sidebar:"schemaSidebar",previous:{title:"CapitalDepositCaseOrderByFieldInput",permalink:"/enums/capital-deposit-case-order-by-field-input"},next:{title:"CapitalDepositDocumentStatus",permalink:"/enums/capital-deposit-document-status"}},l={},d=()=>{const e={span:"span",...(0,i.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,i.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,i.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Values",id:"values",level:3},{value:"<code>CapitalDepositCaseStatus.<b>Initiated</b></code>",id:"capitaldepositcasestatusinitiated",level:4},{value:"<code>CapitalDepositCaseStatus.<b>WaitingForRequirements</b></code>",id:"capitaldepositcasestatuswaitingforrequirements",level:4},{value:"<code>CapitalDepositCaseStatus.<b>WaitingForShareDepositCertificate</b></code>",id:"capitaldepositcasestatuswaitingforsharedepositcertificate",level:4},{value:"<code>CapitalDepositCaseStatus.<b>WaitingForRegisterExtract</b></code>",id:"capitaldepositcasestatuswaitingforregisterextract",level:4},{value:"<code>CapitalDepositCaseStatus.<b>WaitingForNotaryTransfer</b></code>",id:"capitaldepositcasestatuswaitingfornotarytransfer",level:4},{value:"<code>CapitalDepositCaseStatus.<b>Completed</b></code>",id:"capitaldepositcasestatuscompleted",level:4},{value:"<code>CapitalDepositCaseStatus.<b>Canceled</b></code>",id:"capitaldepositcasestatuscanceled",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:t,children:a,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,i.a)()},[o,l]=(0,n.useState)(r);return(0,s.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&a]})};function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Status of a capital deposit case."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum CapitalDepositCaseStatus {\n  Initiated\n  WaitingForRequirements\n  WaitingForShareDepositCertificate\n  WaitingForRegisterExtract\n  WaitingForNotaryTransfer\n  Completed\n  Canceled\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"capitaldepositcasestatusinitiated",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositCaseStatus.",(0,s.jsx)("b",{children:"Initiated"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Technical state when the mutation to create a new capital deposit case is called."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"capitaldepositcasestatuswaitingforrequirements",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositCaseStatus.",(0,s.jsx)("b",{children:"WaitingForRequirements"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"A new capital deposit case is created and Swan is waiting for the required information to be provided and each shareholder to wire their share of share capital."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"capitaldepositcasestatuswaitingforsharedepositcertificate",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositCaseStatus.",(0,s.jsx)("b",{children:"WaitingForShareDepositCertificate"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Swan is waiting for the notary to provide the Share Deposit Certificate."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"capitaldepositcasestatuswaitingforregisterextract",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositCaseStatus.",(0,s.jsx)("b",{children:"WaitingForRegisterExtract"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Swan is waiting for you to provide the Register Extract."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"capitaldepositcasestatuswaitingfornotarytransfer",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositCaseStatus.",(0,s.jsx)("b",{children:"WaitingForNotaryTransfer"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Swan is waiting for the notary to wire the share capital on the account of the company being registered."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"capitaldepositcasestatuscompleted",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositCaseStatus.",(0,s.jsx)("b",{children:"Completed"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The capital deposit case is completed."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"capitaldepositcasestatuscanceled",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositCaseStatus.",(0,s.jsx)("b",{children:"Canceled"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The capital deposit case is canceled."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/objects/capital-deposit-case",children:(0,s.jsx)(t.code,{children:"CapitalDepositCase"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/inputs/capital-deposit-case-filters-input",children:(0,s.jsx)(t.code,{children:"CapitalDepositCaseFiltersInput"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>r});var s=a(67294);const i={},n=s.createContext(i);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);