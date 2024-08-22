"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[19376],{26013:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>x});var c=n(74848),s=n(28453),l=n(96540);const d={id:"cancel-physical-card-input",title:"CancelPhysicalCardInput"},r=void 0,t={id:"inputs/cancel-physical-card-input",title:"CancelPhysicalCardInput",description:"Inputs to cancel a physical card",source:"@site/docs/inputs/cancel-physical-card-input.mdx",sourceDirName:"inputs",slug:"/inputs/cancel-physical-card-input",permalink:"/inputs/cancel-physical-card-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/cancel-physical-card-input.mdx",tags:[],version:"current",frontMatter:{id:"cancel-physical-card-input",title:"CancelPhysicalCardInput"},sidebar:"schemaSidebar",previous:{title:"CancelMerchantProfileUpdateRequestInput",permalink:"/inputs/cancel-merchant-profile-update-request-input"},next:{title:"CancelStandingOrderInput",permalink:"/inputs/cancel-standing-order-input"}},i={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,s.R)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,s.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:n,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,s.R)()},[t,i]=(0,l.useState)(d);return(0,c.jsxs)(r.details,{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:t?e:a}),t&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>CancelPhysicalCardInput.<b>cardId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cancelphysicalcardinputcardidid--",level:4},{value:'<code>CancelPhysicalCardInput.<b>reason</b></code><Bullet></Bullet><code>CancelPhysicalCardReason!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cancelphysicalcardinputreasoncancelphysicalcardreason--",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.p,{children:"Inputs to cancel a physical card"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-graphql",children:"input CancelPhysicalCardInput {\n  cardId: ID!\n  reason: CancelPhysicalCardReason!\n}\n"})}),"\n",(0,c.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(a.h4,{id:"cancelphysicalcardinputcardidid--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPhysicalCardInput.",(0,c.jsx)("b",{children:"cardId"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(a.a,{href:"/scalars/id",children:(0,c.jsx)(a.code,{children:"ID!"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(a.p,{children:"Unique identifier of a card"}),"\n",(0,c.jsxs)(a.h4,{id:"cancelphysicalcardinputreasoncancelphysicalcardreason--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPhysicalCardInput.",(0,c.jsx)("b",{children:"reason"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(a.a,{href:"/enums/cancel-physical-card-reason",children:(0,c.jsx)(a.code,{children:"CancelPhysicalCardReason!"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsx)(a.p,{children:"Reason why the physical card is canceled"}),"\n",(0,c.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.a,{href:"/mutations/cancel-physical-card",children:(0,c.jsx)(a.code,{children:"cancelPhysicalCard"})}),"  ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(y,{...e})}):y(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>d,x:()=>r});var c=n(96540);const s={},l=c.createContext(s);function d(e){const a=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(l.Provider,{value:a},e.children)}}}]);