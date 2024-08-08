"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[57078],{69749:(e,i,t)=>{t.r(i),t.d(i,{Badge:()=>h,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var n=t(74848),s=t(28453),a=t(96540);const d={id:"identification-status",title:"IdentificationStatus"},o=void 0,c={id:"enums/identification-status",title:"IdentificationStatus",description:"Identification status",source:"@site/docs/enums/identification-status.mdx",sourceDirName:"enums",slug:"/enums/identification-status",permalink:"/enums/identification-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/identification-status.mdx",tags:[],version:"current",frontMatter:{id:"identification-status",title:"IdentificationStatus"},sidebar:"schemaSidebar",previous:{title:"IdentificationProcess",permalink:"/enums/identification-process"},next:{title:"IdentificationsOrderByField",permalink:"/enums/identifications-order-by-field"}},r={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const i={a:"a",...(0,s.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(i.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const i={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:i,children:t,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[c,r]=(0,a.useState)(d);return(0,n.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:c?e:i}),c&&t]})},m=[{value:"Values",id:"values",level:3},{value:"<code>IdentificationStatus.<b>Uninitiated</b></code>",id:"identificationstatusuninitiated",level:4},{value:"<code>IdentificationStatus.<b>Processing</b></code>",id:"identificationstatusprocessing",level:4},{value:"<code>IdentificationStatus.<b>ReadyToSign</b></code>",id:"identificationstatusreadytosign",level:4},{value:"<code>IdentificationStatus.<b>ValidIdentity</b></code>",id:"identificationstatusvalididentity",level:4},{value:"<code>IdentificationStatus.<b>InsufficientDocumentQuality</b></code>",id:"identificationstatusinsufficientdocumentquality",level:4},{value:"<code>IdentificationStatus.<b>InvalidIdentity</b></code>",id:"identificationstatusinvalididentity",level:4},{value:"Member Of",id:"member-of",level:3}];function p(e){const i={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Identification status"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-graphql",children:"enum IdentificationStatus {\n  Uninitiated\n  Processing\n  ReadyToSign\n  ValidIdentity\n  InsufficientDocumentQuality\n  InvalidIdentity\n}\n"})}),"\n",(0,n.jsx)(i.h3,{id:"values",children:"Values"}),"\n",(0,n.jsx)(i.h4,{id:"identificationstatusuninitiated",children:(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationStatus.",(0,n.jsx)("b",{children:"Uninitiated"})]})})}),"\n",(0,n.jsx)(i.p,{children:"The user hasn't started the identity verification process yet."}),"\n",(0,n.jsx)(i.h4,{id:"identificationstatusprocessing",children:(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationStatus.",(0,n.jsx)("b",{children:"Processing"})]})})}),"\n",(0,n.jsx)(i.p,{children:"The user has gone through the identity verification process, but we are still processing their information."}),"\n",(0,n.jsx)(i.h4,{id:"identificationstatusreadytosign",children:(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationStatus.",(0,n.jsx)("b",{children:"ReadyToSign"})]})})}),"\n",(0,n.jsx)(i.p,{children:"The user has gone through the identity verification process, and we have determined that their identity is valid.\nThe user now needs to go through the QES process to complete their identification."}),"\n",(0,n.jsx)(i.h4,{id:"identificationstatusvalididentity",children:(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationStatus.",(0,n.jsx)("b",{children:"ValidIdentity"})]})})}),"\n",(0,n.jsx)(i.p,{children:"The user has gone through the identity verification process, and we have determined that their identity is valid."}),"\n",(0,n.jsx)(i.h4,{id:"identificationstatusinsufficientdocumentquality",children:(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationStatus.",(0,n.jsx)("b",{children:"InsufficientDocumentQuality"})]})})}),"\n",(0,n.jsxs)(i.p,{children:["The user has gone through the identity verification process, but we were unable to determine if their\nidentity is valid because the quality of the provided documents was insufficient.\nThe user will have to start a new identification, which will update this status to ",(0,n.jsx)(i.code,{children:"Processing"}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"identificationstatusinvalididentity",children:(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationStatus.",(0,n.jsx)("b",{children:"InvalidIdentity"})]})})}),"\n",(0,n.jsxs)(i.p,{children:["The user has gone through the identity verification process, but we have determined that their identity is invalid.\nThe user will have to start a new identification, which will update this status to ",(0,n.jsx)(i.code,{children:"Processing"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/objects/user",children:(0,n.jsx)(i.code,{children:"User"})}),"  ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>d,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function d(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);