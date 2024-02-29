"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[95258],{45819:(e,c,t)=>{t.r(c),t.d(c,{Badge:()=>x,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>l,assets:()=>j,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>b});var s=t(85893),o=t(11151),n=t(67294);const d={id:"rejection",title:"Rejection"},a=void 0,r={id:"interfaces/rejection",title:"Rejection",description:"No description",source:"@site/docs/interfaces/rejection.mdx",sourceDirName:"interfaces",slug:"/interfaces/rejection",permalink:"/interfaces/rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/rejection.mdx",tags:[],version:"current",frontMatter:{id:"rejection",title:"Rejection"},sidebar:"schemaSidebar",previous:{title:"ReceivedDirectDebitMandate",permalink:"/interfaces/received-direct-debit-mandate"},next:{title:"SEPACreditTransferCreditor",permalink:"/interfaces/sepacredit-transfer-creditor"}},j={},i=()=>{const e={span:"span",...(0,o.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const c={a:"a",...(0,o.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(c.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const c={span:"span",...(0,o.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Rejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rejectionmessagestring--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],h=({dataOpen:e,dataClose:c,children:t,startOpen:d=!1})=>{const a={details:"details",summary:"summary",...(0,o.a)()},[r,j]=(0,n.useState)(d);return(0,s.jsxs)(a.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(a.summary,{onClick:e=>{e.preventDefault(),j((e=>!e))},style:{listStyle:"none"},children:r?e:c}),r&&t]})};function g(e){const c={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.p,{children:"No description"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-graphql",children:"interface Rejection {\n  message: String!\n}\n"})}),"\n",(0,s.jsx)(c.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(c.h4,{id:"rejectionmessagestring--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Rejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/scalars/string",children:(0,s.jsx)(c.code,{children:"String!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(c.blockquote,{children:"\n"}),"\n",(0,s.jsx)(c.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.a,{href:"/objects/account-holder-not-found-rejection",children:(0,s.jsx)(c.code,{children:"AccountHolderNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/account-holder-type-individual-rejection",children:(0,s.jsx)(c.code,{children:"AccountHolderTypeIndividualRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/account-membership-cannot-be-disabled-rejection",children:(0,s.jsx)(c.code,{children:"AccountMembershipCannotBeDisabledRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/account-membership-cannot-be-updated-rejection",children:(0,s.jsx)(c.code,{children:"AccountMembershipCannotBeUpdatedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/account-membership-not-allowed-rejection",children:(0,s.jsx)(c.code,{children:"AccountMembershipNotAllowedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/account-membership-not-found-rejection",children:(0,s.jsx)(c.code,{children:"AccountMembershipNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/account-membership-not-ready-to-be-bound-rejection",children:(0,s.jsx)(c.code,{children:"AccountMembershipNotReadyToBeBoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/account-not-eligible-rejection",children:(0,s.jsx)(c.code,{children:"AccountNotEligibleRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/account-not-found-rejection",children:(0,s.jsx)(c.code,{children:"AccountNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/account-verification-already-rejected-rejection",children:(0,s.jsx)(c.code,{children:"AccountVerificationAlreadyRejectedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/account-verification-wrong-status-rejection",children:(0,s.jsx)(c.code,{children:"AccountVerificationWrongStatusRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/action-not-allowed-rejection",children:(0,s.jsx)(c.code,{children:"ActionNotAllowedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/adding-cards-to-different-accounts-rejection",children:(0,s.jsx)(c.code,{children:"AddingCardsToDifferentAccountsRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/already-valid-physical-card-rejection",children:(0,s.jsx)(c.code,{children:"AlreadyValidPhysicalCardRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/apple-pay-not-allowed-for-project-rejection",children:(0,s.jsx)(c.code,{children:"ApplePayNotAllowedForProjectRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/bad-account-status-rejection",children:(0,s.jsx)(c.code,{children:"BadAccountStatusRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/bad-request-rejection",children:(0,s.jsx)(c.code,{children:"BadRequestRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/cannot-activate-physical-card-rejection",children:(0,s.jsx)(c.code,{children:"CannotActivatePhysicalCardRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/capital-deposit-document-can-not-be-uploaded",children:(0,s.jsx)(c.code,{children:"CapitalDepositDocumentCanNotBeUploaded"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/capital-deposit-document-can-not-be-uploaded-rejection",children:(0,s.jsx)(c.code,{children:"CapitalDepositDocumentCanNotBeUploadedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/card-can-not-be-digitalized-rejection",children:(0,s.jsx)(c.code,{children:"CardCanNotBeDigitalizedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/card-not-found-rejection",children:(0,s.jsx)(c.code,{children:"CardNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/card-product-disabled-rejection",children:(0,s.jsx)(c.code,{children:"CardProductDisabledRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/card-product-not-applicable-to-physical-cards-rejection",children:(0,s.jsx)(c.code,{children:"CardProductNotApplicableToPhysicalCardsRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/card-product-not-found-rejection",children:(0,s.jsx)(c.code,{children:"CardProductNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/card-product-suspended-rejection",children:(0,s.jsx)(c.code,{children:"CardProductSuspendedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/card-product-used-rejection",children:(0,s.jsx)(c.code,{children:"CardProductUsedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/card-wrong-status-rejection",children:(0,s.jsx)(c.code,{children:"CardWrongStatusRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/check-rejection",children:(0,s.jsx)(c.code,{children:"CheckRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/consent-not-found-rejection",children:(0,s.jsx)(c.code,{children:"ConsentNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/consents-already-linked-to-multi-consent-rejection",children:(0,s.jsx)(c.code,{children:"ConsentsAlreadyLinkedToMultiConsentRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/consents-not-all-in-created-status-rejection",children:(0,s.jsx)(c.code,{children:"ConsentsNotAllInCreatedStatusRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/consents-not-found-rejection",children:(0,s.jsx)(c.code,{children:"ConsentsNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/consent-type-not-supported-by-server-consent-rejection",children:(0,s.jsx)(c.code,{children:"ConsentTypeNotSupportedByServerConsentRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/debtor-account-closed-rejection",children:(0,s.jsx)(c.code,{children:"DebtorAccountClosedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/debtor-account-not-allowed-rejection",children:(0,s.jsx)(c.code,{children:"DebtorAccountNotAllowedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/digital-card-not-found-rejection",children:(0,s.jsx)(c.code,{children:"DigitalCardNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/enabled-card-design-not-found-rejection",children:(0,s.jsx)(c.code,{children:"EnabledCardDesignNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/external-account-already-exists-rejection",children:(0,s.jsx)(c.code,{children:"ExternalAccountAlreadyExistsRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/external-account-balance-already-exists-rejection",children:(0,s.jsx)(c.code,{children:"ExternalAccountBalanceAlreadyExistsRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/fee-settings-not-found-rejection",children:(0,s.jsx)(c.code,{children:"FeeSettingsNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/forbidden-rejection",children:(0,s.jsx)(c.code,{children:"ForbiddenRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/funding-limit-exceeded-rejection",children:(0,s.jsx)(c.code,{children:"FundingLimitExceededRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/funding-limit-settings-change-request-bad-amount-rejection",children:(0,s.jsx)(c.code,{children:"FundingLimitSettingsChangeRequestBadAmountRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/funding-source-not-found-rejection",children:(0,s.jsx)(c.code,{children:"FundingSourceNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/funding-source-wrong-status-rejection",children:(0,s.jsx)(c.code,{children:"FundingSourceWrongStatusRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/global-funding-limit-exceeded-rejection",children:(0,s.jsx)(c.code,{children:"GlobalFundingLimitExceededRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/global-instant-funding-limit-exceeded-rejection",children:(0,s.jsx)(c.code,{children:"GlobalInstantFundingLimitExceededRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/ibannot-reachable-rejection",children:(0,s.jsx)(c.code,{children:"IBANNotReachableRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/ibannot-valid-rejection",children:(0,s.jsx)(c.code,{children:"IBANNotValidRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/iban-validation-rejection",children:(0,s.jsx)(c.code,{children:"IbanValidationRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/identity-already-bind-to-account-membership-rejection",children:(0,s.jsx)(c.code,{children:"IdentityAlreadyBindToAccountMembershipRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/instant-funding-limit-exceeded-rejection",children:(0,s.jsx)(c.code,{children:"InstantFundingLimitExceededRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/insufficient-funds-rejection",children:(0,s.jsx)(c.code,{children:"InsufficientFundsRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/internal-error-rejection",children:(0,s.jsx)(c.code,{children:"InternalErrorRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/invalid-argument-rejection",children:(0,s.jsx)(c.code,{children:"InvalidArgumentRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/invalid-phone-number-rejection",children:(0,s.jsx)(c.code,{children:"InvalidPhoneNumberRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/invalid-siren-number-rejection",children:(0,s.jsx)(c.code,{children:"InvalidSirenNumberRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/legal-representative-account-membership-cannot-be-disabled-rejection",children:(0,s.jsx)(c.code,{children:"LegalRepresentativeAccountMembershipCannotBeDisabledRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/legal-representative-account-membership-cannot-be-suspended-rejection",children:(0,s.jsx)(c.code,{children:"LegalRepresentativeAccountMembershipCannotBeSuspendedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/merchant-payment-method-not-active-rejection",children:(0,s.jsx)(c.code,{children:"MerchantPaymentMethodNotActiveRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/merchant-profile-wrong-status-rejection",children:(0,s.jsx)(c.code,{children:"MerchantProfileWrongStatusRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/missing-mandatory-field-rejection",children:(0,s.jsx)(c.code,{children:"MissingMandatoryFieldRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/not-found-rejection",children:(0,s.jsx)(c.code,{children:"NotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/not-reachable-consent-status-rejection",children:(0,s.jsx)(c.code,{children:"NotReachableConsentStatusRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/not-supported-country-rejection",children:(0,s.jsx)(c.code,{children:"NotSupportedCountryRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/onboarding-not-completed-rejection",children:(0,s.jsx)(c.code,{children:"OnboardingNotCompletedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/payment-mandate-mandate-not-found-rejection",children:(0,s.jsx)(c.code,{children:"PaymentMandateMandateNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/payment-mandate-reference-already-used-rejection",children:(0,s.jsx)(c.code,{children:"PaymentMandateReferenceAlreadyUsedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/payment-method-not-compatible-rejection",children:(0,s.jsx)(c.code,{children:"PaymentMethodNotCompatibleRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/permission-cannot-be-granted-rejection",children:(0,s.jsx)(c.code,{children:"PermissionCannotBeGrantedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/physical-card-not-found-rejection",children:(0,s.jsx)(c.code,{children:"PhysicalCardNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/physical-card-wrong-status-rejection",children:(0,s.jsx)(c.code,{children:"PhysicalCardWrongStatusRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/pinnot-ready-rejection",children:(0,s.jsx)(c.code,{children:"PINNotReadyRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/project-forbidden-rejection",children:(0,s.jsx)(c.code,{children:"ProjectForbiddenRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/project-funding-limit-exceeded-rejection",children:(0,s.jsx)(c.code,{children:"ProjectFundingLimitExceededRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/project-instant-funding-limit-exceeded-rejection",children:(0,s.jsx)(c.code,{children:"ProjectInstantFundingLimitExceededRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/project-invalid-status-rejection",children:(0,s.jsx)(c.code,{children:"ProjectInvalidStatusRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/project-not-found",children:(0,s.jsx)(c.code,{children:"ProjectNotFound"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/project-not-found-rejection",children:(0,s.jsx)(c.code,{children:"ProjectNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/project-settings-forbidden-error",children:(0,s.jsx)(c.code,{children:"ProjectSettingsForbiddenError"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/project-settings-not-found",children:(0,s.jsx)(c.code,{children:"ProjectSettingsNotFound"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/project-settings-status-not-reachable",children:(0,s.jsx)(c.code,{children:"ProjectSettingsStatusNotReachable"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/public-onboarding-disabled-rejection",children:(0,s.jsx)(c.code,{children:"PublicOnboardingDisabledRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/received-direct-debit-mandate-already-exist-rejection",children:(0,s.jsx)(c.code,{children:"ReceivedDirectDebitMandateAlreadyExistRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/received-direct-debit-mandate-canceled-rejection",children:(0,s.jsx)(c.code,{children:"ReceivedDirectDebitMandateCanceledRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/received-direct-debit-mandate-not-b2-b-rejection",children:(0,s.jsx)(c.code,{children:"ReceivedDirectDebitMandateNotB2bRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/received-direct-debit-mandate-not-found-rejection",children:(0,s.jsx)(c.code,{children:"ReceivedDirectDebitMandateNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/refund-rejection",children:(0,s.jsx)(c.code,{children:"RefundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/restricted-to-user-rejection",children:(0,s.jsx)(c.code,{children:"RestrictedToUserRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/scheme-wrong-rejection",children:(0,s.jsx)(c.code,{children:"SchemeWrongRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/server-consent-credentials-not-valid-or-outdated-rejection",children:(0,s.jsx)(c.code,{children:"ServerConsentCredentialsNotValidOrOutdatedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/server-consent-not-allowed-for-consent-operation-rejection",children:(0,s.jsx)(c.code,{children:"ServerConsentNotAllowedForConsentOperationRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/server-consent-not-allowed-for-project-rejection",children:(0,s.jsx)(c.code,{children:"ServerConsentNotAllowedForProjectRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/server-consent-project-credential-missing-rejection",children:(0,s.jsx)(c.code,{children:"ServerConsentProjectCredentialMissingRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/server-consent-project-credential-not-found-rejection",children:(0,s.jsx)(c.code,{children:"ServerConsentProjectCredentialNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/server-consent-project-settings-not-found-rejection",children:(0,s.jsx)(c.code,{children:"ServerConsentProjectSettingsNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/server-consent-signature-not-valid-rejection",children:(0,s.jsx)(c.code,{children:"ServerConsentSignatureNotValidRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/standing-order-not-found-rejection",children:(0,s.jsx)(c.code,{children:"StandingOrderNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/supporting-document-collection-not-found-rejection",children:(0,s.jsx)(c.code,{children:"SupportingDocumentCollectionNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/supporting-document-collection-status-does-not-allow-deletion-rejection",children:(0,s.jsx)(c.code,{children:"SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/supporting-document-collection-status-does-not-allow-update-rejection",children:(0,s.jsx)(c.code,{children:"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/supporting-document-collection-status-not-allowed-rejection",children:(0,s.jsx)(c.code,{children:"SupportingDocumentCollectionStatusNotAllowedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/supporting-document-not-found-rejection",children:(0,s.jsx)(c.code,{children:"SupportingDocumentNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/supporting-document-status-does-not-allow-deletion-rejection",children:(0,s.jsx)(c.code,{children:"SupportingDocumentStatusDoesNotAllowDeletionRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/supporting-document-status-does-not-allow-update-rejection",children:(0,s.jsx)(c.code,{children:"SupportingDocumentStatusDoesNotAllowUpdateRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/supporting-document-status-not-allowed-rejection",children:(0,s.jsx)(c.code,{children:"SupportingDocumentStatusNotAllowedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/supporting-document-upload-not-allowed-rejection",children:(0,s.jsx)(c.code,{children:"SupportingDocumentUploadNotAllowedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/suspend-received-direct-debit-mandated-rejection",children:(0,s.jsx)(c.code,{children:"SuspendReceivedDirectDebitMandatedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/swan-tcudocument-not-found-rejection",children:(0,s.jsx)(c.code,{children:"SwanTCUDocumentNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/swan-tcudocument-status-not-allowed-rejection",children:(0,s.jsx)(c.code,{children:"SwanTCUDocumentStatusNotAllowedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/too-many-child-consents-rejection",children:(0,s.jsx)(c.code,{children:"TooManyChildConsentsRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/too-many-items-rejection",children:(0,s.jsx)(c.code,{children:"TooManyItemsRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/transaction-not-found-rejection",children:(0,s.jsx)(c.code,{children:"TransactionNotFoundRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/update-user-consent-settings-token-rejection",children:(0,s.jsx)(c.code,{children:"UpdateUserConsentSettingsTokenRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/user-not-allowed-to-disable-its-own-account-membership-rejection",children:(0,s.jsx)(c.code,{children:"UserNotAllowedToDisableItsOwnAccountMembershipRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/user-not-allowed-to-manage-account-membership-rejection",children:(0,s.jsx)(c.code,{children:"UserNotAllowedToManageAccountMembershipRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/user-not-allowed-to-suspend-its-own-account-membership-rejection",children:(0,s.jsx)(c.code,{children:"UserNotAllowedToSuspendItsOwnAccountMembershipRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/user-not-card-holder-rejection",children:(0,s.jsx)(c.code,{children:"UserNotCardHolderRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/validation-rejection",children:(0,s.jsx)(c.code,{children:"ValidationRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/objects/wrong-value-provided-rejection",children:(0,s.jsx)(c.code,{children:"WrongValueProvidedRejection"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:c}={...(0,o.a)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},11151:(e,c,t)=>{t.d(c,{Z:()=>a,a:()=>d});var s=t(67294);const o={},n=s.createContext(o);function d(e){const c=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function a(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(n.Provider,{value:c},e.children)}}}]);