"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[85110],{87388:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>f,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var t=n(85893),a=n(11151),i=n(67294);const s={id:"international-credit-transfer-out-creditor",title:"InternationalCreditTransferOutCreditor"},d=void 0,o={id:"objects/international-credit-transfer-out-creditor",title:"InternationalCreditTransferOutCreditor",description:"International Credit Transfer Out - Creditor info",source:"@site/docs/objects/international-credit-transfer-out-creditor.mdx",sourceDirName:"objects",slug:"/objects/international-credit-transfer-out-creditor",permalink:"/objects/international-credit-transfer-out-creditor",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/international-credit-transfer-out-creditor.mdx",tags:[],version:"current",frontMatter:{id:"international-credit-transfer-out-creditor",title:"InternationalCreditTransferOutCreditor"},sidebar:"schemaSidebar",previous:{title:"InternationalCreditTransferInDebtor",permalink:"/objects/international-credit-transfer-in-debtor"},next:{title:"InternationalCreditTransferOutDebtor",permalink:"/objects/international-credit-transfer-out-debtor"}},c={},l=()=>{const e={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,a.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const r={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>InternationalCreditTransferOutCreditor.<b>currency</b></code><Bullet></Bullet><code>Currency!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransferoutcreditorcurrencycurrency--",level:4},{value:'<code>InternationalCreditTransferOutCreditor.<b>details</b></code><Bullet></Bullet><code>[InternationalCreditTransferDetails!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransferoutcreditordetailsinternationalcredittransferdetails--",level:4},{value:'<code>InternationalCreditTransferOutCreditor.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransferoutcreditornamestring--",level:4},{value:'<code>InternationalCreditTransferOutCreditor.<b>route</b></code><Bullet></Bullet><code>InternationalCreditTransferRoute!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internationalcredittransferoutcreditorrouteinternationalcredittransferroute--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],b=({dataOpen:e,dataClose:r,children:n,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,a.a)()},[o,c]=(0,i.useState)(s);return(0,t.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:r}),o&&n]})};function x(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"International Credit Transfer Out - Creditor info"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type InternationalCreditTransferOutCreditor {\n  currency: Currency!\n  details: [InternationalCreditTransferDetails!]!\n  name: String!\n  route: InternationalCreditTransferRoute!\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"internationalcredittransferoutcreditorcurrencycurrency--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferOutCreditor.",(0,t.jsx)("b",{children:"currency"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/scalars/currency",children:(0,t.jsx)(r.code,{children:"Currency!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Currency of the international beneficiary account"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"internationalcredittransferoutcreditordetailsinternationalcredittransferdetails--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferOutCreditor.",(0,t.jsx)("b",{children:"details"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/objects/international-credit-transfer-details",children:(0,t.jsx)(r.code,{children:"[InternationalCreditTransferDetails!]!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Currency-specific details of the beneficiary"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"internationalcredittransferoutcreditornamestring--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferOutCreditor.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/scalars/string",children:(0,t.jsx)(r.code,{children:"String!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Account holder name"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"internationalcredittransferoutcreditorrouteinternationalcredittransferroute--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternationalCreditTransferOutCreditor.",(0,t.jsx)("b",{children:"route"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/enums/international-credit-transfer-route",children:(0,t.jsx)(r.code,{children:"InternationalCreditTransferRoute!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Route that Swan will use to transfer the funds"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/unions/international-credit-transfer-creditor",children:(0,t.jsx)(r.code,{children:"InternationalCreditTransferCreditor"})}),"  ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"union"})]})]})}function g(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>s});var t=n(67294);const a={},i=t.createContext(a);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);