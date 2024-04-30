"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84614],{10003:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>u,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=t(85893),s=t(11151),o=t(67294);const i={id:"create-capital-deposit-case-input",title:"CreateCapitalDepositCaseInput"},d=void 0,r={id:"inputs/create-capital-deposit-case-input",title:"CreateCapitalDepositCaseInput",description:"Inputs to create a capital deposit case.",source:"@site/docs/inputs/create-capital-deposit-case-input.mdx",sourceDirName:"inputs",slug:"/inputs/create-capital-deposit-case-input",permalink:"/inputs/create-capital-deposit-case-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/create-capital-deposit-case-input.mdx",tags:[],version:"current",frontMatter:{id:"create-capital-deposit-case-input",title:"CreateCapitalDepositCaseInput"},sidebar:"schemaSidebar",previous:{title:"ConsentsFiltersInput",permalink:"/inputs/consents-filters-input"},next:{title:"CreateMerchantPaymentLinkInput",permalink:"/inputs/create-merchant-payment-link-input"}},c={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,s.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>CreateCapitalDepositCaseInput.<b>companyName</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createcapitaldepositcaseinputcompanynamestring--",level:4},{value:'<code>CreateCapitalDepositCaseInput.<b>companyShareholders</b></code><Bullet></Bullet><code>[OnboardCompanyShareholderInput]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createcapitaldepositcaseinputcompanyshareholdersonboardcompanyshareholderinput--",level:4},{value:'<code>CreateCapitalDepositCaseInput.<b>individualShareholders</b></code><Bullet></Bullet><code>[OnboardIndividualShareholderInput]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createcapitaldepositcaseinputindividualshareholdersonboardindividualshareholderinput--",level:4},{value:'<code>CreateCapitalDepositCaseInput.<b>totalCapitalDepositAmount</b></code><Bullet></Bullet><code>AmountInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createcapitaldepositcaseinputtotalcapitaldepositamountamountinput--",level:4},{value:'<code>CreateCapitalDepositCaseInput.<b>onboardingCapitalDepositCompany</b></code><Bullet></Bullet><code>OnboardCompanyAccountHolderInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createcapitaldepositcaseinputonboardingcapitaldepositcompanyonboardcompanyaccountholderinput--",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:a,children:t,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,s.a)()},[r,c]=(0,o.useState)(i);return(0,n.jsxs)(d.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&t]})};function m(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Inputs to create a capital deposit case."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"input CreateCapitalDepositCaseInput {\n  companyName: String!\n  companyShareholders: [OnboardCompanyShareholderInput]!\n  individualShareholders: [OnboardIndividualShareholderInput]!\n  totalCapitalDepositAmount: AmountInput!\n  onboardingCapitalDepositCompany: OnboardCompanyAccountHolderInput!\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"createcapitaldepositcaseinputcompanynamestring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateCapitalDepositCaseInput.",(0,n.jsx)("b",{children:"companyName"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:'Name ("D\xe9nomination sociale") of the company being registered and for which the capital is being deposited.'}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"createcapitaldepositcaseinputcompanyshareholdersonboardcompanyshareholderinput--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateCapitalDepositCaseInput.",(0,n.jsx)("b",{children:"companyShareholders"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/inputs/onboard-company-shareholder-input",children:(0,n.jsx)(a.code,{children:"[OnboardCompanyShareholderInput]!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:'Array of shareholders of type company ("personne morale").'}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"createcapitaldepositcaseinputindividualshareholdersonboardindividualshareholderinput--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateCapitalDepositCaseInput.",(0,n.jsx)("b",{children:"individualShareholders"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/inputs/onboard-individual-shareholder-input",children:(0,n.jsx)(a.code,{children:"[OnboardIndividualShareholderInput]!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:'Array of shareholders of type individual ("personne physique").'}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"createcapitaldepositcaseinputtotalcapitaldepositamountamountinput--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateCapitalDepositCaseInput.",(0,n.jsx)("b",{children:"totalCapitalDepositAmount"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/inputs/amount-input",children:(0,n.jsx)(a.code,{children:"AmountInput!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Amount of the capital deposit."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"createcapitaldepositcaseinputonboardingcapitaldepositcompanyonboardcompanyaccountholderinput--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateCapitalDepositCaseInput.",(0,n.jsx)("b",{children:"onboardingCapitalDepositCompany"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/inputs/onboard-company-account-holder-input",children:(0,n.jsx)(a.code,{children:"OnboardCompanyAccountHolderInput!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Information required for the onboarding of a company."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/mutations/create-capital-deposit-case",children:(0,n.jsx)(a.code,{children:"createCapitalDepositCase"})}),"  ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function g(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>d,a:()=>i});var n=t(67294);const s={},o=n.createContext(s);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);