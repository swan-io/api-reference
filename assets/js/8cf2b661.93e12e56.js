"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[1703],{36304:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>g});var s=t(74848),d=t(28453),a=t(96540);const c={id:"adding-cards-to-different-accounts-rejection",title:"AddingCardsToDifferentAccountsRejection"},r=void 0,i={id:"objects/adding-cards-to-different-accounts-rejection",title:"AddingCardsToDifferentAccountsRejection",description:"Rejection returned if the attempting to add cards to different accounts.",source:"@site/docs/objects/adding-cards-to-different-accounts-rejection.mdx",sourceDirName:"objects",slug:"/objects/adding-cards-to-different-accounts-rejection",permalink:"/objects/adding-cards-to-different-accounts-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/adding-cards-to-different-accounts-rejection.mdx",tags:[],version:"current",frontMatter:{id:"adding-cards-to-different-accounts-rejection",title:"AddingCardsToDifferentAccountsRejection"},sidebar:"schemaSidebar",previous:{title:"AddVirtualIbanEntrySuccessPayload",permalink:"/objects/add-virtual-iban-entry-success-payload"},next:{title:"AddressInfo",permalink:"/objects/address-info"}},o={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,d.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const n={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},j=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,d.R)()},[i,o]=(0,a.useState)(c);return(0,s.jsxs)(r.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>AddingCardsToDifferentAccountsRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addingcardstodifferentaccountsrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Rejection returned if the attempting to add cards to different accounts."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type AddingCardsToDifferentAccountsRejection implements Rejection {\n  message: String!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"addingcardstodifferentaccountsrejectionmessagestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AddingCardsToDifferentAccountsRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.h4,{id:"rejection-",children:[(0,s.jsx)(n.a,{href:"/interfaces/rejection",children:(0,s.jsx)(n.code,{children:"Rejection"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/unions/add-cards-payload",children:(0,s.jsx)(n.code,{children:"AddCardsPayload"})}),"  ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/add-cards-with-group-delivery-payload",children:(0,s.jsx)(n.code,{children:"AddCardsWithGroupDeliveryPayload"})}),"  ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/add-single-use-virtual-cards-payload",children:(0,s.jsx)(n.code,{children:"AddSingleUseVirtualCardsPayload"})}),"  ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const d={},a=s.createContext(d);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);