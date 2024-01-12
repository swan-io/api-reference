"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[38652],{92206:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var s=n(85893),c=n(11151),a=n(67294);const r={id:"account-filter-input",title:"AccountFilterInput"},l=void 0,i={id:"inputs/account-filter-input",title:"AccountFilterInput",description:"No description",source:"@site/docs/inputs/account-filter-input.mdx",sourceDirName:"inputs",slug:"/inputs/account-filter-input",permalink:"/inputs/account-filter-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/account-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"account-filter-input",title:"AccountFilterInput"},sidebar:"schemaSidebar",previous:{title:"WrongValueProvidedRejection",permalink:"/objects/wrong-value-provided-rejection"},next:{title:"AccountHolderFilterInput",permalink:"/inputs/account-holder-filter-input"}},o={},d=()=>{const e={span:"span",...(0,c.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,c.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,c.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountFilterInput.<b>status</b></code><Bullet></Bullet><code>[AccountStatus!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountfilterinputstatusaccountstatus--",level:4},{value:'<code>AccountFilterInput.<b>paymentLevels</b></code><Bullet></Bullet><code>[PaymentLevel!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountfilterinputpaymentlevelspaymentlevel--",level:4},{value:'<code>AccountFilterInput.<b>search</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountfilterinputsearchstring-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,c.a)()},[i,o]=(0,a.useState)(r);return(0,s.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})};function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input AccountFilterInput {\n  status: [AccountStatus!]\n  paymentLevels: [PaymentLevel!]\n  search: String\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"accountfilterinputstatusaccountstatus--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountFilterInput.",(0,s.jsx)("b",{children:"status"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/enums/account-status",children:(0,s.jsx)(t.code,{children:"[AccountStatus!]"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Account Status we want to filter on"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"accountfilterinputpaymentlevelspaymentlevel--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountFilterInput.",(0,s.jsx)("b",{children:"paymentLevels"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/enums/payment-level",children:(0,s.jsx)(t.code,{children:"[PaymentLevel!]"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Account Payment Levels we want to filter on"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"accountfilterinputsearchstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountFilterInput.",(0,s.jsx)("b",{children:"search"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Searches name, account number, and IBAN"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/queries/accounts",children:(0,s.jsx)(t.code,{children:"accounts"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"query"})]})]})}function f(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var s=n(67294);const c={},a=s.createContext(c);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);