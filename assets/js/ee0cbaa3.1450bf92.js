"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50373],{29357:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>b,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var t=a(74848),s=a(28453),c=a(96540);const i={id:"ibannot-reachable-rejection",title:"IBANNotReachableRejection"},r=void 0,d={id:"objects/ibannot-reachable-rejection",title:"IBANNotReachableRejection",description:"Rejection returned when the IBAN is not reachable",source:"@site/docs/objects/ibannot-reachable-rejection.mdx",sourceDirName:"objects",slug:"/objects/ibannot-reachable-rejection",permalink:"/objects/ibannot-reachable-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/ibannot-reachable-rejection.mdx",tags:[],version:"current",frontMatter:{id:"ibannot-reachable-rejection",title:"IBANNotReachableRejection"},sidebar:"schemaSidebar",previous:{title:"IbanValidationRejection",permalink:"/objects/iban-validation-rejection"},next:{title:"IBANNotValidRejection",permalink:"/objects/ibannot-valid-rejection"}},o={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const n={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},j=({dataOpen:e,dataClose:n,children:a,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,s.R)()},[d,o]=(0,c.useState)(i);return(0,t.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&a]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>IBANNotReachableRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ibannotreachablerejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Rejection returned when the IBAN is not reachable"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type IBANNotReachableRejection implements Rejection {\n  message: String!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"ibannotreachablerejectionmessagestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["IBANNotReachableRejection.",(0,t.jsx)("b",{children:"message"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"rejection-",children:[(0,t.jsx)(n.a,{href:"/interfaces/rejection",children:(0,t.jsx)(n.code,{children:"Rejection"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/unions/add-direct-debit-funding-source-payload",children:(0,t.jsx)(n.code,{children:"AddDirectDebitFundingSourcePayload"})}),"  ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/add-internal-direct-debit-payment-mandate-payload",children:(0,t.jsx)(n.code,{children:"AddInternalDirectDebitPaymentMandatePayload"})}),"  ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/unions/add-sepa-direct-debit-payment-mandate-payload",children:(0,t.jsx)(n.code,{children:"AddSepaDirectDebitPaymentMandatePayload"})}),"  ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var t=a(96540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);