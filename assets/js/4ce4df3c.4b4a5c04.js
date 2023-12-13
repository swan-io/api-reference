"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[95258],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},j=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(a),j=o,k=p["".concat(i,".").concat(j)]||p[j]||m[j]||c;return a?n.createElement(k,r(r({ref:t},l),{},{components:a})):n.createElement(k,r({ref:t},l))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=a.length,r=new Array(c);r[0]=j;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:o,r[1]=d;for(var s=2;s<c;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}j.displayName="MDXCreateElement"},26014:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>j,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(83117),o=a(67294),c=a(3905);const r={id:"rejection",title:"Rejection",hide_table_of_contents:!1},d=void 0,i={unversionedId:"interfaces/rejection",id:"interfaces/rejection",title:"Rejection",description:"No description",source:"@site/docs/interfaces/rejection.mdx",sourceDirName:"interfaces",slug:"/interfaces/rejection",permalink:"/interfaces/rejection",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/rejection.mdx",tags:[],version:"current",frontMatter:{id:"rejection",title:"Rejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ReceivedDirectDebitMandate",permalink:"/interfaces/received-direct-debit-mandate"},next:{title:"SEPACreditTransferCreditor",permalink:"/interfaces/sepacredit-transfer-creditor"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Rejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-rejectionbmessagebcodestring--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),j=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:l,Bullet:p,SpecifiedBy:m,Badge:j},y="wrapper";function u(e){let{components:t,...a}=e;return(0,c.kt)(y,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Rejection {\n  message: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-rejectionbmessagebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Rejection.",(0,c.kt)("b",null,"message"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(j,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(j,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/objects/account-holder-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountHolderNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/account-holder-type-individual-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountHolderTypeIndividualRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/account-membership-cannot-be-disabled-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountMembershipCannotBeDisabledRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/account-membership-cannot-be-updated-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountMembershipCannotBeUpdatedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/account-membership-not-allowed-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountMembershipNotAllowedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/account-membership-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountMembershipNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/account-membership-not-ready-to-be-bound-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountMembershipNotReadyToBeBoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/account-not-eligible-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountNotEligibleRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/account-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/account-verification-already-rejected-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountVerificationAlreadyRejectedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/account-verification-wrong-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountVerificationWrongStatusRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/adding-cards-to-different-accounts-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AddingCardsToDifferentAccountsRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/already-valid-physical-card-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"AlreadyValidPhysicalCardRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/apple-pay-not-allowed-for-project-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ApplePayNotAllowedForProjectRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/bad-account-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"BadAccountStatusRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/bad-request-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"BadRequestRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/cannot-activate-physical-card-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"CannotActivatePhysicalCardRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/capital-deposit-document-can-not-be-uploaded"},(0,c.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentCanNotBeUploaded")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/capital-deposit-document-can-not-be-uploaded-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentCanNotBeUploadedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/card-can-not-be-digitalized-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"CardCanNotBeDigitalizedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/card-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"CardNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/card-product-disabled-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"CardProductDisabledRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/card-product-not-applicable-to-physical-cards-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"CardProductNotApplicableToPhysicalCardsRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/card-product-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"CardProductNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/card-product-suspended-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"CardProductSuspendedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/card-product-used-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"CardProductUsedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/card-wrong-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"CardWrongStatusRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/consent-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ConsentNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/consents-already-linked-to-multi-consent-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ConsentsAlreadyLinkedToMultiConsentRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/consents-not-all-in-created-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ConsentsNotAllInCreatedStatusRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/consents-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ConsentsNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/consent-type-not-supported-by-server-consent-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ConsentTypeNotSupportedByServerConsentRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/debtor-account-closed-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"DebtorAccountClosedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/debtor-account-not-allowed-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"DebtorAccountNotAllowedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/digital-card-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"DigitalCardNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/enabled-card-design-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"EnabledCardDesignNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/external-account-already-exists-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalAccountAlreadyExistsRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/external-account-balance-already-exists-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalAccountBalanceAlreadyExistsRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/fee-settings-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"FeeSettingsNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/forbidden-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/funding-limit-exceeded-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingLimitExceededRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/funding-limit-settings-change-request-bad-amount-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestBadAmountRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/funding-source-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingSourceNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/funding-source-wrong-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingSourceWrongStatusRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/global-funding-limit-exceeded-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"GlobalFundingLimitExceededRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/global-instant-funding-limit-exceeded-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"GlobalInstantFundingLimitExceededRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/ibannot-reachable-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"IBANNotReachableRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/ibannot-valid-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"IBANNotValidRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/iban-validation-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"IbanValidationRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/identity-already-bind-to-account-membership-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"IdentityAlreadyBindToAccountMembershipRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/instant-funding-limit-exceeded-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"InstantFundingLimitExceededRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/insufficient-funds-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"InsufficientFundsRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/internal-error-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/invalid-argument-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"InvalidArgumentRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/invalid-phone-number-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"InvalidPhoneNumberRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/invalid-siren-number-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"InvalidSirenNumberRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/legal-representative-account-membership-cannot-be-disabled-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"LegalRepresentativeAccountMembershipCannotBeDisabledRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/legal-representative-account-membership-cannot-be-suspended-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"LegalRepresentativeAccountMembershipCannotBeSuspendedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/merchant-payment-method-not-active-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodNotActiveRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/merchant-profile-wrong-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantProfileWrongStatusRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/missing-mandatory-field-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"MissingMandatoryFieldRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"NotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/not-reachable-consent-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"NotReachableConsentStatusRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/not-supported-country-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"NotSupportedCountryRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/onboarding-not-completed-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"OnboardingNotCompletedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/payment-mandate-mandate-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"PaymentMandateMandateNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/payment-mandate-reference-already-used-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"PaymentMandateReferenceAlreadyUsedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/payment-method-not-compatible-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"PaymentMethodNotCompatibleRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/permission-cannot-be-granted-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"PermissionCannotBeGrantedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/physical-card-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/physical-card-wrong-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardWrongStatusRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/pinnot-ready-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"PINNotReadyRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/project-forbidden-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ProjectForbiddenRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/project-funding-limit-exceeded-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ProjectFundingLimitExceededRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/project-instant-funding-limit-exceeded-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ProjectInstantFundingLimitExceededRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/project-invalid-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ProjectInvalidStatusRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/project-not-found"},(0,c.kt)("inlineCode",{parentName:"a"},"ProjectNotFound")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/project-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ProjectNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/project-settings-forbidden-error"},(0,c.kt)("inlineCode",{parentName:"a"},"ProjectSettingsForbiddenError")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/project-settings-not-found"},(0,c.kt)("inlineCode",{parentName:"a"},"ProjectSettingsNotFound")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/project-settings-status-not-reachable"},(0,c.kt)("inlineCode",{parentName:"a"},"ProjectSettingsStatusNotReachable")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/public-onboarding-disabled-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"PublicOnboardingDisabledRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/received-direct-debit-mandate-already-exist-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateAlreadyExistRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/received-direct-debit-mandate-canceled-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateCanceledRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/received-direct-debit-mandate-not-b2-b-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateNotB2bRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/received-direct-debit-mandate-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/refund-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"RefundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/restricted-to-user-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"RestrictedToUserRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/scheme-wrong-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SchemeWrongRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/server-consent-credentials-not-valid-or-outdated-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ServerConsentCredentialsNotValidOrOutdatedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/server-consent-not-allowed-for-consent-operation-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ServerConsentNotAllowedForConsentOperationRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/server-consent-not-allowed-for-project-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ServerConsentNotAllowedForProjectRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/server-consent-project-credential-missing-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ServerConsentProjectCredentialMissingRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/server-consent-project-credential-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ServerConsentProjectCredentialNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/server-consent-project-settings-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ServerConsentProjectSettingsNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/server-consent-signature-not-valid-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ServerConsentSignatureNotValidRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/standing-order-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"StandingOrderNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/supporting-document-collection-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/supporting-document-collection-status-does-not-allow-deletion-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/supporting-document-collection-status-does-not-allow-update-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/supporting-document-collection-status-not-allowed-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusNotAllowedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/supporting-document-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/supporting-document-status-does-not-allow-deletion-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusDoesNotAllowDeletionRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/supporting-document-status-does-not-allow-update-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusDoesNotAllowUpdateRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/supporting-document-status-not-allowed-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusNotAllowedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/supporting-document-upload-not-allowed-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentUploadNotAllowedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/suspend-received-direct-debit-mandated-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SuspendReceivedDirectDebitMandatedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/swan-tcudocument-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SwanTCUDocumentNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/swan-tcudocument-status-not-allowed-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SwanTCUDocumentStatusNotAllowedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/too-many-child-consents-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"TooManyChildConsentsRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/too-many-items-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"TooManyItemsRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/transaction-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"TransactionNotFoundRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/update-user-consent-settings-token-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"UpdateUserConsentSettingsTokenRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/user-not-allowed-to-disable-its-own-account-membership-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"UserNotAllowedToDisableItsOwnAccountMembershipRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/user-not-allowed-to-manage-account-membership-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"UserNotAllowedToManageAccountMembershipRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/user-not-allowed-to-suspend-its-own-account-membership-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"UserNotAllowedToSuspendItsOwnAccountMembershipRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/user-not-card-holder-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"UserNotCardHolderRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/validation-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ValidationRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/objects/wrong-value-provided-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"WrongValueProvidedRejection")),"  ",(0,c.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);