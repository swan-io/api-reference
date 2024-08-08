"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43497],{58248:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>a,default:()=>j,frontMatter:()=>s,metadata:()=>r,toc:()=>x});var c=t(74848),d=t(28453),o=t(96540);const s={id:"account-holder",title:"AccountHolder"},a=void 0,r={id:"objects/account-holder",title:"AccountHolder",description:"The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you.",source:"@site/docs/objects/account-holder.mdx",sourceDirName:"objects",slug:"/objects/account-holder",permalink:"/objects/account-holder",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/account-holder.mdx",tags:[],version:"current",frontMatter:{id:"account-holder",title:"AccountHolder"},sidebar:"schemaSidebar",previous:{title:"AccountHolderWaitingForInformationVerificationStatusInfo",permalink:"/objects/account-holder-waiting-for-information-verification-status-info"},next:{title:"AccountMembershipBindingUserErrorStatusInfo",permalink:"/objects/account-membership-binding-user-error-status-info"}},l={},i=()=>{const e={span:"span",...(0,d.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,d.R)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,d.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,d.R)()},[r,l]=(0,o.useState)(s);return(0,c.jsxs)(a.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountHolder.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderidid--",level:4},{value:'<code>AccountHolder.<b>verificationStatus</b></code><Bullet></Bullet><code>VerificationStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderverificationstatusverificationstatus--",level:4},{value:'<code>AccountHolder.<b>verificationStatusInfo</b></code><Bullet></Bullet><code>AccountHolderVerificationStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderverificationstatusinfoaccountholderverificationstatusinfo--",level:4},{value:'<code>AccountHolder.<b>info</b></code><Bullet></Bullet><code>AccountHolderInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderinfoaccountholderinfo--",level:4},{value:'<code>AccountHolder.<b>statusInfo</b></code><Bullet></Bullet><code>AccountHolderStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderstatusinfoaccountholderstatusinfo-",level:4},{value:'<code>AccountHolder.<b>residencyAddress</b></code><Bullet></Bullet><code>AddressInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderresidencyaddressaddressinfo--",level:4},{value:'<code>AccountHolder.<b>createdDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercreateddatedatetime--",level:4},{value:'<code>AccountHolder.<b>updatedDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderupdateddatedatetime--",level:4},{value:'<code>AccountHolder.<b>accounts</b></code><Bullet></Bullet><code>AccountConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderaccountsaccountconnection--",level:4},{value:'<code>AccountHolder.accounts.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderaccountsfirstint--",level:5},{value:'<code>AccountHolder.accounts.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderaccountsbeforestring-",level:5},{value:'<code>AccountHolder.accounts.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderaccountsafterstring-",level:5},{value:'<code>AccountHolder.accounts.<b>orderBy</b></code><Bullet></Bullet><code>AccountOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderaccountsorderbyaccountorderbyinput-",level:5},{value:'<code>AccountHolder.<b>supportingDocumentCollections</b></code><Bullet></Bullet><code>SupportingDocumentCollectionConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholdersupportingdocumentcollectionssupportingdocumentcollectionconnection--",level:4},{value:'<code>AccountHolder.supportingDocumentCollections.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholdersupportingdocumentcollectionsfirstint--",level:5},{value:'<code>AccountHolder.supportingDocumentCollections.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdersupportingdocumentcollectionsbeforestring-",level:5},{value:'<code>AccountHolder.supportingDocumentCollections.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdersupportingdocumentcollectionsafterstring-",level:5},{value:'<code>AccountHolder.supportingDocumentCollections.<b>filters</b></code><Bullet></Bullet><code>SupportingDocumentCollectionFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdersupportingdocumentcollectionsfilterssupportingdocumentcollectionfilterinput-",level:5},{value:'<code>AccountHolder.<b>fundingLimitSettingsChangeRequests</b></code><Bullet></Bullet><code>FundingLimitSettingsChangeRequestConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderfundinglimitsettingschangerequestsfundinglimitsettingschangerequestconnection--",level:4},{value:'<code>AccountHolder.fundingLimitSettingsChangeRequests.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderfundinglimitsettingschangerequestsfirstint--",level:5},{value:'<code>AccountHolder.fundingLimitSettingsChangeRequests.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderfundinglimitsettingschangerequestsbeforestring-",level:5},{value:'<code>AccountHolder.fundingLimitSettingsChangeRequests.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderfundinglimitsettingschangerequestsafterstring-",level:5},{value:'<code>AccountHolder.<b>onboarding</b></code><Bullet></Bullet><code>Onboarding</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderonboardingonboarding-",level:4},{value:'<code>AccountHolder.<b>externalAccounts</b></code><Bullet></Bullet><code>ExternalAccountConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderexternalaccountsexternalaccountconnection--",level:4},{value:'<code>AccountHolder.externalAccounts.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderexternalaccountsfirstint--",level:5},{value:'<code>AccountHolder.externalAccounts.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderexternalaccountsbeforestring-",level:5},{value:'<code>AccountHolder.externalAccounts.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderexternalaccountsafterstring-",level:5},{value:'<code>AccountHolder.<b>paymentMandates</b></code><Bullet></Bullet><code>PaymentMandateConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderpaymentmandatespaymentmandateconnection-",level:4},{value:'<code>AccountHolder.paymentMandates.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderpaymentmandatesfirstint--",level:5},{value:'<code>AccountHolder.paymentMandates.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderpaymentmandatesafterstring-",level:5},{value:'<code>AccountHolder.paymentMandates.<b>orderBy</b></code><Bullet></Bullet><code>PaymentMandateOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderpaymentmandatesorderbypaymentmandateorderbyinput-",level:5},{value:'<code>AccountHolder.paymentMandates.<b>filters</b></code><Bullet></Bullet><code>PaymentMandateFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderpaymentmandatesfilterspaymentmandatefiltersinput-",level:5},{value:'<code>AccountHolder.<b>fundingLimitSettings</b></code><Bullet></Bullet><code>FundingLimitSettings</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderfundinglimitsettingsfundinglimitsettings-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function b(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"type AccountHolder {\n  id: ID!\n  verificationStatus: VerificationStatus!\n  verificationStatusInfo: AccountHolderVerificationStatusInfo!\n  info: AccountHolderInfo!\n  statusInfo: AccountHolderStatusInfo\n  residencyAddress: AddressInfo!\n  createdDate: DateTime!\n  updatedDate: DateTime!\n  accounts(\n    first: Int! = 50\n    before: String\n    after: String\n    orderBy: AccountOrderByInput\n  ): AccountConnection!\n  supportingDocumentCollections(\n    first: Int! = 50\n    before: String\n    after: String\n    filters: SupportingDocumentCollectionFilterInput\n  ): SupportingDocumentCollectionConnection!\n  fundingLimitSettingsChangeRequests(\n    first: Int! = 50\n    before: String\n    after: String\n  ): FundingLimitSettingsChangeRequestConnection!\n  onboarding: Onboarding\n  externalAccounts(\n    first: Int! = 50\n    before: String\n    after: String\n  ): ExternalAccountConnection!\n  paymentMandates(\n    first: Int! = 50\n    after: String\n    orderBy: PaymentMandateOrderByInput\n    filters: PaymentMandateFiltersInput\n  ): PaymentMandateConnection\n  fundingLimitSettings: FundingLimitSettings\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderidid--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"id"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/id",children:(0,c.jsx)(n.code,{children:"ID!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"Unique identifier of the account holder."}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderverificationstatusverificationstatus--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"verificationStatus"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/enums/verification-status",children:(0,c.jsx)(n.code,{children:"VerificationStatus!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(n.p,{children:["Verification status.\n",(0,c.jsx)(n.em,{children:"Banking regulations require financial institutions such as Swan to know and verify their customers in order to comply with their anti-money laundering and terrorist financing obligations. In banking jargon, we talk about KYC (Know Your Customers) procedure"})]}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderverificationstatusinfoaccountholderverificationstatusinfo--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"verificationStatusInfo"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/interfaces/account-holder-verification-status-info",children:(0,c.jsx)(n.code,{children:"AccountHolderVerificationStatusInfo!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,c.jsx)(n.p,{children:"Account holder verification Status information."}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderinfoaccountholderinfo--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"info"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/interfaces/account-holder-info",children:(0,c.jsx)(n.code,{children:"AccountHolderInfo!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,c.jsx)(n.p,{children:"Account holder type information."}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderstatusinfoaccountholderstatusinfo-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"statusInfo"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/interfaces/account-holder-status-info",children:(0,c.jsx)(n.code,{children:"AccountHolderStatusInfo"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,c.jsx)(n.p,{children:"Account holder status information."}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderresidencyaddressaddressinfo--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"residencyAddress"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/address-info",children:(0,c.jsx)(n.code,{children:"AddressInfo!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"Residency address."}),"\n",(0,c.jsxs)(n.h4,{id:"accountholdercreateddatedatetime--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"createdDate"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/date-time",children:(0,c.jsx)(n.code,{children:"DateTime!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"Created date."}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderupdateddatedatetime--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"updatedDate"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/date-time",children:(0,c.jsx)(n.code,{children:"DateTime!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"Updated date."}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderaccountsaccountconnection--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"accounts"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/account-connection",children:(0,c.jsx)(n.code,{children:"AccountConnection!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"List of accounts owned by the account holder."}),"\n",(0,c.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,c.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderaccountsfirstint--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.accounts.",(0,c.jsx)("b",{children:"first"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/int",children:(0,c.jsx)(n.code,{children:"Int!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the number of elements to load (maximum: 100)"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderaccountsbeforestring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.accounts.",(0,c.jsx)("b",{children:"before"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the index (a unique reference in string form) from which you will load the preceding elements"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderaccountsafterstring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.accounts.",(0,c.jsx)("b",{children:"after"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderaccountsorderbyaccountorderbyinput-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.accounts.",(0,c.jsx)("b",{children:"orderBy"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/inputs/account-order-by-input",children:(0,c.jsx)(n.code,{children:"AccountOrderByInput"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsx)(n.p,{children:"an order you can apply to your list of connections"}),"\n",(0,c.jsxs)(n.h4,{id:"accountholdersupportingdocumentcollectionssupportingdocumentcollectionconnection--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"supportingDocumentCollections"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/supporting-document-collection-connection",children:(0,c.jsx)(n.code,{children:"SupportingDocumentCollectionConnection!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"List of supporting document collection for an account holder"}),"\n",(0,c.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,c.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,c.jsxs)(n.h5,{id:"accountholdersupportingdocumentcollectionsfirstint--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.supportingDocumentCollections.",(0,c.jsx)("b",{children:"first"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/int",children:(0,c.jsx)(n.code,{children:"Int!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the number of elements to load (maximum: 100)"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholdersupportingdocumentcollectionsbeforestring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.supportingDocumentCollections.",(0,c.jsx)("b",{children:"before"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the index (a unique reference in string form) from which you will load the preceding elements"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholdersupportingdocumentcollectionsafterstring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.supportingDocumentCollections.",(0,c.jsx)("b",{children:"after"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholdersupportingdocumentcollectionsfilterssupportingdocumentcollectionfilterinput-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.supportingDocumentCollections.",(0,c.jsx)("b",{children:"filters"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/inputs/supporting-document-collection-filter-input",children:(0,c.jsx)(n.code,{children:"SupportingDocumentCollectionFilterInput"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsx)(n.p,{children:"When the list of supporting document collections needs to be filtered"}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderfundinglimitsettingschangerequestsfundinglimitsettingschangerequestconnection--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"fundingLimitSettingsChangeRequests"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/funding-limit-settings-change-request-connection",children:(0,c.jsx)(n.code,{children:"FundingLimitSettingsChangeRequestConnection!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"List of funding limit settings change request for an account holder"}),"\n",(0,c.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,c.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderfundinglimitsettingschangerequestsfirstint--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.fundingLimitSettingsChangeRequests.",(0,c.jsx)("b",{children:"first"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/int",children:(0,c.jsx)(n.code,{children:"Int!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the number of elements to load (maximum: 100)"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderfundinglimitsettingschangerequestsbeforestring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.fundingLimitSettingsChangeRequests.",(0,c.jsx)("b",{children:"before"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the index (a unique reference in string form) from which you will load the preceding elements"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderfundinglimitsettingschangerequestsafterstring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.fundingLimitSettingsChangeRequests.",(0,c.jsx)("b",{children:"after"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderonboardingonboarding-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"onboarding"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/onboarding",children:(0,c.jsx)(n.code,{children:"Onboarding"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"Account holder onboarding"}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderexternalaccountsexternalaccountconnection--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"externalAccounts"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/external-account-connection",children:(0,c.jsx)(n.code,{children:"ExternalAccountConnection!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"List of external account owned by the account holder"}),"\n",(0,c.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,c.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderexternalaccountsfirstint--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.externalAccounts.",(0,c.jsx)("b",{children:"first"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/int",children:(0,c.jsx)(n.code,{children:"Int!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the number of elements to load (maximum: 100)"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderexternalaccountsbeforestring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.externalAccounts.",(0,c.jsx)("b",{children:"before"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the index (a unique reference in string form) from which you will load the preceding elements"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderexternalaccountsafterstring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.externalAccounts.",(0,c.jsx)("b",{children:"after"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderpaymentmandatespaymentmandateconnection-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"paymentMandates"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/payment-mandate-connection",children:(0,c.jsx)(n.code,{children:"PaymentMandateConnection"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"A list of Payment Mandates for an account holder."}),"\n",(0,c.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,c.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderpaymentmandatesfirstint--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.paymentMandates.",(0,c.jsx)("b",{children:"first"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/int",children:(0,c.jsx)(n.code,{children:"Int!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the number of elements to load (default value 50, maximum: 100)"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderpaymentmandatesafterstring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.paymentMandates.",(0,c.jsx)("b",{children:"after"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderpaymentmandatesorderbypaymentmandateorderbyinput-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.paymentMandates.",(0,c.jsx)("b",{children:"orderBy"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/inputs/payment-mandate-order-by-input",children:(0,c.jsx)(n.code,{children:"PaymentMandateOrderByInput"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsx)(n.p,{children:"an order you can apply to your list of connections (default value updatedAt desc)"}),"\n",(0,c.jsxs)(n.h5,{id:"accountholderpaymentmandatesfilterspaymentmandatefiltersinput-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.paymentMandates.",(0,c.jsx)("b",{children:"filters"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/inputs/payment-mandate-filters-input",children:(0,c.jsx)(n.code,{children:"PaymentMandateFiltersInput"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsx)(n.p,{children:"a filtering table you can apply to your list of connections"}),"\n",(0,c.jsxs)(n.h4,{id:"accountholderfundinglimitsettingsfundinglimitsettings-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolder.",(0,c.jsx)("b",{children:"fundingLimitSettings"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/funding-limit-settings",children:(0,c.jsx)(n.code,{children:"FundingLimitSettings"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"Funding limit settings"}),"\n",(0,c.jsx)(n.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/queries/account-holder",children:(0,c.jsx)(n.code,{children:"accountHolder"})}),"  ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,c.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/objects/account",children:(0,c.jsx)(n.code,{children:"Account"})}),"  ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/account-holder-edge",children:(0,c.jsx)(n.code,{children:"AccountHolderEdge"})}),"  ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/external-account",children:(0,c.jsx)(n.code,{children:"ExternalAccount"})}),"  ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/internal-payment-direct-debit-mandate",children:(0,c.jsx)(n.code,{children:"InternalPaymentDirectDebitMandate"})}),"  ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/onboarding",children:(0,c.jsx)(n.code,{children:"Onboarding"})}),"  ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/interfaces/payment-mandate",children:(0,c.jsx)(n.code,{children:"PaymentMandate"})}),"  ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"interface"}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/sepapayment-direct-debit-mandate",children:(0,c.jsx)(n.code,{children:"SEPAPaymentDirectDebitMandate"})}),"  ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/update-account-holder-success-payload",children:(0,c.jsx)(n.code,{children:"UpdateAccountHolderSuccessPayload"})}),"  ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(b,{...e})}):b(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var c=t(96540);const d={},o=c.createContext(d);function s(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);