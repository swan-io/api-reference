"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[1755],{80219:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>m,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>j});var a=t(85893),d=t(11151),r=t(67294);const c={id:"invalid-merchant-payment-method-rejection",title:"InvalidMerchantPaymentMethodRejection"},s=void 0,o={id:"objects/invalid-merchant-payment-method-rejection",title:"InvalidMerchantPaymentMethodRejection",description:"No description",source:"@site/docs/objects/invalid-merchant-payment-method-rejection.mdx",sourceDirName:"objects",slug:"/objects/invalid-merchant-payment-method-rejection",permalink:"/objects/invalid-merchant-payment-method-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/invalid-merchant-payment-method-rejection.mdx",tags:[],version:"current",frontMatter:{id:"invalid-merchant-payment-method-rejection",title:"InvalidMerchantPaymentMethodRejection"},sidebar:"schemaSidebar",previous:{title:"InvalidMerchantPaymentMethodError",permalink:"/objects/invalid-merchant-payment-method-error"},next:{title:"InvalidPhoneNumberRejection",permalink:"/objects/invalid-phone-number-rejection"}},i={},l=()=>{const e={span:"span",...(0,d.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,d.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,d.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>InvalidMerchantPaymentMethodRejection.<b>paymentMethods</b></code><Bullet></Bullet><code>[InvalidMerchantPaymentMethodError!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"invalidmerchantpaymentmethodrejectionpaymentmethodsinvalidmerchantpaymentmethoderror--",level:4},{value:'<code>InvalidMerchantPaymentMethodRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"invalidmerchantpaymentmethodrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],p=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const s={details:"details",summary:"summary",...(0,d.a)()},[o,i]=(0,r.useState)(c);return(0,a.jsxs)(s.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})};function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type InvalidMerchantPaymentMethodRejection implements Rejection {\n  paymentMethods: [InvalidMerchantPaymentMethodError!]!\n  message: String!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"invalidmerchantpaymentmethodrejectionpaymentmethodsinvalidmerchantpaymentmethoderror--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InvalidMerchantPaymentMethodRejection.",(0,a.jsx)("b",{children:"paymentMethods"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/invalid-merchant-payment-method-error",children:(0,a.jsx)(n.code,{children:"[InvalidMerchantPaymentMethodError!]!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"invalidmerchantpaymentmethodrejectionmessagestring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InvalidMerchantPaymentMethodRejection.",(0,a.jsx)("b",{children:"message"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(n.h4,{id:"rejection-",children:[(0,a.jsx)(n.a,{href:"/interfaces/rejection",children:(0,a.jsx)(n.code,{children:"Rejection"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/unions/request-merchant-payment-methods-payload",children:(0,a.jsx)(n.code,{children:"RequestMerchantPaymentMethodsPayload"})}),"  ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"union"})]})]})}function u(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var a=t(67294);const d={},r=a.createContext(d);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);