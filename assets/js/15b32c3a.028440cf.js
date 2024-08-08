"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[40069],{62399:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>x});var a=t(74848),r=t(28453),s=t(96540);const o={id:"international-credit-transfer-quote",title:"InternationalCreditTransferQuote"},d=void 0,i={id:"objects/international-credit-transfer-quote",title:"InternationalCreditTransferQuote",description:"International Quote",source:"@site/docs/objects/international-credit-transfer-quote.mdx",sourceDirName:"objects",slug:"/objects/international-credit-transfer-quote",permalink:"/objects/international-credit-transfer-quote",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/international-credit-transfer-quote.mdx",tags:[],version:"current",frontMatter:{id:"international-credit-transfer-quote",title:"InternationalCreditTransferQuote"},sidebar:"schemaSidebar",previous:{title:"InternationalCreditTransferOutDebtor",permalink:"/objects/international-credit-transfer-out-debtor"},next:{title:"InternationalCreditTransferTransaction",permalink:"/objects/international-credit-transfer-transaction"}},c={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:n,children:t,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,r.R)()},[i,c]=(0,s.useState)(o);return(0,a.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>InternationalCreditTransferQuote.<b>exchangeRate</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransferquoteexchangeratestring--",level:4},{value:'<code>InternationalCreditTransferQuote.<b>sourceAmount</b></code><Bullet></Bullet><code>Amount!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransferquotesourceamountamount--",level:4},{value:'<code>InternationalCreditTransferQuote.<b>targetAmount</b></code><Bullet></Bullet><code>Amount!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransferquotetargetamountamount--",level:4},{value:'<code>InternationalCreditTransferQuote.<b>feesAmount</b></code><Bullet></Bullet><code>Amount!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransferquotefeesamountamount--",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function g(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"International Quote"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type InternationalCreditTransferQuote {\n  exchangeRate: String!\n  sourceAmount: Amount!\n  targetAmount: Amount!\n  feesAmount: Amount!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"internationalcredittransferquoteexchangeratestring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferQuote.",(0,a.jsx)("b",{children:"exchangeRate"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Rate of the quote"}),"\n",(0,a.jsxs)(n.h4,{id:"internationalcredittransferquotesourceamountamount--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferQuote.",(0,a.jsx)("b",{children:"sourceAmount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/amount",children:(0,a.jsx)(n.code,{children:"Amount!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.p,{children:"Source amount of the quote"}),"\n",(0,a.jsxs)(n.h4,{id:"internationalcredittransferquotetargetamountamount--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferQuote.",(0,a.jsx)("b",{children:"targetAmount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/amount",children:(0,a.jsx)(n.code,{children:"Amount!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.p,{children:"target amount of the quote"}),"\n",(0,a.jsxs)(n.h4,{id:"internationalcredittransferquotefeesamountamount--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferQuote.",(0,a.jsx)("b",{children:"feesAmount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/amount",children:(0,a.jsx)(n.code,{children:"Amount!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.p,{children:"Fees"}),"\n",(0,a.jsx)(n.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/queries/international-credit-transfer-quote",children:(0,a.jsx)(n.code,{children:"internationalCreditTransferQuote"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/objects/initiate-international-credit-transfer-response-success-payload",children:(0,a.jsx)(n.code,{children:"InitiateInternationalCreditTransferResponseSuccessPayload"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var a=t(96540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);