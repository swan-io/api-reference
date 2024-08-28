"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[77925],{42814:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>g});var t=r(74848),a=r(28453),c=r(96540);const s={id:"international-credit-transfer-currency-exchange",title:"InternationalCreditTransferCurrencyExchange"},o=void 0,i={id:"objects/international-credit-transfer-currency-exchange",title:"InternationalCreditTransferCurrencyExchange",description:"International Currency Exchange / Quote",source:"@site/docs/objects/international-credit-transfer-currency-exchange.mdx",sourceDirName:"objects",slug:"/objects/international-credit-transfer-currency-exchange",permalink:"/objects/international-credit-transfer-currency-exchange",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/international-credit-transfer-currency-exchange.mdx",tags:[],version:"current",frontMatter:{id:"international-credit-transfer-currency-exchange",title:"InternationalCreditTransferCurrencyExchange"},sidebar:"schemaSidebar",previous:{title:"InternationalBeneficiaryDynamicForms",permalink:"/objects/international-beneficiary-dynamic-forms"},next:{title:"InternationalCreditTransferDetails",permalink:"/objects/international-credit-transfer-details"}},d={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:n,children:r,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[i,d]=(0,c.useState)(s);return(0,t.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&r]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InternationalCreditTransferCurrencyExchange.<b>exchangeRate</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransfercurrencyexchangeexchangeratestring--",level:4},{value:'<code>InternationalCreditTransferCurrencyExchange.<b>feesAmount</b></code><Bullet></Bullet><code>Amount</code> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransfercurrencyexchangefeesamountamount-",level:4},{value:'<code>InternationalCreditTransferCurrencyExchange.<b>sourceAmount</b></code><Bullet></Bullet><code>Amount</code> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransfercurrencyexchangesourceamountamount-",level:4},{value:'<code>InternationalCreditTransferCurrencyExchange.<b>targetAmount</b></code><Bullet></Bullet><code>Amount</code> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransfercurrencyexchangetargetamountamount-",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"International Currency Exchange / Quote"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type InternationalCreditTransferCurrencyExchange {\n  exchangeRate: String!\n  feesAmount: Amount\n  sourceAmount: Amount\n  targetAmount: Amount\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"internationalcredittransfercurrencyexchangeexchangeratestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferCurrencyExchange.",(0,t.jsx)("b",{children:"exchangeRate"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"Rate of the quote"}),"\n",(0,t.jsxs)(n.h4,{id:"internationalcredittransfercurrencyexchangefeesamountamount-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferCurrencyExchange.",(0,t.jsx)("b",{children:"feesAmount"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/amount",children:(0,t.jsx)(n.code,{children:"Amount"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"Fees"}),"\n",(0,t.jsxs)(n.h4,{id:"internationalcredittransfercurrencyexchangesourceamountamount-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferCurrencyExchange.",(0,t.jsx)("b",{children:"sourceAmount"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/amount",children:(0,t.jsx)(n.code,{children:"Amount"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"Source amount of the quote"}),"\n",(0,t.jsxs)(n.h4,{id:"internationalcredittransfercurrencyexchangetargetamountamount-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferCurrencyExchange.",(0,t.jsx)("b",{children:"targetAmount"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/amount",children:(0,t.jsx)(n.code,{children:"Amount"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"target amount of the quote"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/objects/international-credit-transfer-transaction",children:(0,t.jsx)(n.code,{children:"InternationalCreditTransferTransaction"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(96540);const a={},c=t.createContext(a);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);