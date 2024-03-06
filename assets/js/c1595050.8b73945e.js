"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[99857],{54363:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var a=n(85893),s=n(11151),o=n(67294);const d={id:"request-merchant-payment-methods-payload",title:"RequestMerchantPaymentMethodsPayload"},r=void 0,c={id:"unions/request-merchant-payment-methods-payload",title:"RequestMerchantPaymentMethodsPayload",description:"No description",source:"@site/docs/unions/request-merchant-payment-methods-payload.mdx",sourceDirName:"unions",slug:"/unions/request-merchant-payment-methods-payload",permalink:"/unions/request-merchant-payment-methods-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/request-merchant-payment-methods-payload.mdx",tags:[],version:"current",frontMatter:{id:"request-merchant-payment-methods-payload",title:"RequestMerchantPaymentMethodsPayload"},sidebar:"schemaSidebar",previous:{title:"ReplayWebhookEventPayload",permalink:"/unions/replay-webhook-event-payload"},next:{title:"RequestMerchantProfileUpdatePayload",permalink:"/unions/request-merchant-profile-update-payload"}},l={},i=()=>{const e={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,s.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>RequestMerchantPaymentMethodsPayload.<b>RequestMerchantPaymentMethodsSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"requestmerchantpaymentmethodspayloadrequestmerchantpaymentmethodssuccesspayload-",level:4},{value:'<code>RequestMerchantPaymentMethodsPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"requestmerchantpaymentmethodspayloadforbiddenrejection-",level:4},{value:'<code>RequestMerchantPaymentMethodsPayload.<b>NotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"requestmerchantpaymentmethodspayloadnotfoundrejection-",level:4},{value:'<code>RequestMerchantPaymentMethodsPayload.<b>InternalErrorRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"requestmerchantpaymentmethodspayloadinternalerrorrejection-",level:4},{value:'<code>RequestMerchantPaymentMethodsPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"requestmerchantpaymentmethodspayloadvalidationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],y=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,s.a)()},[c,l]=(0,o.useState)(d);return(0,a.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})};function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"union RequestMerchantPaymentMethodsPayload = RequestMerchantPaymentMethodsSuccessPayload | ForbiddenRejection | NotFoundRejection | InternalErrorRejection | ValidationRejection\n"})}),"\n",(0,a.jsx)(t.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,a.jsxs)(t.h4,{id:"requestmerchantpaymentmethodspayloadrequestmerchantpaymentmethodssuccesspayload-",children:[(0,a.jsx)(t.a,{href:"/objects/request-merchant-payment-methods-success-payload",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RequestMerchantPaymentMethodsPayload.",(0,a.jsx)("b",{children:"RequestMerchantPaymentMethodsSuccessPayload"})]})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"requestmerchantpaymentmethodspayloadforbiddenrejection-",children:[(0,a.jsx)(t.a,{href:"/objects/forbidden-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RequestMerchantPaymentMethodsPayload.",(0,a.jsx)("b",{children:"ForbiddenRejection"})]})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"requestmerchantpaymentmethodspayloadnotfoundrejection-",children:[(0,a.jsx)(t.a,{href:"/objects/not-found-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RequestMerchantPaymentMethodsPayload.",(0,a.jsx)("b",{children:"NotFoundRejection"})]})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"requestmerchantpaymentmethodspayloadinternalerrorrejection-",children:[(0,a.jsx)(t.a,{href:"/objects/internal-error-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RequestMerchantPaymentMethodsPayload.",(0,a.jsx)("b",{children:"InternalErrorRejection"})]})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Rejection returned on unexpected server error"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"requestmerchantpaymentmethodspayloadvalidationrejection-",children:[(0,a.jsx)(t.a,{href:"/objects/validation-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RequestMerchantPaymentMethodsPayload.",(0,a.jsx)("b",{children:"ValidationRejection"})]})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Rejection returned if an input contains invalid data"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/mutations/request-merchant-payment-methods",children:(0,a.jsx)(t.code,{children:"requestMerchantPaymentMethods"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function j(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>d});var a=n(67294);const s={},o=a.createContext(s);function d(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);