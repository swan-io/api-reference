"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[14848],{87515:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>b});var d=a(74848),s=a(28453),r=a(96540);const n={id:"sepa-direct-debit-payment-method-update-request",title:"SepaDirectDebitPaymentMethodUpdateRequest"},i=void 0,c={id:"objects/sepa-direct-debit-payment-method-update-request",title:"SepaDirectDebitPaymentMethodUpdateRequest",description:"No description",source:"@site/docs/objects/sepa-direct-debit-payment-method-update-request.mdx",sourceDirName:"objects",slug:"/objects/sepa-direct-debit-payment-method-update-request",permalink:"/objects/sepa-direct-debit-payment-method-update-request",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/sepa-direct-debit-payment-method-update-request.mdx",tags:[],version:"current",frontMatter:{id:"sepa-direct-debit-payment-method-update-request",title:"SepaDirectDebitPaymentMethodUpdateRequest"},sidebar:"schemaSidebar",previous:{title:"SepaDirectDebitCoreMerchantPaymentMethod",permalink:"/objects/sepa-direct-debit-core-merchant-payment-method"},next:{title:"SEPABeneficiary",permalink:"/objects/sepabeneficiary"}},o={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,s.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:a,startOpen:n=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[c,o]=(0,r.useState)(n);return(0,d.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>SepaDirectDebitPaymentMethodUpdateRequest.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebitpaymentmethodupdaterequestidid--",level:4},{value:'<code>SepaDirectDebitPaymentMethodUpdateRequest.<b>useSwanSepaCreditorIdentifier</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebitpaymentmethodupdaterequestuseswansepacreditoridentifierboolean--",level:4},{value:'<code>SepaDirectDebitPaymentMethodUpdateRequest.<b>sepaCreditorIdentifier</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebitpaymentmethodupdaterequestsepacreditoridentifierstring-",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:"No description"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-graphql",children:"type SepaDirectDebitPaymentMethodUpdateRequest {\n  id: ID!\n  useSwanSepaCreditorIdentifier: Boolean!\n  sepaCreditorIdentifier: String\n}\n"})}),"\n",(0,d.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(t.h4,{id:"sepadirectdebitpaymentmethodupdaterequestidid--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SepaDirectDebitPaymentMethodUpdateRequest.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(t.a,{href:"/scalars/id",children:(0,d.jsx)(t.code,{children:"ID!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(t.h4,{id:"sepadirectdebitpaymentmethodupdaterequestuseswansepacreditoridentifierboolean--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SepaDirectDebitPaymentMethodUpdateRequest.",(0,d.jsx)("b",{children:"useSwanSepaCreditorIdentifier"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(t.a,{href:"/scalars/boolean",children:(0,d.jsx)(t.code,{children:"Boolean!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(t.p,{children:["If ",(0,d.jsx)(t.code,{children:"true"}),", the transaction will be created with the Swan Creditor Identifier"]}),"\n",(0,d.jsxs)(t.h4,{id:"sepadirectdebitpaymentmethodupdaterequestsepacreditoridentifierstring-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SepaDirectDebitPaymentMethodUpdateRequest.",(0,d.jsx)("b",{children:"sepaCreditorIdentifier"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(t.a,{href:"/scalars/string",children:(0,d.jsx)(t.code,{children:"String"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Your own SCI - Mandatory if the useSwanCreditorIdentifier is set to false"}),"\n",(0,d.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/objects/sepa-direct-debit-b2-bmerchant-payment-method",children:(0,d.jsx)(t.code,{children:"SepaDirectDebitB2BMerchantPaymentMethod"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(t.a,{href:"/objects/sepa-direct-debit-core-merchant-payment-method",children:(0,d.jsx)(t.code,{children:"SepaDirectDebitCoreMerchantPaymentMethod"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>i});var d=a(96540);const s={},r=d.createContext(s);function n(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);