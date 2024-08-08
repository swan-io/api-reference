"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[82923],{88419:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>t,toc:()=>b});var a=s(74848),i=s(28453),d=s(96540);const c={id:"membership-info-input",title:"MembershipInfoInput"},r=void 0,t={id:"inputs/membership-info-input",title:"MembershipInfoInput",description:"No description",source:"@site/docs/inputs/membership-info-input.mdx",sourceDirName:"inputs",slug:"/inputs/membership-info-input",permalink:"/inputs/membership-info-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/membership-info-input.mdx",tags:[],version:"current",frontMatter:{id:"membership-info-input",title:"MembershipInfoInput"},sidebar:"schemaSidebar",previous:{title:"LegalDocumentsFilterInput",permalink:"/inputs/legal-documents-filter-input"},next:{title:"MembershipsFilterInput",permalink:"/inputs/memberships-filter-input"}},o={},l=()=>{const e={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,i.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:s,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,i.R)()},[t,o]=(0,d.useState)(c);return(0,a.jsxs)(r.details,{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:t?e:n}),t&&s]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>MembershipInfoInput.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membershipinfoinputemailstring--",level:4},{value:'<code>MembershipInfoInput.<b>restrictedTo</b></code><Bullet></Bullet><code>RestrictedToInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membershipinfoinputrestrictedtorestrictedtoinput--",level:4},{value:'<code>MembershipInfoInput.<b>canViewAccount</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membershipinfoinputcanviewaccountboolean--",level:4},{value:'<code>MembershipInfoInput.<b>canManageBeneficiaries</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membershipinfoinputcanmanagebeneficiariesboolean--",level:4},{value:'<code>MembershipInfoInput.<b>canInitiatePayments</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membershipinfoinputcaninitiatepaymentsboolean--",level:4},{value:'<code>MembershipInfoInput.<b>canManageAccountMembership</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membershipinfoinputcanmanageaccountmembershipboolean--",level:4},{value:'<code>MembershipInfoInput.<b>canManageCards</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"membershipinfoinputcanmanagecardsboolean-",level:4},{value:'<code>MembershipInfoInput.<b>residencyAddress</b></code><Bullet></Bullet><code>ResidencyAddressInput</code> <Badge class="badge badge--secondary"></Badge>',id:"membershipinfoinputresidencyaddressresidencyaddressinput-",level:4},{value:'<code>MembershipInfoInput.<b>taxIdentificationNumber</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"membershipinfoinputtaxidentificationnumberstring-",level:4},{value:'<code>MembershipInfoInput.<b>language</b></code><Bullet></Bullet><code>AccountLanguage</code> <Badge class="badge badge--secondary"></Badge>',id:"membershipinfoinputlanguageaccountlanguage-",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input MembershipInfoInput {\n  email: String!\n  restrictedTo: RestrictedToInput!\n  canViewAccount: Boolean!\n  canManageBeneficiaries: Boolean!\n  canInitiatePayments: Boolean!\n  canManageAccountMembership: Boolean!\n  canManageCards: Boolean\n  residencyAddress: ResidencyAddressInput\n  taxIdentificationNumber: String\n  language: AccountLanguage\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"membershipinfoinputemailstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipInfoInput.",(0,a.jsx)("b",{children:"email"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Email address"}),"\n",(0,a.jsxs)(n.h4,{id:"membershipinfoinputrestrictedtorestrictedtoinput--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipInfoInput.",(0,a.jsx)("b",{children:"restrictedTo"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/inputs/restricted-to-input",children:(0,a.jsx)(n.code,{children:"RestrictedToInput!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(n.p,{children:"Restricted to a user if necessary"}),"\n",(0,a.jsxs)(n.h4,{id:"membershipinfoinputcanviewaccountboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipInfoInput.",(0,a.jsx)("b",{children:"canViewAccount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can view account balances and transactions history"]}),"\n",(0,a.jsxs)(n.h4,{id:"membershipinfoinputcanmanagebeneficiariesboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipInfoInput.",(0,a.jsx)("b",{children:"canManageBeneficiaries"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can add or canceled beneficiaries"]}),"\n",(0,a.jsxs)(n.h4,{id:"membershipinfoinputcaninitiatepaymentsboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipInfoInput.",(0,a.jsx)("b",{children:"canInitiatePayments"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can initiate credit transfers"]}),"\n",(0,a.jsxs)(n.h4,{id:"membershipinfoinputcanmanageaccountmembershipboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipInfoInput.",(0,a.jsx)("b",{children:"canManageAccountMembership"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can invite, update, suspend or resume account membership"]}),"\n",(0,a.jsxs)(n.h4,{id:"membershipinfoinputcanmanagecardsboolean-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipInfoInput.",(0,a.jsx)("b",{children:"canManageCards"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can manage cards for himself or to the memberships he manages"]}),"\n",(0,a.jsxs)(n.h4,{id:"membershipinfoinputresidencyaddressresidencyaddressinput-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipInfoInput.",(0,a.jsx)("b",{children:"residencyAddress"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/inputs/residency-address-input",children:(0,a.jsx)(n.code,{children:"ResidencyAddressInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(n.p,{children:"Residency address of the member to be added"}),"\n",(0,a.jsxs)(n.h4,{id:"membershipinfoinputtaxidentificationnumberstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipInfoInput.",(0,a.jsx)("b",{children:"taxIdentificationNumber"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Tax Identification Number of the user added"}),"\n",(0,a.jsxs)(n.h4,{id:"membershipinfoinputlanguageaccountlanguage-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipInfoInput.",(0,a.jsx)("b",{children:"language"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/enums/account-language",children:(0,a.jsx)(n.code,{children:"AccountLanguage"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(n.p,{children:"Language of the account membership"}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/inputs/add-account-memberships-input",children:(0,a.jsx)(n.code,{children:"AddAccountMembershipsInput"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var a=s(96540);const i={},d=a.createContext(i);function c(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);