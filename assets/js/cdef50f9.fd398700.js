"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17695],{90935:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>p,Bullet:()=>l,Details:()=>y,SpecifiedBy:()=>b,assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var t=d(74848),n=d(28453),o=d(96540);const i={id:"add-sepa-direct-debit-payment-mandate-payload",title:"AddSepaDirectDebitPaymentMandatePayload"},c=void 0,r={id:"unions/add-sepa-direct-debit-payment-mandate-payload",title:"AddSepaDirectDebitPaymentMandatePayload",description:"Union type return by the addSepaDirectDebitPaymentMandate mutation",source:"@site/docs/unions/add-sepa-direct-debit-payment-mandate-payload.mdx",sourceDirName:"unions",slug:"/unions/add-sepa-direct-debit-payment-mandate-payload",permalink:"/unions/add-sepa-direct-debit-payment-mandate-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/add-sepa-direct-debit-payment-mandate-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-sepa-direct-debit-payment-mandate-payload",title:"AddSepaDirectDebitPaymentMandatePayload"},sidebar:"schemaSidebar",previous:{title:"AddReceivedSepaDirectDebitB2bMandatePayload",permalink:"/unions/add-received-sepa-direct-debit-b2-b-mandate-payload"},next:{title:"AddSingleUseVirtualCardPayload",permalink:"/unions/add-single-use-virtual-card-payload"}},s={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const a={a:"a",...(0,n.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:a,children:d,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[r,s]=(0,o.useState)(i);return(0,t.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&d]})},m=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>AddSepaDirectDebitPaymentMandateSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloadaddsepadirectdebitpaymentmandatesuccesspayload-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloadforbiddenrejection-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>NotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloadnotfoundrejection-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>DebtorAccountNotAllowedRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloaddebtoraccountnotallowedrejection-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>DebtorAccountClosedRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloaddebtoraccountclosedrejection-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>SchemeWrongRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloadschemewrongrejection-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>PaymentMandateReferenceAlreadyUsedRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloadpaymentmandatereferencealreadyusedrejection-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloadvalidationrejection-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>PaymentMethodNotCompatibleRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloadpaymentmethodnotcompatiblerejection-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>InternalErrorRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloadinternalerrorrejection-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>MerchantProfileNotValidRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloadmerchantprofilenotvalidrejection-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>IBANNotValidRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloadibannotvalidrejection-",level:4},{value:'<code>AddSepaDirectDebitPaymentMandatePayload.<b>IBANNotReachableRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addsepadirectdebitpaymentmandatepayloadibannotreachablerejection-",level:4},{value:"Returned By",id:"returned-by",level:3}];function j(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Union type return by the addSepaDirectDebitPaymentMandate mutation"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"union AddSepaDirectDebitPaymentMandatePayload = AddSepaDirectDebitPaymentMandateSuccessPayload | ForbiddenRejection | NotFoundRejection | DebtorAccountNotAllowedRejection | DebtorAccountClosedRejection | SchemeWrongRejection | PaymentMandateReferenceAlreadyUsedRejection | ValidationRejection | PaymentMethodNotCompatibleRejection | InternalErrorRejection | MerchantProfileNotValidRejection | IBANNotValidRejection | IBANNotReachableRejection\n"})}),"\n",(0,t.jsx)(a.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloadaddsepadirectdebitpaymentmandatesuccesspayload-",children:[(0,t.jsx)(a.a,{href:"/objects/add-sepa-direct-debit-payment-mandate-success-payload",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"AddSepaDirectDebitPaymentMandateSuccessPayload"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Return type in case of a successful response of the addSepaDirectDebitPaymentMandate mutation"}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloadforbiddenrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/forbidden-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"ForbiddenRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloadnotfoundrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/not-found-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"NotFoundRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists"}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloaddebtoraccountnotallowedrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/debtor-account-not-allowed-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"DebtorAccountNotAllowedRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned when the Debtor does not belong to the same project as the creditor"}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloaddebtoraccountclosedrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/debtor-account-closed-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"DebtorAccountClosedRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned when the Debtor is closed"}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloadschemewrongrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/scheme-wrong-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"SchemeWrongRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned when adding a B2B mandate with an Individual debtor"}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloadpaymentmandatereferencealreadyusedrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/payment-mandate-reference-already-used-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"PaymentMandateReferenceAlreadyUsedRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned if the payment mandate reference is already used for the same creditor"}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloadvalidationrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/validation-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"ValidationRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned if an input contains invalid data"}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloadpaymentmethodnotcompatiblerejection-",children:[(0,t.jsx)(a.a,{href:"/objects/payment-method-not-compatible-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"PaymentMethodNotCompatibleRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned when a payment method is not compatible for the requested mutation"}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloadinternalerrorrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/internal-error-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"InternalErrorRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned on unexpected server error"}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloadmerchantprofilenotvalidrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/merchant-profile-not-valid-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"MerchantProfileNotValidRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloadibannotvalidrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/ibannot-valid-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"IBANNotValidRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned when the IBAN is not valid"}),"\n",(0,t.jsxs)(a.h4,{id:"addsepadirectdebitpaymentmandatepayloadibannotreachablerejection-",children:[(0,t.jsx)(a.a,{href:"/objects/ibannot-reachable-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSepaDirectDebitPaymentMandatePayload.",(0,t.jsx)("b",{children:"IBANNotReachableRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned when the IBAN is not reachable"}),"\n",(0,t.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/mutations/add-sepa-direct-debit-payment-mandate",children:(0,t.jsx)(a.code,{children:"addSepaDirectDebitPaymentMandate"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},28453:(e,a,d)=>{d.d(a,{R:()=>i,x:()=>c});var t=d(96540);const n={},o=t.createContext(n);function i(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);