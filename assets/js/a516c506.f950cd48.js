"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25330],{21166:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>j});var a=n(74848),s=n(28453),c=n(96540);const r={id:"merchant-payment-rejected",title:"MerchantPaymentRejected"},d=void 0,o={id:"objects/merchant-payment-rejected",title:"MerchantPaymentRejected",description:"Merchant Payment status rejected",source:"@site/docs/objects/merchant-payment-rejected.mdx",sourceDirName:"objects",slug:"/objects/merchant-payment-rejected",permalink:"/objects/merchant-payment-rejected",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/merchant-payment-rejected.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-rejected",title:"MerchantPaymentRejected"},sidebar:"schemaSidebar",previous:{title:"MerchantPaymentMethodWrongStatusRejection",permalink:"/objects/merchant-payment-method-wrong-status-rejection"},next:{title:"MerchantPayment",permalink:"/objects/merchant-payment"}},l={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[o,l]=(0,c.useState)(r);return(0,a.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>MerchantPaymentRejected.<b>status</b></code><Bullet></Bullet><code>MerchantPaymentStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentrejectedstatusmerchantpaymentstatus--",level:4},{value:'<code>MerchantPaymentRejected.<b>reason</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentrejectedreasonstring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentstatusinfo-",level:4}];function p(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Merchant Payment status rejected"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type MerchantPaymentRejected implements MerchantPaymentStatusInfo {\n  status: MerchantPaymentStatus!\n  reason: String!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"merchantpaymentrejectedstatusmerchantpaymentstatus--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentRejected.",(0,a.jsx)("b",{children:"status"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/enums/merchant-payment-status",children:(0,a.jsx)(t.code,{children:"MerchantPaymentStatus!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.p,{children:"status of the merchant payment"}),"\n",(0,a.jsxs)(t.h4,{id:"merchantpaymentrejectedreasonstring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentRejected.",(0,a.jsx)("b",{children:"reason"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"rejected reason"}),"\n",(0,a.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(t.h4,{id:"merchantpaymentstatusinfo-",children:[(0,a.jsx)(t.a,{href:"/interfaces/merchant-payment-status-info",children:(0,a.jsx)(t.code,{children:"MerchantPaymentStatusInfo"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(t.p,{children:"Merchant Payment Status Information"})]})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var a=n(96540);const s={},c=a.createContext(s);function r(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);