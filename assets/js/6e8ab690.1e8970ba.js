"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[2087],{85606:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>i,assets:()=>h,contentTitle:()=>r,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>y});var a=n(85893),d=n(11151),c=n(67294);const s={id:"check-merchant-payment-method",title:"CheckMerchantPaymentMethod"},r=void 0,o={id:"objects/check-merchant-payment-method",title:"CheckMerchantPaymentMethod",description:"CheckMerchantPaymentMethod",source:"@site/docs/objects/check-merchant-payment-method.mdx",sourceDirName:"objects",slug:"/objects/check-merchant-payment-method",permalink:"/objects/check-merchant-payment-method",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/check-merchant-payment-method.mdx",tags:[],version:"current",frontMatter:{id:"check-merchant-payment-method",title:"CheckMerchantPaymentMethod"},sidebar:"schemaSidebar",previous:{title:"Card",permalink:"/objects/card"},next:{title:"CheckTransaction",permalink:"/objects/check-transaction"}},h={},l=()=>{const e={span:"span",...(0,d.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},i=e=>{const t={a:"a",...(0,d.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,d.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>CheckMerchantPaymentMethod.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodidid--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>type</b></code><Bullet></Bullet><code>MerchantPaymentMethodType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodtypemerchantpaymentmethodtype--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>methodId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodmethodidid--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>statusInfo</b></code><Bullet></Bullet><code>MerchantPaymentMethodStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodstatusinfomerchantpaymentmethodstatusinfo--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>version</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodversionint--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>updatedAt</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodupdatedatdate--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>rollingReserve</b></code><Bullet></Bullet><code>RollingReserve</code> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodrollingreserverollingreserve-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentMethod</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentmethod-",level:4}],g=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,d.a)()},[o,h]=(0,c.useState)(s);return(0,a.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),h((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"CheckMerchantPaymentMethod"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type CheckMerchantPaymentMethod implements MerchantPaymentMethod {\n  id: ID!\n  type: MerchantPaymentMethodType!\n  methodId: ID!\n  statusInfo: MerchantPaymentMethodStatusInfo!\n  version: Int!\n  updatedAt: Date!\n  rollingReserve: RollingReserve\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"checkmerchantpaymentmethodidid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/id",children:(0,a.jsx)(t.code,{children:"ID!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Unique identifier tied to every version of a given Merchant Payment Method"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"checkmerchantpaymentmethodtypemerchantpaymentmethodtype--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/enums/merchant-payment-method-type",children:(0,a.jsx)(t.code,{children:"MerchantPaymentMethodType!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The Merchant Payment Method Type"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"checkmerchantpaymentmethodmethodidid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,a.jsx)("b",{children:"methodId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/id",children:(0,a.jsx)(t.code,{children:"ID!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"checkmerchantpaymentmethodstatusinfomerchantpaymentmethodstatusinfo--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,a.jsx)("b",{children:"statusInfo"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/interfaces/merchant-payment-method-status-info",children:(0,a.jsx)(t.code,{children:"MerchantPaymentMethodStatusInfo!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Status of the Merchant Payment Method"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"checkmerchantpaymentmethodversionint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,a.jsx)("b",{children:"version"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Version of the Merchant Payment Method"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"checkmerchantpaymentmethodupdatedatdate--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,a.jsx)("b",{children:"updatedAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/date",children:(0,a.jsx)(t.code,{children:"Date!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Date at which the Merchant Payment Method was last updated"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"checkmerchantpaymentmethodrollingreserverollingreserve-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,a.jsx)("b",{children:"rollingReserve"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/objects/rolling-reserve",children:(0,a.jsx)(t.code,{children:"RollingReserve"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Rolling Reserve applied to the Merchant Payment Method"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(t.h4,{id:"merchantpaymentmethod-",children:[(0,a.jsx)(t.a,{href:"/interfaces/merchant-payment-method",children:(0,a.jsx)(t.code,{children:"MerchantPaymentMethod"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Base object for the different Payment Methods available"}),"\n"]})]})}function b(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const d={},c=a.createContext(d);function s(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);