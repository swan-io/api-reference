"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36676],{70224:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>x,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>j,assets:()=>i,contentTitle:()=>d,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>b});var c=a(85893),n=a(11151),t=a(67294);const r={id:"amount",title:"Amount"},d=void 0,o={id:"objects/amount",title:"Amount",description:"Amount with its currency",source:"@site/docs/objects/amount.mdx",sourceDirName:"objects",slug:"/objects/amount",permalink:"/objects/amount",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/amount.mdx",tags:[],version:"current",frontMatter:{id:"amount",title:"Amount"},sidebar:"schemaSidebar",previous:{title:"AlreadyValidPhysicalCardRejection",permalink:"/objects/already-valid-physical-card-rejection"},next:{title:"ApplePayNotAllowedForProjectRejection",permalink:"/objects/apple-pay-not-allowed-for-project-rejection"}},i={},l=()=>{const e={span:"span",...(0,n.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},j=e=>{const s={a:"a",...(0,n.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,n.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Amount.<b>currency</b></code><Bullet></Bullet><code>Currency!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"amountcurrencycurrency--",level:4},{value:'<code>Amount.<b>value</b></code><Bullet></Bullet><code>AmountValue!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"amountvalueamountvalue--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:s,children:a,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,n.a)()},[o,i]=(0,t.useState)(r);return(0,c.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&a]})};function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"Amount with its currency"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-graphql",children:"type Amount {\n  currency: Currency!\n  value: AmountValue!\n}\n"})}),"\n",(0,c.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(s.h4,{id:"amountcurrencycurrency--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Amount.",(0,c.jsx)("b",{children:"currency"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/scalars/currency",children:(0,c.jsx)(s.code,{children:"Currency!"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"currency"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"amountvalueamountvalue--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Amount.",(0,c.jsx)("b",{children:"value"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/scalars/amount-value",children:(0,c.jsx)(s.code,{children:"AmountValue!"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"value of the amount"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"/objects/account-balances",children:(0,c.jsx)(s.code,{children:"AccountBalances"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/basic-physical-card-info",children:(0,c.jsx)(s.code,{children:"BasicPhysicalCardInfo"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/capital-deposit-case",children:(0,c.jsx)(s.code,{children:"CapitalDepositCase"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/card-transaction",children:(0,c.jsx)(s.code,{children:"CardTransaction"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/check-transaction",children:(0,c.jsx)(s.code,{children:"CheckTransaction"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/external-account-balance",children:(0,c.jsx)(s.code,{children:"ExternalAccountBalance"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/fee-transaction",children:(0,c.jsx)(s.code,{children:"FeeTransaction"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/funding-limit",children:(0,c.jsx)(s.code,{children:"FundingLimit"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/funding-limit-amount",children:(0,c.jsx)(s.code,{children:"FundingLimitAmount"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/instant-funding-limit",children:(0,c.jsx)(s.code,{children:"InstantFundingLimit"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/internal-credit-transfer",children:(0,c.jsx)(s.code,{children:"InternalCreditTransfer"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/internal-direct-debit-transaction",children:(0,c.jsx)(s.code,{children:"InternalDirectDebitTransaction"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/international-credit-transfer-currency-exchange",children:(0,c.jsx)(s.code,{children:"InternationalCreditTransferCurrencyExchange"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/international-credit-transfer-quote",children:(0,c.jsx)(s.code,{children:"InternationalCreditTransferQuote"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/international-credit-transfer-transaction",children:(0,c.jsx)(s.code,{children:"InternationalCreditTransferTransaction"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/invoice",children:(0,c.jsx)(s.code,{children:"Invoice"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/merchant-payment-link",children:(0,c.jsx)(s.code,{children:"MerchantPaymentLink"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/merchant-profile",children:(0,c.jsx)(s.code,{children:"MerchantProfile"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/physical-card",children:(0,c.jsx)(s.code,{children:"PhysicalCard"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/request-merchant-profile-update",children:(0,c.jsx)(s.code,{children:"RequestMerchantProfileUpdate"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/sepacredit-transfer-transaction",children:(0,c.jsx)(s.code,{children:"SEPACreditTransferTransaction"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/sepadirect-debit-transaction",children:(0,c.jsx)(s.code,{children:"SEPADirectDebitTransaction"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/shareholder",children:(0,c.jsx)(s.code,{children:"Shareholder"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/spending",children:(0,c.jsx)(s.code,{children:"Spending"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/spending-limit",children:(0,c.jsx)(s.code,{children:"SpendingLimit"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/standing-order",children:(0,c.jsx)(s.code,{children:"StandingOrder"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/objects/statement",children:(0,c.jsx)(s.code,{children:"Statement"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/interfaces/transaction",children:(0,c.jsx)(s.code,{children:"Transaction"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"interface"})]})]})}function g(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>d,a:()=>r});var c=a(67294);const n={},t=c.createContext(n);function r(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);