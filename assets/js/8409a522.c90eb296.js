"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[59460],{95639:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>m,Bullet:()=>a,Details:()=>u,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>x});var o=t(74848),l=t(28453),s=t(96540);const c={id:"monthly-income",title:"MonthlyIncome"},d=void 0,i={id:"enums/monthly-income",title:"MonthlyIncome",description:"Monthly income.",source:"@site/docs/enums/monthly-income.mdx",sourceDirName:"enums",slug:"/enums/monthly-income",permalink:"/enums/monthly-income",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/monthly-income.mdx",tags:[],version:"current",frontMatter:{id:"monthly-income",title:"MonthlyIncome"},sidebar:"schemaSidebar",previous:{title:"MerchantSubCategory",permalink:"/enums/merchant-sub-category"},next:{title:"MonthlyPaymentVolume",permalink:"/enums/monthly-payment-volume"}},r={},a=()=>{const e={span:"span",...(0,l.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,l.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,l.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,l.R)()},[i,r]=(0,s.useState)(c);return(0,o.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})},x=[{value:"Values",id:"values",level:3},{value:"<code>MonthlyIncome.<b>LessThan500</b></code>",id:"monthlyincomelessthan500",level:4},{value:"<code>MonthlyIncome.<b>Between500And1500</b></code>",id:"monthlyincomebetween500and1500",level:4},{value:"<code>MonthlyIncome.<b>Between1500And3000</b></code>",id:"monthlyincomebetween1500and3000",level:4},{value:"<code>MonthlyIncome.<b>Between3000And4500</b></code>",id:"monthlyincomebetween3000and4500",level:4},{value:"<code>MonthlyIncome.<b>MoreThan4500</b></code>",id:"monthlyincomemorethan4500",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Monthly income."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"enum MonthlyIncome {\n  LessThan500\n  Between500And1500\n  Between1500And3000\n  Between3000And4500\n  MoreThan4500\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,o.jsx)(n.h4,{id:"monthlyincomelessthan500",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["MonthlyIncome.",(0,o.jsx)("b",{children:"LessThan500"})]})})}),"\n",(0,o.jsx)(n.p,{children:"less than 500"}),"\n",(0,o.jsx)(n.h4,{id:"monthlyincomebetween500and1500",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["MonthlyIncome.",(0,o.jsx)("b",{children:"Between500And1500"})]})})}),"\n",(0,o.jsx)(n.p,{children:"between 500 and 1500"}),"\n",(0,o.jsx)(n.h4,{id:"monthlyincomebetween1500and3000",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["MonthlyIncome.",(0,o.jsx)("b",{children:"Between1500And3000"})]})})}),"\n",(0,o.jsx)(n.p,{children:"between 1500 and 3000"}),"\n",(0,o.jsx)(n.h4,{id:"monthlyincomebetween3000and4500",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["MonthlyIncome.",(0,o.jsx)("b",{children:"Between3000And4500"})]})})}),"\n",(0,o.jsx)(n.p,{children:"between 3000 and 4500"}),"\n",(0,o.jsx)(n.h4,{id:"monthlyincomemorethan4500",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["MonthlyIncome.",(0,o.jsx)("b",{children:"MoreThan4500"})]})})}),"\n",(0,o.jsx)(n.p,{children:"more than 4500"}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/objects/account-holder-individual-info",children:(0,o.jsx)(n.code,{children:"AccountHolderIndividualInfo"})}),"  ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(a,{}),(0,o.jsx)(n.a,{href:"/inputs/onboard-individual-account-holder-input",children:(0,o.jsx)(n.code,{children:"OnboardIndividualAccountHolderInput"})}),"  ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"input"}),(0,o.jsx)(a,{}),(0,o.jsx)(n.a,{href:"/objects/onboarding-individual-account-holder-info",children:(0,o.jsx)(n.code,{children:"OnboardingIndividualAccountHolderInfo"})}),"  ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(a,{}),(0,o.jsx)(n.a,{href:"/inputs/update-individual-onboarding-input",children:(0,o.jsx)(n.code,{children:"UpdateIndividualOnboardingInput"})}),"  ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"input"})]})]})}function y(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var o=t(96540);const l={},s=o.createContext(l);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);