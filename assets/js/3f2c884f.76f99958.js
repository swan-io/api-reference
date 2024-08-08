"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[69899],{56426:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>j,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var t=a(74848),d=a(28453),s=a(96540);const o={id:"account-not-found-rejection",title:"AccountNotFoundRejection"},c=void 0,i={id:"objects/account-not-found-rejection",title:"AccountNotFoundRejection",description:"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists",source:"@site/docs/objects/account-not-found-rejection.mdx",sourceDirName:"objects",slug:"/objects/account-not-found-rejection",permalink:"/objects/account-not-found-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/account-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"account-not-found-rejection",title:"AccountNotFoundRejection"},sidebar:"schemaSidebar",previous:{title:"AccountNotEligibleRejection",permalink:"/objects/account-not-eligible-rejection"},next:{title:"AccountOpenedStatus",permalink:"/objects/account-opened-status"}},r={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,d.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const n={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:n,children:a,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,d.R)()},[i,r]=(0,s.useState)(o);return(0,t.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountNotFoundRejection.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountnotfoundrejectionidstring--",level:4},{value:'<code>AccountNotFoundRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountnotfoundrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function g(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type AccountNotFoundRejection implements Rejection {\n  id: String!\n  message: String!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"accountnotfoundrejectionidstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountNotFoundRejection.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.h4,{id:"accountnotfoundrejectionmessagestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountNotFoundRejection.",(0,t.jsx)("b",{children:"message"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"rejection-",children:[(0,t.jsx)(n.a,{href:"/interfaces/rejection",children:(0,t.jsx)(n.code,{children:"Rejection"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/unions/add-merchant-profile-payload",children:(0,t.jsx)(n.code,{children:"AddMerchantProfilePayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/add-received-sepa-direct-debit-b2-b-mandate-payload",children:(0,t.jsx)(n.code,{children:"AddReceivedSepaDirectDebitB2bMandatePayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/add-trusted-international-beneficiary-payload",children:(0,t.jsx)(n.code,{children:"AddTrustedInternationalBeneficiaryPayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/add-trusted-sepa-beneficiary-payload",children:(0,t.jsx)(n.code,{children:"AddTrustedSepaBeneficiaryPayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/add-virtual-iban-entry-payload",children:(0,t.jsx)(n.code,{children:"AddVirtualIbanEntryPayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/allow-sdd-payload",children:(0,t.jsx)(n.code,{children:"AllowSddPayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/cancel-virtual-iban-entry-payload",children:(0,t.jsx)(n.code,{children:"CancelVirtualIbanEntryPayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/close-account-payload",children:(0,t.jsx)(n.code,{children:"CloseAccountPayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/deny-sdd-payload",children:(0,t.jsx)(n.code,{children:"DenySddPayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/initiate-credit-transfers-payload",children:(0,t.jsx)(n.code,{children:"InitiateCreditTransfersPayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/initiate-international-credit-transfer-response-payload",children:(0,t.jsx)(n.code,{children:"InitiateInternationalCreditTransferResponsePayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/request-merchant-profile-update-payload",children:(0,t.jsx)(n.code,{children:"RequestMerchantProfileUpdatePayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/update-account-payload",children:(0,t.jsx)(n.code,{children:"UpdateAccountPayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/update-card-payload",children:(0,t.jsx)(n.code,{children:"UpdateCardPayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/update-received-sepa-direct-debit-b2-b-mandate-payload",children:(0,t.jsx)(n.code,{children:"UpdateReceivedSepaDirectDebitB2bMandatePayload"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"union"})]})]})}function b(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>c});var t=a(96540);const d={},s=t.createContext(d);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);