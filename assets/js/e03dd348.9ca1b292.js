"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73924],{75210:(e,n,c)=>{c.r(n),c.d(n,{Badge:()=>x,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>j,assets:()=>r,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var o=c(85893),s=c(11151),t=c(67294);const a={id:"page-info",title:"PageInfo"},d=void 0,i={id:"objects/page-info",title:"PageInfo",description:"Implements PageInfo from the Relay Connections Specification - information about a page in the pagination mechanism",source:"@site/docs/objects/page-info.mdx",sourceDirName:"objects",slug:"/objects/page-info",permalink:"/objects/page-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/page-info.mdx",tags:[],version:"current",frontMatter:{id:"page-info",title:"PageInfo"},sidebar:"schemaSidebar",previous:{title:"Onboarding",permalink:"/objects/onboarding"},next:{title:"PartnershipAcceptedStatusInfo",permalink:"/objects/partnership-accepted-status-info"}},r={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},j=e=>{const n={a:"a",...(0,s.a)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const n={span:"span",...(0,s.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PageInfo.<b>hasNextPage</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"pageinfohasnextpageboolean-",level:4},{value:'<code>PageInfo.<b>hasPreviousPage</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"pageinfohaspreviouspageboolean-",level:4},{value:'<code>PageInfo.<b>startCursor</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"pageinfostartcursorstring-",level:4},{value:'<code>PageInfo.<b>endCursor</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"pageinfoendcursorstring-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:n,children:c,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,s.a)()},[i,r]=(0,t.useState)(a);return(0,o.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&c]})};function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Implements PageInfo from the Relay Connections Specification - information about a page in the pagination mechanism"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type PageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n  startCursor: String\n  endCursor: String\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"pageinfohasnextpageboolean-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PageInfo.",(0,o.jsx)("b",{children:"hasNextPage"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/scalars/boolean",children:(0,o.jsx)(n.code,{children:"Boolean"})})," ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Indicates whether more edges exist following this page"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"pageinfohaspreviouspageboolean-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PageInfo.",(0,o.jsx)("b",{children:"hasPreviousPage"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/scalars/boolean",children:(0,o.jsx)(n.code,{children:"Boolean"})})," ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Indicates whether more edges exist preceding this page"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"pageinfostartcursorstring-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PageInfo.",(0,o.jsx)("b",{children:"startCursor"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/scalars/string",children:(0,o.jsx)(n.code,{children:"String"})})," ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Opaque identifier pointing to the first node of the page"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"pageinfoendcursorstring-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PageInfo.",(0,o.jsx)("b",{children:"endCursor"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/scalars/string",children:(0,o.jsx)(n.code,{children:"String"})})," ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Opaque identifier pointing to the last node of the page"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/objects/account-connection",children:(0,o.jsx)(n.code,{children:"AccountConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/account-holder-connection",children:(0,o.jsx)(n.code,{children:"AccountHolderConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/account-membership-connection",children:(0,o.jsx)(n.code,{children:"AccountMembershipConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/capital-deposit-case-connection",children:(0,o.jsx)(n.code,{children:"CapitalDepositCaseConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/card-connection",children:(0,o.jsx)(n.code,{children:"CardConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/interfaces/connection",children:(0,o.jsx)(n.code,{children:"Connection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"interface"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/consent-connection",children:(0,o.jsx)(n.code,{children:"ConsentConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/digital-card-connection",children:(0,o.jsx)(n.code,{children:"DigitalCardConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/external-account-connection",children:(0,o.jsx)(n.code,{children:"ExternalAccountConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/external-balance-connection",children:(0,o.jsx)(n.code,{children:"ExternalBalanceConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/funding-limit-settings-change-request-connection",children:(0,o.jsx)(n.code,{children:"FundingLimitSettingsChangeRequestConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/funding-source-connection",children:(0,o.jsx)(n.code,{children:"FundingSourceConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/identification-connection",children:(0,o.jsx)(n.code,{children:"IdentificationConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/invoice-connection",children:(0,o.jsx)(n.code,{children:"InvoiceConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/legal-document-connection",children:(0,o.jsx)(n.code,{children:"LegalDocumentConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/merchant-profile-connection",children:(0,o.jsx)(n.code,{children:"MerchantProfileConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/onboarding-connection",children:(0,o.jsx)(n.code,{children:"OnboardingConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/payment-connection",children:(0,o.jsx)(n.code,{children:"PaymentConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/payment-mandate-connection",children:(0,o.jsx)(n.code,{children:"PaymentMandateConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/received-direct-debit-mandate-connection",children:(0,o.jsx)(n.code,{children:"ReceivedDirectDebitMandateConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/standing-order-connection",children:(0,o.jsx)(n.code,{children:"StandingOrderConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/statement-connection",children:(0,o.jsx)(n.code,{children:"StatementConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/supporting-document-collection-connection",children:(0,o.jsx)(n.code,{children:"SupportingDocumentCollectionConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/transaction-connection",children:(0,o.jsx)(n.code,{children:"TransactionConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/trusted-beneficiary-connection",children:(0,o.jsx)(n.code,{children:"TrustedBeneficiaryConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/user-connection",children:(0,o.jsx)(n.code,{children:"UserConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/virtual-ibanentry-connection",children:(0,o.jsx)(n.code,{children:"VirtualIBANEntryConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/webhook-event-logs-connection",children:(0,o.jsx)(n.code,{children:"WebhookEventLogsConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/webhook-subscriptions-connection",children:(0,o.jsx)(n.code,{children:"WebhookSubscriptionsConnection"})}),"  ",(0,o.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>d,a:()=>a});var o=c(67294);const s={},t=o.createContext(s);function a(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);