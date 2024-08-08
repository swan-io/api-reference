"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43583],{98976:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>x});var d=n(74848),t=n(28453),s=n(96540);const r={id:"update-card-input",title:"UpdateCardInput"},c=void 0,i={id:"inputs/update-card-input",title:"UpdateCardInput",description:"Input to Update Card",source:"@site/docs/inputs/update-card-input.mdx",sourceDirName:"inputs",slug:"/inputs/update-card-input",permalink:"/inputs/update-card-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/update-card-input.mdx",tags:[],version:"current",frontMatter:{id:"update-card-input",title:"UpdateCardInput"},sidebar:"schemaSidebar",previous:{title:"UpdateAccountMembershipInput",permalink:"/inputs/update-account-membership-input"},next:{title:"UpdateCompanyOnboardingInput",permalink:"/inputs/update-company-onboarding-input"}},l={},o=()=>{const e={span:"span",...(0,t.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,t.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,t.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:n,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,t.R)()},[i,l]=(0,s.useState)(r);return(0,d.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>UpdateCardInput.<b>cardId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecardinputcardidid--",level:4},{value:'<code>UpdateCardInput.<b>cardContractExpiryDate</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"updatecardinputcardcontractexpirydatedatetime-",level:4},{value:'<code>UpdateCardInput.<b>withdrawal</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecardinputwithdrawalboolean--",level:4},{value:'<code>UpdateCardInput.<b>international</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecardinputinternationalboolean--",level:4},{value:'<code>UpdateCardInput.<b>nonMainCurrencyTransactions</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecardinputnonmaincurrencytransactionsboolean--",level:4},{value:'<code>UpdateCardInput.<b>eCommerce</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecardinputecommerceboolean--",level:4},{value:'<code>UpdateCardInput.<b>spendingLimit</b></code><Bullet></Bullet><code>SpendingLimitInput</code> <Badge class="badge badge--secondary"></Badge>',id:"updatecardinputspendinglimitspendinglimitinput-",level:4},{value:'<code>UpdateCardInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecardinputconsentredirecturlstring--",level:4},{value:'<code>UpdateCardInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"updatecardinputnamestring-",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Input to Update Card"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"input UpdateCardInput {\n  cardId: ID!\n  cardContractExpiryDate: DateTime\n  withdrawal: Boolean!\n  international: Boolean!\n  nonMainCurrencyTransactions: Boolean!\n  eCommerce: Boolean!\n  spendingLimit: SpendingLimitInput\n  consentRedirectUrl: String!\n  name: String\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"updatecardinputcardidid--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateCardInput.",(0,d.jsx)("b",{children:"cardId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Unique identifier of the card to update"}),"\n",(0,d.jsxs)(a.h4,{id:"updatecardinputcardcontractexpirydatedatetime-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateCardInput.",(0,d.jsx)("b",{children:"cardContractExpiryDate"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.p,{children:["Card expiration date  if ",(0,d.jsx)(a.code,{children:"null"})," it does not have an expiration date"]}),"\n",(0,d.jsxs)(a.h4,{id:"updatecardinputwithdrawalboolean--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateCardInput.",(0,d.jsx)("b",{children:"withdrawal"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.code,{children:"true"})," if this card allows cash withdrawals"]}),"\n",(0,d.jsxs)(a.h4,{id:"updatecardinputinternationalboolean--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateCardInput.",(0,d.jsx)("b",{children:"international"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.code,{children:"true"})," if this card allows payments outside of the country"]}),"\n",(0,d.jsxs)(a.h4,{id:"updatecardinputnonmaincurrencytransactionsboolean--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateCardInput.",(0,d.jsx)("b",{children:"nonMainCurrencyTransactions"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.code,{children:"true"})," if this card allows transactions outside of the card's main currency"]}),"\n",(0,d.jsxs)(a.h4,{id:"updatecardinputecommerceboolean--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateCardInput.",(0,d.jsx)("b",{children:"eCommerce"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.code,{children:"true"})," if this card allows transactions at eCommerce sites"]}),"\n",(0,d.jsxs)(a.h4,{id:"updatecardinputspendinglimitspendinglimitinput-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateCardInput.",(0,d.jsx)("b",{children:"spendingLimit"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/inputs/spending-limit-input",children:(0,d.jsx)(a.code,{children:"SpendingLimitInput"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,d.jsx)(a.p,{children:"Periodic Spending limit"}),"\n",(0,d.jsxs)(a.h4,{id:"updatecardinputconsentredirecturlstring--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateCardInput.",(0,d.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"URL the user is redirected to after consent has been given"}),"\n",(0,d.jsxs)(a.h4,{id:"updatecardinputnamestring-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateCardInput.",(0,d.jsx)("b",{children:"name"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Card name"}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/mutations/update-card",children:(0,d.jsx)(a.code,{children:"updateCard"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>c});var d=n(96540);const t={},s=d.createContext(t);function r(e){const a=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(s.Provider,{value:a},e.children)}}}]);