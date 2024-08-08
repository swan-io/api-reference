"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[34846],{52219:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>o,Details:()=>u,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var a=n(74848),s=n(28453),r=n(96540);const c={id:"merchant-payment-link-status",title:"MerchantPaymentLinkStatus"},i=void 0,l={id:"enums/merchant-payment-link-status",title:"MerchantPaymentLinkStatus",description:"No description",source:"@site/docs/enums/merchant-payment-link-status.mdx",sourceDirName:"enums",slug:"/enums/merchant-payment-link-status",permalink:"/enums/merchant-payment-link-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/merchant-payment-link-status.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-link-status",title:"MerchantPaymentLinkStatus"},sidebar:"schemaSidebar",previous:{title:"MerchantPaymentLinkOrderByFieldInput",permalink:"/enums/merchant-payment-link-order-by-field-input"},next:{title:"MerchantPaymentMethodCardRejectReason",permalink:"/enums/merchant-payment-method-card-reject-reason"}},d={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[l,d]=(0,r.useState)(c);return(0,a.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},p=[{value:"Values",id:"values",level:3},{value:"<code>MerchantPaymentLinkStatus.<b>Active</b></code>",id:"merchantpaymentlinkstatusactive",level:4},{value:"<code>MerchantPaymentLinkStatus.<b>Expired</b></code>",id:"merchantpaymentlinkstatusexpired",level:4},{value:"<code>MerchantPaymentLinkStatus.<b>Completed</b></code>",id:"merchantpaymentlinkstatuscompleted",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"enum MerchantPaymentLinkStatus {\n  Active\n  Expired\n  Completed\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,a.jsx)(t.h4,{id:"merchantpaymentlinkstatusactive",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentLinkStatus.",(0,a.jsx)("b",{children:"Active"})]})})}),"\n",(0,a.jsx)(t.p,{children:"Customers can still use the merchant payment link to pay."}),"\n",(0,a.jsx)(t.h4,{id:"merchantpaymentlinkstatusexpired",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentLinkStatus.",(0,a.jsx)("b",{children:"Expired"})]})})}),"\n",(0,a.jsx)(t.p,{children:"The merchant payment link is expired."}),"\n",(0,a.jsx)(t.h4,{id:"merchantpaymentlinkstatuscompleted",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentLinkStatus.",(0,a.jsx)("b",{children:"Completed"})]})})}),"\n",(0,a.jsx)(t.p,{children:"The customer completed the payment."}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/objects/active-merchant-payment-link-status-info",children:(0,a.jsx)(t.code,{children:"ActiveMerchantPaymentLinkStatusInfo"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/objects/completed-merchant-payment-link-status-info",children:(0,a.jsx)(t.code,{children:"CompletedMerchantPaymentLinkStatusInfo"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/objects/expired-merchant-payment-link-status-info",children:(0,a.jsx)(t.code,{children:"ExpiredMerchantPaymentLinkStatusInfo"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/inputs/merchant-payment-link-filters-input",children:(0,a.jsx)(t.code,{children:"MerchantPaymentLinkFiltersInput"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/interfaces/merchant-payment-link-status-info",children:(0,a.jsx)(t.code,{children:"MerchantPaymentLinkStatusInfo"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"interface"})]})]})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var a=n(96540);const s={},r=a.createContext(s);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);