"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[85549],{25713:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>j,assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>m});var a=s(74848),d=s(28453),i=s(96540);const t={id:"missing-mandatory-field-rejection",title:"MissingMandatoryFieldRejection"},r=void 0,c={id:"objects/missing-mandatory-field-rejection",title:"MissingMandatoryFieldRejection",description:"Rejection returned when mandatory fields are missing from the call.",source:"@site/docs/objects/missing-mandatory-field-rejection.mdx",sourceDirName:"objects",slug:"/objects/missing-mandatory-field-rejection",permalink:"/objects/missing-mandatory-field-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/missing-mandatory-field-rejection.mdx",tags:[],version:"current",frontMatter:{id:"missing-mandatory-field-rejection",title:"MissingMandatoryFieldRejection"},sidebar:"schemaSidebar",previous:{title:"MerchantProfile",permalink:"/objects/merchant-profile"},next:{title:"MissingPhoneNumberRestrictionRejection",permalink:"/objects/missing-phone-number-restriction-rejection"}},o={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},j=e=>{const n={a:"a",...(0,d.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:s,startOpen:t=!1})=>{const r={details:"details",summary:"summary",...(0,d.R)()},[c,o]=(0,i.useState)(t);return(0,a.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&s]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>MissingMandatoryFieldRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"missingmandatoryfieldrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Rejection returned when mandatory fields are missing from the call."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type MissingMandatoryFieldRejection implements Rejection {\n  message: String!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"missingmandatoryfieldrejectionmessagestring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MissingMandatoryFieldRejection.",(0,a.jsx)("b",{children:"message"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(n.h4,{id:"rejection-",children:[(0,a.jsx)(n.a,{href:"/interfaces/rejection",children:(0,a.jsx)(n.code,{children:"Rejection"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/unions/add-card-payload",children:(0,a.jsx)(n.code,{children:"AddCardPayload"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"union"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/unions/add-cards-payload",children:(0,a.jsx)(n.code,{children:"AddCardsPayload"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"union"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/unions/add-cards-with-group-delivery-payload",children:(0,a.jsx)(n.code,{children:"AddCardsWithGroupDeliveryPayload"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"union"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/unions/add-digital-card-payload",children:(0,a.jsx)(n.code,{children:"AddDigitalCardPayload"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"union"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/unions/add-single-use-virtual-card-payload",children:(0,a.jsx)(n.code,{children:"AddSingleUseVirtualCardPayload"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"union"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/unions/add-single-use-virtual-cards-payload",children:(0,a.jsx)(n.code,{children:"AddSingleUseVirtualCardsPayload"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"union"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/unions/print-physical-card-payload",children:(0,a.jsx)(n.code,{children:"PrintPhysicalCardPayload"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"union"})]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var a=s(96540);const d={},i=a.createContext(d);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);