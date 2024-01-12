"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[1696],{74336:(e,n,d)=>{d.r(n),d.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>t,metadata:()=>r,toc:()=>b});var a=d(85893),s=d(11151),c=d(67294);const t={id:"add-account-membership-input",title:"AddAccountMembershipInput"},i=void 0,r={id:"inputs/add-account-membership-input",title:"AddAccountMembershipInput",description:"Inputs to add a new account membership",source:"@site/docs/inputs/add-account-membership-input.mdx",sourceDirName:"inputs",slug:"/inputs/add-account-membership-input",permalink:"/inputs/add-account-membership-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/add-account-membership-input.mdx",tags:[],version:"current",frontMatter:{id:"add-account-membership-input",title:"AddAccountMembershipInput"},sidebar:"schemaSidebar",previous:{title:"ActivatePhysicalCardInput",permalink:"/inputs/activate-physical-card-input"},next:{title:"AddAccountMembershipsInput",permalink:"/inputs/add-account-memberships-input"}},o={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AddAccountMembershipInput.<b>accountId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputaccountidid--",level:4},{value:'<code>AddAccountMembershipInput.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputemailstring--",level:4},{value:'<code>AddAccountMembershipInput.<b>restrictedTo</b></code><Bullet></Bullet><code>RestrictedToInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputrestrictedtorestrictedtoinput--",level:4},{value:'<code>AddAccountMembershipInput.<b>canViewAccount</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputcanviewaccountboolean--",level:4},{value:'<code>AddAccountMembershipInput.<b>canManageBeneficiaries</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputcanmanagebeneficiariesboolean--",level:4},{value:'<code>AddAccountMembershipInput.<b>canInitiatePayments</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputcaninitiatepaymentsboolean--",level:4},{value:'<code>AddAccountMembershipInput.<b>canManageAccountMembership</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputcanmanageaccountmembershipboolean--",level:4},{value:'<code>AddAccountMembershipInput.<b>canManageCards</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputcanmanagecardsboolean-",level:4},{value:'<code>AddAccountMembershipInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputconsentredirecturlstring--",level:4},{value:'<code>AddAccountMembershipInput.<b>residencyAddress</b></code><Bullet></Bullet><code>ResidencyAddressInput</code> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputresidencyaddressresidencyaddressinput-",level:4},{value:'<code>AddAccountMembershipInput.<b>taxIdentificationNumber</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputtaxidentificationnumberstring-",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:n,children:d,startOpen:t=!1})=>{const i={details:"details",summary:"summary",...(0,s.a)()},[r,o]=(0,c.useState)(t);return(0,a.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&d]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Inputs to add a new account membership"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input AddAccountMembershipInput {\n  accountId: ID!\n  email: String!\n  restrictedTo: RestrictedToInput!\n  canViewAccount: Boolean!\n  canManageBeneficiaries: Boolean!\n  canInitiatePayments: Boolean!\n  canManageAccountMembership: Boolean!\n  canManageCards: Boolean\n  consentRedirectUrl: String!\n  residencyAddress: ResidencyAddressInput\n  taxIdentificationNumber: String\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputaccountidid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipInput.",(0,a.jsx)("b",{children:"accountId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Unique identifier of a given account"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputemailstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipInput.",(0,a.jsx)("b",{children:"email"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Email address"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputrestrictedtorestrictedtoinput--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipInput.",(0,a.jsx)("b",{children:"restrictedTo"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/inputs/restricted-to-input",children:(0,a.jsx)(n.code,{children:"RestrictedToInput!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Restricted to a user if necessary"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputcanviewaccountboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipInput.",(0,a.jsx)("b",{children:"canViewAccount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can view account balances and transactions history"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputcanmanagebeneficiariesboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipInput.",(0,a.jsx)("b",{children:"canManageBeneficiaries"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can add or canceled beneficiaries"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputcaninitiatepaymentsboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipInput.",(0,a.jsx)("b",{children:"canInitiatePayments"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can initiate payments"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputcanmanageaccountmembershipboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipInput.",(0,a.jsx)("b",{children:"canManageAccountMembership"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can invite, update, suspend or resume account membership"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputcanmanagecardsboolean-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipInput.",(0,a.jsx)("b",{children:"canManageCards"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if this account membership can manage cards for himself or to the memberships he manages"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputconsentredirecturlstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipInput.",(0,a.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"URL the user is redirected to after consent has been given"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputresidencyaddressresidencyaddressinput-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipInput.",(0,a.jsx)("b",{children:"residencyAddress"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/inputs/residency-address-input",children:(0,a.jsx)(n.code,{children:"ResidencyAddressInput"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Residency address of the member to be added"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputtaxidentificationnumberstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipInput.",(0,a.jsx)("b",{children:"taxIdentificationNumber"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Tax Identification Number of the user added"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/mutations/add-account-membership",children:(0,a.jsx)(n.code,{children:"addAccountMembership"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,n,d)=>{d.d(n,{Z:()=>i,a:()=>t});var a=d(67294);const s={},c=a.createContext(s);function t(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);