"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[63044],{26938:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>h,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>n,metadata:()=>a,toc:()=>x});var i=t(74848),d=t(28453),s=t(96540);const n={id:"sepadirect-debit-creditor",title:"SEPADirectDebitCreditor"},c=void 0,a={id:"interfaces/sepadirect-debit-creditor",title:"SEPADirectDebitCreditor",description:"Sepa Direct Debit Creditor",source:"@site/docs/interfaces/sepadirect-debit-creditor.mdx",sourceDirName:"interfaces",slug:"/interfaces/sepadirect-debit-creditor",permalink:"/interfaces/sepadirect-debit-creditor",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/sepadirect-debit-creditor.mdx",tags:[],version:"current",frontMatter:{id:"sepadirect-debit-creditor",title:"SEPADirectDebitCreditor"},sidebar:"schemaSidebar",previous:{title:"SEPACreditTransferDebtor",permalink:"/interfaces/sepacredit-transfer-debtor"},next:{title:"SEPADirectDebitDebtor",permalink:"/interfaces/sepadirect-debit-debtor"}},l={},o=()=>{const e={span:"span",...(0,d.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const r={a:"a",...(0,d.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const r={span:"span",...(0,d.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:r,children:t,startOpen:n=!1})=>{const c={details:"details",summary:"summary",...(0,d.R)()},[a,l]=(0,s.useState)(n);return(0,i.jsxs)(c.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:a?e:r}),a&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>SEPADirectDebitCreditor.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebitcreditornamestring--",level:4},{value:'<code>SEPADirectDebitCreditor.<b>maskedIBAN</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebitcreditormaskedibanstring--",level:4},{value:'<code>SEPADirectDebitCreditor.<b>IBAN</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebitcreditoribanstring-",level:4},{value:'<code>SEPADirectDebitCreditor.<b>BIC</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebitcreditorbicstring-",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function p(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Sepa Direct Debit Creditor"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-graphql",children:"interface SEPADirectDebitCreditor {\n  name: String!\n  maskedIBAN: String!\n  IBAN: String\n  BIC: String\n}\n"})}),"\n",(0,i.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(r.h4,{id:"sepadirectdebitcreditornamestring--",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitCreditor.",(0,i.jsx)("b",{children:"name"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(r.a,{href:"/scalars/string",children:(0,i.jsx)(r.code,{children:"String!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(r.p,{children:"full name of the creditor"}),"\n",(0,i.jsxs)(r.h4,{id:"sepadirectdebitcreditormaskedibanstring--",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitCreditor.",(0,i.jsx)("b",{children:"maskedIBAN"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(r.a,{href:"/scalars/string",children:(0,i.jsx)(r.code,{children:"String!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(r.p,{children:"maskedIBAN"}),"\n",(0,i.jsxs)(r.h4,{id:"sepadirectdebitcreditoribanstring-",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitCreditor.",(0,i.jsx)("b",{children:"IBAN"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(r.a,{href:"/scalars/string",children:(0,i.jsx)(r.code,{children:"String"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(r.p,{children:"IBAN"}),"\n",(0,i.jsxs)(r.h4,{id:"sepadirectdebitcreditorbicstring-",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitCreditor.",(0,i.jsx)("b",{children:"BIC"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(r.a,{href:"/scalars/string",children:(0,i.jsx)(r.code,{children:"String"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(r.p,{children:"BIC"}),"\n",(0,i.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/objects/sepadirect-debit-transaction",children:(0,i.jsx)(r.code,{children:"SEPADirectDebitTransaction"})}),"  ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(r.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/objects/sepadirect-debit-in-creditor",children:(0,i.jsx)(r.code,{children:"SEPADirectDebitInCreditor"})}),"  ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,i.jsx)(o,{}),(0,i.jsx)(r.a,{href:"/objects/sepadirect-debit-out-creditor",children:(0,i.jsx)(r.code,{children:"SEPADirectDebitOutCreditor"})}),"  ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>c});var i=t(96540);const d={},s=i.createContext(d);function n(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);