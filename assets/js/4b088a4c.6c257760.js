"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73847],{80967:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(74848),s=t(28453),a=t(96540);const i={id:"grant-consent-with-server-signature-input",title:"GrantConsentWithServerSignatureInput"},c=void 0,o={id:"inputs/grant-consent-with-server-signature-input",title:"GrantConsentWithServerSignatureInput",description:"Input of the grantConsentWithServerSignature mutation",source:"@site/docs/inputs/grant-consent-with-server-signature-input.mdx",sourceDirName:"inputs",slug:"/inputs/grant-consent-with-server-signature-input",permalink:"/inputs/grant-consent-with-server-signature-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/grant-consent-with-server-signature-input.mdx",tags:[],version:"current",frontMatter:{id:"grant-consent-with-server-signature-input",title:"GrantConsentWithServerSignatureInput"},sidebar:"schemaSidebar",previous:{title:"GenerateTransactionStatementInput",permalink:"/inputs/generate-transaction-statement-input"},next:{title:"IbanValidationInput",permalink:"/inputs/iban-validation-input"}},d={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[o,d]=(0,a.useState)(i);return(0,r.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>GrantConsentWithServerSignatureInput.<b>consentId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"grantconsentwithserversignatureinputconsentidid--",level:4},{value:'<code>GrantConsentWithServerSignatureInput.<b>signature</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"grantconsentwithserversignatureinputsignaturestring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Input of the ",(0,r.jsx)(n.code,{children:"grantConsentWithServerSignature"})," mutation"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input GrantConsentWithServerSignatureInput {\n  consentId: ID!\n  signature: String!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"grantconsentwithserversignatureinputconsentidid--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GrantConsentWithServerSignatureInput.",(0,r.jsx)("b",{children:"consentId"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/scalars/id",children:(0,r.jsx)(n.code,{children:"ID!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.p,{children:"ID of the consent to grant"}),"\n",(0,r.jsxs)(n.h4,{id:"grantconsentwithserversignatureinputsignaturestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GrantConsentWithServerSignatureInput.",(0,r.jsx)("b",{children:"signature"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.p,{children:"Consent challenge signed with server consent credentials"}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/mutations/grant-consent-with-server-signature",children:(0,r.jsx)(n.code,{children:"grantConsentWithServerSignature"})}),"  ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"mutation"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);