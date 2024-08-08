"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[31587],{97947:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>m,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(74848),s=t(28453),c=t(96540);const r={id:"merchant-payment-edge",title:"MerchantPaymentEdge"},d=void 0,o={id:"objects/merchant-payment-edge",title:"MerchantPaymentEdge",description:"No description",source:"@site/docs/objects/merchant-payment-edge.mdx",sourceDirName:"objects",slug:"/objects/merchant-payment-edge",permalink:"/objects/merchant-payment-edge",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/merchant-payment-edge.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-edge",title:"MerchantPaymentEdge"},sidebar:"schemaSidebar",previous:{title:"MerchantPaymentConnection",permalink:"/objects/merchant-payment-connection"},next:{title:"MerchantPaymentInitiated",permalink:"/objects/merchant-payment-initiated"}},i={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[o,i]=(0,c.useState)(r);return(0,a.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>MerchantPaymentEdge.<b>node</b></code><Bullet></Bullet><code>MerchantPayment!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentedgenodemerchantpayment--",level:4},{value:'<code>MerchantPaymentEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentedgecursorstring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="badge badge--secondary"></Badge>',id:"edge-",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type MerchantPaymentEdge implements Edge {\n  node: MerchantPayment!\n  cursor: String!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"merchantpaymentedgenodemerchantpayment--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentEdge.",(0,a.jsx)("b",{children:"node"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/merchant-payment",children:(0,a.jsx)(n.code,{children:"MerchantPayment!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.h4,{id:"merchantpaymentedgecursorstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentEdge.",(0,a.jsx)("b",{children:"cursor"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Opaque identifier pointing to this node in the pagination mechanism"}),"\n",(0,a.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(n.h4,{id:"edge-",children:[(0,a.jsx)(n.a,{href:"/interfaces/edge",children:(0,a.jsx)(n.code,{children:"Edge"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(n.p,{children:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/objects/merchant-payment-connection",children:(0,a.jsx)(n.code,{children:"MerchantPaymentConnection"})}),"  ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function y(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var a=t(96540);const s={},c=a.createContext(s);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);