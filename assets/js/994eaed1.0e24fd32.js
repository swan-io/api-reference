"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[35234],{80305:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>j,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>x,assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var s=a(85893),d=a(11151),r=a(67294);const t={id:"internal-error-rejection",title:"InternalErrorRejection"},o=void 0,i={id:"objects/internal-error-rejection",title:"InternalErrorRejection",description:"Rejection returned on unexpected server error",source:"@site/docs/objects/internal-error-rejection.mdx",sourceDirName:"objects",slug:"/objects/internal-error-rejection",permalink:"/objects/internal-error-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/internal-error-rejection.mdx",tags:[],version:"current",frontMatter:{id:"internal-error-rejection",title:"InternalErrorRejection"},sidebar:"schemaSidebar",previous:{title:"InternalDirectDebitTransaction",permalink:"/objects/internal-direct-debit-transaction"},next:{title:"InternalPaymentDirectDebitMandate",permalink:"/objects/internal-payment-direct-debit-mandate"}},c={},l=()=>{const e={span:"span",...(0,d.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const n={a:"a",...(0,d.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const n={span:"span",...(0,d.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>InternalErrorRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internalerrorrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],u=({dataOpen:e,dataClose:n,children:a,startOpen:t=!1})=>{const o={details:"details",summary:"summary",...(0,d.a)()},[i,c]=(0,r.useState)(t);return(0,s.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&a]})};function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Rejection returned on unexpected server error"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type InternalErrorRejection implements Rejection {\n  message: String!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"internalerrorrejectionmessagestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InternalErrorRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.h4,{id:"rejection-",children:[(0,s.jsx)(n.a,{href:"/interfaces/rejection",children:(0,s.jsx)(n.code,{children:"Rejection"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/unions/add-internal-direct-debit-payment-mandate-payload",children:(0,s.jsx)(n.code,{children:"AddInternalDirectDebitPaymentMandatePayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/add-international-trusted-beneficiary-payload",children:(0,s.jsx)(n.code,{children:"AddInternationalTrustedBeneficiaryPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/add-merchant-profile-payload",children:(0,s.jsx)(n.code,{children:"AddMerchantProfilePayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/add-sepa-direct-debit-payment-mandate-payload",children:(0,s.jsx)(n.code,{children:"AddSepaDirectDebitPaymentMandatePayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/add-trusted-sepa-beneficiary-payload",children:(0,s.jsx)(n.code,{children:"AddTrustedSepaBeneficiaryPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/cancel-standing-order-payload",children:(0,s.jsx)(n.code,{children:"CancelStandingOrderPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/cancel-virtual-iban-entry-payload",children:(0,s.jsx)(n.code,{children:"CancelVirtualIbanEntryPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/close-account-payload",children:(0,s.jsx)(n.code,{children:"CloseAccountPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/create-capital-deposit-case-payload",children:(0,s.jsx)(n.code,{children:"CreateCapitalDepositCasePayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/create-merchant-payment-link-payload",children:(0,s.jsx)(n.code,{children:"CreateMerchantPaymentLinkPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/delete-supporting-document-payload",children:(0,s.jsx)(n.code,{children:"DeleteSupportingDocumentPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/disable-account-membership-payload",children:(0,s.jsx)(n.code,{children:"DisableAccountMembershipPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/finalize-onboarding-payload",children:(0,s.jsx)(n.code,{children:"FinalizeOnboardingPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/generate-capital-deposit-document-upload-url-payload",children:(0,s.jsx)(n.code,{children:"GenerateCapitalDepositDocumentUploadUrlPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/generate-supporting-document-upload-url-payload",children:(0,s.jsx)(n.code,{children:"GenerateSupportingDocumentUploadUrlPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/initiate-check-merchant-payment-payload",children:(0,s.jsx)(n.code,{children:"InitiateCheckMerchantPaymentPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/initiate-credit-transfers-payload",children:(0,s.jsx)(n.code,{children:"InitiateCreditTransfersPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/initiate-international-credit-transfer-response-payload",children:(0,s.jsx)(n.code,{children:"InitiateInternationalCreditTransferResponsePayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/initiate-merchant-payment-collection-payload",children:(0,s.jsx)(n.code,{children:"InitiateMerchantPaymentCollectionPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/probe-webhook-endpoint-payload",children:(0,s.jsx)(n.code,{children:"ProbeWebhookEndpointPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/remove-webhook-subscription-payload",children:(0,s.jsx)(n.code,{children:"RemoveWebhookSubscriptionPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/replay-webhook-event-payload",children:(0,s.jsx)(n.code,{children:"ReplayWebhookEventPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/request-merchant-payment-methods-payload",children:(0,s.jsx)(n.code,{children:"RequestMerchantPaymentMethodsPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/request-merchant-payment-methods-update-payload",children:(0,s.jsx)(n.code,{children:"RequestMerchantPaymentMethodsUpdatePayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/request-merchant-profile-update-payload",children:(0,s.jsx)(n.code,{children:"RequestMerchantProfileUpdatePayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/schedule-standing-order-payload",children:(0,s.jsx)(n.code,{children:"ScheduleStandingOrderPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/suspend-account-membership-payload",children:(0,s.jsx)(n.code,{children:"SuspendAccountMembershipPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/update-account-payload",children:(0,s.jsx)(n.code,{children:"UpdateAccountPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/update-company-onboarding-payload",children:(0,s.jsx)(n.code,{children:"UpdateCompanyOnboardingPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/update-individual-onboarding-payload",children:(0,s.jsx)(n.code,{children:"UpdateIndividualOnboardingPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/update-supporting-document-payload",children:(0,s.jsx)(n.code,{children:"UpdateSupportingDocumentPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/webhook-subscription-payload",children:(0,s.jsx)(n.code,{children:"WebhookSubscriptionPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"})]})]})}function y(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>t});var s=a(67294);const d={},r=s.createContext(d);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);