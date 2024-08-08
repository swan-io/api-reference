"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17582],{77e3:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>p,Bullet:()=>t,Details:()=>u,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>y});var c=a(74848),s=a(28453),l=a(96540);const r={id:"cancel-physical-card-reason",title:"CancelPhysicalCardReason"},d=void 0,i={id:"enums/cancel-physical-card-reason",title:"CancelPhysicalCardReason",description:"reason why the physical card is canceled",source:"@site/docs/enums/cancel-physical-card-reason.mdx",sourceDirName:"enums",slug:"/enums/cancel-physical-card-reason",permalink:"/enums/cancel-physical-card-reason",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/cancel-physical-card-reason.mdx",tags:[],version:"current",frontMatter:{id:"cancel-physical-card-reason",title:"CancelPhysicalCardReason"},sidebar:"schemaSidebar",previous:{title:"BusinessActivity",permalink:"/enums/business-activity"},next:{title:"CanceledFundingSourceReason",permalink:"/enums/canceled-funding-source-reason"}},o={},t=()=>{const e={span:"span",...(0,s.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,s.R)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,s.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:a,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[i,o]=(0,l.useState)(r);return(0,c.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&a]})},y=[{value:"Values",id:"values",level:3},{value:"<code>CancelPhysicalCardReason.<b>NonReceived</b></code>",id:"cancelphysicalcardreasonnonreceived",level:4},{value:"<code>CancelPhysicalCardReason.<b>Lost</b></code>",id:"cancelphysicalcardreasonlost",level:4},{value:"<code>CancelPhysicalCardReason.<b>Stolen</b></code>",id:"cancelphysicalcardreasonstolen",level:4},{value:"<code>CancelPhysicalCardReason.<b>Defected</b></code>",id:"cancelphysicalcardreasondefected",level:4},{value:"<code>CancelPhysicalCardReason.<b>Blocked</b></code>",id:"cancelphysicalcardreasonblocked",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"reason why the physical card is canceled"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"enum CancelPhysicalCardReason {\n  NonReceived\n  Lost\n  Stolen\n  Defected\n  Blocked\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,c.jsx)(n.h4,{id:"cancelphysicalcardreasonnonreceived",children:(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPhysicalCardReason.",(0,c.jsx)("b",{children:"NonReceived"})]})})}),"\n",(0,c.jsx)(n.p,{children:"When the card holder never received the card"}),"\n",(0,c.jsx)(n.h4,{id:"cancelphysicalcardreasonlost",children:(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPhysicalCardReason.",(0,c.jsx)("b",{children:"Lost"})]})})}),"\n",(0,c.jsx)(n.p,{children:"When the card has been stolen"}),"\n",(0,c.jsx)(n.h4,{id:"cancelphysicalcardreasonstolen",children:(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPhysicalCardReason.",(0,c.jsx)("b",{children:"Stolen"})]})})}),"\n",(0,c.jsx)(n.p,{children:"When the card has been stolen"}),"\n",(0,c.jsx)(n.h4,{id:"cancelphysicalcardreasondefected",children:(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPhysicalCardReason.",(0,c.jsx)("b",{children:"Defected"})]})})}),"\n",(0,c.jsx)(n.p,{children:"When the card doesn't work anymore"}),"\n",(0,c.jsx)(n.h4,{id:"cancelphysicalcardreasonblocked",children:(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPhysicalCardReason.",(0,c.jsx)("b",{children:"Blocked"})]})})}),"\n",(0,c.jsx)(n.p,{children:"When the card holder wants to block his card"}),"\n",(0,c.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/inputs/cancel-physical-card-input",children:(0,c.jsx)(n.code,{children:"CancelPhysicalCardInput"})}),"  ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>d});var c=a(96540);const s={},l=c.createContext(s);function r(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);