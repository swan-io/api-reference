"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[66259],{11870:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>j,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>x});var c=n(85893),d=n(11151),a=n(67294);const t={id:"consent",title:"Consent"},o=void 0,r={id:"objects/consent",title:"Consent",description:"Some sensitive operation at Swan, such as initiating a payment, require consent",source:"@site/docs/objects/consent.mdx",sourceDirName:"objects",slug:"/objects/consent",permalink:"/objects/consent",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/consent.mdx",tags:[],version:"current",frontMatter:{id:"consent",title:"Consent"},sidebar:"schemaSidebar",previous:{title:"ConsentTypeNotSupportedByServerConsentRejection",permalink:"/objects/consent-type-not-supported-by-server-consent-rejection"},next:{title:"ConsentsAlreadyLinkedToMultiConsentRejection",permalink:"/objects/consents-already-linked-to-multi-consent-rejection"}},l={},i=()=>{const e={span:"span",...(0,d.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,d.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const s={span:"span",...(0,d.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Consent.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"consentidid--",level:4},{value:'<code>Consent.<b>requireSCA</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"consentrequirescaboolean--",level:4},{value:'<code>Consent.<b>status</b></code><Bullet></Bullet><code>ConsentStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"consentstatusconsentstatus--",level:4},{value:'<code>Consent.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"consentcreatedatdatetime--",level:4},{value:'<code>Consent.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"consentupdatedatdatetime-",level:4},{value:'<code>Consent.<b>startedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"consentstartedatdatetime-",level:4},{value:'<code>Consent.<b>expiredAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"consentexpiredatdatetime-",level:4},{value:'<code>Consent.<b>purpose</b></code><Bullet></Bullet><code>ConsentPurpose!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"consentpurposeconsentpurpose--",level:4},{value:'<code>Consent.<b>consentUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"consentconsenturlstring--",level:4},{value:'<code>Consent.<b>redirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"consentredirecturlstring--",level:4},{value:'<code>Consent.<b>userId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"consentuseridstring--",level:4},{value:'<code>Consent.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"consentuseruser-",level:4},{value:'<code>Consent.<b>challenge</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"consentchallengestring-",level:4},{value:'<code>Consent.<b>acceptedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"consentacceptedatdatetime-",level:4},{value:'<code>Consent.<b>refusedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"consentrefusedatdatetime-",level:4},{value:'<code>Consent.<b>canceledAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"consentcanceledatdatetime-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:s,children:n,startOpen:t=!1})=>{const o={details:"details",summary:"summary",...(0,d.a)()},[r,l]=(0,a.useState)(t);return(0,c.jsxs)(o.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&n]})};function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"Some sensitive operation at Swan, such as initiating a payment, require consent"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-graphql",children:"type Consent {\n  id: ID!\n  requireSCA: Boolean!\n  status: ConsentStatus!\n  createdAt: DateTime!\n  updatedAt: DateTime\n  startedAt: DateTime\n  expiredAt: DateTime\n  purpose: ConsentPurpose!\n  consentUrl: String!\n  redirectUrl: String!\n  userId: String!\n  user: User\n  challenge: String\n  acceptedAt: DateTime\n  refusedAt: DateTime\n  canceledAt: DateTime\n}\n"})}),"\n",(0,c.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(s.h4,{id:"consentidid--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"id"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/id",children:(0,c.jsx)(s.code,{children:"ID!"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"unique identifier of the consent"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentrequirescaboolean--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"requireSCA"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/boolean",children:(0,c.jsx)(s.code,{children:"Boolean!"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"true"})," if the consent requires a Strong Customer Authentication"]}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentstatusconsentstatus--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"status"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/enums/consent-status",children:(0,c.jsx)(s.code,{children:"ConsentStatus!"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"status of the consent"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentcreatedatdatetime--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"createdAt"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/date-time",children:(0,c.jsx)(s.code,{children:"DateTime!"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"created date"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentupdatedatdatetime-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"updatedAt"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/date-time",children:(0,c.jsx)(s.code,{children:"DateTime"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"updated date"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentstartedatdatetime-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"startedAt"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/date-time",children:(0,c.jsx)(s.code,{children:"DateTime"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:["date when the ",(0,c.jsx)(s.code,{children:"consentUrl"})," was request the first time"]}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentexpiredatdatetime-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"expiredAt"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/date-time",children:(0,c.jsx)(s.code,{children:"DateTime"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"date when the consent expire"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentpurposeconsentpurpose--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"purpose"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/enums/consent-purpose",children:(0,c.jsx)(s.code,{children:"ConsentPurpose!"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"purpose of the consent"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentconsenturlstring--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"consentUrl"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/string",children:(0,c.jsx)(s.code,{children:"String!"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Redirect the user to this URL to start the consent flow"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentredirecturlstring--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"redirectUrl"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/string",children:(0,c.jsx)(s.code,{children:"String!"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"When the consent flow is finished the user is redirected to this URL"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentuseridstring--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"userId"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/string",children:(0,c.jsx)(s.code,{children:"String!"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"userId who initiated the consent"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentuseruser-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"user"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/user",children:(0,c.jsx)(s.code,{children:"User"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"user who initiated the consent"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentchallengestring-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"challenge"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/string",children:(0,c.jsx)(s.code,{children:"String"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"unique hash of the consent"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentacceptedatdatetime-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"acceptedAt"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/date-time",children:(0,c.jsx)(s.code,{children:"DateTime"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"date when the consent is accepted"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentrefusedatdatetime-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"refusedAt"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/date-time",children:(0,c.jsx)(s.code,{children:"DateTime"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"date when the consent is refused"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"consentcanceledatdatetime-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Consent.",(0,c.jsx)("b",{children:"canceledAt"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/scalars/date-time",children:(0,c.jsx)(s.code,{children:"DateTime"})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"date when the consent is canceled"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"/queries/consent",children:(0,c.jsx)(s.code,{children:"consent"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,c.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"/objects/accept-consent-success-payload",children:(0,c.jsx)(s.code,{children:"AcceptConsentSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/account-membership-consent-pending-status-info",children:(0,c.jsx)(s.code,{children:"AccountMembershipConsentPendingStatusInfo"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/activate-physical-card-success-payload",children:(0,c.jsx)(s.code,{children:"ActivatePhysicalCardSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/cancel-consent-success-payload",children:(0,c.jsx)(s.code,{children:"CancelConsentSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/card-consent-pending-status-info",children:(0,c.jsx)(s.code,{children:"CardConsentPendingStatusInfo"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/close-account-success-payload",children:(0,c.jsx)(s.code,{children:"CloseAccountSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/consent-edge",children:(0,c.jsx)(s.code,{children:"ConsentEdge"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/create-multi-consent-success-payload",children:(0,c.jsx)(s.code,{children:"CreateMultiConsentSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/digital-card-consent-pending-status-info",children:(0,c.jsx)(s.code,{children:"DigitalCardConsentPendingStatusInfo"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/grant-consent-with-server-signature-success-payload",children:(0,c.jsx)(s.code,{children:"GrantConsentWithServerSignatureSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/payment-consent-pending",children:(0,c.jsx)(s.code,{children:"PaymentConsentPending"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/payment-mandate-consent-pending-status-info",children:(0,c.jsx)(s.code,{children:"PaymentMandateConsentPendingStatusInfo"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/pending-consent-account-membership-update",children:(0,c.jsx)(s.code,{children:"PendingConsentAccountMembershipUpdate"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/physical-card-consent-pending-status-info",children:(0,c.jsx)(s.code,{children:"PhysicalCardConsentPendingStatusInfo"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/received-direct-debit-mandate-status-info-consent-pending",children:(0,c.jsx)(s.code,{children:"ReceivedDirectDebitMandateStatusInfoConsentPending"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/refund-success-payload",children:(0,c.jsx)(s.code,{children:"RefundSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/resume-account-membership-success-payload",children:(0,c.jsx)(s.code,{children:"ResumeAccountMembershipSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/resume-physical-card-success-payload",children:(0,c.jsx)(s.code,{children:"ResumePhysicalCardSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/return-transaction-success-payload",children:(0,c.jsx)(s.code,{children:"ReturnTransactionSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/standing-order-consent-pending-status-info",children:(0,c.jsx)(s.code,{children:"StandingOrderConsentPendingStatusInfo"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/trusted-beneficiary-consent-pending-status-info",children:(0,c.jsx)(s.code,{children:"TrustedBeneficiaryConsentPendingStatusInfo"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/update-account-membership-success-payload",children:(0,c.jsx)(s.code,{children:"UpdateAccountMembershipSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/update-card-success-payload",children:(0,c.jsx)(s.code,{children:"UpdateCardSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/view-card-numbers-success-payload",children:(0,c.jsx)(s.code,{children:"ViewCardNumbersSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/view-physical-card-numbers-success-payload",children:(0,c.jsx)(s.code,{children:"ViewPhysicalCardNumbersSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"/objects/view-physical-card-pin-success-payload",children:(0,c.jsx)(s.code,{children:"ViewPhysicalCardPinSuccessPayload"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(g,{...e})}):g(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>t});var c=n(67294);const d={},a=c.createContext(d);function t(e){const s=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),c.createElement(a.Provider,{value:s},e.children)}}}]);