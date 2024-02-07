"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[74670],{98561:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>b,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=a(85893),t=a(11151),s=a(67294);const l={id:"iban-validation",title:"ibanValidation"},o=void 0,r={id:"queries/iban-validation",title:"ibanValidation",description:"Allows to check iban validation. It also returns its bank and reachability information",source:"@site/docs/queries/iban-validation.mdx",sourceDirName:"queries",slug:"/queries/iban-validation",permalink:"/queries/iban-validation",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/iban-validation.mdx",tags:[],version:"current",frontMatter:{id:"iban-validation",title:"ibanValidation"},sidebar:"schemaSidebar",previous:{title:"fundingSource",permalink:"/queries/funding-source"},next:{title:"internationalBeneficiaryDynamicForms",permalink:"/queries/international-beneficiary-dynamic-forms"}},d={},c=()=>{const e={span:"span",...(0,t.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,t.a)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const n={span:"span",...(0,t.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>ibanValidation.<b>input</b></code><Bullet></Bullet><code>IbanValidationInput</code> <Badge class="badge badge--secondary"></Badge>',id:"ibanvalidationinputibanvalidationinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>IbanValidationResult</code> <Badge class="badge badge--secondary"></Badge>',id:"ibanvalidationresult-",level:4}],h=({dataOpen:e,dataClose:n,children:a,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,t.a)()},[r,d]=(0,s.useState)(l);return(0,i.jsxs)(o.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&a]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Allows to check iban validation. It also returns its bank and reachability information"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"ibanValidation(\n  input: IbanValidationInput\n): IbanValidationResult\n"})}),"\n",(0,i.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(n.h4,{id:"ibanvalidationinputibanvalidationinput-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ibanValidation.",(0,i.jsx)("b",{children:"input"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(n.a,{href:"/inputs/iban-validation-input",children:(0,i.jsx)(n.code,{children:"IbanValidationInput"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,i.jsxs)(n.h4,{id:"ibanvalidationresult-",children:[(0,i.jsx)(n.a,{href:"/unions/iban-validation-result",children:(0,i.jsx)(n.code,{children:"IbanValidationResult"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"IbanValidationResult"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>l});var i=a(67294);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);