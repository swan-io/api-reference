"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[56879],{70368:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>j,assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var s=t(74848),a=t(28453),i=t(96540);const r={id:"pinnot-ready-rejection",title:"PINNotReadyRejection"},d=void 0,c={id:"objects/pinnot-ready-rejection",title:"PINNotReadyRejection",description:"No description",source:"@site/docs/objects/pinnot-ready-rejection.mdx",sourceDirName:"objects",slug:"/objects/pinnot-ready-rejection",permalink:"/objects/pinnot-ready-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/pinnot-ready-rejection.mdx",tags:[],version:"current",frontMatter:{id:"pinnot-ready-rejection",title:"PINNotReadyRejection"},sidebar:"schemaSidebar",previous:{title:"PhysicalCard",permalink:"/objects/physical-card"},next:{title:"PreProvisioningSUVCardSettings",permalink:"/objects/pre-provisioning-suvcard-settings"}},o={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},j=e=>{const n={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,a.R)()},[c,o]=(0,i.useState)(r);return(0,s.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>PINNotReadyRejection.<b>physicalCardIdentifier</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pinnotreadyrejectionphysicalcardidentifierstring--",level:4},{value:'<code>PINNotReadyRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pinnotreadyrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function y(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type PINNotReadyRejection implements Rejection {\n  physicalCardIdentifier: String!\n  message: String!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"pinnotreadyrejectionphysicalcardidentifierstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PINNotReadyRejection.",(0,s.jsx)("b",{children:"physicalCardIdentifier"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"pinnotreadyrejectionmessagestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PINNotReadyRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.h4,{id:"rejection-",children:[(0,s.jsx)(n.a,{href:"/interfaces/rejection",children:(0,s.jsx)(n.code,{children:"Rejection"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/unions/view-physical-card-pin-payload",children:(0,s.jsx)(n.code,{children:"ViewPhysicalCardPinPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);