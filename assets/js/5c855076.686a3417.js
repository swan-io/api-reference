"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[98830],{91940:(e,n,i)=>{i.r(n),i.d(n,{Badge:()=>u,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>t,metadata:()=>o,toc:()=>v});var a=i(85893),d=i(11151),l=i(67294);const t={id:"invalid-iban-code",title:"InvalidIbanCode"},s=void 0,o={id:"enums/invalid-iban-code",title:"InvalidIbanCode",description:"InvalidIbanCode",source:"@site/docs/enums/invalid-iban-code.mdx",sourceDirName:"enums",slug:"/enums/invalid-iban-code",permalink:"/enums/invalid-iban-code",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/invalid-iban-code.mdx",tags:[],version:"current",frontMatter:{id:"invalid-iban-code",title:"InvalidIbanCode"},sidebar:"schemaSidebar",previous:{title:"InvalidArgumentRejectionCode",permalink:"/enums/invalid-argument-rejection-code"},next:{title:"InvoiceStatus",permalink:"/enums/invoice-status"}},c={},r=()=>{const e={span:"span",...(0,d.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,d.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,d.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},v=[{value:"Values",id:"values",level:3},{value:"<code>InvalidIbanCode.<b>InvalidLength</b></code>",id:"invalidibancodeinvalidlength",level:4},{value:"<code>InvalidIbanCode.<b>InvalidStructure</b></code>",id:"invalidibancodeinvalidstructure",level:4},{value:"<code>InvalidIbanCode.<b>InvalidChecksum</b></code>",id:"invalidibancodeinvalidchecksum",level:4},{value:"<code>InvalidIbanCode.<b>InvalidBank</b></code>",id:"invalidibancodeinvalidbank",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:n,children:i,startOpen:t=!1})=>{const s={details:"details",summary:"summary",...(0,d.a)()},[o,c]=(0,l.useState)(t);return(0,a.jsxs)(s.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&i]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"InvalidIbanCode"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"enum InvalidIbanCode {\n  InvalidLength\n  InvalidStructure\n  InvalidChecksum\n  InvalidBank\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,a.jsx)(n.h4,{id:"invalidibancodeinvalidlength",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InvalidIbanCode.",(0,a.jsx)("b",{children:"InvalidLength"})]})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Iban is either too short (<2) or does not match this country's specified length"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"invalidibancodeinvalidstructure",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InvalidIbanCode.",(0,a.jsx)("b",{children:"InvalidStructure"})]})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"We do not know this IBAN Structure (Meaning that the country code is probably wrong)"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"invalidibancodeinvalidchecksum",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InvalidIbanCode.",(0,a.jsx)("b",{children:"InvalidChecksum"})]})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The IBAN does not verify the mod97 algorithm"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"invalidibancodeinvalidbank",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InvalidIbanCode.",(0,a.jsx)("b",{children:"InvalidBank"})]})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"We do not know the banking institution referenced in this IBAN."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/objects/invalid-iban",children:(0,a.jsx)(n.code,{children:"InvalidIban"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>t});var a=i(67294);const d={},l=a.createContext(d);function t(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);