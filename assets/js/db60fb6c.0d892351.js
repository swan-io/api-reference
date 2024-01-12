"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[56298],{55481:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(85893),i=n(11151),d=n(67294);const s={id:"sepa-direct-debit-b2-bpayment-method-input",title:"SepaDirectDebitB2BPaymentMethodInput"},r=void 0,o={id:"inputs/sepa-direct-debit-b2-bpayment-method-input",title:"SepaDirectDebitB2BPaymentMethodInput",description:"No description",source:"@site/docs/inputs/sepa-direct-debit-b2-bpayment-method-input.mdx",sourceDirName:"inputs",slug:"/inputs/sepa-direct-debit-b2-bpayment-method-input",permalink:"/inputs/sepa-direct-debit-b2-bpayment-method-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/sepa-direct-debit-b2-bpayment-method-input.mdx",tags:[],version:"current",frontMatter:{id:"sepa-direct-debit-b2-bpayment-method-input",title:"SepaDirectDebitB2BPaymentMethodInput"},sidebar:"schemaSidebar",previous:{title:"SepaBeneficiaryInput",permalink:"/inputs/sepa-beneficiary-input"},next:{title:"SepaDirectDebitCorePaymentMethodInput",permalink:"/inputs/sepa-direct-debit-core-payment-method-input"}},c={},l=()=>{const e={span:"span",...(0,i.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,i.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,i.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>SepaDirectDebitB2BPaymentMethodInput.<b>activate</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebitb2bpaymentmethodinputactivateboolean-",level:4},{value:'<code>SepaDirectDebitB2BPaymentMethodInput.<b>useSwanSepaCreditorIdentifier</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebitb2bpaymentmethodinputuseswansepacreditoridentifierboolean--",level:4},{value:'<code>SepaDirectDebitB2BPaymentMethodInput.<b>sepaCreditorIdentifier</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebitb2bpaymentmethodinputsepacreditoridentifierstring-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,i.a)()},[o,c]=(0,d.useState)(s);return(0,a.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})};function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input SepaDirectDebitB2BPaymentMethodInput {\n  activate: Boolean\n  useSwanSepaCreditorIdentifier: Boolean!\n  sepaCreditorIdentifier: String\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebitb2bpaymentmethodinputactivateboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SepaDirectDebitB2BPaymentMethodInput.",(0,a.jsx)("b",{children:"activate"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["If ",(0,a.jsx)(t.code,{children:"true"}),", the Payment Method will be Enabled"]}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebitb2bpaymentmethodinputuseswansepacreditoridentifierboolean--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SepaDirectDebitB2BPaymentMethodInput.",(0,a.jsx)("b",{children:"useSwanSepaCreditorIdentifier"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["If ",(0,a.jsx)(t.code,{children:"true"}),", the transaction will be created with the Swan Creditor Identifier"]}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebitb2bpaymentmethodinputsepacreditoridentifierstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SepaDirectDebitB2BPaymentMethodInput.",(0,a.jsx)("b",{children:"sepaCreditorIdentifier"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Your own SCI - Mandatory if the useSwanCreditorIdentifier is set to false, otherwise Swan does not take this input into account (even if not empty)"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/inputs/request-merchant-payment-methods-input",children:(0,a.jsx)(t.code,{children:"RequestMerchantPaymentMethodsInput"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const i={},d=a.createContext(i);function s(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);