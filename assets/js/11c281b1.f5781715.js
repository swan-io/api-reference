"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[61162],{23692:(e,n,d)=>{d.r(n),d.d(n,{Badge:()=>h,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>b});var t=d(85893),a=d(11151),o=d(67294);const r={id:"onboard-individual-account-holder-input",title:"OnboardIndividualAccountHolderInput"},i=void 0,c={id:"inputs/onboard-individual-account-holder-input",title:"OnboardIndividualAccountHolderInput",description:"Inputs to onboard a new individual account holder",source:"@site/docs/inputs/onboard-individual-account-holder-input.mdx",sourceDirName:"inputs",slug:"/inputs/onboard-individual-account-holder-input",permalink:"/inputs/onboard-individual-account-holder-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/onboard-individual-account-holder-input.mdx",tags:[],version:"current",frontMatter:{id:"onboard-individual-account-holder-input",title:"OnboardIndividualAccountHolderInput"},sidebar:"schemaSidebar",previous:{title:"OnboardCompanyShareholderInput",permalink:"/inputs/onboard-company-shareholder-input"},next:{title:"OnboardIndividualShareholderInput",permalink:"/inputs/onboard-individual-shareholder-input"}},l={},s=()=>{const e={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>OnboardIndividualAccountHolderInput.<b>accountName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardindividualaccountholderinputaccountnamestring-",level:4},{value:'<code>OnboardIndividualAccountHolderInput.<b>accountCountry</b></code><Bullet></Bullet><code>AccountCountry</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardindividualaccountholderinputaccountcountryaccountcountry-",level:4},{value:'<code>OnboardIndividualAccountHolderInput.<b>employmentStatus</b></code><Bullet></Bullet><code>EmploymentStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardindividualaccountholderinputemploymentstatusemploymentstatus-",level:4},{value:'<code>OnboardIndividualAccountHolderInput.<b>monthlyIncome</b></code><Bullet></Bullet><code>MonthlyIncome</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardindividualaccountholderinputmonthlyincomemonthlyincome-",level:4},{value:'<code>OnboardIndividualAccountHolderInput.<b>residencyAddress</b></code><Bullet></Bullet><code>ResidencyAddressInput</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardindividualaccountholderinputresidencyaddressresidencyaddressinput-",level:4},{value:'<code>OnboardIndividualAccountHolderInput.<b>email</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardindividualaccountholderinputemailstring-",level:4},{value:'<code>OnboardIndividualAccountHolderInput.<b>language</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardindividualaccountholderinputlanguagestring-",level:4},{value:'<code>OnboardIndividualAccountHolderInput.<b>redirectUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardindividualaccountholderinputredirecturlstring-",level:4},{value:'<code>OnboardIndividualAccountHolderInput.<b>oAuthRedirectParameters</b></code><Bullet></Bullet><code>OAuthRedirectParametersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardindividualaccountholderinputoauthredirectparametersoauthredirectparametersinput-",level:4},{value:'<code>OnboardIndividualAccountHolderInput.<b>taxIdentificationNumber</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardindividualaccountholderinputtaxidentificationnumberstring-",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:n,children:d,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,a.a)()},[c,l]=(0,o.useState)(r);return(0,t.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&d]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Inputs to onboard a new individual account holder"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input OnboardIndividualAccountHolderInput {\n  accountName: String\n  accountCountry: AccountCountry\n  employmentStatus: EmploymentStatus\n  monthlyIncome: MonthlyIncome\n  residencyAddress: ResidencyAddressInput\n  email: String\n  language: String\n  redirectUrl: String\n  oAuthRedirectParameters: OAuthRedirectParametersInput\n  taxIdentificationNumber: String\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"onboardindividualaccountholderinputaccountnamestring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardIndividualAccountHolderInput.",(0,t.jsx)("b",{children:"accountName"})]})}),(0,t.jsx)(s,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Account name of the individual account holder. Length must be from 0 to 255 characters"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"onboardindividualaccountholderinputaccountcountryaccountcountry-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardIndividualAccountHolderInput.",(0,t.jsx)("b",{children:"accountCountry"})]})}),(0,t.jsx)(s,{}),(0,t.jsx)(n.a,{href:"/enums/account-country",children:(0,t.jsx)(n.code,{children:"AccountCountry"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Country of the account that will be created at the end of the onboarding process"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"onboardindividualaccountholderinputemploymentstatusemploymentstatus-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardIndividualAccountHolderInput.",(0,t.jsx)("b",{children:"employmentStatus"})]})}),(0,t.jsx)(s,{}),(0,t.jsx)(n.a,{href:"/enums/employment-status",children:(0,t.jsx)(n.code,{children:"EmploymentStatus"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Employment status of the individual account holder"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"onboardindividualaccountholderinputmonthlyincomemonthlyincome-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardIndividualAccountHolderInput.",(0,t.jsx)("b",{children:"monthlyIncome"})]})}),(0,t.jsx)(s,{}),(0,t.jsx)(n.a,{href:"/enums/monthly-income",children:(0,t.jsx)(n.code,{children:"MonthlyIncome"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Monthly income of the individual account holder"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"onboardindividualaccountholderinputresidencyaddressresidencyaddressinput-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardIndividualAccountHolderInput.",(0,t.jsx)("b",{children:"residencyAddress"})]})}),(0,t.jsx)(s,{}),(0,t.jsx)(n.a,{href:"/inputs/residency-address-input",children:(0,t.jsx)(n.code,{children:"ResidencyAddressInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Residency address of the individual account holder (must be in a European country)"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"onboardindividualaccountholderinputemailstring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardIndividualAccountHolderInput.",(0,t.jsx)("b",{children:"email"})]})}),(0,t.jsx)(s,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Email. Length must be from 0 to 255 characters"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"onboardindividualaccountholderinputlanguagestring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardIndividualAccountHolderInput.",(0,t.jsx)("b",{children:"language"})]})}),(0,t.jsx)(s,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Language of the onboarding process. Must be compliant with RFC 5646"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"onboardindividualaccountholderinputredirecturlstring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardIndividualAccountHolderInput.",(0,t.jsx)("b",{children:"redirectUrl"})]})}),(0,t.jsx)(s,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["URL used to redirect the user at the end of the onboarding process. If ",(0,t.jsx)(n.code,{children:"null"})," the user is redirected to the white label web banking. Length must be from 0 to 255 characters"]}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"onboardindividualaccountholderinputoauthredirectparametersoauthredirectparametersinput-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardIndividualAccountHolderInput.",(0,t.jsx)("b",{children:"oAuthRedirectParameters"})]})}),(0,t.jsx)(s,{}),(0,t.jsx)(n.a,{href:"/inputs/oauth-redirect-parameters-input",children:(0,t.jsx)(n.code,{children:"OAuthRedirectParametersInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Extra parameters provided by partner"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"onboardindividualaccountholderinputtaxidentificationnumberstring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardIndividualAccountHolderInput.",(0,t.jsx)("b",{children:"taxIdentificationNumber"})]})}),(0,t.jsx)(s,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Tax Identification Number"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/mutations/onboard-individual-account-holder",children:(0,t.jsx)(n.code,{children:"onboardIndividualAccountHolder"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"mutation"}),(0,t.jsx)(s,{}),(0,t.jsx)(n.a,{href:"/inputs/onboard-individual-shareholder-input",children:(0,t.jsx)(n.code,{children:"OnboardIndividualShareholderInput"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,d)=>{d.d(n,{Z:()=>i,a:()=>r});var t=d(67294);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);