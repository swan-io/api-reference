"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[19081],{31344:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>j});var a=n(74848),s=n(28453),d=n(96540);const c={id:"rejected-merchant-payment-method-status-info",title:"RejectedMerchantPaymentMethodStatusInfo"},r=void 0,o={id:"objects/rejected-merchant-payment-method-status-info",title:"RejectedMerchantPaymentMethodStatusInfo",description:"RejectedMerchantPaymentMethodStatusInfo",source:"@site/docs/objects/rejected-merchant-payment-method-status-info.mdx",sourceDirName:"objects",slug:"/objects/rejected-merchant-payment-method-status-info",permalink:"/objects/rejected-merchant-payment-method-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/rejected-merchant-payment-method-status-info.mdx",tags:[],version:"current",frontMatter:{id:"rejected-merchant-payment-method-status-info",title:"RejectedMerchantPaymentMethodStatusInfo"},sidebar:"schemaSidebar",previous:{title:"RejectedFundingSourceStatusInfo",permalink:"/objects/rejected-funding-source-status-info"},next:{title:"RejectedMerchantProfileStatusInfo",permalink:"/objects/rejected-merchant-profile-status-info"}},i={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,s.R)()},[o,i]=(0,d.useState)(c);return(0,a.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>RejectedMerchantPaymentMethodStatusInfo.<b>status</b></code><Bullet></Bullet><code>MerchantPaymentMethodStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rejectedmerchantpaymentmethodstatusinfostatusmerchantpaymentmethodstatus--",level:4},{value:'<code>RejectedMerchantPaymentMethodStatusInfo.<b>rejectedAt</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rejectedmerchantpaymentmethodstatusinforejectedatdate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentMethodStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentmethodstatusinfo-",level:4}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"RejectedMerchantPaymentMethodStatusInfo"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type RejectedMerchantPaymentMethodStatusInfo implements MerchantPaymentMethodStatusInfo {\n  status: MerchantPaymentMethodStatus!\n  rejectedAt: Date!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"rejectedmerchantpaymentmethodstatusinfostatusmerchantpaymentmethodstatus--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RejectedMerchantPaymentMethodStatusInfo.",(0,a.jsx)("b",{children:"status"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/enums/merchant-payment-method-status",children:(0,a.jsx)(t.code,{children:"MerchantPaymentMethodStatus!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.h4,{id:"rejectedmerchantpaymentmethodstatusinforejectedatdate--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RejectedMerchantPaymentMethodStatusInfo.",(0,a.jsx)("b",{children:"rejectedAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/date",children:(0,a.jsx)(t.code,{children:"Date!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Merchant Payment Method rejected date"}),"\n",(0,a.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(t.h4,{id:"merchantpaymentmethodstatusinfo-",children:[(0,a.jsx)(t.a,{href:"/interfaces/merchant-payment-method-status-info",children:(0,a.jsx)(t.code,{children:"MerchantPaymentMethodStatusInfo"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(t.p,{children:"The payment method status information"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var a=n(96540);const s={},d=a.createContext(s);function c(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);