"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[47194],{60778:(e,d,n)=>{n.r(d),n.d(d,{Badge:()=>j,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>t,metadata:()=>o,toc:()=>p});var s=n(85893),a=n(11151),r=n(67294);const t={id:"card-product-suspended-rejection",title:"CardProductSuspendedRejection"},c=void 0,o={id:"objects/card-product-suspended-rejection",title:"CardProductSuspendedRejection",description:"Rejection returned if the card product is suspended.",source:"@site/docs/objects/card-product-suspended-rejection.mdx",sourceDirName:"objects",slug:"/objects/card-product-suspended-rejection",permalink:"/objects/card-product-suspended-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/card-product-suspended-rejection.mdx",tags:[],version:"current",frontMatter:{id:"card-product-suspended-rejection",title:"CardProductSuspendedRejection"},sidebar:"schemaSidebar",previous:{title:"CardProductNotFoundRejection",permalink:"/objects/card-product-not-found-rejection"},next:{title:"CardProductUsedRejection",permalink:"/objects/card-product-used-rejection"}},i={},l=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const d={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const d={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>CardProductSuspendedRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardproductsuspendedrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],h=({dataOpen:e,dataClose:d,children:n,startOpen:t=!1})=>{const c={details:"details",summary:"summary",...(0,a.a)()},[o,i]=(0,r.useState)(t);return(0,s.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:d}),o&&n]})};function x(e){const d={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.p,{children:"Rejection returned if the card product is suspended."}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-graphql",children:"type CardProductSuspendedRejection implements Rejection {\n  message: String!\n}\n"})}),"\n",(0,s.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(d.h4,{id:"cardproductsuspendedrejectionmessagestring--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProductSuspendedRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/scalars/string",children:(0,s.jsx)(d.code,{children:"String!"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.blockquote,{children:"\n"}),"\n",(0,s.jsx)(d.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(d.h4,{id:"rejection-",children:[(0,s.jsx)(d.a,{href:"/interfaces/rejection",children:(0,s.jsx)(d.code,{children:"Rejection"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(d.blockquote,{children:"\n"}),"\n",(0,s.jsx)(d.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.a,{href:"/unions/add-card-payload",children:(0,s.jsx)(d.code,{children:"AddCardPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/unions/add-cards-payload",children:(0,s.jsx)(d.code,{children:"AddCardsPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/unions/add-cards-with-group-delivery-payload",children:(0,s.jsx)(d.code,{children:"AddCardsWithGroupDeliveryPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/unions/add-single-use-virtual-card-payload",children:(0,s.jsx)(d.code,{children:"AddSingleUseVirtualCardPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(d.a,{href:"/unions/add-single-use-virtual-cards-payload",children:(0,s.jsx)(d.code,{children:"AddSingleUseVirtualCardsPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"})]})]})}function g(e={}){const{wrapper:d}={...(0,a.a)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,d,n)=>{n.d(d,{Z:()=>c,a:()=>t});var s=n(67294);const a={},r=s.createContext(a);function t(e){const d=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);