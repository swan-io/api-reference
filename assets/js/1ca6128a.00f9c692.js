"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[13145],{63577:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var d=o(85893),c=o(11151),s=o(67294);const t={id:"document-reason-code",title:"DocumentReasonCode"},i=void 0,a={id:"enums/document-reason-code",title:"DocumentReasonCode",description:"Reason code of the document.",source:"@site/docs/enums/document-reason-code.mdx",sourceDirName:"enums",slug:"/enums/document-reason-code",permalink:"/enums/document-reason-code",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/document-reason-code.mdx",tags:[],version:"current",frontMatter:{id:"document-reason-code",title:"DocumentReasonCode"},sidebar:"schemaSidebar",previous:{title:"DocumentFileSide",permalink:"/enums/document-file-side"},next:{title:"DocumentType",permalink:"/enums/document-type"}},r={},l=()=>{const e={span:"span",...(0,c.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,c.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,c.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Values",id:"values",level:3},{value:"<code>DocumentReasonCode.<b>CompanyNameMismatch</b></code>",id:"documentreasoncodecompanynamemismatch",level:4},{value:"<code>DocumentReasonCode.<b>DeclaredAmountMismatch</b></code>",id:"documentreasoncodedeclaredamountmismatch",level:4},{value:"<code>DocumentReasonCode.<b>ExpiredDocument</b></code>",id:"documentreasoncodeexpireddocument",level:4},{value:"<code>DocumentReasonCode.<b>InvalidAddress</b></code>",id:"documentreasoncodeinvalidaddress",level:4},{value:"<code>DocumentReasonCode.<b>InvalidDocument</b></code>",id:"documentreasoncodeinvaliddocument",level:4},{value:"<code>DocumentReasonCode.<b>InvalidOrMissingData</b></code>",id:"documentreasoncodeinvalidormissingdata",level:4},{value:"<code>DocumentReasonCode.<b>MissingAccommodationProviderId</b></code>",id:"documentreasoncodemissingaccommodationproviderid",level:4},{value:"<code>DocumentReasonCode.<b>MissingAccommodationProviderIdLetter</b></code>",id:"documentreasoncodemissingaccommodationprovideridletter",level:4},{value:"<code>DocumentReasonCode.<b>MissingAccommodationProviderLetter</b></code>",id:"documentreasoncodemissingaccommodationproviderletter",level:4},{value:"<code>DocumentReasonCode.<b>UnacceptableDocument</b></code>",id:"documentreasoncodeunacceptabledocument",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:o,startOpen:t=!1})=>{const i={details:"details",summary:"summary",...(0,c.a)()},[a,r]=(0,s.useState)(t);return(0,d.jsxs)(i.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(i.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&o]})};function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Reason code of the document."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",children:"enum DocumentReasonCode {\n  CompanyNameMismatch\n  DeclaredAmountMismatch\n  ExpiredDocument\n  InvalidAddress\n  InvalidDocument\n  InvalidOrMissingData\n  MissingAccommodationProviderId\n  MissingAccommodationProviderIdLetter\n  MissingAccommodationProviderLetter\n  UnacceptableDocument\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,d.jsx)(n.h4,{id:"documentreasoncodecompanynamemismatch",children:(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentReasonCode.",(0,d.jsx)("b",{children:"CompanyNameMismatch"})]})})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Company name in document doesn\u2019t match our records"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"documentreasoncodedeclaredamountmismatch",children:(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentReasonCode.",(0,d.jsx)("b",{children:"DeclaredAmountMismatch"})]})})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Declared amount in document doesn\u2019t match the amount received"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"documentreasoncodeexpireddocument",children:(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentReasonCode.",(0,d.jsx)("b",{children:"ExpiredDocument"})]})})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Document must be dated less than 3 months ago"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"documentreasoncodeinvalidaddress",children:(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentReasonCode.",(0,d.jsx)("b",{children:"InvalidAddress"})]})})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Address in document doesn\u2019t match our records"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"documentreasoncodeinvaliddocument",children:(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentReasonCode.",(0,d.jsx)("b",{children:"InvalidDocument"})]})})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Default value when none of the other values is appropriate"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"documentreasoncodeinvalidormissingdata",children:(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentReasonCode.",(0,d.jsx)("b",{children:"InvalidOrMissingData"})]})})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Name of shareholder is not clearly visible or is missing"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"documentreasoncodemissingaccommodationproviderid",children:(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentReasonCode.",(0,d.jsx)("b",{children:"MissingAccommodationProviderId"})]})})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Missing identity document of accommodation provider"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"documentreasoncodemissingaccommodationprovideridletter",children:(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentReasonCode.",(0,d.jsx)("b",{children:"MissingAccommodationProviderIdLetter"})]})})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Missing identity document and proof of accommodation from accommodation provider"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"documentreasoncodemissingaccommodationproviderletter",children:(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentReasonCode.",(0,d.jsx)("b",{children:"MissingAccommodationProviderLetter"})]})})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Missing proof of accommodation from accommodation provider"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"documentreasoncodeunacceptabledocument",children:(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentReasonCode.",(0,d.jsx)("b",{children:"UnacceptableDocument"})]})})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Document can\u2019t be accepted as a proof of address"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/objects/capital-deposit-document-refused-status-info",children:(0,d.jsx)(n.code,{children:"CapitalDepositDocumentRefusedStatusInfo"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>t});var d=o(67294);const c={},s=d.createContext(c);function t(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);