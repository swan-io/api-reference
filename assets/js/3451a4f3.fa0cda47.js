"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[64063],{18277:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>u,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>h,assets:()=>s,contentTitle:()=>c,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>p});var d=n(85893),o=n(11151),r=n(67294);const t={id:"add-merchant-profile-payload",title:"AddMerchantProfilePayload"},c=void 0,l={id:"unions/add-merchant-profile-payload",title:"AddMerchantProfilePayload",description:"Add Merchant Profile Payload",source:"@site/docs/unions/add-merchant-profile-payload.mdx",sourceDirName:"unions",slug:"/unions/add-merchant-profile-payload",permalink:"/unions/add-merchant-profile-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/add-merchant-profile-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-merchant-profile-payload",title:"AddMerchantProfilePayload"},sidebar:"schemaSidebar",previous:{title:"AddInternalDirectDebitPaymentMandatePayload",permalink:"/unions/add-internal-direct-debit-payment-mandate-payload"},next:{title:"AddOrUpdateExternalAccountBalancePayload",permalink:"/unions/add-or-update-external-account-balance-payload"}},s={},i=()=>{const e={span:"span",...(0,o.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,o.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,o.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AddMerchantProfilePayload.<b>AddMerchantProfileSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addmerchantprofilepayloadaddmerchantprofilesuccesspayload-",level:4},{value:'<code>AddMerchantProfilePayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addmerchantprofilepayloadforbiddenrejection-",level:4},{value:'<code>AddMerchantProfilePayload.<b>AccountNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addmerchantprofilepayloadaccountnotfoundrejection-",level:4},{value:'<code>AddMerchantProfilePayload.<b>InternalErrorRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"addmerchantprofilepayloadinternalerrorrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],f=({dataOpen:e,dataClose:a,children:n,startOpen:t=!1})=>{const c={details:"details",summary:"summary",...(0,o.a)()},[l,s]=(0,r.useState)(t);return(0,d.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&n]})};function y(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Add Merchant Profile Payload"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"union AddMerchantProfilePayload = AddMerchantProfileSuccessPayload | ForbiddenRejection | AccountNotFoundRejection | InternalErrorRejection\n"})}),"\n",(0,d.jsx)(a.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,d.jsxs)(a.h4,{id:"addmerchantprofilepayloadaddmerchantprofilesuccesspayload-",children:[(0,d.jsx)(a.a,{href:"/objects/add-merchant-profile-success-payload",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddMerchantProfilePayload.",(0,d.jsx)("b",{children:"AddMerchantProfileSuccessPayload"})]})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Add Merchant Profile Success Payload"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"addmerchantprofilepayloadforbiddenrejection-",children:[(0,d.jsx)(a.a,{href:"/objects/forbidden-rejection",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddMerchantProfilePayload.",(0,d.jsx)("b",{children:"ForbiddenRejection"})]})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"addmerchantprofilepayloadaccountnotfoundrejection-",children:[(0,d.jsx)(a.a,{href:"/objects/account-not-found-rejection",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddMerchantProfilePayload.",(0,d.jsx)("b",{children:"AccountNotFoundRejection"})]})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"addmerchantprofilepayloadinternalerrorrejection-",children:[(0,d.jsx)(a.a,{href:"/objects/internal-error-rejection",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddMerchantProfilePayload.",(0,d.jsx)("b",{children:"InternalErrorRejection"})]})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Rejection returned on unexpected server error"}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/mutations/add-merchant-profile",children:(0,d.jsx)(a.code,{children:"addMerchantProfile"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function j(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(y,{...e})}):y(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>t});var d=n(67294);const o={},r=d.createContext(o);function t(e){const a=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),d.createElement(r.Provider,{value:a},e.children)}}}]);