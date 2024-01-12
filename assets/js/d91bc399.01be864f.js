"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[65823],{52928:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>o,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var s=t(85893),a=t(11151),i=t(67294);const r={id:"ibanstatus",title:"IBANStatus"},l=void 0,c={id:"enums/ibanstatus",title:"IBANStatus",description:"Virtual IBAN Status",source:"@site/docs/enums/ibanstatus.mdx",sourceDirName:"enums",slug:"/enums/ibanstatus",permalink:"/enums/ibanstatus",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/ibanstatus.mdx",tags:[],version:"current",frontMatter:{id:"ibanstatus",title:"IBANStatus"},sidebar:"schemaSidebar",previous:{title:"FundingSourceStatus",permalink:"/enums/funding-source-status"},next:{title:"IdentificationInvalidReason",permalink:"/enums/identification-invalid-reason"}},d={},o=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},m=[{value:"Values",id:"values",level:3},{value:"<code>IBANStatus.<b>Enabled</b></code>",id:"ibanstatusenabled",level:4},{value:"<code>IBANStatus.<b>Canceled</b></code>",id:"ibanstatuscanceled",level:4},{value:"<code>IBANStatus.<b>Suspended</b></code>",id:"ibanstatussuspended",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,a.a)()},[c,d]=(0,i.useState)(r);return(0,s.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Virtual IBAN Status"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"enum IBANStatus {\n  Enabled\n  Canceled\n  Suspended\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(n.h4,{id:"ibanstatusenabled",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["IBANStatus.",(0,s.jsx)("b",{children:"Enabled"})]})})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When the virtual IBAN accept to receive Sepa payments"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ibanstatuscanceled",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["IBANStatus.",(0,s.jsx)("b",{children:"Canceled"})]})})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When the virtual IBAN refuse definitely to receive Sepa payments"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ibanstatussuspended",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["IBANStatus.",(0,s.jsx)("b",{children:"Suspended"})]})})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When the virtual IBAN refuse temporarily to receive Sepa payments"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/objects/virtual-ibanentry",children:(0,s.jsx)(n.code,{children:"VirtualIBANEntry"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(67294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);