"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[46669],{19756:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>j,Bullet:()=>t,Details:()=>u,SpecifiedBy:()=>x,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var d=n(85893),s=n(11151),o=n(67294);const i={id:"validation-rejection",title:"ValidationRejection"},c=void 0,r={id:"objects/validation-rejection",title:"ValidationRejection",description:"Rejection returned if an input contains invalid data",source:"@site/docs/objects/validation-rejection.mdx",sourceDirName:"objects",slug:"/objects/validation-rejection",permalink:"/objects/validation-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/validation-rejection.mdx",tags:[],version:"current",frontMatter:{id:"validation-rejection",title:"ValidationRejection"},sidebar:"schemaSidebar",previous:{title:"ValidationFieldError",permalink:"/objects/validation-field-error"},next:{title:"VerifiedStatusInfo",permalink:"/objects/verified-status-info"}},l={},t=()=>{const e={span:"span",...(0,s.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const a={a:"a",...(0,s.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const a={span:"span",...(0,s.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ValidationRejection.<b>fields</b></code><Bullet></Bullet><code>[ValidationFieldError!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"validationrejectionfieldsvalidationfielderror--",level:4},{value:'<code>ValidationRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"validationrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],u=({dataOpen:e,dataClose:a,children:n,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,s.a)()},[r,l]=(0,o.useState)(i);return(0,d.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&n]})};function y(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Rejection returned if an input contains invalid data"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type ValidationRejection implements Rejection {\n  fields: [ValidationFieldError!]!\n  message: String!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"validationrejectionfieldsvalidationfielderror--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ValidationRejection.",(0,d.jsx)("b",{children:"fields"})]})}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/objects/validation-field-error",children:(0,d.jsx)(a.code,{children:"[ValidationFieldError!]!"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"validationrejectionmessagestring--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ValidationRejection.",(0,d.jsx)("b",{children:"message"})]})}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(a.h4,{id:"rejection-",children:[(0,d.jsx)(a.a,{href:"/interfaces/rejection",children:(0,d.jsx)(a.code,{children:"Rejection"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsx)(a.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/unions/activate-physical-card-payload",children:(0,d.jsx)(a.code,{children:"ActivatePhysicalCardPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-account-membership-payload",children:(0,d.jsx)(a.code,{children:"AddAccountMembershipPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-account-memberships-payload",children:(0,d.jsx)(a.code,{children:"AddAccountMembershipsPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-card-payload",children:(0,d.jsx)(a.code,{children:"AddCardPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-cards-payload",children:(0,d.jsx)(a.code,{children:"AddCardsPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-cards-with-group-delivery-payload",children:(0,d.jsx)(a.code,{children:"AddCardsWithGroupDeliveryPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-digital-card-payload",children:(0,d.jsx)(a.code,{children:"AddDigitalCardPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-direct-debit-funding-source-payload",children:(0,d.jsx)(a.code,{children:"AddDirectDebitFundingSourcePayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-external-account-balance-payload",children:(0,d.jsx)(a.code,{children:"AddExternalAccountBalancePayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-external-account-payload",children:(0,d.jsx)(a.code,{children:"AddExternalAccountPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-funding-limit-settings-change-request-payload",children:(0,d.jsx)(a.code,{children:"AddFundingLimitSettingsChangeRequestPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-international-trusted-beneficiary-payload",children:(0,d.jsx)(a.code,{children:"AddInternationalTrustedBeneficiaryPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-merchant-profile-payload",children:(0,d.jsx)(a.code,{children:"AddMerchantProfilePayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-or-update-external-account-balance-payload",children:(0,d.jsx)(a.code,{children:"AddOrUpdateExternalAccountBalancePayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-sepa-direct-debit-payment-mandate-payload",children:(0,d.jsx)(a.code,{children:"AddSepaDirectDebitPaymentMandatePayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-single-use-virtual-card-payload",children:(0,d.jsx)(a.code,{children:"AddSingleUseVirtualCardPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-single-use-virtual-cards-payload",children:(0,d.jsx)(a.code,{children:"AddSingleUseVirtualCardsPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/add-virtual-iban-entry-payload",children:(0,d.jsx)(a.code,{children:"AddVirtualIbanEntryPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/allow-sdd-payload",children:(0,d.jsx)(a.code,{children:"AllowSddPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/allow-sdd-virtual-iban-entry-payload",children:(0,d.jsx)(a.code,{children:"AllowSddVirtualIbanEntryPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/bind-account-membership-payload",children:(0,d.jsx)(a.code,{children:"BindAccountMembershipPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/cancel-card-payload",children:(0,d.jsx)(a.code,{children:"CancelCardPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/cancel-digital-card-payload",children:(0,d.jsx)(a.code,{children:"CancelDigitalCardPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/cancel-physical-card-payload",children:(0,d.jsx)(a.code,{children:"CancelPhysicalCardPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/cancel-virtual-iban-entry-payload",children:(0,d.jsx)(a.code,{children:"CancelVirtualIbanEntryPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/close-account-payload",children:(0,d.jsx)(a.code,{children:"CloseAccountPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/confirm-physical-card-renewal-payload",children:(0,d.jsx)(a.code,{children:"ConfirmPhysicalCardRenewalPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/create-capital-deposit-case-payload",children:(0,d.jsx)(a.code,{children:"CreateCapitalDepositCasePayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/create-merchant-payment-link-payload",children:(0,d.jsx)(a.code,{children:"CreateMerchantPaymentLinkPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/delete-supporting-document-payload",children:(0,d.jsx)(a.code,{children:"DeleteSupportingDocumentPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/deny-sdd-payload",children:(0,d.jsx)(a.code,{children:"DenySddPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/deny-sdd-virtual-iban-entry-payload",children:(0,d.jsx)(a.code,{children:"DenySddVirtualIbanEntryPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/disable-account-membership-payload",children:(0,d.jsx)(a.code,{children:"DisableAccountMembershipPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/finalize-onboarding-payload",children:(0,d.jsx)(a.code,{children:"FinalizeOnboardingPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/generate-supporting-document-upload-url-payload",children:(0,d.jsx)(a.code,{children:"GenerateSupportingDocumentUploadUrlPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/initiate-check-merchant-payment-payload",children:(0,d.jsx)(a.code,{children:"InitiateCheckMerchantPaymentPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/initiate-funding-request-payload",children:(0,d.jsx)(a.code,{children:"InitiateFundingRequestPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/initiate-international-credit-transfer-response-payload",children:(0,d.jsx)(a.code,{children:"InitiateInternationalCreditTransferResponsePayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/initiate-merchant-payment-collection-payload",children:(0,d.jsx)(a.code,{children:"InitiateMerchantPaymentCollectionPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/onboard-company-account-holder-payload",children:(0,d.jsx)(a.code,{children:"OnboardCompanyAccountHolderPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/onboard-individual-account-holder-payload",children:(0,d.jsx)(a.code,{children:"OnboardIndividualAccountHolderPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/print-physical-card-payload",children:(0,d.jsx)(a.code,{children:"PrintPhysicalCardPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/request-merchant-payment-methods-payload",children:(0,d.jsx)(a.code,{children:"RequestMerchantPaymentMethodsPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/request-merchant-profile-update-payload",children:(0,d.jsx)(a.code,{children:"RequestMerchantProfileUpdatePayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/request-supporting-document-collection-review-payload",children:(0,d.jsx)(a.code,{children:"RequestSupportingDocumentCollectionReviewPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/resume-account-membership-payload",children:(0,d.jsx)(a.code,{children:"ResumeAccountMembershipPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/resume-physical-card-payload",children:(0,d.jsx)(a.code,{children:"ResumePhysicalCardPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/suspend-account-membership-payload",children:(0,d.jsx)(a.code,{children:"SuspendAccountMembershipPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/suspend-physical-card-payload",children:(0,d.jsx)(a.code,{children:"SuspendPhysicalCardPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/update-account-holder-payload",children:(0,d.jsx)(a.code,{children:"UpdateAccountHolderPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/update-account-membership-payload",children:(0,d.jsx)(a.code,{children:"UpdateAccountMembershipPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/update-account-payload",children:(0,d.jsx)(a.code,{children:"UpdateAccountPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/update-card-payload",children:(0,d.jsx)(a.code,{children:"UpdateCardPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/update-company-onboarding-payload",children:(0,d.jsx)(a.code,{children:"UpdateCompanyOnboardingPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/update-individual-onboarding-payload",children:(0,d.jsx)(a.code,{children:"UpdateIndividualOnboardingPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/update-supporting-document-payload",children:(0,d.jsx)(a.code,{children:"UpdateSupportingDocumentPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/view-card-numbers-payload",children:(0,d.jsx)(a.code,{children:"ViewCardNumbersPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/view-physical-card-numbers-payload",children:(0,d.jsx)(a.code,{children:"ViewPhysicalCardNumbersPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(t,{}),(0,d.jsx)(a.a,{href:"/unions/view-physical-card-pin-payload",children:(0,d.jsx)(a.code,{children:"ViewPhysicalCardPinPayload"})}),"  ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"})]})]})}function b(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(y,{...e})}):y(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>i});var d=n(67294);const s={},o=d.createContext(s);function i(e){const a=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(o.Provider,{value:a},e.children)}}}]);