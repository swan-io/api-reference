"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[12078],{37294:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>f,Bullet:()=>u,Details:()=>y,SpecifiedBy:()=>o,assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var n=s(85893),r=s(11151),i=s(67294);const a={id:"trusted-beneficiary-filters-input",title:"TrustedBeneficiaryFiltersInput"},c=void 0,d={id:"inputs/trusted-beneficiary-filters-input",title:"TrustedBeneficiaryFiltersInput",description:"Filters that can be applied when listing trusted beneficiaries",source:"@site/docs/inputs/trusted-beneficiary-filters-input.mdx",sourceDirName:"inputs",slug:"/inputs/trusted-beneficiary-filters-input",permalink:"/inputs/trusted-beneficiary-filters-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/trusted-beneficiary-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"trusted-beneficiary-filters-input",title:"TrustedBeneficiaryFiltersInput"},sidebar:"schemaSidebar",previous:{title:"TransactionsOrderByInput",permalink:"/inputs/transactions-order-by-input"},next:{title:"TrustedBeneficiaryOrderByInput",permalink:"/inputs/trusted-beneficiary-order-by-input"}},l={},u=()=>{const e={span:"span",...(0,r.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},o=e=>{const t={a:"a",...(0,r.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const t={span:"span",...(0,r.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>TrustedBeneficiaryFiltersInput.<b>status</b></code><Bullet></Bullet><code>[TrustedBeneficiaryStatus!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiaryfiltersinputstatustrustedbeneficiarystatus--",level:4},{value:'<code>TrustedBeneficiaryFiltersInput.<b>type</b></code><Bullet></Bullet><code>[BeneficiaryType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiaryfiltersinputtypebeneficiarytype--",level:4},{value:'<code>TrustedBeneficiaryFiltersInput.<b>label</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiaryfiltersinputlabelstring-",level:4},{value:'<code>TrustedBeneficiaryFiltersInput.<b>currency</b></code><Bullet></Bullet><code>Currency</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiaryfiltersinputcurrencycurrency-",level:4}],y=({dataOpen:e,dataClose:t,children:s,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,r.a)()},[d,l]=(0,i.useState)(a);return(0,n.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&s]})};function b(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Filters that can be applied when listing trusted beneficiaries"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input TrustedBeneficiaryFiltersInput {\n  status: [TrustedBeneficiaryStatus!]\n  type: [BeneficiaryType!]\n  label: String\n  currency: Currency\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"trustedbeneficiaryfiltersinputstatustrustedbeneficiarystatus--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiaryFiltersInput.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(u,{}),(0,n.jsx)(t.a,{href:"/enums/trusted-beneficiary-status",children:(0,n.jsx)(t.code,{children:"[TrustedBeneficiaryStatus!]"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"trustedbeneficiaryfiltersinputtypebeneficiarytype--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiaryFiltersInput.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(u,{}),(0,n.jsx)(t.a,{href:"/enums/beneficiary-type",children:(0,n.jsx)(t.code,{children:"[BeneficiaryType!]"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"trustedbeneficiaryfiltersinputlabelstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiaryFiltersInput.",(0,n.jsx)("b",{children:"label"})]})}),(0,n.jsx)(u,{}),(0,n.jsx)(t.a,{href:"/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"trustedbeneficiaryfiltersinputcurrencycurrency-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiaryFiltersInput.",(0,n.jsx)("b",{children:"currency"})]})}),(0,n.jsx)(u,{}),(0,n.jsx)(t.a,{href:"/scalars/currency",children:(0,n.jsx)(t.code,{children:"Currency"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>a});var n=s(67294);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);