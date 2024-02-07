"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[86508],{44328:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var i=n(85893),c=n(11151),d=n(67294);const a={id:"separeceived-direct-debit-mandate-sequence",title:"SEPAReceivedDirectDebitMandateSequence"},r=void 0,s={id:"enums/separeceived-direct-debit-mandate-sequence",title:"SEPAReceivedDirectDebitMandateSequence",description:"SEPA received direct debit mandate sequence",source:"@site/docs/enums/separeceived-direct-debit-mandate-sequence.mdx",sourceDirName:"enums",slug:"/enums/separeceived-direct-debit-mandate-sequence",permalink:"/enums/separeceived-direct-debit-mandate-sequence",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/separeceived-direct-debit-mandate-sequence.mdx",tags:[],version:"current",frontMatter:{id:"separeceived-direct-debit-mandate-sequence",title:"SEPAReceivedDirectDebitMandateSequence"},sidebar:"schemaSidebar",previous:{title:"SEPAReceivedDirectDebitMandateScheme",permalink:"/enums/separeceived-direct-debit-mandate-scheme"},next:{title:"ShareholderStatus",permalink:"/enums/shareholder-status"}},o={},l=()=>{const e={span:"span",...(0,c.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,c.a)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,c.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Values",id:"values",level:3},{value:"<code>SEPAReceivedDirectDebitMandateSequence.<b>OneOff</b></code>",id:"separeceiveddirectdebitmandatesequenceoneoff",level:4},{value:"<code>SEPAReceivedDirectDebitMandateSequence.<b>Recurrent</b></code>",id:"separeceiveddirectdebitmandatesequencerecurrent",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const r={details:"details",summary:"summary",...(0,c.a)()},[s,o]=(0,d.useState)(a);return(0,i.jsxs)(r.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})};function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"SEPA received direct debit mandate sequence"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"enum SEPAReceivedDirectDebitMandateSequence {\n  OneOff\n  Recurrent\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,i.jsx)(t.h4,{id:"separeceiveddirectdebitmandatesequenceoneoff",children:(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAReceivedDirectDebitMandateSequence.",(0,i.jsx)("b",{children:"OneOff"})]})})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"When the authorisation is given once by the SEPA Debtor to collect only one single SEPA direct debit"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"separeceiveddirectdebitmandatesequencerecurrent",children:(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAReceivedDirectDebitMandateSequence.",(0,i.jsx)("b",{children:"Recurrent"})]})})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"When the authorisation by the Debtor can be used for regular SEPA direct debits initiated by the Creditor"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/inputs/add-received-sepa-direct-debit-b2-b-mandate-input",children:(0,i.jsx)(t.code,{children:"AddReceivedSepaDirectDebitB2bMandateInput"})}),"  ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/objects/separeceived-direct-debit-mandate",children:(0,i.jsx)(t.code,{children:"SEPAReceivedDirectDebitMandate"})}),"  ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(67294);const c={},d=i.createContext(c);function a(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);