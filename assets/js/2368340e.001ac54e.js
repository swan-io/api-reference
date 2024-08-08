"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[56788],{8477:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>b});var r=o(74848),t=o(28453),a=o(96540);const c={id:"onboarding-account-holder-info",title:"OnboardingAccountHolderInfo"},d=void 0,s={id:"interfaces/onboarding-account-holder-info",title:"OnboardingAccountHolderInfo",description:"The onboarding could be for an Individual or a company",source:"@site/docs/interfaces/onboarding-account-holder-info.mdx",sourceDirName:"interfaces",slug:"/interfaces/onboarding-account-holder-info",permalink:"/interfaces/onboarding-account-holder-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/onboarding-account-holder-info.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-account-holder-info",title:"OnboardingAccountHolderInfo"},sidebar:"schemaSidebar",previous:{title:"MerchantProfileStatusInfo",permalink:"/interfaces/merchant-profile-status-info"},next:{title:"OnboardingStatusInfo",permalink:"/interfaces/onboarding-status-info"}},i={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,t.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:n,children:o,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,t.R)()},[s,i]=(0,a.useState)(c);return(0,r.jsxs)(d.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:n}),s&&o]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>OnboardingAccountHolderInfo.<b>type</b></code><Bullet></Bullet><code>AccountHolderType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingaccountholderinfotypeaccountholdertype--",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The onboarding could be for an Individual or a company"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"interface OnboardingAccountHolderInfo {\n  type: AccountHolderType!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"onboardingaccountholderinfotypeaccountholdertype--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardingAccountHolderInfo.",(0,r.jsx)("b",{children:"type"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/enums/account-holder-type",children:(0,r.jsx)(n.code,{children:"AccountHolderType!"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsx)(n.p,{children:"Account holder type"}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/objects/onboarding",children:(0,r.jsx)(n.code,{children:"Onboarding"})}),"  ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/objects/onboarding-info",children:(0,r.jsx)(n.code,{children:"OnboardingInfo"})}),"  ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/objects/onboarding-company-account-holder-info",children:(0,r.jsx)(n.code,{children:"OnboardingCompanyAccountHolderInfo"})}),"  ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/objects/onboarding-individual-account-holder-info",children:(0,r.jsx)(n.code,{children:"OnboardingIndividualAccountHolderInfo"})}),"  ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>d});var r=o(96540);const t={},a=r.createContext(t);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);