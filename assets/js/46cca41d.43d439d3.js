"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[13495],{1432:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var a=t(85893),c=t(11151),s=t(67294);const d={id:"update-account-membership-input",title:"UpdateAccountMembershipInput"},i=void 0,r={id:"inputs/update-account-membership-input",title:"UpdateAccountMembershipInput",description:"Inputs to update an account membership",source:"@site/docs/inputs/update-account-membership-input.mdx",sourceDirName:"inputs",slug:"/inputs/update-account-membership-input",permalink:"/inputs/update-account-membership-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/update-account-membership-input.mdx",tags:[],version:"current",frontMatter:{id:"update-account-membership-input",title:"UpdateAccountMembershipInput"},sidebar:"schemaSidebar",previous:{title:"UpdateAccountInput",permalink:"/inputs/update-account-input"},next:{title:"UpdateCardInput",permalink:"/inputs/update-card-input"}},o={},l=()=>{const e={span:"span",...(0,c.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,c.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>UpdateAccountMembershipInput.<b>accountMembershipId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputaccountmembershipidid--",level:4},{value:'<code>UpdateAccountMembershipInput.<b>email</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputemailstring-",level:4},{value:'<code>UpdateAccountMembershipInput.<b>restrictedTo</b></code><Bullet></Bullet><code>UpdatedRestrictedToInput</code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputrestrictedtoupdatedrestrictedtoinput-",level:4},{value:'<code>UpdateAccountMembershipInput.<b>canViewAccount</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputcanviewaccountboolean-",level:4},{value:'<code>UpdateAccountMembershipInput.<b>canManageBeneficiaries</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputcanmanagebeneficiariesboolean-",level:4},{value:'<code>UpdateAccountMembershipInput.<b>canInitiatePayments</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputcaninitiatepaymentsboolean-",level:4},{value:'<code>UpdateAccountMembershipInput.<b>canManageAccountMembership</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputcanmanageaccountmembershipboolean-",level:4},{value:'<code>UpdateAccountMembershipInput.<b>canManageCards</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputcanmanagecardsboolean-",level:4},{value:'<code>UpdateAccountMembershipInput.<b>spendingLimit</b></code><Bullet></Bullet><code>SpendingLimitInput</code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputspendinglimitspendinglimitinput-",level:4},{value:'<code>UpdateAccountMembershipInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputconsentredirecturlstring--",level:4},{value:'<code>UpdateAccountMembershipInput.<b>residencyAddress</b></code><Bullet></Bullet><code>ResidencyAddressInput</code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputresidencyaddressresidencyaddressinput-",level:4},{value:'<code>UpdateAccountMembershipInput.<b>taxIdentificationNumber</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountmembershipinputtaxidentificationnumberstring-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:n,children:t,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,c.a)()},[r,o]=(0,s.useState)(d);return(0,a.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Inputs to update an account membership"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input UpdateAccountMembershipInput {\n  accountMembershipId: ID!\n  email: String\n  restrictedTo: UpdatedRestrictedToInput\n  canViewAccount: Boolean\n  canManageBeneficiaries: Boolean\n  canInitiatePayments: Boolean\n  canManageAccountMembership: Boolean\n  canManageCards: Boolean\n  spendingLimit: SpendingLimitInput\n  consentRedirectUrl: String!\n  residencyAddress: ResidencyAddressInput\n  taxIdentificationNumber: String\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputaccountmembershipidid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"accountMembershipId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Unique identifier of an account membership"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputemailstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"email"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Email address"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputrestrictedtoupdatedrestrictedtoinput-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"restrictedTo"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/inputs/updated-restricted-to-input",children:(0,a.jsx)(n.code,{children:"UpdatedRestrictedToInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Restricted to a user if necessary"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputcanviewaccountboolean-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"canViewAccount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can view account balances and transactions history"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputcanmanagebeneficiariesboolean-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"canManageBeneficiaries"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can add or canceled beneficiaries"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputcaninitiatepaymentsboolean-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"canInitiatePayments"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can initiate payments"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputcanmanageaccountmembershipboolean-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"canManageAccountMembership"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can invite, update, suspend or resume memberships"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputcanmanagecardsboolean-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"canManageCards"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can manage cards for himself or to the memberships he manages"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputspendinglimitspendinglimitinput-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"spendingLimit"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/inputs/spending-limit-input",children:(0,a.jsx)(n.code,{children:"SpendingLimitInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Periodic Spending limit"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputconsentredirecturlstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"URL the user is redirected to after consent has been given"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputresidencyaddressresidencyaddressinput-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"residencyAddress"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/inputs/residency-address-input",children:(0,a.jsx)(n.code,{children:"ResidencyAddressInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Residency address of the member to be added"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"updateaccountmembershipinputtaxidentificationnumberstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountMembershipInput.",(0,a.jsx)("b",{children:"taxIdentificationNumber"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Tax Identification Number of the user added"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/mutations/update-account-membership",children:(0,a.jsx)(n.code,{children:"updateAccountMembership"})}),"  ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>d});var a=t(67294);const c={},s=a.createContext(c);function d(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);