"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[6882],{76446:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>b,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var c=a(85893),t=a(11151),s=a(67294);const i={id:"swan-account-beneficiary-input",title:"SwanAccountBeneficiaryInput"},r=void 0,o={id:"inputs/swan-account-beneficiary-input",title:"SwanAccountBeneficiaryInput",description:"Swan account beneficiary",source:"@site/docs/inputs/swan-account-beneficiary-input.mdx",sourceDirName:"inputs",slug:"/inputs/swan-account-beneficiary-input",permalink:"/inputs/swan-account-beneficiary-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/swan-account-beneficiary-input.mdx",tags:[],version:"current",frontMatter:{id:"swan-account-beneficiary-input",title:"SwanAccountBeneficiaryInput"},sidebar:"schemaSidebar",previous:{title:"SuspendReceivedDirectDebitMandateInput",permalink:"/inputs/suspend-received-direct-debit-mandate-input"},next:{title:"TransactionsFiltersInput",permalink:"/inputs/transactions-filters-input"}},d={},l=()=>{const e={span:"span",...(0,t.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,t.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const n={span:"span",...(0,t.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>SwanAccountBeneficiaryInput.<b>accountNumber</b></code><Bullet></Bullet><code>AccountNumber!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"swanaccountbeneficiaryinputaccountnumberaccountnumber--",level:4},{value:'<code>SwanAccountBeneficiaryInput.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"swanaccountbeneficiaryinputnamestring--",level:4},{value:'<code>SwanAccountBeneficiaryInput.<b>save</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"swanaccountbeneficiaryinputsaveboolean--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:n,children:a,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,t.a)()},[o,d]=(0,s.useState)(i);return(0,c.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&a]})};function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Swan account beneficiary"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"input SwanAccountBeneficiaryInput {\n  accountNumber: AccountNumber!\n  name: String!\n  save: Boolean!\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"swanaccountbeneficiaryinputaccountnumberaccountnumber--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SwanAccountBeneficiaryInput.",(0,c.jsx)("b",{children:"accountNumber"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/account-number",children:(0,c.jsx)(n.code,{children:"AccountNumber!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"account number to be credited"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"swanaccountbeneficiaryinputnamestring--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SwanAccountBeneficiaryInput.",(0,c.jsx)("b",{children:"name"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"full name of the beneficiary  (max 70 characters)"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"swanaccountbeneficiaryinputsaveboolean--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SwanAccountBeneficiaryInput.",(0,c.jsx)("b",{children:"save"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/boolean",children:(0,c.jsx)(n.code,{children:"Boolean!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"true"})," if this new beneficiary will be saved to the beneficiary list of the debited account."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/inputs/credit-transfer-input",children:(0,c.jsx)(n.code,{children:"CreditTransferInput"})}),"  ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(f,{...e})}):f(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>i});var c=a(67294);const t={},s=c.createContext(t);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);