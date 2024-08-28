"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[40462],{48240:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>l,Details:()=>y,SpecifiedBy:()=>i,assets:()=>o,contentTitle:()=>r,default:()=>j,frontMatter:()=>s,metadata:()=>h,toc:()=>g});var n=a(74848),d=a(28453),c=a(96540);const s={id:"check-merchant-payment-method",title:"CheckMerchantPaymentMethod"},r=void 0,h={id:"objects/check-merchant-payment-method",title:"CheckMerchantPaymentMethod",description:"CheckMerchantPaymentMethod",source:"@site/docs/objects/check-merchant-payment-method.mdx",sourceDirName:"objects",slug:"/objects/check-merchant-payment-method",permalink:"/objects/check-merchant-payment-method",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/check-merchant-payment-method.mdx",tags:[],version:"current",frontMatter:{id:"check-merchant-payment-method",title:"CheckMerchantPaymentMethod"},sidebar:"schemaSidebar",previous:{title:"Card",permalink:"/objects/card"},next:{title:"CheckRejection",permalink:"/objects/check-rejection"}},o={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},i=e=>{const t={a:"a",...(0,d.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:t,children:a,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,d.R)()},[h,o]=(0,c.useState)(s);return(0,n.jsxs)(r.details,{...h?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:h?e:t}),h&&a]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>CheckMerchantPaymentMethod.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodidid--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>type</b></code><Bullet></Bullet><code>MerchantPaymentMethodType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodtypemerchantpaymentmethodtype--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>methodId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodmethodidid--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>statusInfo</b></code><Bullet></Bullet><code>MerchantPaymentMethodStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodstatusinfomerchantpaymentmethodstatusinfo--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>version</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodversionint--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>updatedAt</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodupdatedatdate--",level:4},{value:'<code>CheckMerchantPaymentMethod.<b>rollingReserve</b></code><Bullet></Bullet><code>RollingReserve</code> <Badge class="badge badge--secondary"></Badge>',id:"checkmerchantpaymentmethodrollingreserverollingreserve-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentMethod</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentmethod-",level:4}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"CheckMerchantPaymentMethod"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type CheckMerchantPaymentMethod implements MerchantPaymentMethod {\n  id: ID!\n  type: MerchantPaymentMethodType!\n  methodId: ID!\n  statusInfo: MerchantPaymentMethodStatusInfo!\n  version: Int!\n  updatedAt: Date!\n  rollingReserve: RollingReserve\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"checkmerchantpaymentmethodidid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Unique identifier tied to every version of a given Merchant Payment Method"}),"\n",(0,n.jsxs)(t.h4,{id:"checkmerchantpaymentmethodtypemerchantpaymentmethodtype--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/enums/merchant-payment-method-type",children:(0,n.jsx)(t.code,{children:"MerchantPaymentMethodType!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(t.p,{children:"The Merchant Payment Method Type"}),"\n",(0,n.jsxs)(t.h4,{id:"checkmerchantpaymentmethodmethodidid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,n.jsx)("b",{children:"methodId"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type"}),"\n",(0,n.jsxs)(t.h4,{id:"checkmerchantpaymentmethodstatusinfomerchantpaymentmethodstatusinfo--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,n.jsx)("b",{children:"statusInfo"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/interfaces/merchant-payment-method-status-info",children:(0,n.jsx)(t.code,{children:"MerchantPaymentMethodStatusInfo!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsx)(t.p,{children:"Status of the Merchant Payment Method"}),"\n",(0,n.jsxs)(t.h4,{id:"checkmerchantpaymentmethodversionint--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,n.jsx)("b",{children:"version"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/scalars/int",children:(0,n.jsx)(t.code,{children:"Int!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Version of the Merchant Payment Method"}),"\n",(0,n.jsxs)(t.h4,{id:"checkmerchantpaymentmethodupdatedatdate--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,n.jsx)("b",{children:"updatedAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/scalars/date",children:(0,n.jsx)(t.code,{children:"Date!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Date at which the Merchant Payment Method was last updated"}),"\n",(0,n.jsxs)(t.h4,{id:"checkmerchantpaymentmethodrollingreserverollingreserve-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckMerchantPaymentMethod.",(0,n.jsx)("b",{children:"rollingReserve"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/objects/rolling-reserve",children:(0,n.jsx)(t.code,{children:"RollingReserve"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Rolling Reserve applied to the Merchant Payment Method"}),"\n",(0,n.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(t.h4,{id:"merchantpaymentmethod-",children:[(0,n.jsx)(t.a,{href:"/interfaces/merchant-payment-method",children:(0,n.jsx)(t.code,{children:"MerchantPaymentMethod"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsx)(t.p,{children:"Base object for the different Payment Methods available"})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var n=a(96540);const d={},c=n.createContext(d);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);