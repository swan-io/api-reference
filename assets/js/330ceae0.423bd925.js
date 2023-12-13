"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[46669],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>m});var n=t(67294);function d(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){d(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,d=function(e,a){if(null==e)return{};var t,n,d={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(d[t]=e[t]);return d}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var r=n.createContext({}),p=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(r.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,d=e.mdxType,o=e.originalType,r=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=d,m=c["".concat(r,".").concat(u)]||c[u]||y[u]||o;return t?n.createElement(m,l(l({ref:a},s),{},{components:t})):n.createElement(m,l({ref:a},s))}));function m(e,a){var t=arguments,d=a&&a.mdxType;if("string"==typeof e||d){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var r in a)hasOwnProperty.call(a,r)&&(i[r]=a[r]);i.originalType=e,i[c]="string"==typeof e?e:d,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48231:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>u,Bullet:()=>c,SpecifiedBy:()=>y,assets:()=>p,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=t(83117),d=t(67294),o=t(3905);const l={id:"validation-rejection",title:"ValidationRejection",hide_table_of_contents:!1},i=void 0,r={unversionedId:"objects/validation-rejection",id:"objects/validation-rejection",title:"ValidationRejection",description:"Rejection returned if an input contains invalid data",source:"@site/docs/objects/validation-rejection.mdx",sourceDirName:"objects",slug:"/objects/validation-rejection",permalink:"/objects/validation-rejection",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/validation-rejection.mdx",tags:[],version:"current",frontMatter:{id:"validation-rejection",title:"ValidationRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ValidationFieldError",permalink:"/objects/validation-field-error"},next:{title:"VerifiedStatusInfo",permalink:"/objects/verified-status-info"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationRejection.<b>fields</b></code><Bullet /><code>[ValidationFieldError!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-validationrejectionbfieldsbcodevalidationfielderror--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],c=()=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,o.kt)(d.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:c,SpecifiedBy:y,Badge:u},k="wrapper";function x(e){let{components:a,...t}=e;return(0,o.kt)(k,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rejection returned if an input contains invalid data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ValidationRejection implements Rejection {\n  fields: [ValidationFieldError!]!\n  message: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-validationrejectionbfieldsbcodevalidationfielderror--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ValidationRejection.",(0,o.kt)("b",null,"fields"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/validation-field-error"},(0,o.kt)("inlineCode",{parentName:"a"},"[ValidationFieldError!]!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-validationrejectionbmessagebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ValidationRejection.",(0,o.kt)("b",null,"message"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"rejection-"},(0,o.kt)("a",{parentName:"h4",href:"/interfaces/rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,o.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/unions/activate-physical-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivatePhysicalCardPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-account-memberships-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipsPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddCardPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-cards-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddCardsPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-cards-with-group-delivery-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddCardsWithGroupDeliveryPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-digital-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddDigitalCardPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-direct-debit-funding-source-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddDirectDebitFundingSourcePayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-external-account-balance-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddExternalAccountBalancePayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-external-account-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddExternalAccountPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-funding-limit-settings-change-request-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddFundingLimitSettingsChangeRequestPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-or-update-external-account-balance-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddOrUpdateExternalAccountBalancePayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-sepa-direct-debit-payment-mandate-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddSepaDirectDebitPaymentMandatePayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-single-use-virtual-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-single-use-virtual-cards-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardsPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/add-virtual-iban-entry-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddVirtualIbanEntryPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/allow-sdd-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AllowSddPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/allow-sdd-virtual-iban-entry-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AllowSddVirtualIbanEntryPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/bind-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"BindAccountMembershipPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/cancel-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CancelCardPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/cancel-digital-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CancelDigitalCardPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/cancel-physical-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CancelPhysicalCardPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/cancel-virtual-iban-entry-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CancelVirtualIbanEntryPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/close-account-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CloseAccountPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/delete-supporting-document-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteSupportingDocumentPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/deny-sdd-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DenySddPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/deny-sdd-virtual-iban-entry-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DenySddVirtualIbanEntryPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/disable-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DisableAccountMembershipPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/finalize-onboarding-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"FinalizeOnboardingPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/generate-supporting-document-upload-url-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"GenerateSupportingDocumentUploadUrlPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/initiate-funding-request-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"InitiateFundingRequestPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/initiate-international-credit-transfer-response-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"InitiateInternationalCreditTransferResponsePayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/initiate-merchant-payment-collection-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"InitiateMerchantPaymentCollectionPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/onboard-company-account-holder-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardCompanyAccountHolderPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/onboard-individual-account-holder-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardIndividualAccountHolderPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/print-physical-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"PrintPhysicalCardPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/request-merchant-payment-methods-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentMethodsPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/request-supporting-document-collection-review-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestSupportingDocumentCollectionReviewPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/resume-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ResumeAccountMembershipPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/resume-physical-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ResumePhysicalCardPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/suspend-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"SuspendAccountMembershipPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/suspend-physical-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"SuspendPhysicalCardPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/update-account-holder-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateAccountHolderPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/update-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateAccountMembershipPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/update-account-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateAccountPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/update-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateCardPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/update-company-onboarding-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateCompanyOnboardingPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/update-individual-onboarding-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateIndividualOnboardingPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/update-supporting-document-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateSupportingDocumentPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/view-card-numbers-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ViewCardNumbersPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/view-physical-card-numbers-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ViewPhysicalCardNumbersPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/unions/view-physical-card-pin-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ViewPhysicalCardPinPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})))}x.isMDXComponent=!0}}]);