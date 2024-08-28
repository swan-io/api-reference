"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[14438],{49912:(e,n,c)=>{c.r(n),c.d(n,{Badge:()=>y,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>r,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=c(74848),i=c(28453),t=c(96540);const s={id:"beneficiary-mismatch",title:"BeneficiaryMismatch"},r=void 0,d={id:"objects/beneficiary-mismatch",title:"BeneficiaryMismatch",description:"Beneficiary name and IBAN did not match",source:"@site/docs/objects/beneficiary-mismatch.mdx",sourceDirName:"objects",slug:"/objects/beneficiary-mismatch",permalink:"/objects/beneficiary-mismatch",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/beneficiary-mismatch.mdx",tags:[],version:"current",frontMatter:{id:"beneficiary-mismatch",title:"BeneficiaryMismatch"},sidebar:"schemaSidebar",previous:{title:"BeneficiaryMatch",permalink:"/objects/beneficiary-match"},next:{title:"BeneficiaryTypo",permalink:"/objects/beneficiary-typo"}},o={},l=()=>{const e={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,i.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},y=e=>{const n={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:c,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,i.R)()},[d,o]=(0,t.useState)(s);return(0,a.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&c]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>BeneficiaryMismatch.<b>accountStatus</b></code><Bullet></Bullet><code>BeneficiaryAccountStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"beneficiarymismatchaccountstatusbeneficiaryaccountstatus--",level:4},{value:'<code>BeneficiaryMismatch.<b>accountHolderType</b></code><Bullet></Bullet><code>BeneficiaryAccountHolderType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"beneficiarymismatchaccountholdertypebeneficiaryaccountholdertype--",level:4},{value:'<code>BeneficiaryMismatch.<b>nameSuggestion</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"beneficiarymismatchnamesuggestionstring-",level:4},{value:'<code>BeneficiaryMismatch.<b>accountHolderResidencyCity</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"beneficiarymismatchaccountholderresidencycitystring-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function f(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Beneficiary name and IBAN did not match"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type BeneficiaryMismatch {\n  accountStatus: BeneficiaryAccountStatus!\n  accountHolderType: BeneficiaryAccountHolderType!\n  nameSuggestion: String\n  accountHolderResidencyCity: String\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"beneficiarymismatchaccountstatusbeneficiaryaccountstatus--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BeneficiaryMismatch.",(0,a.jsx)("b",{children:"accountStatus"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/enums/beneficiary-account-status",children:(0,a.jsx)(n.code,{children:"BeneficiaryAccountStatus!"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.h4,{id:"beneficiarymismatchaccountholdertypebeneficiaryaccountholdertype--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BeneficiaryMismatch.",(0,a.jsx)("b",{children:"accountHolderType"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/enums/beneficiary-account-holder-type",children:(0,a.jsx)(n.code,{children:"BeneficiaryAccountHolderType!"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.h4,{id:"beneficiarymismatchnamesuggestionstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BeneficiaryMismatch.",(0,a.jsx)("b",{children:"nameSuggestion"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Only returned if accountHolderType is Company and if the information is provided by the beneficiary's bank"}),"\n",(0,a.jsxs)(n.h4,{id:"beneficiarymismatchaccountholderresidencycitystring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BeneficiaryMismatch.",(0,a.jsx)("b",{children:"accountHolderResidencyCity"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Only returned if accountHolderType is Company and if the information is provided by the beneficiary's bank"}),"\n",(0,a.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/unions/beneficiary-verification-result",children:(0,a.jsx)(n.code,{children:"BeneficiaryVerificationResult"})}),"  ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"union"})]})]})}function b(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>s,x:()=>r});var a=c(96540);const i={},t=a.createContext(i);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);