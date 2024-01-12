"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[88691],{71976:(e,t,c)=>{c.r(t),c.d(t,{Badge:()=>b,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>o,toc:()=>f});var i=c(85893),n=c(11151),a=c(67294);const d={id:"direct-debit-account-verification",title:"DirectDebitAccountVerification"},s=void 0,o={id:"objects/direct-debit-account-verification",title:"DirectDebitAccountVerification",description:"Direct Debit Account Verification",source:"@site/docs/objects/direct-debit-account-verification.mdx",sourceDirName:"objects",slug:"/objects/direct-debit-account-verification",permalink:"/objects/direct-debit-account-verification",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/direct-debit-account-verification.mdx",tags:[],version:"current",frontMatter:{id:"direct-debit-account-verification",title:"DirectDebitAccountVerification"},sidebar:"schemaSidebar",previous:{title:"DigitalCardSuspendedStatusInfo",permalink:"/objects/digital-card-suspended-status-info"},next:{title:"DirectDebitFundingSource",permalink:"/objects/direct-debit-funding-source"}},r={},l=()=>{const e={span:"span",...(0,n.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,n.a)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const t={span:"span",...(0,n.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>DirectDebitAccountVerification.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"directdebitaccountverificationcreatedatdatetime--",level:4},{value:'<code>DirectDebitAccountVerification.<b>iban</b></code><Bullet></Bullet><code>IBAN!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"directdebitaccountverificationibaniban--",level:4},{value:'<code>DirectDebitAccountVerification.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"directdebitaccountverificationidid--",level:4},{value:'<code>DirectDebitAccountVerification.<b>statusInfo</b></code><Bullet></Bullet><code>AccountVerificationStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"directdebitaccountverificationstatusinfoaccountverificationstatusinfo--",level:4},{value:'<code>DirectDebitAccountVerification.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"directdebitaccountverificationupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountVerification</code> <Badge class="badge badge--secondary"></Badge>',id:"accountverification-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:c,startOpen:d=!1})=>{const s={details:"details",summary:"summary",...(0,n.a)()},[o,r]=(0,a.useState)(d);return(0,i.jsxs)(s.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(s.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&c]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Direct Debit Account Verification"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type DirectDebitAccountVerification implements AccountVerification {\n  createdAt: DateTime!\n  iban: IBAN!\n  id: ID!\n  statusInfo: AccountVerificationStatusInfo!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"directdebitaccountverificationcreatedatdatetime--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["DirectDebitAccountVerification.",(0,i.jsx)("b",{children:"createdAt"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/scalars/date-time",children:(0,i.jsx)(t.code,{children:"DateTime!"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Creation date of the account verification"}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"directdebitaccountverificationibaniban--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["DirectDebitAccountVerification.",(0,i.jsx)("b",{children:"iban"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/scalars/iban",children:(0,i.jsx)(t.code,{children:"IBAN!"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"IBAN of the account to cross check with account holder information"}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"directdebitaccountverificationidid--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["DirectDebitAccountVerification.",(0,i.jsx)("b",{children:"id"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/scalars/id",children:(0,i.jsx)(t.code,{children:"ID!"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Unique identifier of the Account Verification"}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"directdebitaccountverificationstatusinfoaccountverificationstatusinfo--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["DirectDebitAccountVerification.",(0,i.jsx)("b",{children:"statusInfo"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/interfaces/account-verification-status-info",children:(0,i.jsx)(t.code,{children:"AccountVerificationStatusInfo!"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Account Verification Status Information"}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"directdebitaccountverificationupdatedatdatetime--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["DirectDebitAccountVerification.",(0,i.jsx)("b",{children:"updatedAt"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/scalars/date-time",children:(0,i.jsx)(t.code,{children:"DateTime!"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Last update date of the account verification"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(t.h4,{id:"accountverification-",children:[(0,i.jsx)(t.a,{href:"/interfaces/account-verification",children:(0,i.jsx)(t.code,{children:"AccountVerification"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Account Verification"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/objects/direct-debit-funding-source",children:(0,i.jsx)(t.code,{children:"DirectDebitFundingSource"})}),"  ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,t,c)=>{c.d(t,{Z:()=>s,a:()=>d});var i=c(67294);const n={},a=i.createContext(n);function d(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);