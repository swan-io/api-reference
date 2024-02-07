"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[90718],{49506:(e,c,s)=>{s.r(c),s.d(c,{Badge:()=>b,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>u});var n=s(85893),a=s(11151),d=s(67294);const i={id:"account-membership",title:"AccountMembership"},r=void 0,t={id:"objects/account-membership",title:"AccountMembership",description:"An account membership represents the rights of a user for a given account.",source:"@site/docs/objects/account-membership.mdx",sourceDirName:"objects",slug:"/objects/account-membership",permalink:"/objects/account-membership",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/account-membership.mdx",tags:[],version:"current",frontMatter:{id:"account-membership",title:"AccountMembership"},sidebar:"schemaSidebar",previous:{title:"AccountMembershipSuspendedStatusInfo",permalink:"/objects/account-membership-suspended-status-info"},next:{title:"AccountNotEligibleRejection",permalink:"/objects/account-not-eligible-rejection"}},o={},l=()=>{const e={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const c={a:"a",...(0,a.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(c.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const c={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountMembership.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipidid--",level:4},{value:'<code>AccountMembership.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipemailstring--",level:4},{value:'<code>AccountMembership.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipuseruser-",level:4},{value:'<code>AccountMembership.<b>legalRepresentative</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershiplegalrepresentativeboolean--",level:4},{value:'<code>AccountMembership.<b>canViewAccount</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcanviewaccountboolean--",level:4},{value:'<code>AccountMembership.<b>canManageBeneficiaries</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcanmanagebeneficiariesboolean--",level:4},{value:'<code>AccountMembership.<b>canInitiatePayments</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcaninitiatepaymentsboolean--",level:4},{value:'<code>AccountMembership.<b>canManageAccountMembership</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcanmanageaccountmembershipboolean--",level:4},{value:'<code>AccountMembership.<b>canManageCards</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcanmanagecardsboolean--",level:4},{value:'<code>AccountMembership.<b>statusInfo</b></code><Bullet></Bullet><code>AccountMembershipStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipstatusinfoaccountmembershipstatusinfo--",level:4},{value:'<code>AccountMembership.<b>account</b></code><Bullet></Bullet><code>Account</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipaccountaccount-",level:4},{value:'<code>AccountMembership.<b>spendingLimits</b></code><Bullet></Bullet><code>[SpendingLimit!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipspendinglimitsspendinglimit--",level:4},{value:'<code>AccountMembership.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcreatedatdatetime--",level:4},{value:'<code>AccountMembership.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipupdatedatdatetime--",level:4},{value:'<code>AccountMembership.<b>version</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipversionstring--",level:4},{value:'<code>AccountMembership.<b>residencyAddress</b></code><Bullet></Bullet><code>AddressInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipresidencyaddressaddressinfo-",level:4},{value:'<code>AccountMembership.<b>taxIdentificationNumber</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershiptaxidentificationnumberstring-",level:4},{value:'<code>AccountMembership.<b>acceptedIdentificationLevels</b></code><Bullet></Bullet><code>[IdentificationLevel]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipacceptedidentificationlevelsidentificationlevel--",level:4},{value:'<code>AccountMembership.<b>recommendedIdentificationLevel</b></code><Bullet></Bullet><code>IdentificationLevel!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershiprecommendedidentificationlevelidentificationlevel--",level:4},{value:'<code>AccountMembership.<b>hasRequiredIdentificationLevel</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershiphasrequiredidentificationlevelboolean-",level:4},{value:'<code>AccountMembership.<b>disabledAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipdisabledatdatetime-",level:4},{value:'<code>AccountMembership.<b>cards</b></code><Bullet></Bullet><code>CardConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcardscardconnection--",level:4},{value:'<code>AccountMembership.cards.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcardsfirstint--",level:5},{value:'<code>AccountMembership.cards.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcardsbeforestring-",level:5},{value:'<code>AccountMembership.cards.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcardsafterstring-",level:5},{value:'<code>AccountMembership.cards.<b>orderBy</b></code><Bullet></Bullet><code>CardOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcardsorderbycardorderbyinput-",level:5},{value:'<code>AccountMembership.cards.<b>filters</b></code><Bullet></Bullet><code>CardFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipcardsfilterscardfiltersinput-",level:5},{value:'<code>AccountMembership.<b>spending</b></code><Bullet></Bullet><code>Spending</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipspendingspending-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:c,children:s,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,a.a)()},[t,o]=(0,d.useState)(i);return(0,n.jsxs)(r.details,{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:t?e:c}),t&&s]})};function g(e){const c={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.p,{children:"An account membership represents the rights of a user for a given account."}),"\n",(0,n.jsx)(c.p,{children:(0,n.jsx)(c.em,{children:"Each account is administered by an account membership having the capacity of legal representative. He has the possibility of delegating rights on this account to other users."})}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-graphql",children:"type AccountMembership {\n  id: ID!\n  email: String!\n  user: User\n  legalRepresentative: Boolean!\n  canViewAccount: Boolean!\n  canManageBeneficiaries: Boolean!\n  canInitiatePayments: Boolean!\n  canManageAccountMembership: Boolean!\n  canManageCards: Boolean!\n  statusInfo: AccountMembershipStatusInfo!\n  account: Account\n  spendingLimits: [SpendingLimit!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  version: String!\n  residencyAddress: AddressInfo\n  taxIdentificationNumber: String\n  acceptedIdentificationLevels: [IdentificationLevel]!\n  recommendedIdentificationLevel: IdentificationLevel!\n  hasRequiredIdentificationLevel: Boolean\n  disabledAt: DateTime\n  cards(\n    first: Int! = 50\n    before: String\n    after: String\n    orderBy: CardOrderByInput\n    filters: CardFiltersInput\n  ): CardConnection!\n  spending: Spending\n}\n"})}),"\n",(0,n.jsx)(c.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipidid--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/id",children:(0,n.jsx)(c.code,{children:"ID!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"Unique identifier of an account membership"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipemailstring--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"email"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/string",children:(0,n.jsx)(c.code,{children:"String!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"email"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipuseruser-",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"user"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/user",children:(0,n.jsx)(c.code,{children:"User"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"user of this account membership"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershiplegalrepresentativeboolean--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"legalRepresentative"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/boolean",children:(0,n.jsx)(c.code,{children:"Boolean!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"true"})," if this account membership having the capacity of the legal representative of the account holder."]}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipcanviewaccountboolean--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"canViewAccount"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/boolean",children:(0,n.jsx)(c.code,{children:"Boolean!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"true"})," if this account membership can view account balances and transactions history"]}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipcanmanagebeneficiariesboolean--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"canManageBeneficiaries"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/boolean",children:(0,n.jsx)(c.code,{children:"Boolean!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"true"})," if this account membership can add or canceled beneficiaries"]}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipcaninitiatepaymentsboolean--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"canInitiatePayments"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/boolean",children:(0,n.jsx)(c.code,{children:"Boolean!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"true"})," if this account membership can initiate payments"]}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipcanmanageaccountmembershipboolean--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"canManageAccountMembership"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/boolean",children:(0,n.jsx)(c.code,{children:"Boolean!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"true"})," if this account membership can invite, update, suspend or resume memberships"]}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipcanmanagecardsboolean--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"canManageCards"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/boolean",children:(0,n.jsx)(c.code,{children:"Boolean!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"true"})," if this account membership can manage cards for himself or to the memberships he manages"]}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipstatusinfoaccountmembershipstatusinfo--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"statusInfo"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/interfaces/account-membership-status-info",children:(0,n.jsx)(c.code,{children:"AccountMembershipStatusInfo!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"status of the account membership"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipaccountaccount-",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"account"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/account",children:(0,n.jsx)(c.code,{children:"Account"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"account of the account membership"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipspendinglimitsspendinglimit--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"spendingLimits"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/spending-limit",children:(0,n.jsx)(c.code,{children:"[SpendingLimit!]"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"Periodic Spending limit list"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipcreatedatdatetime--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/date-time",children:(0,n.jsx)(c.code,{children:"DateTime!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"Created date"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipupdatedatdatetime--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"updatedAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/date-time",children:(0,n.jsx)(c.code,{children:"DateTime!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"Updated date"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipversionstring--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"version"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/string",children:(0,n.jsx)(c.code,{children:"String!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"version of the account membership started from '1' and incremented at every updates"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipresidencyaddressaddressinfo-",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"residencyAddress"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/address-info",children:(0,n.jsx)(c.code,{children:"AddressInfo"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"Residency address of the member"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershiptaxidentificationnumberstring-",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"taxIdentificationNumber"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/string",children:(0,n.jsx)(c.code,{children:"String"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"Tax Identification Number of the member"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipacceptedidentificationlevelsidentificationlevel--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"acceptedIdentificationLevels"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/enums/identification-level",children:(0,n.jsx)(c.code,{children:"[IdentificationLevel]!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"List of accepted identification level"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershiprecommendedidentificationlevelidentificationlevel--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"recommendedIdentificationLevel"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/enums/identification-level",children:(0,n.jsx)(c.code,{children:"IdentificationLevel!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"Recommended identification level"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershiphasrequiredidentificationlevelboolean-",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"hasRequiredIdentificationLevel"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/boolean",children:(0,n.jsx)(c.code,{children:"Boolean"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"Indicate if the identity bound to the account membership has required identification level"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipdisabledatdatetime-",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"disabledAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/date-time",children:(0,n.jsx)(c.code,{children:"DateTime"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"Disabled date"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipcardscardconnection--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"cards"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/card-connection",children:(0,n.jsx)(c.code,{children:"CardConnection!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"account membership's cards"}),"\n",(0,n.jsxs)(c.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,n.jsx)(c.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,n.jsxs)(c.h5,{id:"accountmembershipcardsfirstint--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.cards.",(0,n.jsx)("b",{children:"first"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/int",children:(0,n.jsx)(c.code,{children:"Int!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(c.p,{children:"the number of elements to load (maximum: 100)"}),"\n"]}),"\n",(0,n.jsxs)(c.h5,{id:"accountmembershipcardsbeforestring-",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.cards.",(0,n.jsx)("b",{children:"before"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/string",children:(0,n.jsx)(c.code,{children:"String"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"the index (a unique reference in string form) from which you will load the preceding elements"}),"\n"]}),"\n",(0,n.jsxs)(c.h5,{id:"accountmembershipcardsafterstring-",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.cards.",(0,n.jsx)("b",{children:"after"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/scalars/string",children:(0,n.jsx)(c.code,{children:"String"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n"]}),"\n",(0,n.jsxs)(c.h5,{id:"accountmembershipcardsorderbycardorderbyinput-",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.cards.",(0,n.jsx)("b",{children:"orderBy"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/inputs/card-order-by-input",children:(0,n.jsx)(c.code,{children:"CardOrderByInput"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"an order you can apply to your list of connections"}),"\n"]}),"\n",(0,n.jsxs)(c.h5,{id:"accountmembershipcardsfilterscardfiltersinput-",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.cards.",(0,n.jsx)("b",{children:"filters"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/inputs/card-filters-input",children:(0,n.jsx)(c.code,{children:"CardFiltersInput"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"a filtering table you can apply to your list of connections"}),"\n"]}),"\n",(0,n.jsxs)(c.h4,{id:"accountmembershipspendingspending-",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembership.",(0,n.jsx)("b",{children:"spending"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/spending",children:(0,n.jsx)(c.code,{children:"Spending"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(c.blockquote,{children:["\n",(0,n.jsx)(c.p,{children:"Periodic Spending"}),"\n"]}),"\n",(0,n.jsx)(c.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.a,{href:"/queries/account-membership",children:(0,n.jsx)(c.code,{children:"accountMembership"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,n.jsx)(c.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.a,{href:"/objects/account",children:(0,n.jsx)(c.code,{children:"Account"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/account-membership-edge",children:(0,n.jsx)(c.code,{children:"AccountMembershipEdge"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/add-account-memberships-success-payload",children:(0,n.jsx)(c.code,{children:"AddAccountMembershipsSuccessPayload"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/add-account-membership-success-payload",children:(0,n.jsx)(c.code,{children:"AddAccountMembershipSuccessPayload"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/bind-account-membership-success-payload",children:(0,n.jsx)(c.code,{children:"BindAccountMembershipSuccessPayload"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/card",children:(0,n.jsx)(c.code,{children:"Card"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/disable-account-membership-success-payload",children:(0,n.jsx)(c.code,{children:"DisableAccountMembershipSuccessPayload"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/pending-consent-account-membership-update",children:(0,n.jsx)(c.code,{children:"PendingConsentAccountMembershipUpdate"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(c.a,{href:"/objects/suspend-account-membership-success-payload",children:(0,n.jsx)(c.code,{children:"SuspendAccountMembershipSuccessPayload"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:c}={...(0,a.a)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},11151:(e,c,s)=>{s.d(c,{Z:()=>r,a:()=>i});var n=s(67294);const a={},d=n.createContext(a);function i(e){const c=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function r(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(d.Provider,{value:c},e.children)}}}]);